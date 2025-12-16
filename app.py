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
# LISTAR PLANILHAS PRINCIPAIS
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

df["Data"] = pd.to_datetime(df["Pagamento ou recebimento"], errors="coerce", dayfirst=True)

df["Ano"] = df["Data"].dt.year
df["Mes"] = df["Data"].dt.strftime("%b")
df["Mes_Ord"] = df["Data"].dt.month
df["Valor_corrigido"] = df["Valor da Categoria"].abs()


# ----------------------------------------------------------
# CARREGAR PENDÊNCIAS
# ----------------------------------------------------------
pendencias_arquivo = arquivo_cliente.replace(".xlsx", "_pendencias.xlsx")

pend_pagar = None
pend_receber = None

if os.path.exists(pendencias_arquivo):
    try:
        pend_pagar = pd.read_excel(pendencias_arquivo, sheet_name="PAGAR")
        pend_receber = pd.read_excel(pendencias_arquivo, sheet_name="RECEBER")
    except:
        st.warning("⚠ Erro ao carregar abas PAGAR e RECEBER.")


# ----------------------------------------------------------
# FILTRO DE MÊS
# ----------------------------------------------------------
meses_disponiveis = ["Todos"] + sorted(df["Mes"].dropna().unique())
mes_selecionado = st.sidebar.selectbox("📅 Selecionar Mês:", meses_disponiveis)

df_filtrado = df.copy()
if mes_selecionado != "Todos":
    df_filtrado = df[df["Mes"] == mes_selecionado]


# ----------------------------------------------------------
# ABAS
# ----------------------------------------------------------
aba1, aba2, aba3, aba4, aba5 = st.tabs([
    "💸 Despesas",
    "💰 Receitas",
    "📅 Pendências",
    "🛠 Operacional",
    "📅 Fechamento Anual"
])


# ======================================================================================
#                                       DESPESAS
# ======================================================================================
with aba1:
    st.header(f"💸 Despesas – {cliente_escolhido}")

    df_desp = df_filtrado[df_filtrado["Tipo"].str.lower() == "pago"].copy()

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

        fig = px.bar(
            df_rank,
            x="Valor_corrigido",
            y="Categoria",
            orientation="h",
            text="Valor_fmt",
            title="Despesas por Categoria"
        )
        fig.update_layout(xaxis_tickformat="R$,.2f")
        st.plotly_chart(fig, use_container_width=True)

        # 📊 Comparativo Mensal
        st.subheader("📆 Comparativo Mensal – Despesas")
        df_desp_mes = (
            df_desp.groupby(["Mes", "Mes_Ord"])["Valor_corrigido"]
            .sum().reset_index().sort_values("Mes_Ord")
        )
        df_desp_mes["Valor_fmt"] = df_desp_mes["Valor_corrigido"].apply(formatar)

        fig2 = px.bar(
            df_desp_mes,
            x="Mes",
            y="Valor_corrigido",
            text="Valor_fmt",
        )
        fig2.update_layout(yaxis_tickformat="R$,.2f")
        st.plotly_chart(fig2, use_container_width=True)


# ======================================================================================
#                                      RECEITAS
# ======================================================================================
with aba2:
    st.header(f"💰 Receitas – {cliente_escolhido}")

    df_rec = df_filtrado[df_filtrado["Tipo"].str.lower() == "recebido"].copy()

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
        fig.update_layout(xaxis_tickformat="R$,.2f")
        st.plotly_chart(fig, use_container_width=True)

        # 📊 Comparativo Mensal
        st.subheader("📆 Comparativo Mensal – Receitas")

        df_rec_mes = (
            df_rec.groupby(["Mes", "Mes_Ord"])["Valor_corrigido"]
            .sum().reset_index().sort_values("Mes_Ord")
        )
        df_rec_mes["Valor_fmt"] = df_rec_mes["Valor_corrigido"].apply(formatar)

        fig2 = px.bar(
            df_rec_mes,
            x="Mes",
            y="Valor_corrigido",
            text="Valor_fmt",
        )
        fig2.update_layout(yaxis_tickformat="R$,.2f")
        st.plotly_chart(fig2, use_container_width=True)



