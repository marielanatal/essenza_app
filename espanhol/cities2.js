/* Pacotes adicionais de cidades. Mesmo formato de DEST; são fundidos em DEST, LEGS, WP_CITY, WP_PLACE, CURIOS e FOODS. */
const DEST2 = {
toledo: {
  name:"Toledo", emoji:"🏰", region:"Castela-La Mancha · 33 min de Madri", cityMax:2,
  stay:{min:1, ideal:1, text:"Vale 1 dia inteiro; com pernoite você vê a cidade vazia à noite e o Mirador del Valle iluminado. 2 dias só se quiser todos os museus com calma."},
  curios:[
    "Toledo foi a capital da Espanha até 1561 e é a 'cidade das três culturas': igrejas, sinagogas e mesquita a poucos minutos uma da outra.",
    "O pintor <b>El Greco</b> viveu aqui 37 anos; sua obra-prima, <i>O enterro do Conde de Orgaz</i>, está numa igrejinha, a de Santo Tomé.",
    "As espadas de Toledo eram as melhores da Europa; hoje as lojas vendem réplicas e o <b>damasquinado</b>, aço com fios de ouro.",
    "O <b>mazapán</b> (massapão) nasceu nos conventos da cidade no século XIII, dizem que numa época de fome, com amêndoa e açúcar que sobravam.",
    "A cidade velha fica num morro cercado pelo rio Tejo em três lados; por isso há escadas rolantes públicas para subir.",
    "Em fevereiro faz de 2 a 13 °C e as ruas estreitas ficam vazias: a melhor época para andar sem multidão."
  ],
  must:[
    {t:"Catedral Primada", area:"centro", slot:"m", tags:["historia","arte"], pay:1, book:"d", price:"~12,50 € com áudio-guia", link:"https://www.catedralprimada.es", tip:"Uma das grandes catedrais góticas da Europa, com o Transparente barroco e a sacristia cheia de El Grecos. Compre online para pular a fila; permite 2 h."},
    {t:"Santo Tomé: O enterro do Conde de Orgaz", area:"judiaria", slot:"m", tags:["arte"], pay:1, book:"h", price:"~4 €", link:"https://www.santotome.org", tip:"A igreja só existe para esse quadro de El Greco. Vá cedo: o espaço é pequeno e enche com excursões."},
    {t:"Sinagogas de Santa María la Blanca e del Tránsito", area:"judiaria", slot:"t", tags:["historia"], pay:1, book:"h", price:"~4 € e ~3 € (Tránsito grátis sáb à tarde e dom)", link:"https://www.cultura.gob.es/msefardi", tip:"A Blanca, do século XII, parece uma mesquita; a del Tránsito tem o Museu Sefardita. Ficam a 3 minutos uma da outra."},
    {t:"Monasterio de San Juan de los Reyes", area:"judiaria", slot:"t", tags:["historia","arte"], pay:1, book:"h", price:"~4 €", link:"https://www.sanjuandelosreyes.org", tip:"Mosteiro gótico dos Reis Católicos, com claustro cheio de gárgulas. As correntes na fachada eram de cristãos libertados dos mouros."},
    {t:"Mirador del Valle", area:"outra margem do Tejo", slot:"n", tags:["natureza"], pay:0, book:"g", price:"grátis (táxi ~15 € ida e volta)", link:"https://www.google.com/maps/search/Mirador+del+Valle+Toledo", tip:"A vista clássica da cidade inteira sobre o rio, melhor ao pôr do sol ou iluminada. Dá para ir a pé (35 min, subida) ou de táxi."},
    {t:"Alcázar e Museo del Ejército", area:"topo da cidade", slot:"m", tags:["historia"], pay:1, book:"h", price:"~5 € (grátis dom)", link:"https://www.museo.ejercito.es", tip:"O fortão no alto da cidade, reconstruído após o cerco de 1936. Museu enorme; vale pela vista e pela história militar da Espanha."},
    {t:"Museo del Greco", area:"judiaria", slot:"t", tags:["arte"], pay:1, book:"h", price:"~3 € (grátis sáb à tarde e dom)", link:"https://www.cultura.gob.es/mgreco", tip:"Casa-museu com os Apóstolos e a <i>Vista e plano de Toledo</i>. Pequeno e tranquilo."},
    {t:"Mezquita del Cristo de la Luz", area:"norte da cidade velha", slot:"t", tags:["historia"], pay:1, book:"h", price:"~4 €", link:"https://www.toledomonumental.com", tip:"Mesquita do ano 999, minúscula e intacta, virada igreja. Perto da Puerta del Sol (a de Toledo)."},
    {t:"Pontes de San Martín e de Alcántara", area:"beira do rio", slot:"t", tags:["natureza","historia"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Puente+de+San+Mart%C3%ADn+Toledo", tip:"Duas pontes medievais sobre o Tejo. A de San Martín tem tirolesa (~10 €) sobre o rio, para quem quiser."},
    {t:"Mazapán na confeitaria Santo Tomé", area:"Plaza de Zocodover", slot:"t", tags:["comida"], pay:1, book:"h", price:"~3 € a caixinha pequena", link:"https://www.mazapan.com", tip:"A casa de 1856. Peça <i>delicias</i> (recheadas de gema) e a <i>anguila</i>, a enguia de massapão que todos compram de lembrança."},
    {t:"Zocodover e Calle del Comercio", area:"centro", slot:"n", tags:["comida"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Plaza+de+Zocodover", tip:"A praça principal e a rua de lojas e bares. Tapas de <i>carcamusas</i> (ensopado de porco) nos bares da Calle Alfileritos."}
  ],
  daytrips:[
    {t:"Madrid", how:"Avant até Atocha, 33 min", price:"~14 € cada trecho", book:"s", link:"https://www.renfe.com", tags:["arte","comida"], tip:"Toledo funciona também como base tranquila perto de Madri."},
    {t:"Consuegra", how:"Ônibus Samar, 1 h", price:"~6 € cada trecho", book:"h", link:"https://www.samar.es", tags:["historia","natureza"], tip:"Os moinhos de vento do Dom Quixote numa colina, com castelo. Poucos ônibus por dia: confira a volta."},
    {t:"Aranjuez", how:"Trem via Madrid ou ônibus, ~1 h 30", price:"~10 € cada trecho; palácio ~9 €", book:"h", link:"https://www.patrimonionacional.es", tags:["historia","natureza"], tip:"Palácio real e jardins à beira do Tejo. Grátis para ibero-americanos nas últimas horas de alguns dias."}
  ],
  transit:[
    {t:"Madri ↔ Toledo", o:[
      ["Trem Avant de Atocha","~14 € cada trecho, 33 min","https://www.renfe.com","Compre com antecedência: esgota nos fins de semana. A estação é um palácio neomudéjar; de lá ao centro são 20 min a pé (subida) ou ônibus 5/61/62 (~1,50 €)."],
      ["Ônibus Alsa de Plaza Elíptica","~6 € cada trecho, 1 h","https://www.alsa.com","Sai a cada meia hora, sem hora marcada. Chega perto das escadas rolantes."]]},
    {t:"Dentro da cidade", o:[
      ["A pé e escadas rolantes","grátis","","A cidade é toda subida. As escadas rolantes de Recaredo e do Miradero levam da parte baixa ao centro sem esforço."],
      ["Pulsera turística","~14 €","https://www.toledomonumental.com","Bracelete que dá entrada a 7 monumentos (Santo Tomé, sinagoga, mesquita, San Juan de los Reyes…). Compensa a partir de 4."],
      ["Táxi ao Mirador del Valle","~15 € ida e volta","","Peça para esperar 10 minutos no mirante."]]}
  ],
  days:[
    [["m","Catedral Primada"],["m","Santo Tomé: O enterro do Conde de Orgaz"],["t","Sinagogas de Santa María la Blanca e del Tránsito"],["t","Monasterio de San Juan de los Reyes"],["n","Mirador del Valle"]],
    [["m","Alcázar e Museo del Ejército"],["t","Museo del Greco|Mezquita del Cristo de la Luz"],["t","Mazapán na confeitaria Santo Tomé|Pontes de San Martín e de Alcántara"],["n","Zocodover e Calle del Comercio"]]
  ]
},
cordoba: {
  name:"Córdoba", emoji:"🕌", region:"Andaluzia · 45 min de Sevilla", cityMax:2,
  stay:{min:1, ideal:2, text:"Vale 1 dia cheio para a Mesquita e a judiaria; com 2 dias entram Medina Azahara e os pátios. Fica no caminho do AVE entre Madri e Sevilla."},
  curios:[
    "No século X Córdoba foi a maior cidade da Europa, com uns 400 mil habitantes, ruas iluminadas e bibliotecas enormes.",
    "A <b>Mesquita-Catedral</b> tem 856 colunas; no século XVI construíram uma catedral no meio dela. Carlos V teria dito: 'destruíram o que era único para fazer o que há em qualquer lugar'.",
    "Os <b>pátios</b> floridos ganham um concurso em maio, mas vários abrem o ano inteiro no bairro de San Basilio.",
    "Nasceram aqui Sêneca, o filósofo romano, Averróis e Maimônides, os dois grandes sábios da Idade Média.",
    "O <b>salmorejo</b> é daqui: tomate, pão, azeite e alho, mais espesso que gaspacho, com presunto e ovo por cima.",
    "Fevereiro em Córdoba: 8 a 17 °C, laranjeiras carregadas e as ruas da judiaria sem turistas."
  ],
  must:[
    {t:"Mezquita-Catedral", area:"judiaria", slot:"m", tags:["historia","arte"], pay:1, book:"d", price:"~13 € (grátis seg a sáb das 8h30 às 9h30, sem grupos)", link:"https://mezquita-catedraldecordoba.es", tip:"Entre na primeira hora: de graça e quase vazia. Compre online se for mais tarde. Torre (~3 €) com vista da cidade."},
    {t:"Judería e Calleja de las Flores", area:"judiaria", slot:"t", tags:["historia"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Calleja+de+las+Flores+C%C3%B3rdoba", tip:"Ruelas brancas com vasos azuis; a Calleja de las Flores enquadra a torre da Mesquita. A Sinagoga (século XIV) é grátis."},
    {t:"Alcázar de los Reyes Cristianos", area:"ao lado da Mesquita", slot:"t", tags:["historia","natureza"], pay:1, book:"h", price:"~5 €", link:"https://www.cordoba.es", tip:"Jardins com tanques e laranjeiras, mosaicos romanos e torres com vista. Foi sede da Inquisição e onde Colombo falou com os Reis Católicos."},
    {t:"Puente Romano e Torre de la Calahorra", area:"rio Guadalquivir", slot:"t", tags:["historia","natureza"], pay:0, book:"g", price:"ponte grátis; torre ~4,50 €", link:"https://www.torrecalahorra.es", tip:"Atravesse ao entardecer para ver a Mesquita do outro lado. A torre tem o museu das três culturas."},
    {t:"Medina Azahara", area:"8 km a oeste", slot:"m", tags:["historia"], pay:1, book:"h", price:"~2 € + ônibus turístico ~9 €", link:"https://www.museosdeandalucia.es/web/conjuntoarqueologicomadinatalzahra", tip:"A cidade-palácio do califa, do ano 936, escavada aos poucos. Ônibus turístico sai da Avenida del Alcázar; confira horários (fecha seg)."},
    {t:"Palacio de Viana", area:"Santa Marina", slot:"t", tags:["historia","natureza"], pay:1, book:"h", price:"~10 € (só pátios ~7 €)", link:"https://www.palaciodeviana.com", tip:"12 pátios diferentes num só palácio: o jeito de ver os pátios cordobeses fora de maio."},
    {t:"Patios de San Basilio", area:"San Basilio", slot:"t", tags:["natureza"], pay:1, book:"h", price:"~5 € (passe de 5 pátios)", link:"https://www.patiosdesanbasilio.com", tip:"Pátios particulares abertos o ano todo, a 10 minutos do Alcázar. Os donos contam a história."},
    {t:"Baños del Alcázar Califal", area:"Campo Santo de los Mártires", slot:"m", tags:["historia"], pay:1, book:"h", price:"~3 €", link:"https://www.cordoba.es", tip:"Banhos árabes do século X, bem conservados, com projeção explicando o ritual."},
    {t:"Plaza de la Corredera", area:"centro", slot:"n", tags:["comida"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Plaza+de+la+Corredera", tip:"Praça porticada que já foi praça de touros; mercado de manhã e bares à noite."},
    {t:"Tabernas: salmorejo e flamenquín", area:"centro", slot:"n", tags:["comida"], pay:1, book:"h", price:"~20 € por pessoa", link:"https://www.google.com/maps/search/Taberna+Salinas+C%C3%B3rdoba", tip:"Taberna Salinas (1879), Bodegas Mezquita, Casa Pepe de la Judería. Peça salmorejo, flamenquín, berinjela com mel e rabo de toro."},
    {t:"Mercado Victoria", area:"Jardines de la Victoria", slot:"n", tags:["comida"], pay:1, book:"h", price:"~15 €", link:"https://www.mercadovictoria.com", tip:"Mercado gastronômico num pavilhão de ferro de 1877. Bom para provar várias coisas num jantar só."}
  ],
  daytrips:[
    {t:"Sevilla", how:"Avant, 45 min", price:"~14 € cada trecho", book:"s", link:"https://www.renfe.com", tags:["arte","comida"], tip:"Tão perto que muita gente faz Córdoba como bate-volta de Sevilla; o contrário também funciona."},
    {t:"Granada", how:"Trem Avant, 1 h 40", price:"~20 € cada trecho", book:"s", link:"https://www.renfe.com", tags:["historia","arte"], tip:"Só como bate-volta se já tiver ingresso da Alhambra; melhor dormir lá."},
    {t:"Madrid", how:"AVE, 1 h 45", price:"~30 a 60 €", book:"s", link:"https://www.renfe.com", tags:["arte"], tip:"Córdoba fica no meio do caminho do AVE Madri–Sevilla: dá para parar um dia entre as duas."}
  ],
  transit:[
    {t:"Chegar a Córdoba", o:[
      ["AVE/Avant de Sevilla (45 min) ou Madri (1 h 45)","~14 € de Sevilla; ~30 a 60 € de Madri","https://www.renfe.com","Também Iryo e Ouigo no trecho de Madri. A estação fica a 20 min a pé da Mesquita ou ônibus 3 (~1,30 €)."],
      ["Ônibus Alsa","~12 € de Sevilla, 1 h 45","https://www.alsa.com","Mais barato e sem hora marcada; rodoviária ao lado da estação de trem."]]},
    {t:"Dentro da cidade", o:[
      ["A pé","grátis","","Tudo do centro histórico fica a 15 minutos da Mesquita. É plano."],
      ["Táxi","~8 € estação–centro","","Útil com malas: a judiaria é cheia de ruelas sem carro."]]}
  ],
  days:[
    [["m","Mezquita-Catedral"],["t","Judería e Calleja de las Flores"],["t","Alcázar de los Reyes Cristianos"],["n","Tabernas: salmorejo e flamenquín"]],
    [["m","Medina Azahara|Baños del Alcázar Califal"],["t","Palacio de Viana|Patios de San Basilio"],["t","Puente Romano e Torre de la Calahorra"],["n","Plaza de la Corredera|Mercado Victoria"]]
  ]
},
granada: {
  name:"Granada", emoji:"🌙", region:"Andaluzia · Alhambra", cityMax:3,
  stay:{min:2, ideal:2, text:"Vale 2 dias: um para a Alhambra (meio dia inteiro) e o Albaicín, outro para o centro, a Capilla Real e o Sacromonte. 3 dias se quiser Sierra Nevada ou as Alpujarras."},
  curios:[
    "A <b>Alhambra</b> esgota semanas antes: os ingressos saem com dia e hora exatos para os Palácios Nazaríes. Reserve assim que tiver a data.",
    "Granada é a cidade espanhola que ainda serve <b>tapa grátis</b> de verdade: cada bebida vem com um prato, e muda a cada rodada.",
    "A entrega de Granada em 1492, o fim do último reino muçulmano, aconteceu no mesmo ano em que Colombo partiu: Isabel e Fernando estão enterrados aqui, na Capilla Real.",
    "O poeta <b>Federico García Lorca</b> nasceu e morreu em Granada; sua casa de verão, a Huerta de San Vicente, fica num parque da cidade.",
    "Do <b>Mirador de San Nicolás</b> vê-se a Alhambra com a Sierra Nevada branca atrás. Bill Clinton disse que era o pôr do sol mais bonito do mundo.",
    "Em fevereiro faz de 3 a 14 °C e dá para esquiar na Sierra Nevada de manhã (40 min) e tomar sol na praia à tarde (1 h)."
  ],
  must:[
    {t:"Alhambra e Generalife", area:"colina da Sabika", slot:"m", tags:["historia","arte","natureza"], pay:1, book:"s", price:"~19 €", link:"https://tickets.alhambra-patronato.es", tip:"Só no site oficial, com até 3 meses de antecedência. O horário impresso é o dos Palácios Nazaríes: chegue 30 min antes. Leve o passaporte. Reserve 3 a 4 horas."},
    {t:"Albaicín e Mirador de San Nicolás", area:"Albaicín", slot:"t", tags:["historia","natureza"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Mirador+de+San+Nicol%C3%A1s", tip:"Suba pelas ruelas brancas do bairro mouro até o mirante, para o pôr do sol. Minibus C31/C32 de Plaza Nueva se cansar."},
    {t:"Capilla Real e Catedral", area:"centro", slot:"m", tags:["historia","arte"], pay:1, book:"h", price:"~6 € cada", link:"https://capillarealgranada.com", tip:"Os túmulos de Isabel e Fernando, com a coleção de pintura flamenga da rainha. A catedral renascentista ao lado é enorme e clara."},
    {t:"Carrera del Darro e El Bañuelo", area:"sopé do Albaicín", slot:"t", tags:["historia"], pay:1, book:"h", price:"Bañuelo ~5 € (passe Dobla de Oro)", link:"https://www.alhambra-patronato.es", tip:"A rua mais bonita da cidade, ao longo do rio, com a Alhambra em cima. O Bañuelo são banhos árabes do século XI."},
    {t:"Sacromonte: cuevas e zambra flamenca", area:"Sacromonte", slot:"n", tags:["musica","historia"], pay:1, book:"d", price:"~25 a 30 €", link:"https://www.cuevaslosTarantos.com", tip:"Flamenco cigano dentro de grutas-casa (Cuevas Los Tarantos, Venta El Gallo). Reserve na véspera. O Museo Cuevas del Sacromonte conta como se vivia nas grutas."},
    {t:"Tapas grátis: Calle Navas e Plaza Nueva", area:"centro", slot:"n", tags:["comida"], pay:0, book:"g", price:"só a bebida (~2,50 €)", link:"https://www.google.com/maps/search/Calle+Navas+Granada", tip:"Peça uma caña ou um vinho e a tapa vem junto. Bodegas Castañeda, Los Diamantes (frituras), Bar Ávila. Três rodadas viram um jantar."},
    {t:"Alcaicería e Plaza Bib-Rambla", area:"centro", slot:"t", tags:["historia"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Alcaicer%C3%ADa+Granada", tip:"O antigo bazar da seda, hoje lojas de lembranças e chás; ao lado, a praça das flores e dos churros."},
    {t:"Paseo de los Tristes", area:"sopé da Alhambra", slot:"t", tags:["natureza"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Paseo+de+los+Tristes", tip:"Terraços com a Alhambra iluminada em cima. Dali sai o caminho (Cuesta del Rey Chico) que sobe à Alhambra a pé."},
    {t:"Monasterio de la Cartuja", area:"norte", slot:"m", tags:["arte"], pay:1, book:"h", price:"~5 €", link:"https://cartujadegranada.com", tip:"Sacristia barroca delirante, toda em mármore e madeira. Longe do centro: ônibus 8 ou N7."},
    {t:"Hammam Al Ándalus", area:"Plaza Nueva", slot:"t", tags:["natureza"], pay:1, book:"s", price:"~45 €", link:"https://granada.hammamalandalus.com", tip:"Banhos árabes recriados, com piscinas quentes e chá. Reserve com dias de antecedência; bom para o fim da tarde no frio."},
    {t:"Huerta de San Vicente (casa de Lorca)", area:"Parque García Lorca", slot:"t", tags:["arte"], pay:1, book:"h", price:"~3 €", link:"https://www.huertadesanvicente.com", tip:"A casa de verão do poeta, com piano e manuscritos. Visita guiada curta."}
  ],
  daytrips:[
    {t:"Sierra Nevada", how:"Ônibus Alsa, 1 h (3 por dia no inverno)", price:"~10 € ida e volta; forfait ~55 €", book:"d", link:"https://www.sierranevada.es", tags:["natureza"], tip:"A estação de esqui mais ao sul da Europa, aberta em fevereiro. Mesmo sem esquiar dá para subir de teleférico e almoçar na neve."},
    {t:"Las Alpujarras (Pampaneira)", how:"Ônibus Alsa, 1 h 45", price:"~7 € cada trecho", book:"h", link:"https://www.alsa.com", tags:["natureza","comida"], tip:"Vilas brancas de telhado plano penduradas na serra: Pampaneira, Bubión, Capileira. Jamón de Trevélez e plato alpujarreño."},
    {t:"Córdoba", how:"Trem Avant, 1 h 40", price:"~20 € cada trecho", book:"s", link:"https://www.renfe.com", tags:["historia"], tip:"Mesquita de manhã cedo (grátis até 9h30) e judiaria. Volte à noite."},
    {t:"Nerja e Frigiliana", how:"Ônibus Alsa, 1 h 45", price:"~10 € cada trecho", book:"h", link:"https://www.alsa.com", tags:["natureza"], tip:"Mar em fevereiro: o Balcón de Europa, a gruta de Nerja e a vila branca de Frigiliana."}
  ],
  transit:[
    {t:"Chegar a Granada", o:[
      ["AVE de Madri","~40 a 70 €, 3 h 15","https://www.renfe.com","Direto de Atocha. A estação fica a 20 min a pé do centro ou ônibus 4/33."],
      ["Trem ou ônibus de Sevilla","trem ~30 €, 2 h 40; ônibus Alsa ~25 €, 3 h","https://www.alsa.com","Sem trem rápido. O ônibus sai mais vezes e chega à rodoviária (ônibus 33 ao centro, 15 min)."],
      ["De Córdoba","Avant ~20 €, 1 h 40","https://www.renfe.com","A melhor combinação: Sevilla → Córdoba → Granada."]]},
    {t:"Dentro da cidade", o:[
      ["Minibus C30, C31, C32","~1,40 €","https://www.transportesrober.com","Os micro-ônibus que sobem à Alhambra (C30/C32) e ao Albaicín/Sacromonte (C31/C34) de Plaza Nueva e Plaza Isabel la Católica."],
      ["A pé","grátis","","O centro é plano; Albaicín e Alhambra são subida. Calçado bom: pedras lisas."],
      ["Táxi à Alhambra","~8 €","","Vale na ida com horário marcado; a volta pode ser a pé pela Cuesta de Gomérez."]]}
  ],
  days:[
    [["m","Alhambra e Generalife"],["t","Carrera del Darro e El Bañuelo"],["t","Albaicín e Mirador de San Nicolás"],["n","Tapas grátis: Calle Navas e Plaza Nueva"]],
    [["m","Capilla Real e Catedral"],["t","Alcaicería e Plaza Bib-Rambla"],["t","Paseo de los Tristes|Hammam Al Ándalus"],["n","Sacromonte: cuevas e zambra flamenca"]],
    [["m","Monasterio de la Cartuja|Huerta de San Vicente (casa de Lorca)"],["t","Hammam Al Ándalus|Paseo de los Tristes"],["n","Tapas grátis: Calle Navas e Plaza Nueva"]]
  ]
},
valencia: {
  name:"Valencia", emoji:"🥘", region:"Comunidade Valenciana · 1 h 45 de Madri", cityMax:3,
  stay:{min:2, ideal:2, text:"Vale 2 dias: um para o centro histórico e o Mercado Central, outro para a Cidade das Artes e a praia. Um terceiro para a paella na Albufera."},
  curios:[
    "A <b>paella</b> é daqui, e a verdadeira leva frango, coelho e feijão <i>garrofó</i>, não frutos do mar. Come-se ao almoço, nunca à noite.",
    "O rio Túria foi desviado depois da enchente de 1957 e o leito virou um parque de 9 km que atravessa a cidade.",
    "A <b>Lonja de la Seda</b>, bolsa de seda gótica de 1482, é Patrimônio da Humanidade; os mercadores negociavam entre colunas que imitam palmeiras.",
    "A catedral guarda o <b>Santo Cálice</b>, que a tradição diz ser a taça da Última Ceia, reconhecido pelo Vaticano como relíquia.",
    "As <b>Fallas</b> (15 a 19 de março) queimam esculturas gigantes de papelão; em fevereiro os ateliês já estão a todo vapor e dá para visitar alguns.",
    "Fevereiro em Valencia: 8 a 17 °C e sol; é a cidade grande mais quente da Espanha no inverno, e as laranjas estão no ponto."
  ],
  must:[
    {t:"Ciutat de les Arts i les Ciències", area:"antigo leito do Túria", slot:"m", tags:["arte","natureza"], pay:1, book:"d", price:"Oceanogràfic ~37 €; Hemisfèric ~9 €; passear por fora grátis", link:"https://www.cac.es", tip:"O complexo futurista de Calatrava. O Oceanogràfic é o maior aquário da Europa (reserve meio dia). Passear entre os prédios e os espelhos d'água não custa nada."},
    {t:"Mercado Central", area:"centro", slot:"m", tags:["comida","arte"], pay:0, book:"g", price:"grátis", link:"https://www.mercadocentralvalencia.es", tip:"Mercado modernista de 1928, um dos mais bonitos da Europa. Vá de manhã (fecha às 15h, dom fechado): frutas, presunto, horchata e um balcão de tapas, o Central Bar."},
    {t:"Lonja de la Seda", area:"em frente ao mercado", slot:"m", tags:["historia","arte"], pay:1, book:"h", price:"~2 € (grátis dom)", link:"https://www.valencia.es", tip:"Salão de colunas torcidas e o pátio das laranjeiras. Visita de 30 minutos que vale cada centavo."},
    {t:"Catedral, Miguelete e Santo Cáliz", area:"Plaza de la Reina", slot:"t", tags:["historia","arte"], pay:1, book:"h", price:"~9 € com áudio-guia; torre ~2,50 €", link:"https://catedraldevalencia.es", tip:"Afrescos renascentistas, a capela do Santo Cálice e 207 degraus do Miguelete para a vista dos telhados azuis."},
    {t:"Barrio del Carmen e Torres de Serranos", area:"cidade velha", slot:"t", tags:["historia"], pay:1, book:"h", price:"torres ~2 € (grátis dom)", link:"https://www.valencia.es", tip:"Ruas de grafites, praças com bares e a porta medieval da cidade: suba nas Torres de Serranos ao fim da tarde."},
    {t:"Jardín del Turia de bicicleta", area:"leito do rio", slot:"t", tags:["natureza"], pay:1, book:"h", price:"aluguel ~10 € meio dia", link:"https://www.valenbisi.es", tip:"9 km planos e sem carros, do Bioparc à Cidade das Artes, com o parque Gulliver para crianças no caminho."},
    {t:"Paella em El Palmar (Albufera)", area:"15 km ao sul", slot:"m", tags:["comida","natureza"], pay:1, book:"d", price:"~20 € por pessoa", link:"https://www.google.com/maps/search/El+Palmar+Valencia", tip:"A lagoa onde o arroz é plantado e a vila dos restaurantes de paella. Ônibus 24/25 (~1,50 €). Reserve a paella (leva 40 min) e termine com passeio de barco ao pôr do sol."},
    {t:"Playa de la Malvarrosa e Cabanyal", area:"orla", slot:"t", tags:["natureza","comida"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Playa+de+la+Malvarrosa", tip:"Praia urbana larga, calçadão e os restaurantes históricos de arroz (La Pepica, onde Hemingway comia). O Cabanyal, bairro de pescadores, tem fachadas de azulejo."},
    {t:"Horchata com fartons em Alboraya", area:"Alboraya (metrô 3)", slot:"t", tags:["comida"], pay:1, book:"h", price:"~5 €", link:"https://www.horchateriadaniel.es", tip:"A bebida de chufa (tigernut) gelada, com os pãezinhos doces para molhar. Horchatería Daniel, no vilarejo onde a chufa é plantada; na cidade, Santa Catalina."},
    {t:"Museo de Bellas Artes", area:"Jardines del Real", slot:"t", tags:["arte"], pay:0, book:"g", price:"grátis", link:"https://museobellasartesvalencia.gva.es", tip:"Goya, Velázquez, El Greco, Sorolla e os primitivos valencianos. Grátis e quase vazio."},
    {t:"Ruzafa à noite", area:"Ruzafa", slot:"n", tags:["comida"], pay:1, book:"h", price:"~25 € por pessoa", link:"https://www.google.com/maps/search/Ruzafa+Valencia", tip:"O bairro boêmio: bares de tapas, restaurantes modernos e o Mercado de Ruzafa. Agua de Valencia no Café de las Horas, no centro, antes."},
    {t:"Mercado de Colón", area:"Eixample", slot:"n", tags:["comida","arte"], pay:0, book:"g", price:"grátis", link:"https://www.mercadocolon.es", tip:"Mercado modernista virado praça de cafés e horchaterías. Bonito à noite, iluminado."}
  ],
  daytrips:[
    {t:"Xàtiva", how:"Cercanías C2, 50 min", price:"~5 € cada trecho; castelo ~3 €", book:"h", link:"https://www.renfe.com", tags:["historia","natureza"], tip:"Castelo duplo numa serra sobre a cidade natal dos papas Bórgia. Suba de trenzinho turístico ou a pé (45 min)."},
    {t:"Sagunto", how:"Cercanías C6, 30 min", price:"~4 € cada trecho", book:"h", link:"https://www.renfe.com", tags:["historia"], tip:"Teatro romano e castelo de 1 km de muralhas, com vista do mar. Meio dia basta."},
    {t:"Peñíscola", how:"Trem até Benicarló + ônibus, 2 h", price:"~20 € cada trecho", book:"d", link:"https://www.renfe.com", tags:["historia","natureza"], tip:"Vila murada numa rocha no mar, castelo do Papa Luna; foi Meereen em <i>Game of Thrones</i>. Dia longo."}
  ],
  transit:[
    {t:"Chegar a Valencia", o:[
      ["AVE de Madri","~30 a 60 €, 1 h 45","https://www.renfe.com","Também Iryo e Ouigo (mais baratos). Chega à estação Joaquín Sorolla, a 15 min a pé do centro."],
      ["Euromed de Barcelona","~30 a 50 €, 2 h 50","https://www.renfe.com","Vai pela costa; sente do lado esquerdo indo para o sul."],
      ["Aeroporto → centro","metrô linhas 3 e 5, ~5 €, 25 min","https://www.metrovalencia.es","Táxi ~25 €."]]},
    {t:"Dentro da cidade", o:[
      ["Metrô e bonde","~1,50 € + cartão (Suma 10 viagens ~8 €)","https://www.metrovalencia.es","O bonde 4/6 vai à praia; o metrô 3 a Alboraya."],
      ["Bicicleta","Valenbisi ~13 € a semana; aluguéis ~10 € o dia","https://www.valenbisi.es","A cidade é plana e cheia de ciclovias: o jeito valenciano de se mover."],
      ["Ônibus 24/25 à Albufera","~1,50 €","https://www.emtvalencia.es","Da Plaza del Ayuntamiento ou da orla até El Palmar, 45 min."]]}
  ],
  days:[
    [["m","Mercado Central"],["m","Lonja de la Seda"],["t","Catedral, Miguelete e Santo Cáliz"],["t","Barrio del Carmen e Torres de Serranos"],["n","Ruzafa à noite"]],
    [["m","Ciutat de les Arts i les Ciències"],["t","Jardín del Turia de bicicleta"],["t","Playa de la Malvarrosa e Cabanyal"],["n","Mercado de Colón"]],
    [["m","Paella em El Palmar (Albufera)"],["t","Horchata com fartons em Alboraya|Museo de Bellas Artes"],["n","Ruzafa à noite"]]
  ]
},
zaragoza: {
  name:"Zaragoza", emoji:"⛪", region:"Aragão · 1 h 20 de Madri e de Barcelona", cityMax:2,
  stay:{min:1, ideal:1, text:"Vale 1 dia cheio: fica exatamente no meio do AVE entre Madri e Barcelona, então é a parada perfeita. 2 dias com Goya, Aljafería e calma no El Tubo."},
  curios:[
    "A <b>Basílica del Pilar</b> guarda duas bombas que caíram na Guerra Civil e não explodiram; estão expostas numa coluna, e as marcas no teto também.",
    "O <b>Pilar</b> é a coluna onde a Virgem teria aparecido ao apóstolo Santiago no ano 40: é o santuário mariano mais antigo do mundo cristão, segundo a tradição.",
    "<b>Goya</b> nasceu a 40 km, em Fuendetodos, e pintou afrescos na cúpula do Pilar quando jovem.",
    "A <b>Aljafería</b> foi palácio dos reis muçulmanos de Saraqusta no século XI, depois dos reis cristãos e da Inquisição; hoje é a sede do parlamento aragonês.",
    "O <b>cierzo</b>, vento frio do vale do Ebro, é famoso: em fevereiro pode ventar forte, com 2 a 13 °C.",
    "O bairro de bares chama-se <b>El Tubo</b> (o tubo) porque as ruas são tão estreitas que a multidão escorre por elas."
  ],
  must:[
    {t:"Basílica del Pilar", area:"Plaza del Pilar", slot:"m", tags:["historia","arte"], pay:0, book:"g", price:"grátis; torre ~4 €", link:"https://www.basilicadelpilar.es", tip:"Beije o Pilar como os locais (há uma abertura na coluna), veja as bombas e os afrescos de Goya, e suba de elevador na torre para ver o Ebro."},
    {t:"Catedral del Salvador (La Seo)", area:"Plaza del Pilar", slot:"m", tags:["historia","arte"], pay:1, book:"h", price:"~7 € com o Museu de Tapeçarias", link:"https://www.catedraldezaragoza.es", tip:"Do outro lado da praça, mais antiga e mais bonita por dentro que o Pilar; a parede mudéjar externa é um tapete de azulejo."},
    {t:"Palacio de la Aljafería", area:"oeste do centro", slot:"m", tags:["historia","arte"], pay:1, book:"h", price:"~5 € (grátis dom)", link:"https://www.cortesaragon.es/aljaferia", tip:"Palácio islâmico do século XI, com pátio de laranjeiras e arcos entrelaçados; inspirou a Alhambra. Confira dias de visita (parlamento em sessão)."},
    {t:"Museo Goya e Patio de la Infanta", area:"centro", slot:"t", tags:["arte"], pay:1, book:"h", price:"Goya ~6 €; Patio grátis", link:"https://museogoya.fundacionibercaja.es", tip:"Todas as séries de gravuras de Goya e retratos. O Patio de la Infanta, renascentista, fica a 5 minutos e é grátis."},
    {t:"El Tubo: tapas", area:"centro", slot:"n", tags:["comida"], pay:1, book:"h", price:"~20 € por pessoa", link:"https://www.google.com/maps/search/El+Tubo+Zaragoza", tip:"Ruelas de bares, cada um com sua tapa: champiñón do Casa Lac/El Champi, ternasco, croquetas. Em pé e pulando de bar em bar."},
    {t:"Caesaraugusta: Foro e Teatro romanos", area:"centro", slot:"t", tags:["historia"], pay:1, book:"h", price:"~7 € os 4 museus romanos", link:"https://www.zaragoza.es/sede/portal/museos", tip:"Zaragoza foi colônia de Augusto (daí o nome). O teatro de 6 mil lugares ficou escondido sob casas até 1972."},
    {t:"Puente de Piedra e margem do Ebro", area:"rio", slot:"t", tags:["natureza"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Puente+de+Piedra+Zaragoza", tip:"Atravesse a ponte do século XV para ver o Pilar refletido no Ebro ao entardecer, a foto da cidade."},
    {t:"Mercado Central", area:"centro", slot:"m", tags:["comida"], pay:0, book:"g", price:"grátis", link:"https://www.mercadocentralzaragoza.com", tip:"Mercado de ferro de 1903, restaurado, com balcões de tapas no meio. Bom para provar jamón de Teruel e borrajas."},
    {t:"Parque Grande e Expo 2008", area:"sul e norte", slot:"t", tags:["natureza"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Parque+Grande+Jos%C3%A9+Antonio+Labordeta", tip:"O parque com escadaria monumental para um passeio tranquilo; no outro extremo, o recinto da Expo 2008 com a Torre del Agua e a ponte-pavilhão de Zaha Hadid."},
    {t:"Iglesia de San Pablo e Casco mudéjar", area:"San Pablo", slot:"t", tags:["historia"], pay:1, book:"h", price:"~3 €", link:"https://www.google.com/maps/search/Iglesia+de+San+Pablo+Zaragoza", tip:"A torre mudéjar octogonal é Patrimônio da Humanidade. O bairro ('El Gancho') é o mais antigo e multicultural."}
  ],
  daytrips:[
    {t:"Fuendetodos", how:"Ônibus Samar, 1 h", price:"~6 € cada trecho; casa ~3 €", book:"h", link:"https://www.fundacionfuendetodosgoya.org", tags:["arte"], tip:"A casa natal de Goya e o museu de gravuras, numa aldeia de pedra. Poucos ônibus: confira a volta."},
    {t:"Monasterio de Piedra", how:"Carro, 1 h 30 (ônibus só fim de semana)", price:"~17 €", book:"d", link:"https://monasteriopiedra.com", tags:["natureza"], tip:"Mosteiro cisterciense num parque de cachoeiras e grutas. Em fevereiro, com água de sobra."},
    {t:"Tarazona e Veruela", how:"Ônibus Therpasa, 1 h 15", price:"~8 € cada trecho", book:"h", link:"https://www.therpasa.es", tags:["historia"], tip:"Cidade mudéjar com catedral restaurada e o mosteiro de Veruela, onde Bécquer escreveu as <i>Cartas desde mi celda</i>."}
  ],
  transit:[
    {t:"Chegar a Zaragoza", o:[
      ["AVE de Madri ou Barcelona","~25 a 50 €, 1 h 20 a 1 h 30","https://www.renfe.com","Também Iryo e Ouigo. A estação Delicias fica longe do centro: ônibus 34 ou 51 (~1,50 €, 15 min) ou táxi ~10 €."],
      ["Ônibus Alsa","~15 a 20 €, 3 h 45 de Madri","https://www.alsa.com","Só se o trem estiver caro; a rodoviária é na mesma estação Delicias."]]},
    {t:"Dentro da cidade", o:[
      ["A pé","grátis","","O centro histórico (Pilar, Seo, Tubo, mercado) cabe em 15 minutos; a Aljafería fica a 20 min."],
      ["Bonde (tranvía)","~1,50 €","https://www.tranviasdezaragoza.es","Uma linha só, cruza a cidade de norte a sul pela Gran Vía."]]}
  ],
  days:[
    [["m","Basílica del Pilar"],["m","Catedral del Salvador (La Seo)"],["t","Caesaraugusta: Foro e Teatro romanos|Museo Goya e Patio de la Infanta"],["t","Puente de Piedra e margem do Ebro"],["n","El Tubo: tapas"]],
    [["m","Palacio de la Aljafería"],["m","Mercado Central"],["t","Iglesia de San Pablo e Casco mudéjar|Parque Grande e Expo 2008"],["n","El Tubo: tapas"]]
  ]
},
salamanca: {
  name:"Salamanca", emoji:"🎓", region:"Castela e Leão · 1 h 40 de Madri", cityMax:2,
  stay:{min:1, ideal:2, text:"Vale 1 dia cheio e uma noite: a Plaza Mayor iluminada é o motivo de dormir aqui. 2 dias com Casa Lis, San Esteban e tapas com calma."},
  curios:[
    "A <b>Universidade de Salamanca</b> (1218) é a mais antiga da Espanha e uma das quatro mais antigas da Europa, com Bolonha, Oxford e Paris.",
    "Na fachada da universidade há uma <b>rã</b> escondida sobre uma caveira; achar sem ajuda dá sorte nos exames, dizem os estudantes.",
    "Na fachada da Catedral Nova há um <b>astronauta</b> esculpido: foi acrescentado numa restauração de 1992 como 'assinatura' dos canteiros.",
    "A <b>Plaza Mayor</b> (1755) é considerada a mais bonita da Espanha; à noite, iluminada em dourado, vira a sala de estar da cidade.",
    "A pedra de Villamayor, de que a cidade é feita, fica dourada com o tempo; por isso Salamanca é 'a cidade dourada'.",
    "Fevereiro em Salamanca: 0 a 11 °C, seco e com sol; é cidade universitária, então os bares estão cheios mesmo no inverno."
  ],
  must:[
    {t:"Plaza Mayor", area:"centro", slot:"m", tags:["historia"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Plaza+Mayor+Salamanca", tip:"Veja de dia e volte à noite, quando acendem as luzes. Os medalhões nos arcos retratam reis e personagens (até Franco, polêmico)."},
    {t:"Universidade: fachada, a rã e o Cielo de Salamanca", area:"Patio de Escuelas", slot:"m", tags:["historia","arte"], pay:1, book:"h", price:"interior ~10 €; fachada e Cielo grátis", link:"https://www.usal.es", tip:"Procure a rã na fachada plateresca (dica: coluna da direita). Dentro, a biblioteca antiga e a sala de Fray Luis de León. O Cielo de Salamanca é um afresco astronômico do século XV, grátis."},
    {t:"Catedrais Velha e Nova e torres Ieronimus", area:"centro", slot:"t", tags:["historia","arte"], pay:1, book:"h", price:"~10 € as duas; torres ~4 €", link:"https://catedralsalamanca.org", tip:"Duas catedrais coladas, uma românica (século XII) e uma gótica. Ache o astronauta na Puerta de Ramos e suba as torres para andar pelos terraços."},
    {t:"Casa de las Conchas", area:"Rúa Mayor", slot:"m", tags:["historia"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Casa+de+las+Conchas", tip:"Palácio coberto de 300 conchas de pedra, hoje biblioteca pública. Do pátio vê-se a Clerecía ao lado (torres ~4 €)."},
    {t:"Convento de San Esteban", area:"sul do centro", slot:"t", tags:["historia","arte"], pay:1, book:"h", price:"~4 €", link:"https://www.conventosanesteban.es", tip:"Fachada plateresca como um retábulo de pedra e claustro onde Colombo defendeu seu projeto perante os dominicanos."},
    {t:"Huerto de Calixto y Melibea e Puente Romano", area:"beira do Tormes", slot:"t", tags:["natureza","historia"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Huerto+de+Calixto+y+Melibea", tip:"Jardim da <i>Celestina</i> com vista para a catedral e o rio. Desça até a ponte romana e olhe a cidade de baixo ao pôr do sol."},
    {t:"Casa Lis (Museu Art Nouveau e Art Déco)", area:"beira do Tormes", slot:"m", tags:["arte"], pay:1, book:"h", price:"~5 € (grátis qui de manhã)", link:"https://www.museocasalis.org", tip:"Palacete de vitrais coloridos com bonecas antigas, vidros Lalique e esculturas. A fachada de vidro vista do rio é a foto."},
    {t:"Tapas na Calle Van Dyck e Rúa Mayor", area:"Van Dyck / centro", slot:"n", tags:["comida"], pay:1, book:"h", price:"~15 € por pessoa", link:"https://www.google.com/maps/search/Calle+Van+Dyck+Salamanca", tip:"Van Dyck é a rua dos bares de bairro (jamón de Guijuelo, pinchos a 2 €); no centro, El Patio Chico e a Rúa Mayor para hornazo e chanfaina."},
    {t:"Clerecía e Scala Coeli", area:"ao lado das Conchas", slot:"t", tags:["historia"], pay:1, book:"h", price:"~4 €", link:"https://www.google.com/maps/search/Scala+Coeli+Salamanca", tip:"Suba às torres barrocas da igreja jesuíta: a melhor vista da Plaza Mayor e das catedrais."}
  ],
  daytrips:[
    {t:"Ávila", how:"Trem, 1 h, ou ônibus Avanza, 1 h 15", price:"~10 € cada trecho", book:"h", link:"https://www.renfe.com", tags:["historia"], tip:"A muralha completa fica no caminho entre Salamanca e Madri: dá para parar no meio da viagem."},
    {t:"La Alberca e Sierra de Francia", how:"Ônibus, 1 h 30", price:"~8 € cada trecho", book:"h", link:"https://www.google.com/maps/search/La+Alberca", tags:["natureza","historia"], tip:"Vila de madeira e pedra entre castanheiros, Patrimônio desde 1940. Melhor com carro para ver também Mogarraz e a Peña de Francia."},
    {t:"Ciudad Rodrigo", how:"Ônibus, 1 h 15", price:"~8 € cada trecho", book:"h", link:"https://www.google.com/maps/search/Ciudad+Rodrigo", tags:["historia"], tip:"Cidade murada e catedral com marcas de canhão de Wellington; em fevereiro tem o Carnaval del Toro (confira as datas)."}
  ],
  transit:[
    {t:"Chegar a Salamanca", o:[
      ["Trem Alvia de Madrid Chamartín","~25 €, 1 h 40","https://www.renfe.com","Poucos por dia: compre antes. A estação fica a 20 min a pé do centro ou ônibus 1."],
      ["Ônibus Avanza de Estación Sur","~20 €, 2 h 30","https://www.avanzabus.com","Sai de hora em hora; chega à rodoviária, 15 min a pé do centro."],
      ["De Segovia ou Ávila","Avanza, 1 h a 2 h","https://www.avanzabus.com","Segovia → Ávila → Salamanca é uma linha natural de ônibus."]]},
    {t:"Dentro da cidade", o:[["A pé","grátis","","Tudo fica a 10 minutos da Plaza Mayor; a cidade velha é pequena e plana."]]}
  ],
  days:[
    [["m","Plaza Mayor"],["m","Universidade: fachada, a rã e o Cielo de Salamanca"],["t","Catedrais Velha e Nova e torres Ieronimus"],["t","Huerto de Calixto y Melibea e Puente Romano"],["n","Tapas na Calle Van Dyck e Rúa Mayor"]],
    [["m","Casa Lis (Museu Art Nouveau e Art Déco)"],["m","Casa de las Conchas"],["t","Convento de San Esteban|Clerecía e Scala Coeli"],["n","Plaza Mayor"]]
  ]
},
avila: {
  name:"Ávila", emoji:"🧱", region:"Castela e Leão · 1 h 30 de Madri", cityMax:2,
  stay:{min:1, ideal:1, text:"Vale 1 dia (ou meio, entre Segovia e Salamanca): muralha, catedral, Santa Teresa e um chuletón. Com pernoite, a muralha iluminada vista dos Cuatro Postes."},
  curios:[
    "A <b>muralha</b> de Ávila, dos séculos XI a XIV, é a mais completa da Europa: 2,5 km, 88 torres e 9 portas, e dá para caminhar por cima de 1,7 km.",
    "<b>Santa Teresa de Jesus</b>, mística e doutora da Igreja, nasceu aqui em 1515; a cidade inteira gira em torno dela, até o doce.",
    "A catedral é uma <b>fortaleza</b>: a abside faz parte da muralha, com ameias; foi a primeira gótica da Espanha.",
    "A 1.130 m, Ávila é a capital de província mais alta da Espanha; em fevereiro faz de -2 a 9 °C, com neve possível.",
    "O <b>chuletón</b> de Ávila é um bife de vitela avileña de meio quilo ou mais, na brasa, e vem com as <i>patatas revolconas</i> (purê com páprica e torresmo).",
    "Diz a lenda que Isabel, a Católica, foi criada em Arévalo e proclamada herdeira nos Toros de Guisando, a 60 km daqui, em 1468."
  ],
  must:[
    {t:"Muralla de Ávila", area:"toda a cidade velha", slot:"m", tags:["historia","natureza"], pay:1, book:"h", price:"~5 € (grátis ter de 14h às 16h)", link:"https://muralladeavila.com", tip:"Entre pela Casa de las Carnicerías ou pela Puerta del Alcázar e caminhe pelo adarve. No inverno fecha às 18h; de noite, veja-a iluminada por fora."},
    {t:"Catedral del Salvador", area:"dentro da muralha", slot:"m", tags:["historia","arte"], pay:1, book:"h", price:"~7 €", link:"https://catedralavila.es", tip:"Pedra granítica sangrenta (vermelha e branca) por dentro, retábulo de Berruguete e o túmulo de El Tostado. A abside é uma torre da muralha."},
    {t:"Basílica de San Vicente", area:"fora da muralha, norte", slot:"t", tags:["historia","arte"], pay:1, book:"h", price:"~3 €", link:"https://www.basilicasanvicente.es", tip:"Românica, com o cenotáfio dos mártires esculpido como uma história em quadrinhos do século XII."},
    {t:"Convento de Santa Teresa e Museu", area:"Plaza de la Santa", slot:"t", tags:["historia"], pay:1, book:"h", price:"igreja grátis; museu ~2 €", link:"https://www.google.com/maps/search/Convento+de+Santa+Teresa+%C3%81vila", tip:"Construído sobre a casa onde ela nasceu. No museu há o dedo da santa, relíquia que Franco guardava na mesa de cabeceira."},
    {t:"Los Cuatro Postes", area:"outra margem do Adaja", slot:"n", tags:["natureza"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Los+Cuatro+Postes", tip:"O mirante da foto clássica da muralha inteira, 15 min a pé pela ponte. Vá ao pôr do sol e espere acenderem as luzes."},
    {t:"Monasterio de Santo Tomás", area:"sul, fora da muralha", slot:"m", tags:["historia","arte"], pay:1, book:"h", price:"~4 €", link:"https://www.monasteriosantotomas.com", tip:"Três claustros e o túmulo do príncipe Juan, único filho homem dos Reis Católicos, morto aos 19 anos. Tranquilo e pouco visitado."},
    {t:"Chuletón de Ávila", area:"restaurantes dentro da muralha", slot:"n", tags:["comida"], pay:1, book:"d", price:"~30 € por pessoa", link:"https://www.google.com/maps/search/El+Almac%C3%A9n+%C3%81vila", tip:"Peça um para dois com patatas revolconas e judías del Barco. El Almacén (vista da muralha), Las Cancelas, La Bruja."},
    {t:"Plaza del Mercado Chico e Mercado Grande", area:"centro", slot:"t", tags:["comida"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Plaza+del+Mercado+Chico", tip:"A praça porticada da prefeitura, dentro da muralha, e a grande em frente à Puerta del Alcázar, com a loja La Flor de Castilla para as yemas."},
    {t:"Palacio de los Verdugo e muralha norte", area:"dentro da muralha", slot:"t", tags:["historia"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Palacio+de+los+Verdugo", tip:"Palácios de pedra dos séculos XV e XVI espalhados pelas ruas; o dos Verdugo tem um verraco (escultura de touro) celta na porta."}
  ],
  daytrips:[
    {t:"Segovia", how:"Ônibus Avanza, 1 h", price:"~7 € cada trecho", book:"d", link:"https://www.avanzabus.com", tags:["historia","comida"], tip:"Aqueduto, Alcázar e cochinillo. As duas cidades juntas num dia longo saindo de Madri é possível, mas corrido."},
    {t:"Salamanca", how:"Trem, 1 h, ou ônibus, 1 h 15", price:"~10 € cada trecho", book:"h", link:"https://www.renfe.com", tags:["historia"], tip:"Plaza Mayor e universidade; durma lá se puder."},
    {t:"Madrid", how:"Trem, 1 h 30", price:"~12 € cada trecho", book:"d", link:"https://www.renfe.com", tags:["arte"], tip:"Ávila é um bate-volta fácil de Madri, ou a primeira parada a caminho de Salamanca."}
  ],
  transit:[
    {t:"Chegar a Ávila", o:[
      ["Trem de Madrid Chamartín ou Príncipe Pío","~12 €, 1 h 30","https://www.renfe.com","Regionais frequentes, sem reserva. A estação fica a 15 min a pé da muralha."],
      ["Ônibus Avanza/Jiménez Dorado de Estación Sur","~10 €, 1 h 15","https://www.avanzabus.com","Chega à rodoviária, 10 min da muralha. Também liga Ávila a Segovia e Salamanca."]]},
    {t:"Dentro da cidade", o:[["A pé","grátis","","A cidade velha é pequena; os Cuatro Postes ficam a 15 min, descendo e subindo."]]}
  ],
  days:[
    [["m","Muralla de Ávila"],["m","Catedral del Salvador"],["t","Basílica de San Vicente"],["t","Convento de Santa Teresa e Museu"],["n","Los Cuatro Postes"]],
    [["m","Monasterio de Santo Tomás"],["t","Plaza del Mercado Chico e Mercado Grande|Palacio de los Verdugo e muralha norte"],["n","Chuletón de Ávila"]]
  ]
},
tarragona: {
  name:"Tarragona", emoji:"🏛️", region:"Catalunha · 1 h de Barcelona", cityMax:2,
  stay:{min:1, ideal:1, text:"Vale 1 dia: anfiteatro romano de frente para o mar, catedral e a Part Alta. Com 2 dias, o aqueduto e Reus ou um dia de praia."},
  curios:[
    "<b>Tarraco</b> foi a capital romana da Hispânia Citerior; Augusto governou o império daqui por dois anos. O conjunto é Patrimônio da Humanidade.",
    "O <b>anfiteatro</b> fica em cima da praia: os romanos viam gladiadores com o Mediterrâneo de fundo. Ali foi queimado vivo o bispo Fructuoso em 259.",
    "Tarragona é a capital dos <b>castells</b> (torres humanas): o concurso de castells, a cada dois anos em outubro, lota a praça de touros.",
    "O molho <b>romesco</b> (pimentão seco, amêndoa, tomate, alho) nasceu entre os pescadores do bairro do Serrallo.",
    "O licor <b>Chartreuse</b> foi produzido em Tarragona de 1903 a 1989, quando os monges cartuxos foram expulsos da França: há garrafas 'Tarragona' de colecionador.",
    "Fevereiro em Tarragona: 7 a 15 °C, muito sol e praias vazias para caminhar; o PortAventura só reabre em março."
  ],
  must:[
    {t:"Anfiteatro romano", area:"beira-mar", slot:"m", tags:["historia","natureza"], pay:1, book:"h", price:"~5 € (passe de monumentos ~15 €)", link:"https://www.tarragonaturisme.cat", tip:"O passe cobre anfiteatro, circo, pretório, muralhas e fórum. Comece aqui de manhã, com a luz do mar."},
    {t:"Circo romano e Pretório", area:"Part Alta", slot:"m", tags:["historia"], pay:1, book:"h", price:"incluído no passe", link:"https://www.tarragonaturisme.cat", tip:"As galerias abobadadas do circo passam sob as casas da cidade; suba à torre do Pretório para ver a cidade e o mar."},
    {t:"Catedral de Tarragona", area:"Part Alta", slot:"t", tags:["historia","arte"], pay:1, book:"h", price:"~11 €", link:"https://catedraldetarragona.com", tip:"Românico-gótica, no lugar do templo de Augusto; o claustro tem um capitel com a 'procissão dos ratos' enterrando um gato."},
    {t:"Passeig Arqueològic e muralhas", area:"Part Alta", slot:"t", tags:["historia","natureza"], pay:1, book:"h", price:"incluído no passe", link:"https://www.tarragonaturisme.cat", tip:"Caminho entre as muralhas romanas do século II a.C. (as mais antigas fora da Itália) e as muralhas do século XVIII."},
    {t:"Balcó del Mediterrani e Rambla Nova", area:"centro", slot:"t", tags:["natureza"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Balc%C3%B3+del+Mediterrani", tip:"Tocar o corrimão de ferro do balcão dá sorte ('tocar ferro'). A Rambla Nova é a avenida de passeio, com o monumento aos castellers."},
    {t:"Part Alta: praças e tapas", area:"Part Alta", slot:"n", tags:["comida"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Pla%C3%A7a+de+la+Font+Tarragona", tip:"Plaça de la Font (dentro do antigo circo) e Plaça del Fòrum, cheias de terraços. Vermute e tapas ao fim da tarde."},
    {t:"El Serrallo: peixe e romesco", area:"porto", slot:"n", tags:["comida"], pay:1, book:"d", price:"~30 € por pessoa", link:"https://www.google.com/maps/search/El+Serrallo+Tarragona", tip:"Bairro de pescadores com restaurantes de peixe à beira do porto: romesco, arrossejat e fideus rossos. Reserve no fim de semana."},
    {t:"Pont del Diable (aqueduto de Les Ferreres)", area:"4 km ao norte", slot:"m", tags:["historia","natureza"], pay:0, book:"g", price:"grátis (ônibus 5 ou 85, ~1,50 €)", link:"https://www.google.com/maps/search/Pont+del+Diable+Tarragona", tip:"Aqueduto romano de 217 m, num parque de pinheiros; dá para andar por cima. Ônibus 5 até Sant Salvador e 10 min a pé."},
    {t:"Mercat Central", area:"centro", slot:"m", tags:["comida"], pay:0, book:"g", price:"grátis", link:"https://www.mercatsdetarragona.cat", tip:"Mercado modernista restaurado, com um balcão de tapas e produtos do Camp de Tarragona (azeitona arbequina, avelãs de Reus)."},
    {t:"Platja del Miracle", area:"abaixo do anfiteatro", slot:"t", tags:["natureza"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Platja+del+Miracle", tip:"Praia da cidade, 500 m de areia ao lado do anfiteatro. Em fevereiro, para caminhar e ver o pôr do sol; mergulhar é para corajosos."},
    {t:"Museu Nacional Arqueològic (Tinglado 4)", area:"porto", slot:"t", tags:["historia","arte"], pay:1, book:"h", price:"~4 €", link:"https://www.mnat.cat", tip:"Mosaicos e esculturas de Tarraco, em exposição provisória no porto enquanto a sede é reformada (confira no site)."}
  ],
  daytrips:[
    {t:"Reus", how:"Trem, 15 min, ou ônibus, 25 min", price:"~3 € cada trecho; Gaudí Centre ~9 €", book:"h", link:"https://www.gaudicentre.cat", tags:["arte","comida"], tip:"Cidade natal de Gaudí (sem obra dele, mas com o Gaudí Centre e 80 prédios modernistas) e capital do vermute: Vermuts Rofes, Museu del Vermut."},
    {t:"Sitges", how:"Trem regional, 40 min", price:"~5 € cada trecho", book:"h", link:"https://www.renfe.com", tags:["natureza"], tip:"Praias, calçadão e o Carnaval de fevereiro, um dos mais famosos da Espanha. Confira as datas."},
    {t:"Monestir de Poblet", how:"Trem até L'Espluga + 3 km a pé ou táxi, 1 h 15", price:"~7 € cada trecho; mosteiro ~9 €", book:"h", link:"https://www.poblet.cat", tags:["historia"], tip:"Mosteiro cisterciense Patrimônio da Humanidade, com os túmulos dos reis de Aragão. Vinhos da Conca de Barberà no caminho."},
    {t:"Barcelona", how:"Trem regional, 1 h 10, ou AVE, 35 min", price:"~8 € regional; ~15 a 30 € AVE", book:"h", link:"https://www.renfe.com", tags:["arte"], tip:"Tarragona funciona como base barata e tranquila a 1 h de Barcelona."}
  ],
  transit:[
    {t:"Chegar a Tarragona", o:[
      ["Trem regional de Barcelona Sants","~8 €, 1 h 10","https://www.renfe.com","Sem reserva, de hora em hora, e chega à estação do centro, ao lado da praia e 10 min a pé da Part Alta. Melhor opção."],
      ["AVE até Camp de Tarragona","~15 a 30 €, 35 min","https://www.renfe.com","A estação fica a 10 km da cidade: ônibus Plana (~2,50 €, 20 min) ou táxi ~20 €. Só compensa vindo de Madri ou Zaragoza."],
      ["Euromed de Valencia","~25 a 40 €, 2 h","https://www.renfe.com","Chega à estação do centro, pela costa."]]},
    {t:"Dentro da cidade", o:[
      ["A pé","grátis","","Tudo cabe em 20 minutos; a Part Alta é subida leve."],
      ["Ônibus EMT","~1,50 €","https://emtanemambtu.cat","Linha 5 ou 85 para o Pont del Diable; 1 ou 3 para o Serrallo."]]}
  ],
  days:[
    [["m","Anfiteatro romano"],["m","Circo romano e Pretório"],["t","Catedral de Tarragona"],["t","Passeig Arqueològic e muralhas|Balcó del Mediterrani e Rambla Nova"],["n","El Serrallo: peixe e romesco"]],
    [["m","Pont del Diable (aqueduto de Les Ferreres)"],["m","Mercat Central"],["t","Platja del Miracle|Museu Nacional Arqueològic (Tinglado 4)"],["n","Part Alta: praças e tapas"]]
  ]
},
ronda: {
  name:"Ronda", emoji:"🌉", region:"Andaluzia · serra, 2 h de Sevilla", cityMax:2,
  stay:{min:1, ideal:1, text:"Vale 1 dia e uma noite: de manhã e à noite, sem as excursões, a ponte sobre o Tajo é só sua. 2 dias com Setenil ou os pueblos blancos."},
  curios:[
    "A <b>Puente Nuevo</b> (1793) cruza o desfiladeiro do Tajo a 98 m de altura e levou 42 anos para ser construída. A sala acima do arco já foi prisão.",
    "A <b>praça de touros</b> de Ronda (1785) é a mais antiga da Espanha e berço das regras da tourada a pé, criadas pela família Romero.",
    "<b>Hemingway</b> e <b>Orson Welles</b> amavam Ronda; Welles pediu para ter as cinzas enterradas na fazenda do toureiro Antonio Ordóñez, aqui.",
    "Ronda foi a última cidade muçulmana da região: caiu em 1485, sete anos antes de Granada. Os banhos árabes são os mais bem conservados da Espanha.",
    "A estrada de Ronda ao mar foi território dos <b>bandoleiros</b> no século XIX, romantizados pelos viajantes ingleses; há um museu deles.",
    "Fevereiro em Ronda: 5 a 15 °C, ar de serra, amendoeiras em flor no fim do mês e a vista do Tajo limpa."
  ],
  must:[
    {t:"Puente Nuevo e El Tajo", area:"centro", slot:"m", tags:["historia","natureza"], pay:0, book:"g", price:"grátis (centro de interpretação ~2,50 €)", link:"https://www.turismoderonda.es", tip:"Veja a ponte de cima e depois desça pelo caminho de Los Molinos ou pelo Mirador de Aldehuela para vê-la inteira, de baixo."},
    {t:"Plaza de Toros e Museu", area:"centro", slot:"m", tags:["historia"], pay:1, book:"h", price:"~9 €", link:"https://www.rmcr.org", tip:"Arena de pedra com arcadas de duas alturas, museu de trajes e a Real Maestranza de cavalaria. Entre na arena vazia."},
    {t:"Casa del Rey Moro e La Mina", area:"La Ciudad", slot:"t", tags:["historia","natureza"], pay:1, book:"h", price:"~10 €", link:"https://www.casadelreymoro.org", tip:"Jardim projetado por Forestier e a Mina: 231 degraus escavados na rocha até o fundo do desfiladeiro, do século XIV. Escorregadio: calçado bom."},
    {t:"Baños Árabes", area:"bairro de San Miguel", slot:"t", tags:["historia"], pay:1, book:"h", price:"~4 €", link:"https://www.turismoderonda.es", tip:"Banhos do século XIII com as claraboias em estrela intactas. Ficam embaixo, junto à Puente Viejo e ao Arco de Felipe V."},
    {t:"Palacio de Mondragón", area:"La Ciudad", slot:"t", tags:["historia"], pay:1, book:"h", price:"~4 €", link:"https://www.turismoderonda.es", tip:"Palácio mudéjar com pátios e jardins pendurados sobre o Tajo; hoje museu da cidade."},
    {t:"Alameda del Tajo e Paseo de los Ingleses", area:"centro", slot:"t", tags:["natureza"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Alameda+del+Tajo", tip:"Parque com mirantes sobre o vale e a serra de Grazalema. Siga o passeio pela borda até o Parador para o pôr do sol."},
    {t:"Iglesia de Santa María la Mayor", area:"La Ciudad", slot:"t", tags:["historia"], pay:1, book:"h", price:"~5 €", link:"https://www.turismoderonda.es", tip:"Igreja sobre a mesquita (o mihrab ainda aparece) na praça mais bonita da cidade velha, a Duquesa de Parcent."},
    {t:"Bodega Descalzos Viejos", area:"vale, 2 km", slot:"m", tags:["comida","natureza"], pay:1, book:"s", price:"~25 € com degustação", link:"https://www.descalzosviejos.com", tip:"Vinícola num convento do século XVI com afrescos, abaixo do Tajo. Só com reserva; Ronda tem vinhos de serra surpreendentes."},
    {t:"Mirador de Aldehuela e caminho de Los Molinos", area:"abaixo da ponte", slot:"m", tags:["natureza"], pay:0, book:"g", price:"grátis", link:"https://www.google.com/maps/search/Mirador+de+Aldehuela", tip:"Trilha de 30 min que desce ao vale para a vista inteira da ponte e das casas penduradas. Volta é subida."},
    {t:"Tapas na Calle Nueva e Plaza del Socorro", area:"centro", slot:"n", tags:["comida"], pay:1, book:"h", price:"~18 € por pessoa", link:"https://www.google.com/maps/search/Plaza+del+Socorro+Ronda", tip:"Tragatapas, Bar Lechuguita (tapas a 1 €), De Locos Tapas. Peça rabo de toro e queijo payoyo."}
  ],
  daytrips:[
    {t:"Setenil de las Bodegas", how:"Táxi ou carro, 25 min (ônibus escasso)", price:"táxi ~40 € ida e volta", book:"h", link:"https://www.google.com/maps/search/Setenil+de+las+Bodegas", tags:["historia","comida"], tip:"Vila com ruas e bares embaixo de rochas enormes (Calle Cuevas del Sol). Meio dia e um almoço de chacinas."},
    {t:"Pueblos blancos: Grazalema e Zahara", how:"Carro, 40 min (ônibus 1 por dia)", price:"aluguel de carro ~40 € o dia", book:"h", link:"https://www.google.com/maps/search/Grazalema", tags:["natureza"], tip:"Vilas brancas no parque natural mais chuvoso da Espanha; queijo payoyo e trilhas. Só vale com carro."},
    {t:"Cueva de la Pileta", how:"Carro ou táxi, 25 min", price:"~10 €, visita guiada", book:"s", link:"https://www.cuevadelapileta.es", tags:["historia","natureza"], tip:"Pinturas rupestres de 20 mil anos, visita com lampião. Reserve: grupos pequenos."},
    {t:"Málaga", how:"Trem, 1 h 45, ou ônibus, 1 h 45", price:"~12 € cada trecho", book:"h", link:"https://www.renfe.com", tags:["arte","natureza"], tip:"Museu Picasso, Alcazaba e mar. Ronda liga Sevilla à Costa do Sol: dá para seguir viagem."}
  ],
  transit:[
    {t:"Chegar a Ronda", o:[
      ["Ônibus Damas de Sevilla (Prado de San Sebastián)","~13 €, 1 h 45 a 2 h 30","https://www.damas-sa.es","4 a 6 por dia; compre online na véspera. Não há trem direto de Sevilla."],
      ["Trem de Málaga ou Córdoba","~12 € de Málaga, 1 h 45; ~25 € de Córdoba, 1 h 45","https://www.renfe.com","A linha Córdoba–Ronda–Algeciras é uma das mais bonitas da Espanha. A estação fica a 15 min a pé da ponte."],
      ["De Granada","ônibus Alsa, 2 h 30 a 3 h","https://www.alsa.com","Poucos por dia; confira."]]},
    {t:"Dentro da cidade", o:[["A pé","grátis","","Tudo fica a 15 minutos da ponte. Descer ao vale é trilha; a volta cansa."],["Táxi para Setenil ou a Pileta","~40 € ida e volta","","Combine o preço e a espera antes de sair; ponto na Plaza del Socorro."]]}
  ],
  days:[
    [["m","Puente Nuevo e El Tajo"],["m","Plaza de Toros e Museu"],["t","Casa del Rey Moro e La Mina|Baños Árabes"],["t","Palacio de Mondragón|Iglesia de Santa María la Mayor"],["n","Tapas na Calle Nueva e Plaza del Socorro"]],
    [["m","Mirador de Aldehuela e caminho de Los Molinos|Bodega Descalzos Viejos"],["t","Alameda del Tajo e Paseo de los Ingleses"],["n","Tapas na Calle Nueva e Plaza del Socorro"]]
  ]
}
};
