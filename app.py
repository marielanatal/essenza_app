import streamlit as st
import pandas as pd
from PIL import Image

# ==============================
# CONFIGURAÇÃO GERAL
# ==============================
st.set_page_config(page_title="Dashboard Essenza", layout="wide")

# Carregar logo
logo = Image.open("logo.png")
st.sidebar.image(logo, use_column_width=True)

st.sidebar.markdown("---")

# ==============================
# TÍTULO CENTRALIZADO
# ==============================
st.markdown(
    "<h1 style='text-align: center; color: #2C80FF;'>📊 Essenza – Dashboard Financeiro</h1>",
    unsafe_allow_html=True
)

st.markdown("<br>", unsafe_allow_html=True)

# ==============================
# LEITURA DA PLANILHA
# ==============================
df = pd.read_excel("dados.xlsx")

# ==============================
# SIDEBAR – SELEÇÃO DE CLIENTE
# ==============================
clientes = df["Cliente"].dropna().unique()
cliente_selecionado = st.sidebar.selectbox("Selecione o Cliente:", clientes)

df_filtro = df[df["Cliente"] == cliente_selecionado]

st.header(f"📌 Cliente Selecionado: {cliente_selecionado}")
st.markdown("---")


# ==============================
# KPI CARDS – INDICADORES
# ==============================
total_valor = df_filtro["Valor"].sum()
total_pago = df_filtro[df_filtro["Já Pago? (Sim/Não)"] == "Sim"]["Valor"].sum()
total_aberto = df_filtro[df_filtro["Já Pago? (Sim/Não)"] == "Não"]["Valor"].sum()

col1, col2, col3 = st.columns(3)

col1.metric("💰 Total de Despesas", f"R$ {total_valor:,.2f}")
col2.metric("✔ Total Pago", f"R$ {total_pago:,.2f}")
col3.metric("⏳ Em Aberto", f"R$ {total_aberto:,.2f}")

st.markdown("---")


# ==============================
# STATUS – GRÁFICO AUTOMÁTICO
# ==============================
st.subheader("📌 Status dos Lançamentos")

status_counts = df_filtro["Status (Falta Info / Pronto / Lançado)"].value_counts()

st.bar_chart(status_counts)

st.markdown("---")


# ==============================
# TABELA DETALHADA
# ==============================
st.subheader("📄 Lançamentos Detalhados")

st.dataframe(df_filtro, use_container_width=True)
