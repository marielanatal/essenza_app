import streamlit as st
import pandas as pd
import plotly.express as px
from PIL import Image
import os
from fpdf import FPDF
import base64
from io import BytesIO

# Função para formatar valores em R$
def formatar(valor):
    try:
        return f"R$ {valor:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")
    except:
        return valor

# ----------------------------------------------------------
# CONFIGURAÇÃO DO APP
# ----------------------------------------------------------
st.set_page_config(page_title="Essenza – Dashboard Financeiro", layout="wide")

# Logo
if os.path.exists("logo.png"):
    logo = Image.open("logo.png")
    st.sidebar.image(logo, use_column_width=True)

st.markdown(
    "<h1 style='text-align: center; color: #2C80FF;'>📊 Essenza – Dashboard Financeiro</h1>",
    unsafe_allow_html=True
)
st.markdown("<br>", unsafe_allow_html=True)

# ----------------------------------------------------------
# LISTAR PLANILHAS PRINCIPAIS
# ----------------------------------------------------------
arquivos = [
    f for f in os.listdir()
    if f.endswith(".xlsx") and not f.endswith("_pendencias.xlsx")
]

def limpar_nome(nome):
    return nome.replace(".xlsx", "").replace("_", " ").title()

clientes = {limpar_nome(a): a for a in arquivos}

cliente_escolhido = st.sidebar.selectbox("📁 Cliente:", list(clientes.keys()))
arquivo_cliente = clientes[cliente_escolhido]

st.sidebar.markdown(f"**Cliente selecionado:** {cliente_escolhido}")
st.sidebar.markdown("---")

# ----------------------------------------------------------
# CARREGAR PLANILHA PRINCIPAL
# ----------------------------------------------------------
df = pd.read_excel(arquivo_cliente)
df.columns = df.columns.str.strip()

df["Data"] = pd.to_datetime(df["Pagamento ou recebimento"], errors="coerce", dayfirst=True)
df["Mes"] = df["Data"].dt.strftime("%b/%Y")
df["Mes_Ord"] = df["Data"].dt.month
df["Valor_corrigido"] = df["Valor da Categoria"].abs()

# FILTRO DE MÊS
meses = ["Todos"] + sorted(df["Mes"].dropna().unique())
mes_selecionado = st.sidebar.selectbox("📅 Selecionar Mês:", meses)

if mes_selecionado != "Todos":
    df = df[df["Mes"] == mes_selecionado]

# ----------------------------------------------------------
# SEPARAR DESPESAS E RECEITAS
# ----------------------------------------------------------
df_desp = df[df["Tipo"].str.lower() == "pago"].copy()
df_rec = df[df["Tipo"].str.lower() == "recebido"].copy()

# ----------------------------------------------------------
# CRIAR ABAS
# ----------------------------------------------------------
aba1, aba2, aba3, aba4 = st.tabs([
    "💸 Despesas",
    "💰 Receitas",
    "📄 Relatório PDF",
    "🛠 Operacional"
])

# ======================================================================================
#                                    ABA DESPESAS
# ======================================================================================
with aba1:
    st.header(f"💸 Despesas – {cliente_escolhido}")

    if df_desp.empty:
        st.warning("Nenhuma despesa encontrada.")
    else:
        total = df_desp["Valor_corrigido"].sum()
        st.metric("Total de Despesas", formatar(total))

        # Ranking
        df_rank = (
            df_desp.groupby("Categoria")["Valor_corrigido"]
            .sum().sort_values(ascending=False).reset_index()
        )
        df_rank["Valor_fmt"] = df_rank["Valor_corrigido"].apply(formatar)

        st.subheader("Despesas por Categoria")
        fig = px.bar(
            df_rank,
            x="Valor_corrigido",
            y="Categoria",
            orientation="h",
            text="Valor_fmt"
        )
        fig.update_layout(xaxis_tickformat="R$,.2f")
        st.plotly_chart(fig, use_container_width=True)

        # 🎯 COMPARATIVO MENSAL QUANDO SELECIONADO “TODOS”
        if mes_selecionado == "Todos":
            st.subheader("📊 Comparativo Mensal – Despesas")
            df_mes = (
                df_desp.groupby(["Mes", "Mes_Ord"])["Valor_corrigido"]
                .sum().reset_index().sort_values("Mes_Ord")
            )
            df_mes["Valor_fmt"] = df_mes["Valor_corrigido"].apply(formatar)

            fig2 = px.bar(
                df_mes,
                x="Mes",
                y="Valor_corrigido",
                text="Valor_fmt",
            )
            fig2.update_layout(xaxis_title="Mês", yaxis_tickformat="R$,.2f")
            st.plotly_chart(fig2, use_container_width=True)

