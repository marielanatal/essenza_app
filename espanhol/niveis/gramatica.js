/* Gramática explicada: lições curtas, em português, para quem fala português e está começando. Cada uma com exemplos para ouvir. */
const GRAMATICA = [
 {id:"el-la", t:"El, la, los, las: o, a, os, as", body:`<p><b>el</b> = o · <b>la</b> = a · <b>los</b> = os · <b>las</b> = as. Funcionam como em português, mas algumas palavras <b>trocam de gênero</b>, e é aí que a gente erra:</p>
  <div class="tblwrap"><table><tr><td>la leche</td><td>o leite</td></tr><tr><td>la sal</td><td>o sal</td></tr><tr><td>la nariz</td><td>o nariz</td></tr><tr><td>la sangre</td><td>o sangue</td></tr><tr><td>el viaje</td><td>a viagem</td></tr><tr><td>el color</td><td>a cor</td></tr><tr><td>el árbol</td><td>a árvore</td></tr><tr><td>el puente</td><td>a ponte</td></tr></table></div>
  <p>Regra de ouro: palavras terminadas em <b>-aje</b> e <b>-or</b> são masculinas (<i>el garaje, el calor</i>); em <b>-ción, -sión, -dad</b> são femininas (<i>la estación, la ciudad</i>).</p>
  <p>Pegadinha: <b>el agua</b>, <b>el aula</b>, <b>el hambre</b>. São femininas, mas levam <i>el</i> no singular porque começam com "a" forte. No plural volta: <i>las aguas</i>.</p>
  <p>Diferente do português: não se usa artigo antes de nome de pessoa (<i>Ana llega</i>, não "la Ana") nem antes de possessivo (<i>mi casa</i>, não "la mi casa").</p>`,
  ex:[["El viaje es largo.","A viagem é longa."],["La leche está fría.","O leite está frio."],["El agua está buena.","A água está boa."],["Los colores de la bandera.","As cores da bandeira."]]},
 {id:"un-una", t:"Un, una, unos, unas: um, uma, uns, umas", body:`<p><b>un</b> = um · <b>una</b> = uma · <b>unos</b> = uns, alguns · <b>unas</b> = umas, algumas.</p>
  <p>O gênero segue a palavra, com as mesmas trocas da lição anterior: <i>un viaje</i> (uma viagem), <i>una señal</i> (um sinal).</p>
  <p><b>Unos / unas</b> também quer dizer "mais ou menos" com números: <i>unos veinte minutos</i> = uns vinte minutos.</p>
  <p>Depois de <b>hay</b> (tem, há) use <i>un/una</i>, nunca <i>el/la</i>: <i>Hay una farmacia</i>. E para profissão, sem artigo: <i>Soy contable</i> (sou contadora).</p>`,
  ex:[["Quiero un café con leche.","Quero um café com leite."],["Hay una farmacia en la esquina.","Tem uma farmácia na esquina."],["Son unos veinte minutos.","São uns vinte minutos."],["Soy contable.","Sou contadora."]]},
 {id:"lo", t:"Lo: o neutro e o pronome", body:`<p><b>Lo</b> não é "o" de <i>el</i>. Tem dois usos:</p>
  <p><b>1. Neutro</b>, para ideias, não para coisas com gênero: <i>lo bueno</i> (o lado bom), <i>lo mejor</i> (o melhor), <i>lo que quieras</i> (o que você quiser), <i>lo de ayer</i> (aquilo de ontem). Nunca antes de um substantivo: "lo coche" não existe, é <i>el coche</i>.</p>
  <p><b>2. Pronome</b> "o/isso", quando substitui algo: <i>¿El jamón? Lo quiero</i> (quero-o). <i>No lo sé</i> (não sei isso). <i>Lo siento</i> (sinto isso = sinto muito).</p>
  <p>Fórmula útil: <b>lo + adjetivo</b> = "o que é…": <i>lo importante es llegar</i>, <i>lo difícil es el subjuntivo</i>.</p>`,
  ex:[["Lo importante es hablar.","O importante é falar."],["No lo sé.","Não sei."],["Lo siento mucho.","Sinto muito."],["Pide lo que quieras.","Peça o que você quiser."]]},
 {id:"ser-estar-hay", t:"Ser, estar e hay", body:`<p>Em espanhol as três palavras se dividem como em português, com uma diferença grande: <b>hay</b>.</p>
  <p><b>Hay</b> = tem, há, existe. Não muda nunca: <i>hay un bar</i>, <i>hay tres bares</i>, <i>¿hay wifi?</i> Em português usamos "tem" para isso; em espanhol <b>tener</b> é só para posse (<i>tengo hambre</i>).</p>
  <p><b>Ser</b> para o que define: identidade, origem, profissão, hora, preço. <i>Soy brasileña. Son las dos. Son diez euros.</i></p>
  <p><b>Estar</b> para lugar e estado: <i>Estoy en Madrid. Está cerrado. Estoy cansada.</i> Para lugar é sempre estar, mesmo de coisas fixas: <i>¿Dónde está la estación?</i></p>
  <p>Pegadinha de comida: <i>el jamón <b>es</b> caro</i> (característica) × <i>el jamón <b>está</b> rico</i> (está gostoso agora).</p>`,
  ex:[["¿Hay un cajero cerca?","Tem um caixa eletrônico perto?"],["Hay tres farmacias en esta calle.","Tem três farmácias nesta rua."],["¿Dónde está la estación?","Onde fica a estação?"],["Soy de Brasil y estoy de vacaciones.","Sou do Brasil e estou de férias."]]},
 {id:"haber", t:"He, has, ha: o verbo haber", body:`<p><b>Haber</b> tem dois trabalhos. Como <b>hay</b> você já viu (tem/há). O outro é ser <b>auxiliar</b>, como o nosso "ter" em "tenho comido", só que muito mais usado.</p>
  <div class="tblwrap"><table><tr><td>he</td><td>eu</td></tr><tr><td>has</td><td>você (tu)</td></tr><tr><td>ha</td><td>ele, ela, o senhor</td></tr><tr><td>hemos</td><td>nós</td></tr><tr><td>habéis</td><td>vocês (Espanha)</td></tr><tr><td>han</td><td>eles, vocês</td></tr></table></div>
  <p>Na Espanha, o que aconteceu <b>hoje</b> ou num tempo que ainda não fechou vai assim: <i><b>He</b> comido</i> (comi hoje), <i>¿<b>Has</b> estado en Toledo?</i> (você já esteve?), <i>El tren <b>ha</b> salido</i> (o trem saiu).</p>
  <p>Não confunda com <b>tener</b>: <i>tengo dos hijos</i> (posse), mas <i>he visto dos museos</i> (ação feita). E <b>ha</b> (verbo) é diferente de <b>a</b> (preposição): <i>ha ido <b>a</b> Madrid</i>.</p>`,
  ex:[["He comido muy bien.","Comi muito bem (hoje)."],["¿Has estado en Sevilla?","Você já esteve em Sevilha?"],["El tren ha salido.","O trem saiu."],["Hemos llegado esta mañana.","Chegamos hoje de manhã."]]},
 {id:"pronomes", t:"Yo, tú, usted, vosotros: quem é quem", body:`<p><b>yo</b> eu · <b>tú</b> você (informal) · <b>usted</b> o senhor, a senhora · <b>él / ella</b> ele, ela · <b>nosotros / nosotras</b> nós · <b>vosotros / vosotras</b> vocês (informal, só na Espanha) · <b>ustedes</b> os senhores, vocês (formal) · <b>ellos / ellas</b> eles, elas.</p>
  <p>Na Espanha, <b>tú</b> é o normal com todo mundo da sua idade, atendentes jovens, amigos. <b>Usted</b> para pessoas mais velhas, polícia, situações formais. Nunca ofende.</p>
  <p><b>Vosotros</b> é "vocês" entre iguais e leva uma forma própria do verbo (<i>vosotros habláis, coméis, vivís</i>). Você vai ouvir muito; para falar, pode usar <i>ustedes</i> (<i>ustedes hablan</i>) e será entendida.</p>
  <p>Como em português, o pronome quase sempre some: <i>Quiero un café</i>, não "yo quiero". O verbo já diz quem fala.</p>`,
  ex:[["¿Tú eres de aquí?","Você é daqui?"],["¿Usted habla portugués?","O senhor fala português?"],["¿Vosotros venís mañana?","Vocês vêm amanhã?"],["Nosotras somos de Brasil.","Nós somos do Brasil."]]},
 {id:"presente", t:"Presente: hablo, como, vivo", body:`<p>Três famílias de verbos, pelas terminações <b>-ar, -er, -ir</b>. Tire a terminação e ponha a da pessoa:</p>
  <div class="tblwrap"><table><tr><td></td><td><b>hablar</b></td><td><b>comer</b></td><td><b>vivir</b></td></tr><tr><td>yo</td><td>hablo</td><td>como</td><td>vivo</td></tr><tr><td>tú</td><td>hablas</td><td>comes</td><td>vives</td></tr><tr><td>usted, él</td><td>habla</td><td>come</td><td>vive</td></tr><tr><td>nosotros</td><td>hablamos</td><td>comemos</td><td>vivimos</td></tr><tr><td>vosotros</td><td>habláis</td><td>coméis</td><td>vivís</td></tr><tr><td>ustedes, ellos</td><td>hablan</td><td>comen</td><td>viven</td></tr></table></div>
  <p>Quase igual ao português. A diferença que mais aparece: a 3ª pessoa do plural termina em <b>-n</b> (<i>hablan, comen</i>), não em "-m".</p>
  <p>Verbos com "troca de vogal" no meio: <b>quiero</b> (querer), <b>puedo</b> (poder), <b>tengo</b> (tener), <b>prefiero</b> (preferir), <b>vuelvo</b> (volver). A troca some no <i>nosotros</i>: <i>queremos, podemos, volvemos</i>.</p>`,
  ex:[["Hablo un poco de español.","Falo um pouco de espanhol."],["Comemos a las dos.","Almoçamos às duas."],["Ellos viven en Madrid.","Eles moram em Madri."],["Quiero ir, pero no puedo.","Quero ir, mas não posso."]]},
 {id:"irregulares", t:"Os sete verbos que resolvem tudo", body:`<p>Com estes sete você monta quase qualquer frase da viagem. Decore só a forma de <b>yo</b> e de <b>usted</b>:</p>
  <div class="tblwrap"><table><tr><td><b>ser</b> (ser)</td><td>soy · es</td></tr><tr><td><b>estar</b> (estar)</td><td>estoy · está</td></tr><tr><td><b>tener</b> (ter)</td><td>tengo · tiene</td></tr><tr><td><b>ir</b> (ir)</td><td>voy · va</td></tr><tr><td><b>querer</b> (querer)</td><td>quiero · quiere</td></tr><tr><td><b>poder</b> (poder)</td><td>puedo · puede</td></tr><tr><td><b>hacer</b> (fazer)</td><td>hago · hace</td></tr></table></div>
  <p>Combinações que valem ouro: <b>quiero + infinitivo</b> (<i>quiero comer</i>), <b>¿puede + infinitivo?</b> (<i>¿puede ayudarme?</i>), <b>voy a + infinitivo</b> (<i>voy a pagar</i> = vou pagar), <b>tengo que + infinitivo</b> (<i>tengo que salir</i> = tenho que sair).</p>
  <p><b>Hacer</b> também é o verbo do tempo: <i>hace calor, hace frío, hace sol</i>.</p>`,
  ex:[["¿Puede ayudarme, por favor?","Pode me ajudar, por favor?"],["Voy a pagar con tarjeta.","Vou pagar com cartão."],["Tengo que ir a la estación.","Tenho que ir à estação."],["Hace mucho calor hoy.","Faz muito calor hoje."]]},
 {id:"perguntas", t:"Perguntar: qué, dónde, cuánto…", body:`<p>As palavras de pergunta levam <b>acento</b> e a frase começa com <b>¿</b>:</p>
  <div class="tblwrap"><table><tr><td>¿Qué?</td><td>O quê? Qual?</td></tr><tr><td>¿Quién?</td><td>Quem?</td></tr><tr><td>¿Dónde?</td><td>Onde?</td></tr><tr><td>¿Cuándo?</td><td>Quando?</td></tr><tr><td>¿Cuánto? ¿Cuánta?</td><td>Quanto? Quanta?</td></tr><tr><td>¿Cómo?</td><td>Como?</td></tr><tr><td>¿Por qué?</td><td>Por quê?</td></tr><tr><td>¿Cuál?</td><td>Qual?</td></tr></table></div>
  <p><b>Qué</b> antes de substantivo (<i>¿qué hora es?</i>); <b>cuál</b> para escolher entre opções (<i>¿cuál prefieres?</i>). Diferente do português: "qual é seu nome?" vira <i>¿cómo te llamas?</i>.</p>
  <p><b>Cuánto</b> concorda: <i>¿cuánto cuesta?</i>, <i>¿cuántos días?</i>, <i>¿cuántas personas?</i></p>
  <p>Pergunta sem palavra de pergunta: só a entonação sobe no fim. <i>¿Tienes wifi?</i></p>`,
  ex:[["¿Dónde está el baño?","Onde fica o banheiro?"],["¿Cuánto cuesta?","Quanto custa?"],["¿Cómo te llamas?","Como você se chama?"],["¿Por qué está cerrado?","Por que está fechado?"]]},
 {id:"gustar", t:"Me gusta: o verbo que funciona ao contrário", body:`<p>Em espanhol não se diz "eu gosto de café". Diz-se <i>o café me agrada</i>: <b>me gusta el café</b>. Quem gosta vira <b>me, te, le, nos, os, les</b>, e o verbo concorda com a coisa:</p>
  <p><b>me gusta</b> + uma coisa (singular ou verbo): <i>me gusta el vino, me gusta viajar</i>.<br><b>me gustan</b> + várias coisas: <i>me gustan las tapas</i>.</p>
  <div class="tblwrap"><table><tr><td>me gusta</td><td>eu gosto</td></tr><tr><td>te gusta</td><td>você gosta</td></tr><tr><td>le gusta</td><td>ele, ela, o senhor gosta</td></tr><tr><td>nos gusta</td><td>nós gostamos</td></tr><tr><td>les gusta</td><td>eles, vocês gostam</td></tr></table></div>
  <p>Mesma lógica: <b>me encanta</b> (adoro), <b>me duele</b> (dói), <b>me parece</b> (acho), <b>me interesa</b>, <b>me falta</b>. Para perguntar: <i>¿Te gusta?</i> Para ênfase: <i>A mí me gusta</i>.</p>`,
  ex:[["Me gusta mucho el jamón.","Gosto muito do presunto."],["Me gustan las tapas.","Gosto das tapas."],["¿Te gusta Madrid?","Você gosta de Madri?"],["Me encanta este barrio.","Adoro este bairro."]]},
 {id:"objeto", t:"Me, te, lo, la, le: me dá, te vejo", body:`<p>Pronomes que vão <b>antes</b> do verbo conjugado (como no português falado, mas sem medo):</p>
  <div class="tblwrap"><table><tr><td>me</td><td>me</td></tr><tr><td>te</td><td>te</td></tr><tr><td>lo / la</td><td>o / a (coisa ou pessoa)</td></tr><tr><td>le</td><td>lhe, para ele/ela/o senhor</td></tr><tr><td>nos</td><td>nos</td></tr><tr><td>los / las / les</td><td>os / as / lhes</td></tr></table></div>
  <p><i>¿Me ayuda?</i> (me ajuda?) · <i>Te llamo mañana</i> (te ligo amanhã) · <i>Lo compro</i> (compro isso) · <i>Le doy las llaves</i> (dou as chaves a ela).</p>
  <p>Com infinitivo, gruda no fim: <i>¿Puede ayudar<b>me</b>?</i>, <i>Quiero ver<b>lo</b></i>. Com dois pronomes, <b>le + lo</b> vira <b>se lo</b>: <i>se lo doy</i> (dou isso a ele).</p>
  <p>Dica da Espanha: você vai ouvir <i>le vi</i> em vez de <i>lo vi</i>. É sotaque de Madri; o padrão é <i>lo</i>.</p>`,
  ex:[["¿Me puede ayudar?","Pode me ajudar?"],["Te llamo mañana.","Te ligo amanhã."],["Lo quiero para llevar.","Quero isso para viagem."],["Se lo doy ahora.","Dou isso a ele agora."]]},
 {id:"muy-mucho", t:"Muy e mucho: o 'muito' que se divide", body:`<p>O nosso "muito" vira duas palavras:</p>
  <p><b>muy</b> + adjetivo ou advérbio: <i>muy bueno, muy caro, muy bien, muy tarde</i>.<br><b>mucho</b> + substantivo, ou sozinho depois do verbo: <i>mucho calor, mucha gente, muchas gracias, me gusta mucho</i>. Concorda: <i>mucho, mucha, muchos, muchas</i>.</p>
  <p>Erro clássico: "muy gracias", "mucho bueno". É <i>muchas gracias</i> e <i>muy bueno</i>. E <b>muito</b> em português não existe em espanhol.</p>
  <p>Parentes: <b>también</b> (também), <b>tampoco</b> (também não: <i>yo tampoco</i>), <b>demasiado</b> (demais), <b>bastante</b> (bastante), <b>poco</b> (pouco), <b>un poco de</b> (um pouco de).</p>`,
  ex:[["Está muy bueno.","Está muito gostoso."],["Hay mucha gente.","Tem muita gente."],["Muchas gracias.","Muito obrigada."],["Me gusta mucho.","Gosto muito."]]},
 {id:"preposicoes", t:"A, de, en, por, para, con", body:`<p>Quase iguais ao português, com três pegadinhas:</p>
  <p><b>a</b> antes de pessoa como objeto: <i>veo <b>a</b> Carmen</i>, <i>llamo <b>a</b> mi madre</i>. Em português não existe esse "a".</p>
  <p><b>en</b> = em, dentro, em cima, e também meio de transporte: <i>en tren, en coche, en avión</i>. A pé é <i>a pie</i> ou <i>andando</i>.</p>
  <p><b>por</b> × <b>para</b>: <i>por</i> é causa, troca, passagem, tempo aproximado (<i>por la mañana, por aquí, gracias por todo, por cinco euros</i>); <i>para</i> é destino e finalidade (<i>para Madrid, para comer, para mí</i>).</p>
  <p>Contrações só duas: <b>al</b> (a + el) e <b>del</b> (de + el): <i>voy al centro, vengo del hotel</i>. "Na", "no", "do", "da" não se contraem: <i>en la calle, de la ciudad</i>.</p>`,
  ex:[["Voy al centro en metro.","Vou ao centro de metrô."],["Vengo del hotel.","Venho do hotel."],["Gracias por todo.","Obrigada por tudo."],["Es para llevar.","É para viagem."]]},
 {id:"negacao", t:"No, nada, nunca, nadie: negar em espanhol", body:`<p><b>No</b> vai antes do verbo e serve para "não" e para "não" de resposta: <i>No entiendo. No, gracias.</i></p>
  <p>Dupla negação é normal e obrigatória quando a palavra negativa vem depois do verbo: <i>No tengo <b>nada</b></i>, <i>No voy <b>nunca</b></i>, <i>No hay <b>nadie</b></i>, <i>No quiero <b>ninguno</b></i>. Se a palavra negativa vem antes, o <i>no</i> some: <i>Nunca voy. Nadie habla.</i></p>
  <p>Para discordar com jeito: <b>no, qué va</b> (que nada), <b>no, no hace falta</b> (não precisa), <b>no pasa nada</b> (tudo bem).</p>
  <p><b>Ni</b> = nem: <i>ni carne ni pescado</i>. <b>Tampoco</b> = também não: <i>yo tampoco</i>.</p>`,
  ex:[["No entiendo.","Não entendo."],["No tengo nada que declarar.","Não tenho nada a declarar."],["Nunca he estado aquí.","Nunca estive aqui."],["No pasa nada.","Tudo bem."]]}
];
