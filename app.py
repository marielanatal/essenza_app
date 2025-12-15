import streamlit as st
import pandas as pd
import plotly.express as px
from PIL import Image
import os
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
#                                 ABA 3 – RELATÓRIO PDF (COM REPORTLAB)
# ======================================================================================
with aba3:
    st.header("📄 Relatório PDF – Essenza")

    st.info("Clique abaixo para gerar o PDF profissional do cliente selecionado, com o mês filtrado.")

    # Função p/ transformar gráfico Plotly em PNG
    def fig_to_png(fig):
        img_bytes = fig.to_image(format="png")
        return BytesIO(img_bytes)

    if st.button("📄 Gerar Relatório PDF"):

        from reportlab.lib.pagesizes import A4
        from reportlab.pdfgen import canvas
        from reportlab.lib.utils import ImageReader
        from reportlab.lib import colors

        # -------------------------------------------
        # PREPARAÇÃO DOS DADOS
        # -------------------------------------------
        total_desp = df_desp["Valor_corrigido"].sum()
        total_rec = df_rec["Valor_corrigido"].sum()
        saldo = total_rec - total_desp

        # Criar gráficos PNG
        # DESPESAS
        df_rank_desp = (
            df_desp.groupby("Categoria")["Valor_corrigido"]
            .sum().reset_index().sort_values("Valor_corrigido", ascending=True)
        )
        df_rank_desp["Valor_fmt"] = df_rank_desp["Valor_corrigido"].apply(formatar)

        fig_desp = px.bar(
            df_rank_desp,
            x="Valor_corrigido",
            y="Categoria",
            orientation="h",
            text="Valor_fmt",
            title="Despesas por Categoria"
        )
        fig_desp.update_layout(xaxis_tickformat="R$,.2f")
        desp_png = fig_to_png(fig_desp)

        # RECEITAS
        df_rank_rec = (
            df_rec.groupby("Categoria")["Valor_corrigido"]
            .sum().reset_index().sort_values("Valor_corrigido", ascending=True)
        )
        df_rank_rec["Valor_fmt"] = df_rank_rec["Valor_corrigido"].apply(formatar)

        fig_rec = px.bar(
            df_rank_rec,
            x="Valor_corrigido",
            y="Categoria",
            orientation="h",
            text="Valor_fmt",
            title="Receitas por Categoria"
        )
        fig_rec.update_layout(xaxis_tickformat="R$,.2f")
        rec_png = fig_to_png(fig_rec)

        # EVOLUÇÃO MENSAL
        df_evo = df.groupby(["Mes", "Mes_Ord"])["Valor_corrigido"].sum().reset_index().sort_values("Mes_Ord")
        df_evo["Valor_fmt"] = df_evo["Valor_corrigido"].apply(formatar)

        fig_evo = px.bar(
            df_evo,
            x="Mes",
            y="Valor_corrigido",
            text="Valor_fmt",
            title="Evolução Financeira Mensal"
        )
        fig_evo.update_layout(yaxis_tickformat="R$,.2f")
        evo_png = fig_to_png(fig_evo)

        # -------------------------------------------
        # CRIAÇÃO DO PDF
        # -------------------------------------------
        buffer = BytesIO()
        pdf = canvas.Canvas(buffer, pagesize=A4)
        w, h = A4

        # -------------------------------------------
        # CAPA
        # -------------------------------------------
        pdf.setFont("Helvetica-Bold", 24)
        pdf.drawCentredString(w/2, h - 80, "RELATÓRIO FINANCEIRO – ESSENZA")

        # Logo
        if os.path.exists("logo.png"):
            logo_img = ImageReader("logo.png")
            pdf.drawImage(logo_img, w/2 - 60, h - 230, width=120, height=120, mask='auto')

        # Título do período
        pdf.setFont("Helvetica", 16)
        if mes_selecionado == "Todos":
            periodo = "Consolidado"
        else:
            periodo = mes_selecionado

        pdf.drawCentredString(w/2, h - 260, f"Cliente: {cliente_escolhido}")
        pdf.drawCentredString(w/2, h - 285, f"Período: {periodo}")

        pdf.showPage()

        # -------------------------------------------
        # RESUMO FINANCEIRO
        # -------------------------------------------
        pdf.setFont("Helvetica-Bold", 20)
        pdf.drawString(40, h - 60, "Resumo Financeiro")

        pdf.setFont("Helvetica", 14)
        pos_y = h - 120
        pdf.drawString(40, pos_y,     f"Total de Despesas: {formatar(total_desp)}")
        pdf.drawString(40, pos_y-30,  f"Total de Receitas:  {formatar(total_rec)}")
        pdf.drawString(40, pos_y-60,  f"Saldo do Período:   {formatar(saldo)}")

        pdf.showPage()

        # -------------------------------------------
        # GRÁFICO – DESPESAS
        # -------------------------------------------
        pdf.setFont("Helvetica-Bold", 18)
        pdf.drawString(40, h - 60, "Despesas por Categoria")

        pdf.drawImage(ImageReader(desp_png), 40, 120, width=500, height=350, mask='auto')
        pdf.showPage()

        # -------------------------------------------
        # GRÁFICO – RECEITAS
        # -------------------------------------------
        pdf.setFont("Helvetica-Bold", 18)
        pdf.drawString(40, h - 60, "Receitas por Categoria")

        pdf.drawImage(ImageReader(rec_png), 40, 120, width=500, height=350, mask='auto')
        pdf.showPage()

        # -------------------------------------------
        # GRÁFICO – EVOLUÇÃO MENSAL
        # -------------------------------------------
        pdf.setFont("Helvetica-Bold", 18)
        pdf.drawString(40, h - 60, "Evolução Mensal")

        pdf.drawImage(ImageReader(evo_png), 40, 120, width=500, height=350, mask='auto')
        pdf.showPage()

        # -------------------------------------------
        # INSIGHTS AUTOMÁTICOS
        # -------------------------------------------
        pdf.setFont("Helvetica-Bold", 20)
        pdf.drawString(40, h - 60, "Insights Essenza")

        pdf.setFont("Helvetica", 13)
        pos_y = h - 120

        maior_desp_cat = df_rank_desp.iloc[-1]["Categoria"] if not df_rank_desp.empty else "Nenhuma"
        maior_rec_cat  = df_rank_rec.iloc[-1]["Categoria"] if not df_rank_rec.empty else "Nenhuma"

        insights = [
            f"- A maior despesa foi na categoria: {maior_desp_cat}.",
            f"- A maior receita foi na categoria: {maior_rec_cat}.",
            f"- O saldo do período foi: {formatar(saldo)}.",
        ]

        for frase in insights:
            pdf.drawString(40, pos_y, frase)
            pos_y -= 25

        pdf.showPage()

        # -------------------------------------------
        # PÁGINA FINAL – ASSINATURA
        # -------------------------------------------
        pdf.setFont("Helvetica-Bold", 24)
        pdf.drawCentredString(w/2, h - 120, "Essenza Gestão Financeira")

        pdf.setFont("Helvetica", 14)
        pdf.drawCentredString(w/2, h - 160, "Relatório gerado automaticamente pelo sistema Essenza.")

        if os.path.exists("logo.png"):
            pdf.drawImage(logo_img, w/2 - 50, h - 350, width=100, height=100, mask='auto')

        pdf.showPage()

        pdf.save()

        buffer.seek(0)
        st.success("🎉 PDF gerado com sucesso!")

        st.download_button(
            "📥 Baixar Relatório PDF",
            data=buffer,
            file_name="Relatorio_Essenza.pdf",
            mime="application/pdf"
        )




