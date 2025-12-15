import streamlit as st
import pandas as pd

st.set_page_config(page_title="Essenza Dashboard", layout="wide")

st.title("📊 Dashboard Essenza - Versão Teste Avançada")

# Carregar planilha
df = pd.read_excel("dados.xlsx")

# Sidebar - seleção de cliente
clientes = df["Cliente"].dropna().unique()
cliente_selecionado = st.sidebar.selectbox("Selecione o Cliente:", clientes)

# Filtrar pelo cliente
df_filtro = df[df["Cliente"] == cliente_selecionado]

st.header(f"📌 Cliente: {cliente_selecionado}")

# ============================
#       KPIs PRINCIPAIS
# ============================
total_valor = df_filtro["Valor"].sum()
total_pago = df_filtro[df_filtro["Já Pago? (Sim/Não)"] == "Sim"]["Valor"].sum()
total_aberto = df_filtro[df_filtro["Já Pago? (Sim/Não)"] == "Não"]["Valor"].sum()

col1, col2, col3 = st.columns(3)
col1.metric("💰 Total de Despesas", f"R$ {total_valor:,.2f}")
col2.metric("✔ Pago", f"R$ {total_pago:,.2f}")
col3.metric("⏳ Em Aberto", f"R$ {total_aberto:,.2f}")

# ============================
#       STATUS
# ============================
status_counts = df_filtro["Status (Falta Info / Pronto / Lançado)"].value_counts()

st.subheader("📌 Status dos lançamentos")
st.bar_chart(status_counts)

# ============================
#       TABELA
# ============================
st.subheader("📄 Dados detalhados")
st.dataframe(df_filtro)