# ======================================================================================
#                                    ABA RECEITAS
# ======================================================================================
with aba2:
    st.header(f"💰 Receitas – {cliente_escolhido}")

    if df_rec.empty:
        st.warning("Nenhuma receita encontrada.")
    else:
        total = df_rec["Valor_corrigido"].sum()
        st.metric("Total Recebido", formatar(total))

        df_rank = (
            df_rec.groupby("Categoria")["Valor_corrigido"]
            .sum().sort_values(ascending=False).reset_index()
        )
        df_rank["Valor_fmt"] = df_rank["Valor_corrigido"].apply(formatar)

        st.subheader("Receitas por Categoria")
        fig = px.bar(
            df_rank,
            x="Valor_corrigido",
            y="Categoria",
            orientation="h",
            text="Valor_fmt"
        )
        fig.update_layout(xaxis_tickformat="R$,.2f")
        st.plotly_chart(fig, use_container_width=True)

        if mes_selecionado == "Todos":
            st.subheader("📈 Comparativo Mensal – Receitas")
            df_mes = (
                df_rec.groupby(["Mes", "Mes_Ord"])["Valor_corrigido"]
                .sum().reset_index().sort_values("Mes_Ord")
            )
            df_mes["Valor_fmt"] = df_mes["Valor_corrigido"].apply(formatar)

            fig2 = px.bar(
                df_mes,
                x="Mes",
                y="Valor_corrigido",
                text="Valor_fmt",
            )
            fig2.update_layout(xaxis_title="Mês", yaxis_tickformat="R$,.2f")
            st.plotly_chart(fig2, use_container_width=True)

# ======================================================================================
#                                 GERAR PDF ESSENZA
# ======================================================================================
with aba3:
    st.header("📄 Relatório PDF – Essenza")

    st.info("Clique abaixo para gerar o PDF do cliente com o mês selecionado.")

    if st.button("📄 Gerar Relatório PDF"):

        # Criar PDF
        pdf = FPDF()
        pdf.set_auto_page_break(auto=True, margin=15)

        # ----------------------------
        # CAPA
        # ----------------------------
        pdf.add_page()
        pdf.set_font("Arial", "B", 24)
        pdf.cell(0, 10, "Relatório Financeiro – Essenza", 0, 1, "C")
        pdf.ln(10)

        pdf.set_font("Arial", "", 16)
        pdf.cell(0, 10, f"Cliente: {cliente_escolhido}", 0, 1, "C")

        # Título com período
        if mes_selecionado == "Todos":
            pdf.cell(0, 10, "Período: Consolidado", 0, 1, "C")
        else:
            pdf.cell(0, 10, f"Período: {mes_selecionado}", 0, 1, "C")

        pdf.ln(20)

        # ----------------------------
        # RESUMO FINANCEIRO
        # ----------------------------
        pdf.add_page()
        pdf.set_font("Arial", "B", 18)
        pdf.cell(0, 10, "Resumo Financeiro", 0, 1)

        total_desp = df_desp["Valor_corrigido"].sum()
        total_rec = df_rec["Valor_corrigido"].sum()
        saldo = total_rec - total_desp

        pdf.set_font("Arial", "", 14)
        pdf.ln(10)
        pdf.cell(0, 10, f"Total de Despesas: {formatar(total_desp)}", 0, 1)
        pdf.cell(0, 10, f"Total de Receitas:  {formatar(total_rec)}", 0, 1)
        pdf.cell(0, 10, f"Saldo do Mês:       {formatar(saldo)}", 0, 1)

        # ----------------------------
        # INSIGHTS AUTOMÁTICOS
        # ----------------------------
        pdf.add_page()
        pdf.set_font("Arial", "B", 18)
        pdf.cell(0, 10, "Insights Automáticos", 0, 1)
        pdf.ln(10)

        maior_desp = df_desp.groupby("Categoria")["Valor_corrigido"].sum().idxmax()
        maior_rec = df_rec.groupby("Categoria")["Valor_corrigido"].sum().idxmax()

        pdf.set_font("Arial", "", 13)
        pdf.multi_cell(0, 8, f"- A categoria que mais impactou as despesas foi: {maior_desp}.")
        pdf.multi_cell(0, 8, f"- A categoria com maior receita foi: {maior_rec}.")
        pdf.multi_cell(0, 8, f"- O saldo do mês foi: {formatar(saldo)}.")

        # ----------------------------
        # ASSINATURA
        # ----------------------------
        pdf.add_page()
        pdf.set_font("Arial", "B", 20)
        pdf.cell(0, 10, "Essenza – Consultoria Financeira", 0, 1)
        pdf.set_font("Arial", "", 14)
        pdf.ln(10)
        pdf.cell(0, 10, "Relatório gerado automaticamente pelo sistema Essenza.", 0, 1)

        # Exportar PDF
        pdf_bytes = pdf.output(dest="S").encode("latin1")
        b64 = base64.b64encode(pdf_bytes).decode()

        href = f'<a href="data:application/octet-stream;base64,{b64}" download="Relatorio_Essenza.pdf">📥 Baixar Relatório PDF</a>'
        st.markdown(href, unsafe_allow_html=True)

# ======================================================================================
#                                  ABA OPERACIONAL
# ======================================================================================
with aba4:
    st.header("🛠 Operacional")
    st.write("Espaço para funcionalidades futuras do Essenza Dashboard.")

