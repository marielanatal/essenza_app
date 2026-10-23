# Rumbo a España

App de celular para aprender o espanhol da Espanha em 14 semanas, feito para quem fala português.
Funciona sem internet e guarda o progresso no próprio aparelho.

## O que tem

- **Hoy**: contagem regressiva para a viagem, a sessão do dia (frases novas + revisões), sequência de dias e a missão da semana.
- **Plan**: 14 semanas temáticas (cafeteria, restaurante, transporte, hotel, direções, compras, saúde…), cada uma com explicação de gramática/pronúncia, um diálogo com áudio e uma missão prática.
- **Practicar**: repetição espaçada, quiz, escuta, escrita e falsos amigos.
- **Frases**: guia de consulta com busca, para usar durante a viagem.

O áudio usa a voz de espanhol do próprio celular. No Android, se a voz soar estranha, instale "Espanhol (Espanha)" em
Configurações › Sistema › Idioma › Conversão de texto em voz. No iPhone, em Ajustes › Acessibilidade › Conteúdo Falado › Vozes.

## Como instalar no celular

O app é a pasta `espanhol/` (um `index.html` + ícones + `sw.js` para funcionar offline). Precisa estar num endereço `https`:

1. Ative o GitHub Pages do repositório (Settings › Pages › Deploy from branch) **ou** suba a pasta em qualquer hospedagem estática (Netlify Drop, Cloudflare Pages).
2. Abra o endereço `.../espanhol/` no celular.
3. Android (Chrome): menu ⋮ › **Adicionar à tela inicial**. iPhone (Safari): botão compartilhar › **Adicionar à Tela de Início**.

Depois disso ele abre como um app e funciona offline.

Em Ajustes, dá para mudar a data da viagem, o número de frases novas por dia, a velocidade da voz e copiar/restaurar um backup do progresso.
