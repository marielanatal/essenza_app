import streamlit as st
import pandas as pd
import plotly.express as px
from PIL import Image
import os

# -------------------------
# CONFIGURAÇÃO DO APP
# -------------------------
st.set_page_config(page_title="Dashboard Essenza", layout="wide")

# Função para formatar valores em R$
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
# LISTAR CLIENTES (PLANILHAS)
# -------------------------
arquivos = [f for f in os.listdir() if f.endswith(".xlsx")]

if len(arquivos) == 0:
    st.error("Nenhum arquivo .xlsx encontrado no diretório.")
    st.stop()

# Formatar nome do cliente baseado no nome do arquivo
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

# Criar Mês no formato "Nov/2025"
df["Mes"] = df["Data"].dt.strftime("%b/%Y")

# Corrigir valores: despesa negativa → positivo
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
#                   ABA 1 – DESPESAS
# =========================================================
with aba1:
    st.header(f"💸 Despesas – {cliente_escolhido}")

    df_desp = df[df["Tipo"].str.lower() == "pago"]

    if len(df_desp) == 0:
        st.warning("Nenhuma despesa encontrada para este período.")
    else:
        total = df_desp["Valor_corrigido"].sum()

        col1, col2 = st.columns(2)
        col1.metric("💰 Total de Despesas", formatar(total))

        cat_top = df_desp.groupby("Categoria")["Valor_corrigido"].sum().sort_values(ascending=False)
        col2.metric("🏷 Categoria Mais Cara", f"{cat_top.index[0]} ({formatar(cat_top.iloc[0])})")

        st.markdown("---")

        # -------------------------
        # GRÁFICO DE BARRAS + RANKING
        # -------------------------
        st.subheader("📊 Despesas por Categoria")

        df_rank = (
            df_desp.groupby("Categoria")["Valor_corrigido"]
            .sum()
            .sort_values(ascending=False)
            .reset_index()
        )

        col_graf, col_rank = st.columns([3, 1])

        with col_graf:
            fig = px.bar(
                df_rank,
                x="Valor_corrigido",
                y="Categoria",
                orientation="h",
                title="Despesas por Categoria (Maior → Menor)",
                text_auto=True,
                color="Categoria"
            )
            fig.update_layout(showlegend=False)
            st.plotly_chart(fig, use_container_width=True)

        with col_rank:
            st.markdown("### 🏆 Ranking")
            for i, row in df_rank.iterrows():
                st.write(f"**{i+1}. {row['Categoria']} – {formatar(row['Valor_corrigido'])}**")

        st.markdown("---")

        # Evolução mensal
        st.subheader("📈 Evolução Mensal das Despesas")
        df_mes = df_desp.groupby("Mes")["Valor_corrigido"].sum().reset_index()
        df_mes["Valor_fmt"] = df_mes["Valor_corrigido"].apply(formatar)

        fig2 = px.bar(
            df_mes,
            x="Mes",
            y="Valor_corrigido",
            text="Valor_fmt",
            title="Evolução Mensal das Despesas"
        )
        st.plotly_chart(fig2, use_container_width=True)

        st.subheader("📄 Despesas Detalhadas")
        df_desp_fmt = df_desp.copy()
        df_desp_fmt["Valor_corrigido"] = df_desp_fmt["Valor_corrigido"].apply(formatar)
        st.dataframe(df_desp_fmt, use_container_width=True)


# =========================================================
#                   ABA 2 – RECEITAS
# =========================================================
with aba2:
    st.header(f"💰 Receitas – {cliente_escolhido}")

    df_rec = df[df["Tipo"].str.lower() == "recebido"]

    if len(df_rec) == 0:
        st.warning("Nenhuma receita encontrada para este período.")
    else:
        total = df_rec["Valor_corrigido"].sum()

        col1, col2 = st.columns(2)
        col1.metric("💵 Total Recebido", formatar(total))

        rec_top = df_rec.groupby("Categoria")["Valor_corrigido"].sum().sort_values(ascending=False)
        col2.metric("📈 Categoria de Maior Receita", f"{rec_top.index[0]} ({formatar(rec_top.iloc[0])})")

        st.markdown("---")

        st.subheader("📊 Receitas por Categoria")

        df_rank_rec = (
            df_rec.groupby("Categoria")["Valor_corrigido"]
            .sum()
            .sort_values(ascending=False)
            .reset_index()
        )

        col_graf2, col_rank2 = st.columns([3, 1])

        with col_graf2:
            fig_rec = px.bar(
                df_rank_rec,
                x="Valor_corrigido",
                y="Categoria",
                orientation="h",
                title="Receitas por Categoria (Maior → Menor)",
                text_auto=True,
                color="Categoria"
            )
            fig_rec.update_layout(showlegend=False)
            st.plotly_chart(fig_rec, use_container_width=True)

        with col_rank2:
            st.markdown("### 🏆 Ranking")
            for i, row in df_rank_rec.iterrows():
                st.write(f"**{i+1}. {row['Categoria']} – {formatar(row['Valor_corrigido'])}**")

        st.markdown("---")

        st.subheader("📈 Evolução Mensal das Receitas")
        df_mes_rec = df_rec.groupby("Mes")["Valor_corrigido"].sum().reset_index()
        df_mes_rec["Valor_fmt"] = df_mes_rec["Valor_corrigido"].apply(formatar)

        fig2 = px.line(
            df_mes_rec,
            x="Mes",
            y="Valor_corrigido",
            text="Valor_fmt",
            title="Evolução Mensal das Receitas",
            markers=True
        )
        st.plotly_chart(fig2, use_container_width=True)

        st.subheader("📄 Receitas Detalhadas")
        df_rec_fmt = df_rec.copy()
        df_rec_fmt["Valor_corrigido"] = df_rec_fmt["Valor_corrigido"].apply(formatar)
        st.dataframe(df_rec_fmt, use_container_width=True)


# =========================================================
#                   ABA 3 – OPERACIONAL
# =========================================================
with aba3:
    st.header("🛠 Operacional – Dados Brutos")
    st.info("Aba interna para uso administrativo. Mostra todos os lançamentos.")

    df_fmt = df.copy()
    df_fmt["Valor_corrigido"] = df_fmt["Valor_corrigido"].apply(formatar)

    st.dataframe(df_fmt, use_container_width=True)


