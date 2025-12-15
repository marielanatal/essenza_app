import streamlit as st
import pandas as pd
import plotly.express as px
from PIL import Image
import os

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
# LISTAR CLIENTES (PLANILHAS)
# -------------------------
arquivos = [f for f in os.listdir() if f.endswith(".xlsx") and f != "config.xlsx"]

if len(arquivos) == 0:
    st.error("Nenhum arquivo .xlsx encontrado no diretório.")
    st.stop()

# Limpar nome do cliente baseado no nome do arquivo
def limpar_nome(nome):
    nome = nome.replace(".xlsx", "")
    nome = nome.replace("_", " ")
    return nome.title()

clientes_formatados = {limpar_nome(a): a for a in arquivos}

cliente_escolhido = st.sidebar.selectbox("📁 Selecione o Cliente:", list(clientes_formatados.keys()))
arquivo_cliente = clientes_formatados[cliente_escolhido]

st.sidebar.markdown(f"**Cliente selecionado:** {cliente_escolhido}")
st.sidebar.markdown("---")


# -------------------------
# CARREGAR PLANILHA DO CLIENTE
# -------------------------
df = pd.read_excel(arquivo_cliente)
df.columns = df.columns.str.strip()

# Criar coluna de data
df["Data"] = pd.to_datetime(df["Pagamento ou recebimento"], dayfirst=True)

# Criar Mês no formato Essenza: "Nov/2025"
df["Mes"] = df["Data"].dt.strftime("%b/%Y")

# Corrigir valores (despesa negativa → vira positivo)
df["Valor_corrigido"] = df["Valor da Categoria"].apply(lambda x: abs(x))


# -------------------------
# FILTRO DE MÊS
# -------------------------
meses_disponiveis = ["Todos"] + sorted(df["Mes"].unique())
mes_selecionado = st.sidebar.selectbox("📅 Selecionar Mês:", meses_disponiveis)

if mes_selecionado != "Todos":
    df = df[df["Mes"] == mes_selecionado]


# -------------------------
# ABAS DO DASHBOARD
# -------------------------
aba1, aba2, aba3 = st.tabs(["💸 Despesas", "💰 Receitas", "🛠 Operacional"])


# =========================================================
#                        ABA 1 – DESPESAS
# =========================================================
with aba1:
    st.header(f"💸 Despesas – {cliente_escolhido}")

    df_desp = df[df["Tipo"].str.lower() == "pago"]

    if len(df_desp) == 0:
        st.warning("Nenhuma despesa encontrada para este período.")
    else:
        total = df_desp["Valor_corrigido"].sum()

        col1, col2 = st.columns(2)
        col1.metric("💰 Total de Despesas", f"R$ {total:,.2f}")

        cat_top = df_desp.groupby("Categoria")["Valor_corrigido"].sum().sort_values(ascending=False)
        col2.metric("🏷 Categoria Mais Cara", f"{cat_top.index[0]} (R$ {cat_top.iloc[0]:,.2f})")

        st.markdown("---")

        # Pizza categorias
        fig = px.pie(
            df_desp,
            names="Categoria",
            values="Valor_corrigido",
            title="Distribuição por Categoria",
            color_discrete_sequence=px.colors.qualitative.Set2
        )
        st.plotly_chart(fig, use_container_width=True)

        # Evolução mensal
        fig2 = px.bar(
            df_desp.groupby("Mes")["Valor_corrigido"].sum().reset_index(),
            x="Mes",
            y="Valor_corrigido",
            title="Evolução Mensal das Despesas"
        )
        st.plotly_chart(fig2, use_container_width=True)

        st.subheader("📄 Despesas Detalhadas")
        st.dataframe(df_desp, use_container_width=True)


# =========================================================
#                        ABA 2 – RECEITAS
# =========================================================
with aba2:
    st.header(f"💰 Receitas – {cliente_escolhido}")

    df_rec = df[df["Tipo"].str.lower() == "recebido"]

    if len(df_rec) == 0:
        st.warning("Nenhuma receita encontrada para este período.")
    else:
        total = df_rec["Valor_corrigido"].sum()

        col1, col2 = st.columns(2)
        col1.metric("💵 Total Recebido", f"R$ {total:,.2f}")

        rec_top = df_rec.groupby("Categoria")["Valor_corrigido"].sum().sort_values(ascending=True)
        col2.metric("📈 Categoria de Maior Receita", f"{rec_top.index[0]} (R$ {rec_top.iloc[0]:,.2f})")

        st.markdown("---")

        fig = px.pie(
            df_rec,
            names="Categoria",
            values="Valor_corrigido",
            title="Receita por Categoria",
            color_discrete_sequence=px.colors.qualitative.Set3
        )
        st.plotly_chart(fig, use_container_width=True)

        fig2 = px.line(
            df_rec.groupby("Mes")["Valor_corrigido"].sum().reset_index(),
            x="Mes",
            y="Valor_corrigido",
            title="Evolução Mensal das Receitas",
            markers=True
        )
        st.plotly_chart(fig2, use_container_width=True)

        st.subheader("📄 Receitas Detalhadas")
        st.dataframe(df_rec, use_container_width=True)


# =========================================================
#                        ABA 3 – OPERACIONAL
# =========================================================
with aba3:
    st.header("🛠 Operacional – Dados Brutos")
    st.info("Aba interna para uso administrativo. Mostra todos os lançamentos.")
    st.dataframe(df, use_container_width=True)
