import streamlit as st
import pandas as pd
import plotly.express as px
from PIL import Image

# -------------------------
# CONFIGURAÇÃO DO APP
# -------------------------
st.set_page_config(page_title="Dashboard Essenza", layout="wide")

# Logo
logo = Image.open("logo.png")
st.sidebar.image(logo, use_column_width=True)
st.sidebar.markdown("---")

st.markdown(
    "<h1 style='text-align: center; color: #2C80FF;'>📊 Essenza – Dashboard Financeiro</h1>",
    unsafe_allow_html=True
)
st.markdown("<br>", unsafe_allow_html=True)

# -------------------------
# CARREGAR PLANILHA
# -------------------------
df = pd.read_excel("dados.xlsx")

# Padroniza os nomes
df.columns = df.columns.str.strip()

# Cria coluna de data
df["Data"] = pd.to_datetime(df["Pagamento ou recebimento"], dayfirst=True)

# Cria coluna de Mês no formato "Nov/2025"
df["Mes"] = df["Data"].dt.strftime("%b/%Y")

# Corrige valores
# Despesa = valor negativo → converte para positivo
df["Valor_corrigido"] = df["Valor da Categoria"].apply(lambda x: abs(x))

# Filtrar meses disponíveis
meses_disponiveis = ["Todos"] + sorted(df["Mes"].unique())
mes_selecionado = st.sidebar.selectbox("📅 Selecionar Mês:", meses_disponiveis)

if mes_selecionado != "Todos":
    df = df[df["Mes"] == mes_selecionado]

# -------------------------
# ABAS DO DASHBOARD
# -------------------------
aba1, aba2, aba3 = st.tabs(["💸 Despesas", "💰 Receitas", "🛠 Operacional"])

# =========================
#       ABA 1 – DESPESAS
# =========================
with aba1:
    st.header("💸 Despesas")
    df_desp = df[df["Tipo"].str.lower() == "pago"]

    if len(df_desp) == 0:
        st.warning("Nenhuma despesa encontrada para o período selecionado.")
    else:
        total_despesas = df_desp["Valor_corrigido"].sum()

        col1, col2 = st.columns(2)
        col1.metric("💰 Total de Despesas", f"R$ {total_despesas:,.2f}")

        # Categoria mais cara
        cat_top = (
            df_desp.groupby("Categoria")["Valor_corrigido"].sum().sort_values(ascending=False)
        )
        top_cat_nome = cat_top.index[0]
        top_cat_valor = cat_top.iloc[0]

        col2.metric(f"🏷 Categoria de Maior Peso", f"{top_cat_nome} (R$ {top_cat_valor:,.2f})")

        st.markdown("---")

        # Pizza por categoria
        fig_cat = px.pie(
            df_desp,
            names="Categoria",
            values="Valor_corrigido",
            title="Distribuição por Categoria",
            color_discrete_sequence=px.colors.qualitative.Set2,
        )
        st.plotly_chart(fig_cat, use_container_width=True)

        # Evolução mensal
        fig_mes = px.bar(
            df_desp.groupby("Mes")["Valor_corrigido"].sum().reset_index(),
            x="Mes",
            y="Valor_corrigido",
            title="Evolução Mensal das Despesas"
        )
        st.plotly_chart(fig_mes, use_container_width=True)

        # Tabela final
        st.subheader("📄 Despesas Detalhadas")
        st.dataframe(df_desp, use_container_width=True)


# =========================
#       ABA 2 – RECEITAS
# =========================
with aba2:
    st.header("💰 Receitas")
    df_rec = df[df["Tipo"].str.lower() == "recebido"]

    if len(df_rec) == 0:
        st.warning("Nenhuma receita encontrada para o período selecionado.")
    else:
        total_receitas = df_rec["Valor_corrigido"].sum()

        col1, col2 = st.columns(2)

        col1.metric("💵 Total Recebido", f"R$ {total_receitas:,.2f}")

        # Receita top
        rec_top = (
            df_rec.groupby("Categoria")["Valor_corrigido"].sum().sort_values(ascending=False)
        )
        top_rec_nome = rec_top.index[0]
        top_rec_valor = rec_top.iloc[0]

        col2.metric("📈 Maior Categoria de Receita", f"{top_rec_nome} (R$ {top_rec_valor:,.2f})")

        st.markdown("---")

        # Pizza receita
        fig_rec_cat = px.pie(
            df_rec,
            names="Categoria",
            values="Valor_corrigido",
            title="Receita por Categoria",
            color_discrete_sequence=px.colors.qualitative.Set3,
        )
        st.plotly_chart(fig_rec_cat, use_container_width=True)

        # Evolução mensal receita
        fig_rec_mes = px.line(
            df_rec.groupby("Mes")["Valor_corrigido"].sum().reset_index(),
            x="Mes",
            y="Valor_corrigido",
            title="Evolução Mensal das Receitas",
            markers=True
        )
        st.plotly_chart(fig_rec_mes, use_container_width=True)

        # Tabela
        st.subheader("📄 Receitas Detalhadas")
        st.dataframe(df_rec, use_container_width=True)


# =========================
#    ABA 3 – OPERACIONAL
# =========================
with aba3:
    st.header("🛠 Operacional (uso interno)")
    st.info("Esta aba mostra todos os lançamentos brutos — uso exclusivo interno.")

    st.dataframe(df, use_container_width=True)

