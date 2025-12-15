import streamlit as st
import pandas as pd
import plotly.express as px
from PIL import Image
import os

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

st.sidebar.markdown("---")

st.markdown(
    "<h1 style='text-align: center; color: #2C80FF;'>📊 Essenza – Dashboard Financeiro</h1>",
    unsafe_allow_html=True
)
st.markdown("<br>", unsafe_allow_html=True)

# ----------------------------------------------------------
# IDENTIFICAR PLANILHAS DO DIRETÓRIO
# (SOMENTE AS PRINCIPAIS, IGNORANDO AS DE PENDÊNCIAS)
# ----------------------------------------------------------
arquivos = [
    f for f in os.listdir()
    if f.endswith(".xlsx") and not f.endswith("_pendencias.xlsx")
]

def limpar_nome(nome):
    return nome.replace(".xlsx", "").replace("_", " ").title()

clientes_formatados = {limpar_nome(a): a for a in arquivos}

cliente_escolhido = st.sidebar.selectbox("📁 Selecione o Cliente:", list(clientes_formatados.keys()))
arquivo_cliente = clientes_formatados[cliente_escolhido]

st.sidebar.markdown(f"**Cliente selecionado:** {cliente_escolhido}")
st.sidebar.markdown("---")

# ----------------------------------------------------------
# CARREGAR PLANILHA PRINCIPAL
# ----------------------------------------------------------
df = pd.read_excel(arquivo_cliente)
df.columns = df.columns.str.strip()

# Ajuste de datas
df["Data"] = pd.to_datetime(df["Pagamento ou recebimento"], errors="coerce", dayfirst=True)
df["Mes"] = df["Data"].dt.strftime("%b/%Y")
df["Valor_corrigido"] = df["Valor da Categoria"].abs()

# ----------------------------------------------------------
# CARREGAR PLANILHA DE PENDÊNCIAS
# ----------------------------------------------------------
pendencias_arquivo = arquivo_cliente.replace(".xlsx", "_pendencias.xlsx")

pend_pagar = None
pend_receber = None

if os.path.exists(pendencias_arquivo):
    try:
        pend_pagar = pd.read_excel(pendencias_arquivo, sheet_name="PAGAR")
        pend_receber = pd.read_excel(pendencias_arquivo, sheet_name="RECEBER")
    except:
        st.warning("⚠ Não foi possível carregar as abas PAGAR e RECEBER. Verifique o arquivo.")
else:
    st.info("ℹ Nenhum arquivo de pendências encontrado para este cliente.")

# ----------------------------------------------------------
# FILTRO DE MÊS
# ----------------------------------------------------------
meses_disponiveis = ["Todos"] + sorted(df["Mes"].dropna().unique())
mes_selecionado = st.sidebar.selectbox("📅 Selecionar Mês:", meses_disponiveis)

if mes_selecionado != "Todos":
    df = df[df["Mes"] == mes_selecionado]

# ----------------------------------------------------------
# ABAS DO SISTEMA
# ----------------------------------------------------------
aba1, aba2, aba3, aba4 = st.tabs([
    "💸 Despesas",
    "💰 Receitas",
    "📅 Pendências",
    "🛠 Operacional"
])

# ======================================================================================
#                                       ABA 1 – DESPESAS
# ======================================================================================
with aba1:
    st.header(f"💸 Despesas – {cliente_escolhido}")

    df_desp = df[df["Tipo"].str.lower() == "pago"].copy()

    if df_desp.empty:
        st.warning("Nenhuma despesa encontrada.")
    else:
        total = df_desp["Valor_corrigido"].sum()

        col1, col2 = st.columns(2)
        col1.metric("💰 Total de Despesas", formatar(total))

        cat_top = df_desp.groupby("Categoria")["Valor_corrigido"].sum().sort_values(ascending=False)
        col2.metric("🏷 Categoria Mais Cara", f"{cat_top.index[0]} ({formatar(cat_top.iloc[0])})")

        st.markdown("---")

        df_rank = (
            df_desp.groupby("Categoria")["Valor_corrigido"]
            .sum().sort_values(ascending=False).reset_index()
        )
        df_rank["Valor_fmt"] = df_rank["Valor_corrigido"].apply(formatar)

        col_graf, col_rank = st.columns([3, 1])

        with col_graf:
            fig = px.bar(
                df_rank,
                x="Valor_corrigido",
                y="Categoria",
                orientation="h",
                text="Valor_fmt",
                title="Despesas por Categoria"
            )
            fig.update_layout(showlegend=False, xaxis_tickformat="R$,.2f")
            st.plotly_chart(fig, use_container_width=True)

        with col_rank:
            st.markdown("### 🏆 Ranking")
            for i, row in df_rank.iterrows():
                st.write(f"**{i+1}. {row['Categoria']} – {row['Valor_fmt']}**")

        st.markdown("---")

        st.subheader("📈 Evolução Mensal das Despesas")

        df_mes = df_desp.groupby("Mes")["Valor_corrigido"].sum().reset_index()
        df_mes["Valor_fmt"] = df_mes["Valor_corrigido"].apply(formatar)

        fig2 = px.bar(df_mes, x="Mes", y="Valor_corrigido", text="Valor_fmt")
        fig2.update_layout(yaxis_tickformat="R$,.2f")

        st.plotly_chart(fig2, use_container_width=True)

