import streamlit as st
import pandas as pd
import plotly.express as px
from PIL import Image
import os

st.set_page_config(page_title="Dashboard Essenza", layout="wide")

# Formatação R$
def formatar(valor):
    return f"R$ {valor:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")

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
# CLIENTES (planilhas)
# -------------------------
arquivos = [f for f in os.listdir() if f.endswith(".xlsx")]

def limpar_nome(nome):
    return nome.replace(".xlsx", "").replace("_", " ").title()

clientes_formatados = {limpar_nome(a): a for a in arquivos}

cliente_escolhido = st.sidebar.selectbox("📁 Selecione o Cliente:", list(clientes_formatados.keys()))
arquivo_cliente = clientes_formatados[cliente_escolhido]

st.sidebar.markdown("---")

# -------------------------
# CARREGAR PLANILHA
# -------------------------
df = pd.read_excel(arquivo_cliente)
df.columns = df.columns.str.strip()

df["Data"] = pd.to_datetime(df["Pagamento ou recebimento"], dayfirst=True)
df["Mes"] = df["Data"].dt.strftime("%b/%Y")
df["Valor_corrigido"] = df["Valor da Categoria"].abs()

# -------------------------
# FILTRO DE MÊS
# -------------------------
meses_disponiveis = ["Todos"] + sorted(df["Mes"].unique())
mes_selecionado = st.sidebar.selectbox("📅 Selecionar Mês:", meses_disponiveis)

if mes_selecionado != "Todos":
    df = df[df["Mes"] == mes_selecionado]

# -------------------------
# ABAS
# -------------------------
aba1, aba2, aba3 = st.tabs(["💸 Despesas", "💰 Receitas", "🛠 Operacional"])

# =========================================================
#                       DESPESAS
# =========================================================
with aba1:
    st.header(f"💸 Despesas – {cliente_escolhido}")

    df_desp = df[df["Tipo"].str.lower() == "pago"]

    if df_desp.empty:
        st.warning("Nenhuma despesa encontrada.")
    else:
        total = df_desp["Valor_corrigido"].sum()

        col1, col2 = st.columns(2)
        col1.metric("💰 Total de Despesas", formatar(total))

        cat_top = df_desp.groupby("Categoria")["Valor_corrigido"].sum().sort_values(ascending=False)
        col2.metric("🏷 Categoria Mais Cara", f"{cat_top.index[0]} ({formatar(cat_top.iloc[0])})")

        st.markdown("---")

        # Criar coluna de texto formatado
        df_rank = (
            df_desp.groupby("Categoria")["Valor_corrigido"]
            .sum()
            .sort_values(ascending=False)
            .reset_index()
        )
        df_rank["Valor_fmt"] = df_rank["Valor_corrigido"].apply(formatar)

        st.subheader("📊 Despesas por Categoria")

        col_graf, col_rank = st.columns([3, 1])

        with col_graf:
            fig = px.bar(
                df_rank,
                x="Valor_corrigido",
                y="Categoria",
                orientation="h",
                text="Valor_fmt",
                title="Despesas por Categoria (Maior → Menor)",
                color="Categoria"
            )
            fig.update_layout(
                showlegend=False,
                xaxis_tickformat="R$,.2f"
            )
            st.plotly_chart(fig, use_container_width=True)

        with col_rank:
            st.markdown("### 🏆 Ranking")
            for i, row in df_rank.iterrows():
                st.write(f"**{i+1}. {row['Categoria']} – {row['Valor_fmt']}**")

        st.markdown("---")

        st.subheader("📈 Evolução Mensal das Despesas")

        df_mes = df_desp.groupby("Mes")["Valor_corrigido"].sum().reset_index()
        df_mes["Valor_fmt"] = df_mes["Valor_corrigido"].apply(formatar)

        fig2 = px.bar(
            df_mes,
            x="Mes",
            y="Valor_corrigido",
            text="Valor_fmt",
            title="Evolução Mensal"
        )
        fig2.update_layout(yaxis_tickformat="R$,.2f")
        st.plotly_chart(fig2, use_container_width=True)

        st.subheader("📄 Detalhamento das Despesas")

        df_desp2 = df_desp.copy()
        df_desp2["Valor_corrigido"] = df_desp2["Valor_corrigido"].apply(formatar)
        st.dataframe(df_desp2, use_container_width=True)



# =========================================================
#                       RECEITAS
# =========================================================
with aba2:
    st.header(f"💰 Receitas – {cliente_escolhido}")

    df_rec = df[df["Tipo"].str.lower() == "recebido"]

    if df_rec.empty:
        st.warning("Nenhuma receita encontrada.")
    else:
        total = df_rec["Valor_corrigido"].sum()

        col1, col2 = st.columns(2)
        col1.metric("💵 Total Recebido", formatar(total))

        rec_top = df_rec.groupby("Categoria")["Valor_corrigido"].sum().sort_values(ascending=False)
        col2.metric("📈 Categoria Top", f"{rec_top.index[0]} ({formatar(rec_top.iloc[0])})")

        st.markdown("---")

        df_rank_rec = (
            df_rec.groupby("Categoria")["Valor_corrigido"]
            .sum()
            .sort_values(ascending=False)
            .reset_index()
        )
        df_rank_rec["Valor_fmt"] = df_rank_rec["Valor_corrigido"].apply(formatar)

        st.subheader("📊 Receitas por Categoria")

        col_graf2, col_rank2 = st.columns([3, 1])

        with col_graf2:
            fig_rec = px.bar(
                df_rank_rec,
                x="Valor_corrigido",
                y="Categoria",
                orientation="h",
                text="Valor_fmt",
                title="Receitas por Categoria (Maior → Menor)",
                color="Categoria"
            )
            fig_rec.update_layout(
                showlegend=False,
                xaxis_tickformat="R$,.2f"
            )
            st.plotly_chart(fig_rec, use_container_width=True)

        with col_rank2:
            st.markdown("### 🏆 Ranking")
            for i, row in df_rank_rec.iterrows():
                st.write(f"**{i+1}. {row['Categoria']} – {row['Valor_fmt']}**")

        st.markdown("---")

        st.subheader("📈 Evolução Mensal das Receitas")

        df_mes_rec = df_rec.groupby("Mes")["Valor_corrigido"].sum().reset_index()
        df_mes_rec["Valor_fmt"] = df_mes_rec["Valor_corrigido"].apply(formatar)

        fig4 = px.line(
            df_mes_rec,
            x="Mes",
            y="Valor_corrigido",
            text="Valor_fmt",
            markers=True,
            title="Evolução Mensal"
        )
        fig4.update_layout(yaxis_tickformat="R$,.2f")
        st.plotly_chart(fig4, use_container_width=True)

        st.subheader("📄 Detalhamento das Receitas")

        df_rec2 = df_rec.copy()
        df_rec2["Valor_corrigido"] = df_rec2["Valor_corrigido"].apply(formatar)
        st.dataframe(df_rec2, use_container_width=True)

# =========================================================
#                       OPERACIONAL
# =========================================================
with aba3:
    st.header("🛠 Operacional – Dados Brutos")

    df_op = df.copy()
    df_op["Valor_corrigido"] = df_op["Valor_corrigido"].apply(formatar)

    st.dataframe(df_op, use_container_width=True)


