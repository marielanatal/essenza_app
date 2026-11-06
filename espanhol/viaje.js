/* ============================================================
   VIAJE — destinos, imperdíveis, bate-volta, transporte e roteiro
   book: "g" grátis · "h" na hora · "d" compre online na véspera · "s" reserve com semanas
   slot: "m" manhã · "t" tarde · "n" noite
   tags: arte, historia, comida, noite, compras, natureza, futebol
   Preços são aproximados (2025) e mudam: confira no link.
   ============================================================ */
const INTERESES = [["arte","Arte e museus"],["historia","História e monumentos"],["comida","Comida e tapas"],["noite","Flamenco e noite"],["compras","Compras"],["natureza","Natureza e vistas"],["futebol","Futebol"]];
const BOOK = {g:["Grátis","g"], h:["Na hora","h"], d:["Compre online na véspera","d"], s:["Reserve com semanas de antecedência","s"]};

const DEST = {
madrid: {
  name:"Madrid", emoji:"👑", region:"Centro · capital",
  stay:{min:2, ideal:3, text:"Vale 3 dias: dois para a cidade e um para um bate-volta (Toledo ou Segovia). Com 2 dias dá para ver o essencial. É a melhor base da Espanha: tudo sai de Madri de trem rápido."},
  curios:[
    "É a capital mais alta da Europa (650 m). Em fevereiro faz de 3 a 12 °C, com sol quase sempre.",
    "A Puerta del Sol tem o <b>Kilómetro Cero</b>: a placa de onde partem todas as estradas da Espanha. Todo mundo tira foto pisando nela.",
    "Em bares de La Latina, Lavapiés e Malasaña a tapa costuma vir <b>de graça</b> com a bebida. Peça uma caña e espere a surpresa.",
    "A chocolateria <b>San Ginés</b> (1894) fica aberta 24 horas. Churros com chocolate às 3 da manhã é tradição depois da balada.",
    "O Retiro era o jardim privado dos reis. Hoje é Patrimônio da Humanidade e tem um palácio de vidro, o <b>Palacio de Cristal</b>.",
    "Domingo de manhã é dia de <b>El Rastro</b>, a feira de rua mais antiga de Madri, e depois tapas em La Latina."
  ],
  must:[
    {t:"Museo del Prado", area:"Paseo del Arte", slot:"m", tags:["arte","historia"], pay:1, book:"d", price:"~15 €", link:"https://www.museodelprado.es", tip:"Grátis de seg a sáb das 18h às 20h e dom das 17h às 19h, mas a fila é grande. Comprando online você escolhe a hora e entra direto. Velázquez, Goya e El Bosco."},
    {t:"Museo Reina Sofía", area:"Paseo del Arte", slot:"t", tags:["arte"], pay:1, book:"d", price:"~12 €", link:"https://www.museoreinasofia.es", tip:"Casa do <i>Guernica</i> de Picasso. Grátis seg e qua a sáb das 19h às 21h e dom das 12h30 às 14h30."},
    {t:"Palacio Real", area:"Madrid de los Austrias", slot:"m", tags:["historia"], pay:1, book:"d", price:"~14 €", link:"https://www.patrimonionacional.es", tip:"Brasileiros entram <b>grátis</b> de seg a qui nas últimas 2 horas (no inverno, 16h–18h) mostrando o passaporte: é cortesia a cidadãos ibero-americanos. Confira no site antes."},
    {t:"Plaza Mayor e Mercado de San Miguel", area:"Madrid de los Austrias", slot:"t", tags:["comida","historia"], pay:0, book:"g", link:"https://mercadodesanmiguel.es", tip:"O mercado é bonito mas caro; coma uma ou duas tapas e siga para La Latina (Cava Baja) para o jantar de verdade."},
    {t:"Parque del Retiro e Palacio de Cristal", area:"Retiro", slot:"t", tags:["natureza"], pay:0, book:"g", link:"https://www.esmadrid.com", tip:"Alugue um barquinho no lago (barato) e ache o Ángel Caído, a única estátua do diabo em praça pública da Europa."},
    {t:"Templo de Debod ao pôr do sol", area:"Plaza de España", slot:"t", tags:["natureza","historia"], pay:0, book:"g", link:"https://www.esmadrid.com", tip:"Templo egípcio de verdade, presente do Egito em 1968. Vá 40 minutos antes do pôr do sol."},
    {t:"Tapas em La Latina", area:"La Latina", slot:"n", tags:["comida","noite"], pay:1, book:"h", price:"~25 € por pessoa", link:"https://www.esmadrid.com", tip:"Calle Cava Baja: pule de bar em bar, uma tapa e uma bebida em cada. Peça <i>huevos rotos</i>, <i>croquetas</i> e <i>bocadillo de calamares</i>."},
    {t:"Gran Vía, Sol e Chueca a pé", area:"Centro", slot:"t", tags:["compras","noite"], pay:0, book:"g", link:"https://www.esmadrid.com", tip:"Gran Vía tem as lojas grandes e os teatros de musical. Suba no terraço do Círculo de Bellas Artes (~5 €) para a melhor vista."},
    {t:"Tour do Estádio Bernabéu", area:"Chamartín", slot:"m", tags:["futebol"], pay:1, book:"d", price:"~30 €", link:"https://www.realmadrid.com", tip:"Estádio recém-reformado, com teto retrátil. Compre online com data e hora; dias de jogo o tour fecha."},
    {t:"Museo Sorolla", area:"Chamberí", slot:"m", tags:["arte"], pay:1, book:"h", price:"~3 €", link:"https://www.cultura.gob.es/msorolla", tip:"A casa-jardim do pintor da luz. Pequeno, lindo e quase sem turista."},
    {t:"Museo Thyssen", area:"Paseo del Arte", slot:"m", tags:["arte"], pay:1, book:"d", price:"~14 €", link:"https://www.museothyssen.org", tip:"Fecha o triângulo da arte. Grátis às segundas das 12h às 16h."},
    {t:"El Rastro (domingo)", area:"La Latina", slot:"m", tags:["compras"], pay:0, book:"g", link:"https://www.esmadrid.com", tip:"Só domingo, das 9h às 15h. Cuidado com a carteira e almoce tapas em La Latina depois."},
    {t:"Flamenco no Corral de la Morería", area:"Madrid de los Austrias", slot:"n", tags:["noite"], pay:1, book:"s", price:"~50 €", link:"https://www.corraldelamoreria.com", tip:"O tablao mais famoso de Madri. Reserve pelo site com 2 ou 3 semanas de antecedência."},
    {t:"Chocolate con churros em San Ginés", area:"Sol", slot:"n", tags:["comida"], pay:1, book:"h", price:"~5 €", link:"https://chocolateriasangines.com", tip:"Peça <i>una de churros con chocolate</i>. Aberto 24 h."}
  ],
  daytrips:[
    {t:"Toledo", how:"Trem Avant de Atocha, 33 min", price:"~14 € cada trecho", book:"s", link:"https://www.renfe.com", tags:["historia"], tip:"A cidade das três culturas: catedral, sinagogas e mesquita a 10 minutos a pé. Compre o trem na Renfe com antecedência: nos fins de semana esgota. Vá no primeiro trem da manhã e volte ao anoitecer."},
    {t:"Segovia", how:"AVE/Avant de Chamartín, 27 min + ônibus 11", price:"~14 € cada trecho", book:"s", link:"https://www.renfe.com", tags:["historia","natureza","comida"], tip:"Aqueduto romano intacto, o Alcázar que inspirou o castelo da Disney e o <i>cochinillo</i> (leitão) do Mesón de Cándido. Estação fica fora da cidade: ônibus 11 até o aqueduto."},
    {t:"El Escorial", how:"Cercanías C3 ou C8, 1 h", price:"~4 € cada trecho", book:"h", link:"https://www.patrimonionacional.es", tags:["historia"], tip:"Mosteiro-palácio gigante de Felipe II. Também grátis para ibero-americanos nas últimas horas de seg a qui."},
    {t:"Ávila", how:"Trem de Chamartín, 1 h 30", price:"~12 € cada trecho", book:"d", link:"https://www.renfe.com", tags:["historia"], tip:"Muralha medieval completa e caminhável. Dá para combinar com Segovia num dia longo, mas é cansativo."}
  ],
  transit:[
    {t:"Aeroporto → centro", o:[
      ["Metro linha 8 + baldeação","~5 € (inclui suplemento de 3 €)","https://www.metromadrid.es","Rápido, mas com malas e baldeação é chato."],
      ["Cercanías C1/C10 do Terminal 4","~2,60 €","https://www.renfe.com","Vai direto a Atocha e Chamartín. Grátis se você tiver um bilhete de AVE do mesmo dia."],
      ["Ônibus Exprés Aeropuerto (EMT)","5 €","https://www.emtmadrid.es","24 h, amarelo, para em Cibeles e Atocha. Melhor opção com malas."],
      ["Táxi","33 € tarifa fixa","","Qualquer táxi oficial (branco, faixa vermelha). Não aceite outro valor."]]},
    {t:"Dentro da cidade", o:[
      ["Cartão Multi do metrô","2,50 € o cartão + 10 viagens ~12,20 €","https://www.metromadrid.es","Compre na máquina de qualquer estação. Serve para duas pessoas juntas: passa um, passa o outro."],
      ["A pé","grátis","","O centro histórico se anda em 20 minutos. Sol, Plaza Mayor, Palácio e La Latina estão colados."]]},
    {t:"Para outras cidades", o:[
      ["AVE/Iryo/Ouigo → Barcelona (2 h 30)","de ~20 € (Ouigo) a ~90 €","https://www.ouigo.com","Compre 1 a 2 meses antes. Sai de Atocha, chega em Sants. Iryo é o mais confortável; Ouigo o mais barato."],
      ["AVE → Sevilla (2 h 30)","de ~25 € a ~80 €","https://www.renfe.com","Sai de Atocha, chega em Santa Justa. Iryo também faz a rota."],
      ["Comparar todos","","https://iryo.eu","Renfe, Iryo e Ouigo competem nas mesmas rotas. Vale olhar os três."]]}
  ],
  days:[
    [["m","Palacio Real"],["t","Plaza Mayor e Mercado de San Miguel"],["t","Templo de Debod ao pôr do sol"],["n","Tapas em La Latina"]],
    [["m","Museo del Prado"],["t","Parque del Retiro e Palacio de Cristal"],["t","Gran Vía, Sol e Chueca a pé"],["n","Chocolate con churros em San Ginés"]],
    [["m","Museo Reina Sofía|Tour do Estádio Bernabéu|Museo Sorolla|El Rastro (domingo)"],["t","Museo Thyssen|Gran Vía, Sol e Chueca a pé"],["n","Flamenco no Corral de la Morería|Tapas em La Latina"]]
  ]
},

barcelona: {
  name:"Barcelona", emoji:"🏖️", region:"Catalunha · mar", cityMax:3,
  stay:{min:2, ideal:4, text:"Vale 3 ou 4 dias: Gaudí, bairro gótico e praia pedem calma, e Montserrat é um bate-volta imperdível. Com 2 dias você vê só o essencial e corre."},
  curios:[
    "A <b>Sagrada Família</b> está em obras desde 1882. A torre de Jesus, de 172 m, faz dela a igreja mais alta do mundo. Quando ficar pronta, vai ter levado mais tempo que as pirâmides.",
    "Aqui o <b>catalão</b> é cooficial: <i>bon dia</i>, <i>gràcies</i>, <i>adéu</i>. Todo mundo fala espanhol, mas um <i>gràcies</i> arranca sorrisos.",
    "As esquinas cortadas do Eixample (<i>chaflanes</i>) foram desenhadas em 1860 para os bondes virarem e para entrar mais luz nas ruas.",
    "A praia da Barceloneta é <b>artificial</b>: foi criada para as Olimpíadas de 1992. Antes, a cidade vivia de costas para o mar.",
    "<i>Pa amb tomàquet</i>: pão esfregado com tomate, azeite e sal. Pedem em todo bar e acompanha qualquer coisa.",
    "Gràcia era uma vila independente até 1897. Por isso tem praças de aldeia e ruas estreitas no meio da cidade."
  ],
  must:[
    {t:"Sagrada Família", area:"Eixample", slot:"m", tags:["arte","historia"], pay:1, book:"s", price:"~26 € (torres ~36 €)", link:"https://sagradafamilia.org", tip:"Compre no site oficial com 2 a 4 semanas de antecedência: os horários da manhã somem. Entre às 9h, quando a luz atravessa os vitrais do lado leste."},
    {t:"Park Güell", area:"Gràcia", slot:"m", tags:["arte","natureza"], pay:1, book:"s", price:"~10–18 €", link:"https://parkguell.barcelona", tip:"Entrada com horário marcado; compre online. A vista do banco de mosaico é a foto clássica. Suba de ônibus 24 ou metrô Lesseps + escadas rolantes."},
    {t:"Casa Batlló", area:"Passeig de Gràcia", slot:"t", tags:["arte"], pay:1, book:"d", price:"~29–39 €", link:"https://www.casabatllo.es", tip:"A casa-dragão de Gaudí. Cara, mas a experiência imersiva vale. Se for escolher uma só casa de Gaudí, é esta."},
    {t:"La Pedrera (Casa Milà)", area:"Passeig de Gràcia", slot:"t", tags:["arte"], pay:1, book:"d", price:"~28 €", link:"https://www.lapedrera.com", tip:"O terraço de chaminés-guerreiros é único. Fica a 5 minutos da Casa Batlló."},
    {t:"Barri Gòtic e Catedral", area:"Ciutat Vella", slot:"m", tags:["historia"], pay:0, book:"g", link:"https://www.barcelonaturisme.com", tip:"Perca-se pelas ruelas: Plaça del Rei, Plaça Sant Felip Neri (marcas de bombas da Guerra Civil), ponte do Bisbe. A catedral tem gansos no claustro."},
    {t:"Mercado de La Boqueria", area:"La Rambla", slot:"m", tags:["comida"], pay:0, book:"g", link:"https://www.boqueria.barcelona", tip:"Vá antes das 11h. Suco de fruta nas bancas da entrada é caro; vá mais para o fundo. Fecha domingo."},
    {t:"El Born e Museu Picasso", area:"El Born", slot:"t", tags:["arte","compras"], pay:1, book:"d", price:"~14 €", link:"https://museupicassobcn.cat", tip:"Grátis quinta das 16h às 19h e no primeiro domingo do mês (reserve online mesmo assim). El Born tem as melhores lojinhas e bares da cidade."},
    {t:"Barceloneta e orla", area:"Praia", slot:"t", tags:["natureza","comida"], pay:0, book:"g", link:"https://www.barcelonaturisme.com", tip:"Em fevereiro não é praia de mar, mas o passeio ao pôr do sol com uma <i>bomba</i> (croquete de batata) no bar La Cova Fumada é programa."},
    {t:"Montjuïc: teleférico, MNAC e vista", area:"Montjuïc", slot:"t", tags:["natureza","arte"], pay:1, book:"h", price:"teleférico ~15 €", link:"https://www.telefericdemontjuic.cat", tip:"Suba de funicular (incluído no metrô) + teleférico até o castelo. O MNAC tem o melhor românico do mundo e vista grátis da escadaria."},
    {t:"Bunkers del Carmel", area:"El Carmel", slot:"t", tags:["natureza"], pay:0, book:"g", link:"https://www.barcelonaturisme.com", tip:"Melhor vista 360° da cidade, grátis. Vá no fim da tarde. Confira o horário: às vezes fecham à noite."},
    {t:"Spotify Camp Nou: tour e museu", area:"Les Corts", slot:"m", tags:["futebol"], pay:1, book:"d", price:"~30 €", link:"https://www.fcbarcelona.com", tip:"Estádio reformado. Compre online; o tour muda em dia de jogo. Se der, veja um jogo: ingressos no site oficial."},
    {t:"Jantar em Gràcia", area:"Gràcia", slot:"n", tags:["comida","noite"], pay:1, book:"h", price:"~25 € por pessoa", link:"https://www.barcelonaturisme.com", tip:"Plaça del Sol e Plaça de la Vila: bares de bairro, menos turista, preço justo. Peça <i>pa amb tomàquet</i> e <i>bombas</i>."},
    {t:"Flamenco no Tablao Cordobés", area:"La Rambla", slot:"n", tags:["noite"], pay:1, book:"s", price:"~50 €", link:"https://www.tablaocordobes.es", tip:"Barcelona não é a terra do flamenco, mas o Cordobés é sério. Se for a Sevilla, guarde o flamenco para lá."},
    {t:"Palau de la Música Catalana", area:"Sant Pere", slot:"m", tags:["arte","historia"], pay:1, book:"d", price:"visita ~20 €", link:"https://www.palaumusica.cat", tip:"O teatro modernista mais bonito do mundo. Melhor ainda: compre um concerto à noite em vez da visita."}
  ],
  daytrips:[
    {t:"Montserrat", how:"Trem FGC R5 de Plaça Espanya (1 h) + cremallera ou teleférico", price:"combinado ~40 €", book:"d", link:"https://www.montserratvisita.com", tags:["natureza","historia"], tip:"Montanha serrilhada com mosteiro e a Virgem Negra. Compre o bilhete combinado <i>Trans Montserrat</i> na estação. Vá cedo para ouvir o coral de meninos (13h, dias úteis). Trilha fácil até Sant Joan."},
    {t:"Girona", how:"AVE/Avant de Sants, 38 min", price:"~16 € cada trecho", book:"d", link:"https://www.renfe.com", tags:["historia","comida"], tip:"Cidade medieval com muralha caminhável, bairro judeu e casas coloridas no rio Onyar. Cenário de Game of Thrones. Compre o trem antes para pegar o preço bom."},
    {t:"Sitges", how:"Rodalies R2 Sud de Sants ou Passeig de Gràcia, 40 min", price:"~4,50 € cada trecho", book:"h", link:"https://www.sitgesanytime.com", tags:["natureza","noite"], tip:"Vila de praia charmosa. Em fevereiro acontece o <b>Carnaval de Sitges</b>, um dos mais famosos da Espanha. Confira as datas."},
    {t:"Figueres (Museu Dalí)", how:"AVE de Sants, 55 min", price:"~20 € cada trecho", book:"d", link:"https://www.salvador-dali.org", tags:["arte"], tip:"O museu-teatro criado pelo próprio Dalí. Reserve a entrada online com hora. Dá para combinar com Girona no mesmo dia."},
    {t:"Tarragona", how:"Trem de Sants, 1 h", price:"~9 € cada trecho", book:"h", link:"https://www.tarragonaturisme.cat", tags:["historia"], tip:"Anfiteatro romano à beira-mar e cidade velha tranquila. Bom para um dia leve."}
  ],
  transit:[
    {t:"Aeroporto → centro", o:[
      ["Aerobús","~7,50 €","https://www.aerobusbarcelona.es","A cada 5 min, 35 min até Plaça Catalunya. Mais simples com malas."],
      ["Metro L9 Sud","~5,50 € (bilhete especial)","https://www.tmb.cat","Não aceita o T-casual. Precisa de baldeação para o centro."],
      ["Rodalies R2 Nord (do T2)","~4,50 €","https://www.renfe.com","Vai a Sants e Passeig de Gràcia em 25 min. Do T1 há ônibus grátis até o T2."],
      ["Táxi","~35–40 €","","Preto e amarelo. Confirme que o taxímetro está ligado."]]},
    {t:"Dentro da cidade", o:[
      ["T-casual (10 viagens)","~12 €","https://www.tmb.cat","Individual, não divide. Vale para metrô, ônibus, Rodalies zona 1 e funicular de Montjuïc."],
      ["Hola Barcelona (ilimitado)","2 dias ~17 €, 3 dias ~25 €","https://www.holabarcelona.com","Inclui o trem do aeroporto (R2 e L9). Compensa se você for andar muito de metrô."]]},
    {t:"Para outras cidades", o:[
      ["AVE/Iryo/Ouigo → Madrid (2 h 30)","de ~20 € a ~90 €","https://www.renfe.com","Compre 1 a 2 meses antes. Sai de Sants."],
      ["Para Sevilla: trem (5 h 30) ou voo (1 h 45)","trem ~60–120 €, voo ~40–100 €","https://www.vueling.com","O avião ganha. Vueling tem muitos voos diretos. Trem só se quiser ver a paisagem."]]}
  ],
  days:[
    [["m","Sagrada Família"],["t","Casa Batlló|La Pedrera (Casa Milà)"],["t","Bunkers del Carmel"],["n","Jantar em Gràcia"]],
    [["m","Barri Gòtic e Catedral"],["m","Mercado de La Boqueria"],["t","El Born e Museu Picasso"],["t","Barceloneta e orla"],["n","Palau de la Música Catalana|Flamenco no Tablao Cordobés"]],
    [["m","Park Güell"],["t","Montjuïc: teleférico, MNAC e vista"],["n","Jantar em Gràcia"]],
    [["m","Spotify Camp Nou: tour e museu|La Pedrera (Casa Milà)"],["t","El Born e Museu Picasso|Barceloneta e orla"],["n","Flamenco no Tablao Cordobés|Jantar em Gràcia"]]
  ]
},

sevilla: {
  name:"Sevilla", emoji:"💃", region:"Andaluzia · sul",
  stay:{min:2, ideal:3, text:"Vale 2 dias cheios na cidade e um terceiro para Córdoba, que fica a 45 minutos de trem. É a cidade mais 'Espanha de cartão-postal' da viagem: laranjeiras, flamenco e tapas."},
  curios:[
    "A <b>Plaza de España</b> foi cenário de Star Wars (Naboo, no Episódio II) e de Lawrence da Arábia.",
    "A catedral é a maior igreja gótica do mundo e guarda o túmulo de <b>Cristóvão Colombo</b>, carregado por quatro reis de pedra.",
    "A <b>Giralda</b>, torre da catedral, era o minarete da mesquita. Sobe-se por rampas, não escadas: o muezim subia a cavalo.",
    "As ruas têm 40 mil laranjeiras. As laranjas são amargas: ninguém come, viram geleia na Inglaterra e perfume.",
    "Dizem que a <b>tapa</b> nasceu aqui, quando o rei Alfonso XIII recebeu o vinho coberto com uma fatia de presunto para proteger da poeira.",
    "Sevilla é chamada de <i>la sartén de España</i> (a frigideira) pelo calor do verão. Em fevereiro são uns 17 °C: perfeito."
  ],
  must:[
    {t:"Real Alcázar", area:"Santa Cruz", slot:"m", tags:["historia","arte","natureza"], pay:1, book:"s", price:"~15 €", link:"https://www.alcazarsevilla.org", tip:"Palácio mudéjar com jardins de sonho (Dorne, em Game of Thrones). Os ingressos saem com semanas de antecedência e <b>esgotam</b>: compre no site oficial assim que tiver a data. Grátis às segundas à tarde, também com reserva."},
    {t:"Catedral e Giralda", area:"Santa Cruz", slot:"t", tags:["historia"], pay:1, book:"d", price:"~13 €", link:"https://www.catedraldesevilla.es", tip:"Compre online para pular a fila. Suba a Giralda no fim da tarde para a luz dourada. Grátis segunda à tarde com reserva."},
    {t:"Plaza de España e Parque de María Luisa", area:"Sur", slot:"t", tags:["historia","natureza"], pay:0, book:"g", link:"https://www.visitasevilla.es", tip:"Cada província da Espanha tem um banco de azulejos. Alugue um barquinho no canal (~6 €) e caminhe pelo parque ao lado."},
    {t:"Barrio de Santa Cruz a pé", area:"Santa Cruz", slot:"m", tags:["historia"], pay:0, book:"g", link:"https://www.visitasevilla.es", tip:"O antigo bairro judeu: ruelas, pátios floridos e a Calle Agua. Vá cedo, antes dos grupos."},
    {t:"Triana: mercado e cerâmica", area:"Triana", slot:"m", tags:["comida","compras"], pay:0, book:"g", link:"https://www.visitasevilla.es", tip:"Atravesse a ponte de Isabel II. Mercado de Triana para tapas de manhã, Calle San Jorge para azulejos e cerâmica. Berço do flamenco."},
    {t:"Setas de Sevilla (mirante)", area:"Encarnación", slot:"t", tags:["natureza","arte"], pay:1, book:"h", price:"~15 €", link:"https://setasdesevilla.com", tip:"A maior estrutura de madeira do mundo. Suba ao pôr do sol; o ingresso inclui uma bebida."},
    {t:"Flamenco na Casa de la Memoria", area:"Centro", slot:"n", tags:["noite"], pay:1, book:"s", price:"~22 €", link:"https://www.casadelamemoria.es", tip:"Íntimo, sem jantar, flamenco puro em um pátio. Reserve online com 1 a 2 semanas: lota todo dia. Alternativa: Museo del Baile Flamenco."},
    {t:"Tapas em Alameda e El Arenal", area:"Centro", slot:"n", tags:["comida","noite"], pay:1, book:"h", price:"~20 € por pessoa", link:"https://www.visitasevilla.es", tip:"Peça <i>espinacas con garbanzos</i>, <i>carrillada</i> (bochecha de porco), <i>salmorejo</i> e <i>pescaíto frito</i>. Bodeguita Romero e El Rinconcillo (1670, o bar mais antigo)."},
    {t:"Torre del Oro e passeio pelo Guadalquivir", area:"El Arenal", slot:"t", tags:["natureza","historia"], pay:1, book:"h", price:"torre ~3 € · barco ~20 €", link:"https://www.visitasevilla.es", tip:"Caminhe pela margem até a ponte de Triana. O passeio de barco de 1 hora vale ao entardecer."},
    {t:"Casa de Pilatos", area:"San Bartolomé", slot:"t", tags:["arte","historia"], pay:1, book:"h", price:"~12 €", link:"https://www.fundacionmedinaceli.org", tip:"Palácio renascentista com azulejos deslumbrantes e quase ninguém. Se o Alcázar esgotou, é o plano B perfeito."},
    {t:"Hospital de los Venerables", area:"Santa Cruz", slot:"m", tags:["arte"], pay:1, book:"h", price:"~10 €", link:"https://www.visitasevilla.es", tip:"Pátio barroco escondido e obras de Velázquez e Murillo. Pequeno e silencioso."},
    {t:"Metropol e Calle Sierpes (compras)", area:"Centro", slot:"t", tags:["compras"], pay:0, book:"g", link:"https://www.visitasevilla.es", tip:"Sierpes e Tetuán concentram as lojas. Em fevereiro ainda tem <i>rebajas</i>. Leque e xale de manila são lembranças locais."}
  ],
  daytrips:[
    {t:"Córdoba", how:"AVE/Avant de Santa Justa, 45 min", price:"~15–30 € cada trecho", book:"s", link:"https://www.renfe.com", tags:["historia","arte"], tip:"A <b>Mezquita-Catedral</b> é das coisas mais impressionantes da Espanha (~13 €; grátis de seg a sáb das 8h30 às 9h30). Depois, judiaria, pátios e ponte romana. Compre o trem com antecedência. Site da Mezquita: mezquita-catedraldecordoba.es"},
    {t:"Cádiz", how:"Trem de Santa Justa, 1 h 40", price:"~17 € cada trecho", book:"d", link:"https://www.renfe.com", tags:["natureza","noite","comida"], tip:"A cidade mais antiga do Ocidente, com praia urbana e <i>pescaíto frito</i>. Em fevereiro tem o <b>Carnaval de Cádiz</b>, o mais famoso da Espanha (geralmente na primeira quinzena; confira as datas)."},
    {t:"Jerez de la Frontera", how:"Trem de Santa Justa, 1 h", price:"~13 € cada trecho", book:"d", link:"https://www.renfe.com", tags:["comida","noite"], tip:"Terra do vinho xerez e dos cavalos andaluzes. Visite uma bodega (Tío Pepe/González Byass, reserve online) e, se for quinta, o show da Real Escuela Ecuestre."},
    {t:"Granada e Alhambra (pernoite)", how:"Trem de Santa Justa, 2 h 30", price:"~30 € cada trecho", book:"s", link:"https://www.alhambra-patronato.es", tags:["historia","arte"], tip:"Não cabe num bate-volta: durma uma noite. A <b>Alhambra</b> esgota com <b>meses</b> de antecedência: compre no site oficial (tickets.alhambra-patronato.es) no dia em que tiver a data. Albaicín ao pôr do sol é inesquecível."},
    {t:"Itálica (ruínas romanas)", how:"Ônibus M-172 da Plaza de Armas, 30 min", price:"~2 €", book:"h", link:"https://www.visitasevilla.es", tags:["historia"], tip:"Anfiteatro romano gigante (o Dragonpit de Game of Thrones) a meia hora. Meio dia basta."}
  ],
  transit:[
    {t:"Aeroporto → centro", o:[
      ["Ônibus EA (Especial Aeropuerto)","~4 €","https://www.tussam.es","35 min até Santa Justa e o centro. A cada 20 min."],
      ["Táxi","~25 € tarifa fixa","","Tarifa fixa do aeroporto ao centro. Confirme o valor antes."]]},
    {t:"Dentro da cidade", o:[
      ["A pé","grátis","","Sevilla é plana e compacta: tudo do centro se anda. Boas sapatilhas."],
      ["Bonde (MetroCentro) e ônibus Tussam","~1,40 €","https://www.tussam.es","Só se cansar. O cartão recarregável vale para dois."],
      ["Sevici (bicicleta pública)","semanal ~14 €","https://www.sevici.es","Ciclovias boas e cidade plana. Ótimo para ir à Plaza de España e Triana."]]},
    {t:"Para outras cidades", o:[
      ["AVE/Iryo → Madrid (2 h 30)","de ~25 € a ~80 €","https://www.renfe.com","Sai de Santa Justa, chega em Atocha."],
      ["Para Barcelona: voo (1 h 45) ou trem (5 h 30)","voo ~40–100 €","https://www.vueling.com","Avião ganha de longe. Vueling e Ryanair voam direto."]]}
  ],
  days:[
    [["m","Real Alcázar"],["t","Catedral e Giralda"],["t","Setas de Sevilla (mirante)"],["n","Tapas em Alameda e El Arenal"]],
    [["m","Barrio de Santa Cruz a pé"],["m","Triana: mercado e cerâmica"],["t","Plaza de España e Parque de María Luisa"],["t","Torre del Oro e passeio pelo Guadalquivir"],["n","Flamenco na Casa de la Memoria"]],
    [["m","Hospital de los Venerables|Casa de Pilatos"],["t","Metropol e Calle Sierpes (compras)|Casa de Pilatos"],["n","Tapas em Alameda e El Arenal"]]
  ]
}
};