# ======================================================================================
#                              ABA 3 – PENDÊNCIAS
# ======================================================================================
with aba3:
    st.header(f"📅 Pendências – {cliente_escolhido}")

    if pend_pagar is None or pend_receber is None:
        st.info("📄 Nenhuma planilha de pendências disponível.")
    else:
        hoje = pd.Timestamp.today().normalize()

        # ================================
        # A PAGAR
        # ================================
        st.subheader("📘 A Pagar")
        st.markdown("---")

        pend_pagar["Vencimento"] = pd.to_datetime(pend_pagar["Vencimento"], errors="coerce", dayfirst=True)
        pend_pagar = pend_pagar.dropna(subset=["Vencimento"])
        pend_pagar["Dias_para_vencer"] = (pend_pagar["Vencimento"] - hoje).dt.days

        total_pagar = pend_pagar["Valor categoria/centro de custo"].sum()
        atraso_pagar = pend_pagar[pend_pagar["Dias_para_vencer"] < 0]["Valor categoria/centro de custo"].sum()
        hoje_pagar = pend_pagar[pend_pagar["Dias_para_vencer"] == 0]["Valor categoria/centro de custo"].sum()
        prox7_pagar = pend_pagar[(pend_pagar["Dias_para_vencer"] > 0) &
                                 (pend_pagar["Dias_para_vencer"] <= 7)]["Valor categoria/centro de custo"].sum()

        col1, col2, col3, col4 = st.columns(4)
        col1.metric("🔴 Em Atraso", formatar(atraso_pagar))
        col2.metric("🟡 Hoje", formatar(hoje_pagar))
        col3.metric("🔵 Próx. 7 dias", formatar(prox7_pagar))
        col4.metric("💰 Total", formatar(total_pagar))

        cat_pagar = pend_pagar.groupby("Categoria")["Valor categoria/centro de custo"].sum().reset_index()
        fig_pagar = px.bar(cat_pagar, x="Valor categoria/centro de custo", y="Categoria",
                           orientation="h", title="A Pagar por Categoria")
        fig_pagar.update_layout(xaxis_tickformat="R$,.2f")
        st.plotly_chart(fig_pagar, use_container_width=True)

        st.dataframe(pend_pagar, use_container_width=True)


        # ================================
        # A RECEBER
        # ================================
        st.subheader("📗 A Receber")
        st.markdown("---")

        pend_receber["Vencimento"] = pd.to_datetime(pend_receber["Vencimento"], errors="coerce", dayfirst=True)
        pend_receber = pend_receber.dropna(subset=["Vencimento"])
        pend_receber["Dias_para_vencer"] = (pend_receber["Vencimento"] - hoje).dt.days

        atraso_rec = pend_receber[pend_receber["Dias_para_vencer"] < 0]["Valor categoria/centro de custo"].sum()
        hoje_rec = pend_receber[pend_receber["Dias_para_vencer"] == 0]["Valor categoria/centro de custo"].sum()
        prox7_rec = pend_receber[(pend_receber["Dias_para_vencer"] > 0) &
                                 (pend_receber["Dias_para_vencer"] <= 7)]["Valor categoria/centro de custo"].sum()
        total_receber = pend_receber["Valor categoria/centro de custo"].sum()

        col1, col2, col3, col4 = st.columns(4)
        col1.metric("🔴 Em Atraso", formatar(atraso_rec))
        col2.metric("🟡 Hoje", formatar(hoje_rec))
        col3.metric("🔵 Próx. 7 dias", formatar(prox7_rec))
        col4.metric("💰 Total", formatar(total_receber))

        cat_rec = pend_receber.groupby("Categoria")["Valor categoria/centro de custo"].sum().reset_index()
        fig_rec = px.bar(cat_rec, x="Valor categoria/centro de custo", y="Categoria",
                         orientation="h", title="A Receber por Categoria")
        fig_rec.update_layout(xaxis_tickformat="R$,.2f")
        st.plotly_chart(fig_rec, use_container_width=True)

        st.dataframe(pend_receber, use_container_width=True)


# ======================================================================================
#                           ABA 4 – OPERACIONAL
# ======================================================================================
with aba4:
    st.header("🛠 Operacional")
    st.info("Área reservada para futuras funções do Sistema Essenza.")