# ======================================================================================
#                                      ABA 2 – RECEITAS
# ======================================================================================
with aba2:
    st.header(f"💰 Receitas – {cliente_escolhido}")

    df_rec = df[df["Tipo"].str.lower() == "recebido"].copy()

    if df_rec.empty:
        st.warning("Nenhuma receita encontrada.")
    else:
        total = df_rec["Valor_corrigido"].sum()

        col1, col2 = st.columns(2)
        col1.metric("💵 Total Recebido", formatar(total))

        cat_top = df_rec.groupby("Categoria")["Valor_corrigido"].sum().sort_values(ascending=False)
        col2.metric("📈 Categoria Campeã", f"{cat_top.index[0]} ({formatar(cat_top.iloc[0])})")

        st.markdown("---")

        df_rank = (
            df_rec.groupby("Categoria")["Valor_corrigido"]
            .sum().sort_values(ascending=False).reset_index()
        )
        df_rank["Valor_fmt"] = df_rank["Valor_corrigido"].apply(formatar)

        fig = px.bar(
            df_rank,
            x="Valor_corrigido",
            y="Categoria",
            orientation="h",
            text="Valor_fmt",
            title="Receitas por Categoria"
        )
        fig.update_layout(showlegend=False, xaxis_tickformat="R$,.2f")

        st.plotly_chart(fig, use_container_width=True)

# ======================================================================================
#                              ABA 3 – PENDÊNCIAS (NOVA)
# ======================================================================================
with aba3:
    st.header(f"📅 Pendências – {cliente_escolhido}")

    if pend_pagar is None or pend_receber is None:
        st.info("📄 Nenhuma planilha de pendências disponível.")
    else:
        st.subheader("🔵 A Pagar")

        # Conversão robusta
        pend_pagar["Vencimento"] = pd.to_datetime(
            pend_pagar["Vencimento"], errors="coerce", dayfirst=True
        )
        pend_pagar = pend_pagar.dropna(subset=["Vencimento"])

        hoje = pd.Timestamp.today().normalize()
        pend_pagar["Dias_para_vencer"] = (pend_pagar["Vencimento"] - hoje).dt.days

        total_pagar = pend_pagar["Valor categoria/centro de custo"].sum()

        st.metric("💰 Total A Pagar", formatar(total_pagar))

        # Gráfico por categoria
        pagar_cat = pend_pagar.groupby("Categoria")["Valor categoria/centro de custo"].sum().reset_index()
        pagar_cat["Valor_fmt"] = pagar_cat["Valor categoria/centro de custo"].apply(formatar)

        fig_pagar = px.bar(
            pagar_cat,
            x="Valor categoria/centro de custo",
            y="Categoria",
            orientation="h",
            text="Valor_fmt",
            title="A Pagar por Categoria"
        )
        fig_pagar.update_layout(xaxis_tickformat="R$,.2f")
        st.plotly_chart(fig_pagar, use_container_width=True)

        st.markdown("---")
        st.subheader("🟢 A Receber")

        # Conversão robusta
        pend_receber["Vencimento"] = pd.to_datetime(
            pend_receber["Vencimento"], errors="coerce", dayfirst=True
        )
        pend_receber = pend_receber.dropna(subset=["Vencimento"])

        pend_receber["Dias_para_vencer"] = (pend_receber["Vencimento"] - hoje).dt.days

        total_receber = pend_receber["Valor categoria/centro de custo"].sum()

        st.metric("💵 Total A Receber", formatar(total_receber))

        receber_cat = pend_receber.groupby("Categoria")["Valor categoria/centro de custo"].sum().reset_index()
        receber_cat["Valor_fmt"] = receber_cat["Valor categoria/centro de custo"].apply(formatar)

        fig_receber = px.bar(
            receber_cat,
            x="Valor categoria/centro de custo",
            y="Categoria",
            orientation="h",
            text="Valor_fmt",
            title="A Receber por Categoria"
        )
        fig_receber.update_layout(xaxis_tickformat="R$,.2f")
        st.plotly_chart(fig_receber, use_container_width=True)

        st.markdown("---")
        st.subheader("📄 Detalhamento Completo")

        st.dataframe(pend_pagar, use_container_width=True)
        st.dataframe(pend_receber, use_container_width=True)

# ======================================================================================
#                               ABA 4 – OPERACIONAL  
# ======================================================================================
with aba4:
    st.header("🛠 Área Operacional")
    st.write("Espaço reservado para recursos administrativos futuros.")