/* Ligação entre cidades (para o roteiro multi-destino) */
const LEGS = {
 "madrid-barcelona":{how:"Trem de alta velocidade Atocha → Sants, 2 h 30 a 3 h", links:[["Renfe","https://www.renfe.com"],["Iryo","https://iryo.eu"],["Ouigo","https://www.ouigo.com/es"]], tip:"Compre 1 a 2 meses antes: a diferença é de 20 € para 90 €."},
 "madrid-sevilla":{how:"Trem de alta velocidade Atocha → Santa Justa, 2 h 30", links:[["Renfe","https://www.renfe.com"],["Iryo","https://iryo.eu"]], tip:"Sente do lado direito indo para o sul para ver os campos de oliveira."},
 "barcelona-sevilla":{how:"Voo de 1 h 45 (o trem leva 5 h 30)", links:[["Vueling","https://www.vueling.com"],["Renfe","https://www.renfe.com"]], tip:"Com 2 malas, confira a franquia de bagagem da companhia low cost antes de comprar."}
};
function legFor(a,b){ return LEGS[a+"-"+b] || LEGS[b+"-"+a]; }

/* Monta o roteiro de um destino, dado o número de dias e os interesses */
function buildPlan(id, days, interests, ritmo){
  const d = DEST[id]; if(!d) return [];
  const score = x => (x.tags||[]).reduce((s,t)=>s+(interests.includes(t)?1:0),0);
  const used = new Set();
  const pick = alts => { const names=alts.split("|"); let best=null, bs=-1; names.forEach(n=>{ const m=d.must.find(x=>x.t===n); if(!m||used.has(n)) return; const sc=score(m)*10 + (m.book==="s"?1:0); if(sc>bs){ bs=sc; best=m; } }); if(best) used.add(best.t); return best; };
  const out=[];
  const cityDays = Math.min(days, d.cityMax||d.days.length);
  const trips = days - cityDays;
  for(let i=0;i<cityDays;i++){
    let blocks = d.days[i].map(([slot,alts])=>({slot, m:pick(alts)})).filter(b=>b.m);
    if(ritmo==="tranquilo" && blocks.length>3) blocks = blocks.filter((b,k)=> b.slot!=="t" || k===blocks.findIndex(x=>x.slot==="t"));
    out.push({kind:"city", title:`${d.name}, dia ${i+1}`, blocks});
  }
  // bate-voltas pelos interesses, sem repetir
  const tripsSorted = d.daytrips.filter(t=>!/pernoite/i.test(t.t)).map(t=>({t, sc:score(t)})).sort((a,b)=>b.sc-a.sc);
  for(let j=0;j<trips;j++){ const tr=tripsSorted[j]; if(!tr) break; out.push({kind:"trip", title:`${d.name}, dia ${cityDays+j+1}: bate-volta a ${tr.t.t}`, trip:tr.t}); }
  return out;
}
