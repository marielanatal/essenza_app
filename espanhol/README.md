# Rumbo a España

App de celular para aprender o espanhol da Espanha em 14 semanas, feito para quem fala português.
Funciona sem internet e guarda o progresso no próprio aparelho.

## O que tem

- **Hoy**: a rotina da noite em 3 passos, um de cada vez: Sessão (frases novas + revisões, ≈ 5 min), Conversa falada (≈ 3 min) e Eco (≈ 2 min). Quando os três estão feitos, a tela diz isso e oferece extras para quem quiser continuar: cada semana tem 10 **frases extra** (em `extras.js`) que só entram quando você pede mais, uma **segunda conversa** em outra situação, e o quiz inclui perguntas do tipo "alguém diz… o que você responde?" montadas a partir dos diálogos. Progresso, nível e conquistas ficam num painel à parte. Na primeira abertura, a Lola explica o método.
- **Plan**: 14 semanas temáticas (cafeteria, restaurante, transporte, hotel, direções, compras, saúde…), cada uma com explicação de gramática/pronúncia, um diálogo com áudio e uma missão prática.
- **Practicar**: foco em falar. A sessão diária pede que você diga cada frase em voz alta antes de ouvir a resposta; a **Conversa** faz um lado do diálogo e você responde falando; o **Eco** treina repetir junto (devagar e no ritmo normal); **Sons difíceis** cobre os sons que denunciam o sotaque brasileiro. Há também quiz, escuta, falsos amigos e escrita.
- **Pronúncia**: o app fala uma palavra ou frase, você repete no microfone e ele mostra palavra por palavra o que entendeu (verde) e o que não (vermelho), com "De novo". Começa por palavras dos sons difíceis e passa a frases. Quando o microfone está disponível, é o 3º passo da rotina diária (no lugar do Eco).
- **Microfone**: quando o app é aberto pelo endereço próprio (instalado na tela inicial, em Chrome ou Safari), aparece o botão **Falar**, que escuta você e diz se entendeu a frase. Dentro do Claude o microfone não fica disponível, então você fala em voz alta e confere ouvindo.
- **Frases**: guia de consulta com busca, para usar durante a viagem.
- **Ilustrações**: um desenho flat por semana (em `illus.js`), cartões-postais de Madrid, Barcelona e Sevilla e cenas de conclusão, todos em SVG que acompanham o tema claro/escuro.
- **Para ver e ouvir**: cada missão semanal traz links de vídeo, podcast e sites (buscas no YouTube e sites oficiais: Hoy Hablamos, Notes in Spanish, Dreaming Spanish, RTVE Play, AEMET, Aena…), e a aba Plan termina com uma lista fixa de canais e podcasts de espanhol da Espanha.
- **Lola**: uma amiga de Madri que te recebe na tela inicial com uma mensagem diferente a cada dia (toque no balão para ouvir), comemora cada sessão com elogios em espanhol de verdade e confete, e dá uma curiosidade sobre a Espanha por dia.
- **Dicionário por toque**: toda palavra em espanhol no app é clicável e mostra a tradução (mais de 2.500 entradas, com verbos conjugados apontando para o infinitivo). Funciona offline. Se a palavra não estiver no dicionário, há um atalho para o WordReference e, na versão do Claude, a Lola responde.
- **Viaje**: planejador de viagem. Tem busca no topo (lugar, passeio, transporte; ignora acentos) que varre imperdíveis, bate-voltas, curiosidades e transporte de todas as cidades. Escolha onde chega e de onde volta, a ordem das cidades (setas) e o dia da chegada; o app calcula as datas de cada cidade e dos trechos. Marque destinos (Madrid, Barcelona e Sevilla por enquanto; conteúdo em `viaje.js`), dias e interesses; o app diz quantos dias cada cidade vale, lista curiosidades, imperdíveis com link oficial de compra e selo de antecedência (reserve com semanas / compre na véspera / na hora / grátis), bate-voltas, transporte (aeroporto, cidade e entre cidades) e monta um roteiro dia a dia.
- **Pasajeros**: competição com quem está em outro celular, sem servidor: cada pessoa toca em **Compartilhar meu placar** (gera um link), a outra abre o link e o ranking da semana atualiza. Troféu para quem lidera no domingo. Também dá para ter mais de um perfil no mesmo aparelho (e o **Duelo**, quiz a dois passando o celular). Toque no seu nome, no topo, para abrir.
- **Kit de sobrevivência**: as 24 frases que resolvem aeroporto, estação, café, comida e emergências, fixas no guia.
- **Níveis e conquistas**: XP por frases, falas em voz alta e missões; 7 níveis (de *Turista* a *¡Como en casa!*) e 9 conquistas. Sons e vibração podem ser desligados em Ajustes.

O áudio usa a voz de espanhol do próprio celular. No Android, se a voz soar estranha, instale "Espanhol (Espanha)" em
Configurações › Sistema › Idioma › Conversão de texto em voz. No iPhone, em Ajustes › Acessibilidade › Conteúdo Falado › Vozes.

## Como instalar no celular

O app é a pasta `espanhol/` (um `index.html` + ícones + `sw.js` para funcionar offline). Precisa estar num endereço `https`:

1. Ative o GitHub Pages do repositório (Settings › Pages › Deploy from branch) **ou** suba a pasta em qualquer hospedagem estática (Netlify Drop, Cloudflare Pages).
2. Abra o endereço `.../espanhol/` no celular.
3. Android (Chrome): menu ⋮ › **Adicionar à tela inicial**. iPhone (Safari): botão compartilhar › **Adicionar à Tela de Início**.

Depois disso ele abre como um app e funciona offline.

Em Ajustes, dá para mudar a data da viagem, o número de frases novas por dia e a velocidade da voz.

**Backup.** O progresso fica salvo no aparelho. No iPhone, cada app adicionado à Tela de Início tem um armazenamento próprio: apagar o app apaga o progresso. Por isso há **Salvar backup agora** (Ajustes e, uma vez por semana, na tela inicial): gera um link que você guarda nas Notas ou manda para você mesma; abrir o link em qualquer aparelho restaura tudo. O app lembra disso toda semana.