# ======================================================================================
#                           ABA 5 – FECHAMENTO ANUAL
# ======================================================================================
with aba5:
    st.header(f"📅 Fechamento Anual – {cliente_escolhido}")

    anos_disponiveis = sorted(df["Ano"].dropna().unique())
    ano_escolhido = st.selectbox("Selecione o ano:", anos_disponiveis)

    df_ano = df[df["Ano"] == ano_escolhido].copy()

    if df_ano.empty:
        st.warning("Nenhum dado encontrado para este ano.")
    else:
        # ======================
        # CARDS DO ANO
        # ======================
        df_desp_ano = df_ano[df_ano["Tipo"].str.lower() == "pago"]
        df_rec_ano = df_ano[df_ano["Tipo"].str.lower() == "recebido"]

        total_desp_ano = df_desp_ano["Valor_corrigido"].sum()
        total_rec_ano = df_rec_ano["Valor_corrigido"].sum()
        saldo_ano = total_rec_ano - total_desp_ano

        c1, c2, c3 = st.columns(3)
        c1.metric("💰 Total de Despesas no Ano", formatar(total_desp_ano))
        c2.metric("💵 Total de Receitas no Ano", formatar(total_rec_ano))
        c3.metric("📊 Resultado do Ano", formatar(saldo_ano))

        st.markdown("---")

        # ======================
        # EVOLUÇÃO MENSAL
        # ======================
        st.subheader("📈 Evolução Mensal – Receita x Despesa")

        df_evo = df_ano.groupby(["Mes", "Mes_Ord", "Tipo"])["Valor_corrigido"].sum().reset_index()
        df_evo = df_evo.sort_values("Mes_Ord")

        fig_evo = px.bar(
            df_evo,
            x="Mes",
            y="Valor_corrigido",
            color="Tipo",
            barmode="group",
            labels={"Valor_corrigido": "Valor"},
            title="Receita x Despesa por Mês",
        )
        fig_evo.update_layout(yaxis_tickformat="R$,.2f")
        st.plotly_chart(fig_evo, use_container_width=True)

        # ======================
        # DESPESAS POR CATEGORIA
        # ======================
        st.subheader("🏷 Despesas por Categoria no Ano")

        desp_cat = df_desp_ano.groupby("Categoria")["Valor_corrigido"].sum().reset_index()
        desp_cat["Valor_fmt"] = desp_cat["Valor_corrigido"].apply(formatar)

        fig_dcat = px.bar(
            desp_cat,
            x="Valor_corrigido",
            y="Categoria",
            orientation="h",
            text="Valor_fmt"
        )
        fig_dcat.update_layout(xaxis_tickformat="R$,.2f")
        st.plotly_chart(fig_dcat, use_container_width=True)

        # ======================
        # RECEITAS POR CATEGORIA
        # ======================
        st.subheader("📈 Receitas por Categoria no Ano")

        rec_cat = df_rec_ano.groupby("Categoria")["Valor_corrigido"].sum().reset_index()
        rec_cat["Valor_fmt"] = rec_cat["Valor_corrigido"].apply(formatar)

        fig_rcat = px.bar(
            rec_cat,
            x="Valor_corrigido",
            y="Categoria",
            orientation="h",
            text="Valor_fmt"
        )
        fig_rcat.update_layout(xaxis_tickformat="R$,.2f")
        st.plotly_chart(fig_rcat, use_container_width=True)

        # ======================
        # TABELA MENSAL
        # ======================
        st.subheader("📊 Resultado Mensal")

        tabela = df_ano.groupby(["Mes", "Mes_Ord", "Tipo"])["Valor_corrigido"].sum().reset_index()
        tabela = tabela.pivot_table(index=["Mes", "Mes_Ord"], columns="Tipo",
                                    values="Valor_corrigido", fill_value=0).reset_index()
        tabela = tabela.sort_values("Mes_Ord")
        tabela["Resultado"] = tabela.get("Recebido", 0) - tabela.get("Pago", 0)

        tabela_formatada = tabela.copy()
        for col in ["Pago", "Recebido", "Resultado"]:
            if col in tabela_formatada:
                tabela_formatada[col] = tabela_formatada[col].apply(formatar)

        st.dataframe(tabela_formatada, use_container_width=True)

        # ======================
        # INSIGHTS
        # ======================
        st.subheader("💡 Insights Automáticos")

        insights = []

        if not df_rec_ano.empty:
            mes_top_rec = df_rec_ano.groupby("Mes")["Valor_corrigido"].sum().idxmax()
            insights.append(f"🔹 O mês com maior RECEITA foi **{mes_top_rec}**.")

        if not df_desp_ano.empty:
            mes_top_desp = df_desp_ano.groupby("Mes")["Valor_corrigido"].sum().idxmax()
            insights.append(f"🔹 O mês com maior DESPESA foi **{mes_top_desp}**.")

        categoria_desp_ano = desp_cat.sort_values("Valor_corrigido", ascending=False).iloc[0]["Categoria"] \
                              if not desp_cat.empty else "Nenhuma"
        insights.append(f"🔹 A categoria que mais pesou no ano foi **{categoria_desp_ano}**.")

        insights.append(f"🔹 O resultado anual foi de **{formatar(saldo_ano)}**.")

        for item in insights:
            st.write(item)

