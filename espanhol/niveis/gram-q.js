/* Exercícios de cada lição de gramática: frase com lacuna (q), opções (o), índice da certa (a), frase completa para ouvir (s) e o porquê (why). */
const GRAM_Q = {
 "el-la":[
  {q:"___ leche está fría.", o:["El","La"], a:1, s:"La leche está fría.", why:"Leche é feminino em espanhol: la leche."},
  {q:"___ viaje es largo.", o:["El","La"], a:0, s:"El viaje es largo.", why:"Palavras em -aje são masculinas: el viaje, el garaje."},
  {q:"___ agua está buena.", o:["El","La"], a:0, s:"El agua está buena.", why:"Agua é feminino, mas leva el no singular porque começa com 'a' forte."},
  {q:"___ estación está cerca.", o:["El","La"], a:1, s:"La estación está cerca.", why:"Palavras em -ción são femininas."},
  {q:"Me gusta ___ color rojo.", o:["el","la"], a:0, s:"Me gusta el color rojo.", why:"Color é masculino: el color."},
  {q:"___ sal, por favor.", o:["El","La"], a:1, s:"La sal, por favor.", why:"Sal é feminino: la sal."}
 ],
 "un-una":[
  {q:"Quiero ___ café con leche.", o:["un","una"], a:0, s:"Quiero un café con leche.", why:"Café é masculino: un café."},
  {q:"Hay ___ farmacia en la esquina.", o:["un","una","la"], a:1, s:"Hay una farmacia en la esquina.", why:"Depois de hay usa-se un/una, e farmacia é feminino."},
  {q:"Son ___ veinte minutos.", o:["unos","unas"], a:0, s:"Son unos veinte minutos.", why:"Unos + número = mais ou menos; minutos é masculino."},
  {q:"Soy ___ contable.", o:["una","(nada)"], a:1, s:"Soy contable.", why:"Profissão vai sem artigo: soy contable."},
  {q:"Necesito ___ habitación doble.", o:["un","una"], a:1, s:"Necesito una habitación doble.", why:"Habitación, em -ción, é feminino."},
  {q:"Tengo ___ problema.", o:["un","una"], a:0, s:"Tengo un problema.", why:"Problema é masculino, como em português: un problema."}
 ],
 "lo":[
  {q:"___ importante es llegar.", o:["Lo","El"], a:0, s:"Lo importante es llegar.", why:"Lo + adjetivo = 'o que é importante': ideia, não coisa."},
  {q:"No ___ sé.", o:["lo","el"], a:0, s:"No lo sé.", why:"Lo substitui 'isso': não sei isso."},
  {q:"Quiero ___ coche rojo.", o:["lo","el"], a:1, s:"Quiero el coche rojo.", why:"Antes de substantivo é el, nunca lo."},
  {q:"___ siento mucho.", o:["Lo","El"], a:0, s:"Lo siento mucho.", why:"Lo siento = sinto isso = sinto muito."},
  {q:"Pide ___ que quieras.", o:["lo","el"], a:0, s:"Pide lo que quieras.", why:"Lo que = o que (aquilo que)."},
  {q:"¿El jamón? ___ quiero para llevar.", o:["Lo","El"], a:0, s:"Lo quiero para llevar.", why:"Pronome que substitui o presunto: lo."}
 ],
 "ser-estar-hay":[
  {q:"¿___ un cajero cerca?", o:["Hay","Está","Es"], a:0, s:"¿Hay un cajero cerca?", why:"Existência: hay (tem, há)."},
  {q:"¿Dónde ___ la estación?", o:["es","está","hay"], a:1, s:"¿Dónde está la estación?", why:"Lugar é sempre estar, mesmo de coisas fixas."},
  {q:"___ de Brasil.", o:["Soy","Estoy","Hay"], a:0, s:"Soy de Brasil.", why:"Origem define quem você é: ser."},
  {q:"El museo ___ cerrado hoy.", o:["es","está","hay"], a:1, s:"El museo está cerrado hoy.", why:"Estado passageiro: estar."},
  {q:"___ las dos de la tarde.", o:["Son","Están","Hay"], a:0, s:"Son las dos de la tarde.", why:"Horas com ser: son las dos."},
  {q:"___ mucha gente en la plaza.", o:["Es","Está","Hay"], a:2, s:"Hay mucha gente en la plaza.", why:"Tem gente = existência: hay."}
 ],
 "haber":[
  {q:"Hoy ___ comido muy bien.", o:["he","tengo","hay"], a:0, s:"Hoy he comido muy bien.", why:"Ação feita hoje: he + particípio."},
  {q:"¿___ estado en Sevilla?", o:["Has","Tienes","Hay"], a:0, s:"¿Has estado en Sevilla?", why:"Experiência de vida: has estado."},
  {q:"El tren ___ salido.", o:["ha","tiene","a"], a:0, s:"El tren ha salido.", why:"Ha (verbo haber) + salido; 'a' sem h é preposição."},
  {q:"___ dos hijos.", o:["He","Tengo","Hay"], a:1, s:"Tengo dos hijos.", why:"Posse: tener, não haber."},
  {q:"___ llegado esta mañana.", o:["Hemos","Tenemos"], a:0, s:"Hemos llegado esta mañana.", why:"Nós + ação feita hoje: hemos llegado."},
  {q:"Ana ___ ido ___ Madrid.", o:["ha / a","a / ha","ha / ha"], a:0, s:"Ana ha ido a Madrid.", why:"Ha = verbo (foi); a = preposição (para)."}
 ],
 "pronomes":[
  {q:"¿___ eres de aquí? (informal)", o:["Tú","Usted","Vosotros"], a:0, s:"¿Tú eres de aquí?", why:"Informal, uma pessoa: tú."},
  {q:"¿___ habla portugués, señor?", o:["Tú","Usted","Vosotros"], a:1, s:"¿Usted habla portugués, señor?", why:"Formal com uma pessoa: usted, verbo na 3ª pessoa."},
  {q:"¿___ venís mañana? (vocês, informal)", o:["Ustedes","Vosotros","Ellos"], a:1, s:"¿Vosotros venís mañana?", why:"Vocês informal na Espanha: vosotros + venís."},
  {q:"___ somos de Brasil.", o:["Nosotras","Vosotras","Ellas"], a:0, s:"Nosotras somos de Brasil.", why:"Somos = nós."},
  {q:"Carmen y Ana son amigas. ___ viven en Madrid.", o:["Ellos","Ellas","Ustedes"], a:1, s:"Ellas viven en Madrid.", why:"Duas mulheres: ellas."},
  {q:"(Yo) ___ un café, por favor.", o:["quiero","quieres","quiere"], a:0, s:"Quiero un café, por favor.", why:"Eu: quiero. O pronome 'yo' pode sumir, o verbo já diz."}
 ],
 "presente":[
  {q:"Yo ___ un poco de español.", o:["hablo","hablas","habla"], a:0, s:"Hablo un poco de español.", why:"-ar, eu: hablo."},
  {q:"Nosotros ___ a las dos.", o:["come","comemos","comen"], a:1, s:"Comemos a las dos.", why:"-er, nós: comemos."},
  {q:"Ellos ___ en Madrid.", o:["vive","viven","vivimos"], a:1, s:"Ellos viven en Madrid.", why:"Eles: terminação -n (viven), não -m."},
  {q:"¿Tú ___ café?", o:["tomo","tomas","toma"], a:1, s:"¿Tú tomas café?", why:"Tu/você: -as."},
  {q:"Usted ___ muy bien.", o:["hablas","habla","hablan"], a:1, s:"Usted habla muy bien.", why:"Usted vai com a 3ª pessoa: habla."},
  {q:"Yo ___ ir, pero no ___.", o:["quiero / puedo","quiere / puede","queremos / podemos"], a:0, s:"Quiero ir, pero no puedo.", why:"Troca de vogal no meio: quiero, puedo."}
 ],
 "irregulares":[
  {q:"¿___ ayudarme, por favor?", o:["Puede","Puedo","Hace"], a:0, s:"¿Puede ayudarme, por favor?", why:"Pedido educado: ¿puede + infinitivo?"},
  {q:"___ a pagar con tarjeta.", o:["Voy","Vas","Va"], a:0, s:"Voy a pagar con tarjeta.", why:"Futuro próximo: voy a + infinitivo."},
  {q:"___ que ir a la estación.", o:["Tengo","Hago","Soy"], a:0, s:"Tengo que ir a la estación.", why:"Obrigação: tener que + infinitivo."},
  {q:"___ mucho calor hoy.", o:["Hace","Es","Tiene"], a:0, s:"Hace mucho calor hoy.", why:"Tempo e clima: hace calor, hace frío."},
  {q:"___ hambre.", o:["Tengo","Soy","Estoy"], a:0, s:"Tengo hambre.", why:"Fome, sede, sono, frio: tener."},
  {q:"¿Qué ___ usted mañana?", o:["hace","hago","hacen"], a:0, s:"¿Qué hace usted mañana?", why:"Usted: hace (3ª pessoa)."}
 ],
 "perguntas":[
  {q:"¿___ está el baño?", o:["Dónde","Qué","Cuándo"], a:0, s:"¿Dónde está el baño?", why:"Lugar: dónde."},
  {q:"¿___ cuesta?", o:["Cuánto","Cuántos","Cómo"], a:0, s:"¿Cuánto cuesta?", why:"Quanto custa: cuánto (singular)."},
  {q:"¿___ te llamas?", o:["Cuál","Cómo","Qué"], a:1, s:"¿Cómo te llamas?", why:"'Qual é seu nome' em espanhol é ¿cómo te llamas?"},
  {q:"¿___ personas sois?", o:["Cuánto","Cuántas","Cuántos"], a:1, s:"¿Cuántas personas sois?", why:"Personas é feminino plural: cuántas."},
  {q:"¿___ hora es?", o:["Qué","Cuál","Cómo"], a:0, s:"¿Qué hora es?", why:"Qué antes de substantivo: qué hora."},
  {q:"¿___ está cerrado?", o:["Porque","Por qué","Porqué"], a:1, s:"¿Por qué está cerrado?", why:"Pergunta: por qué, separado e com acento."}
 ],
 "gustar":[
  {q:"Me ___ el jamón.", o:["gusta","gustan","gusto"], a:0, s:"Me gusta el jamón.", why:"Uma coisa: gusta."},
  {q:"Me ___ las tapas.", o:["gusta","gustan"], a:1, s:"Me gustan las tapas.", why:"Várias coisas: gustan."},
  {q:"¿___ gusta Madrid? (você)", o:["Me","Te","Le"], a:1, s:"¿Te gusta Madrid?", why:"Você gosta: te gusta."},
  {q:"A mi madre ___ encanta viajar.", o:["le","la","se"], a:0, s:"A mi madre le encanta viajar.", why:"Ela: le encanta."},
  {q:"Me ___ la cabeza.", o:["duele","duelen","dolor"], a:0, s:"Me duele la cabeza.", why:"Doler funciona como gustar: me duele."},
  {q:"___ gusta mucho este barrio. (nós)", o:["Nos","Os","Les"], a:0, s:"Nos gusta mucho este barrio.", why:"Nós: nos gusta."}
 ],
 "objeto":[
  {q:"¿___ puede ayudar? (a mim)", o:["Me","Te","Le"], a:0, s:"¿Me puede ayudar?", why:"Me = a mim, antes do verbo conjugado."},
  {q:"___ llamo mañana. (a você)", o:["Te","Me","Lo"], a:0, s:"Te llamo mañana.", why:"Te = a você."},
  {q:"¿El vino? ___ quiero tinto.", o:["Lo","La","Le"], a:0, s:"Lo quiero tinto.", why:"Vino é masculino: lo."},
  {q:"¿La cuenta? ___ pago yo.", o:["Lo","La","Le"], a:1, s:"La pago yo.", why:"Cuenta é feminino: la."},
  {q:"___ doy las llaves a Carmen.", o:["Le","La","Lo"], a:0, s:"Le doy las llaves a Carmen.", why:"Dar algo a alguém: le (objeto indireto)."},
  {q:"¿Puede ayudar___?", o:["me","mi","yo"], a:0, s:"¿Puede ayudarme?", why:"Com infinitivo o pronome gruda no fim: ayudarme."}
 ],
 "muy-mucho":[
  {q:"Está ___ bueno.", o:["muy","mucho"], a:0, s:"Está muy bueno.", why:"Antes de adjetivo: muy."},
  {q:"Hay ___ gente.", o:["muy","mucha","mucho"], a:1, s:"Hay mucha gente.", why:"Antes de substantivo feminino: mucha."},
  {q:"___ gracias.", o:["Muy","Muchas","Mucho"], a:1, s:"Muchas gracias.", why:"Gracias é plural feminino: muchas gracias."},
  {q:"Me gusta ___.", o:["muy","mucho"], a:1, s:"Me gusta mucho.", why:"Depois do verbo, sozinho: mucho."},
  {q:"Hoy hace ___ frío.", o:["muy","mucho"], a:1, s:"Hoy hace mucho frío.", why:"Frío aqui é substantivo (faz frio): mucho frío."},
  {q:"Yo ___ voy. (também não)", o:["también","tampoco"], a:1, s:"Yo tampoco voy.", why:"Também não = tampoco."}
 ],
 "preposicoes":[
  {q:"Voy ___ centro en metro.", o:["al","a el","en el"], a:0, s:"Voy al centro en metro.", why:"A + el = al."},
  {q:"Vengo ___ hotel.", o:["del","de el","do"], a:0, s:"Vengo del hotel.", why:"De + el = del."},
  {q:"Veo ___ Carmen en la plaza.", o:["a","(nada)","la"], a:0, s:"Veo a Carmen en la plaza.", why:"Pessoa como objeto leva 'a': veo a Carmen."},
  {q:"Gracias ___ todo.", o:["por","para"], a:0, s:"Gracias por todo.", why:"Agradecer: por."},
  {q:"Es ___ llevar.", o:["por","para"], a:1, s:"Es para llevar.", why:"Finalidade: para."},
  {q:"Vamos ___ tren.", o:["en","de","a"], a:0, s:"Vamos en tren.", why:"Meio de transporte: en tren, en coche."}
 ],
 "negacao":[
  {q:"___ entiendo.", o:["No","Nada","Nunca"], a:0, s:"No entiendo.", why:"Negar o verbo: no antes dele."},
  {q:"No tengo ___ que declarar.", o:["nada","algo","nadie"], a:0, s:"No tengo nada que declarar.", why:"Depois do verbo negado: nada (dupla negação é certa)."},
  {q:"___ he estado aquí.", o:["Nunca","No nunca","Nada"], a:0, s:"Nunca he estado aquí.", why:"Nunca antes do verbo dispensa o 'no'."},
  {q:"No hay ___ en la calle.", o:["nadie","alguien","nada"], a:0, s:"No hay nadie en la calle.", why:"Pessoa: nadie (ninguém)."},
  {q:"No quiero ___ carne ___ pescado.", o:["ni / ni","y / y","o / o"], a:0, s:"No quiero ni carne ni pescado.", why:"Nem… nem: ni… ni."},
  {q:"Yo ___ tengo hambre. (também não)", o:["tampoco","también","no"], a:0, s:"Yo tampoco tengo hambre.", why:"Também não: tampoco."}
 ]
};
