/* Leituras em espanhol (A1-A2) sobre as cidades da viagem, com perguntas de compreensão.
   q: pergunta em espanhol; o: opções; a: índice da certa. Toda palavra é tocável (dicionário). */
const LECTURAS = {
  madrid: [
    {t:"Llegar a Madrid", lvl:"A1", txt:"El avión llega a Madrid por la mañana. El aeropuerto se llama Barajas y está a 15 kilómetros del centro. Para ir al hotel, Ana toma el autobús amarillo, el Exprés Aeropuerto. Cuesta cinco euros y para en la estación de Atocha. El viaje dura treinta minutos. En el hotel, la recepcionista habla despacio y le da la llave de la habitación 204. Ana deja la maleta y sale a pasear. Primero va a la Puerta del Sol, que es el centro de la ciudad. Después come un bocadillo de calamares en un bar de la Plaza Mayor. Por la tarde visita el Palacio Real y, al final del día, ve la puesta de sol en el Templo de Debod. Está cansada, pero muy contenta.",
     q:[{q:"¿Cómo va Ana del aeropuerto al centro?", o:["En taxi","En el autobús Exprés Aeropuerto","En metro"], a:1},
        {q:"¿Cuánto cuesta el autobús?", o:["Cinco euros","Quince euros","Treinta euros"], a:0},
        {q:"¿Qué come Ana en la Plaza Mayor?", o:["Una paella","Churros con chocolate","Un bocadillo de calamares"], a:2},
        {q:"¿Dónde ve la puesta de sol?", o:["En el Palacio Real","En el Templo de Debod","En la Puerta del Sol"], a:1}]},
    {t:"Un día de museos", lvl:"A2", txt:"Hoy Ana quiere ver arte. Compra la entrada del Museo del Prado por internet, así no hace cola. Dentro del museo busca Las Meninas, el cuadro más famoso de Velázquez. Pasa dos horas y media entre pinturas de Goya y El Greco. A la una tiene hambre y va al barrio de Las Letras. Pide el menú del día: sopa, pollo con patatas, postre y café por catorce euros. Por la tarde entra en el Museo Reina Sofía para ver el Guernica de Picasso. Es gratis a partir de las siete de la tarde, pero hay mucha gente. Al salir, camina por el Parque del Retiro hasta el Palacio de Cristal. Allí se sienta en un banco y escribe una postal para su madre.",
     q:[{q:"¿Por qué compra la entrada por internet?", o:["Porque es más barata","Para no hacer cola","Porque el museo está cerrado"], a:1},
        {q:"¿Cuánto cuesta el menú del día?", o:["Catorce euros","Cuarenta euros","Cuatro euros"], a:0},
        {q:"¿Qué cuadro ve en el Reina Sofía?", o:["Las Meninas","El Guernica","Un cuadro de Goya"], a:1},
        {q:"¿Qué hace en el Retiro?", o:["Come un helado","Alquila una bicicleta","Escribe una postal"], a:2}]}
  ],
  barcelona: [
    {t:"La Sagrada Familia", lvl:"A1", txt:"Ana llega a Barcelona en tren desde Madrid. El viaje dura dos horas y media. En la estación de Sants toma el metro hasta la Sagrada Familia. La iglesia es enorme y todavía no está terminada: las obras empezaron en 1882. Ana tiene una entrada para las diez de la mañana. Dentro, la luz entra por las vidrieras de colores y parece un bosque de piedra. Después sube a una torre y ve toda la ciudad y el mar. A mediodía come pan con tomate y una tortilla en un bar del barrio. Por la tarde pasea por el Paseo de Gracia y mira las casas de Gaudí: la Casa Batlló tiene un tejado como un dragón. Por la noche cena en Gràcia, un barrio con plazas pequeñas y mucha gente joven.",
     q:[{q:"¿Cómo llega Ana a Barcelona?", o:["En avión","En tren","En autobús"], a:1},
        {q:"¿A qué hora es su entrada para la Sagrada Familia?", o:["A las diez","A las doce","A las dos"], a:0},
        {q:"¿Qué ve desde la torre?", o:["Solo el mar","El parque Güell","La ciudad y el mar"], a:2},
        {q:"¿Cómo es el tejado de la Casa Batlló?", o:["Como un dragón","Como una montaña","Como un barco"], a:0}]}
  ],
  sevilla: [
    {t:"Tapas en Sevilla", lvl:"A1", txt:"En Sevilla hace sol y las calles huelen a naranja. Ana visita el Real Alcázar por la mañana, con una entrada que compró hace tres semanas. Los jardines tienen fuentes, pavos reales y mucha sombra. Después sube a la Giralda, la torre de la catedral. No hay escaleras: hay rampas, porque antes subían a caballo. A las dos va a un bar de Santa Cruz a comer tapas. Pide espinacas con garbanzos, salmorejo y una caña. El camarero escribe la cuenta con tiza en la barra. Por la tarde cruza el puente de Triana y compra una taza de cerámica. Por la noche ve un espectáculo de flamenco en una sala pequeña, sin micrófono. La bailaora mira al público y todos aplauden.",
     q:[{q:"¿Cuándo compró Ana la entrada del Alcázar?", o:["El mismo día","Hace tres semanas","Hace tres meses"], a:1},
        {q:"¿Por qué la Giralda tiene rampas?", o:["Porque es moderna","Para las bicicletas","Porque antes subían a caballo"], a:2},
        {q:"¿Dónde escribe la cuenta el camarero?", o:["En un papel","En la barra, con tiza","En el móvil"], a:1},
        {q:"¿Qué compra en Triana?", o:["Una taza de cerámica","Un abanico","Unas naranjas"], a:0}]}
  ],
  segovia: [
    {t:"El acueducto y el cochinillo", lvl:"A1", txt:"Ana toma el tren rápido en la estación de Chamartín. Veintisiete minutos después está en Segovia. La estación está lejos del centro, así que toma el autobús número once hasta el acueducto. El acueducto es romano, tiene casi dos mil años y no tiene cemento: las piedras se sostienen solas. Ana sube la calle Real hasta la Plaza Mayor y entra en la catedral. Luego camina hasta el Alcázar, un castillo con torres azules que parece de cuento. A las dos y media reserva mesa en un restaurante antiguo y pide cochinillo, el plato típico. Es cordero no: es cerdo pequeño, asado en horno de leña, con la piel muy crujiente. De postre prueba el ponche segoviano. Vuelve a Madrid a las ocho, con frío y feliz.",
     q:[{q:"¿Cuánto dura el tren de Madrid a Segovia?", o:["Veintisiete minutos","Una hora","Dos horas"], a:0},
        {q:"¿Cómo va de la estación al acueducto?", o:["A pie","En el autobús once","En taxi"], a:1},
        {q:"¿Qué es el cochinillo?", o:["Cordero asado","Pescado frito","Cerdo pequeño asado"], a:2},
        {q:"¿Qué prueba de postre?", o:["Churros","Ponche segoviano","Flan"], a:1}]}
  ],
  toledo: [
    {t:"La ciudad de las tres culturas", lvl:"A2", txt:"Toledo está a media hora de Madrid en tren. La ciudad está en una colina y el río Tajo la rodea casi por completo. Ana sube al centro por unas escaleras mecánicas, porque las calles son empinadas. Toledo se llama la ciudad de las tres culturas: durante siglos vivieron juntos cristianos, judíos y musulmanes. En una misma mañana Ana ve la catedral, una sinagoga y una mezquita pequeña. En la iglesia de Santo Tomé hay un cuadro famoso de El Greco, un pintor que vivió aquí muchos años. Para comer, prueba las carcamusas, un guiso de cerdo con tomate. Antes de volver compra mazapán, un dulce de almendra que hacen las monjas. Desde el otro lado del río, al atardecer, la ciudad parece de oro.",
     q:[{q:"¿Por qué Ana sube con escaleras mecánicas?", o:["Porque llueve","Porque las calles son empinadas","Porque está cansada"], a:1},
        {q:"¿Qué tres culturas vivieron en Toledo?", o:["Romanos, griegos y árabes","Cristianos, judíos y musulmanes","Franceses, ingleses y españoles"], a:1},
        {q:"¿Qué es el mazapán?", o:["Un guiso de cerdo","Un queso","Un dulce de almendra"], a:2},
        {q:"¿Quién fue El Greco?", o:["Un pintor","Un rey","Un cocinero"], a:0}]}
  ],
  cordoba: [
    {t:"La Mezquita", lvl:"A2", txt:"Ana llega a Córdoba a las ocho de la mañana porque quiere entrar en la Mezquita antes de las nueve y media: a esa hora es gratis y hay poca gente. Dentro hay cientos de columnas y arcos rojos y blancos. En el centro, en el siglo dieciséis, construyeron una catedral. Es un lugar extraño y hermoso. Después pasea por la judería, con calles blancas y macetas azules llenas de flores. En la Calleja de las Flores se ve la torre entre las casas. A la una come salmorejo, una crema fría de tomate, y flamenquín, un rollo de carne frito. Por la tarde visita el Alcázar y sus jardines con naranjos. Antes de irse cruza el puente romano para ver la Mezquita desde el otro lado del río.",
     q:[{q:"¿Por qué entra Ana antes de las nueve y media?", o:["Porque luego cierra","Porque es gratis y hay poca gente","Porque hace calor"], a:1},
        {q:"¿Qué hay en el centro de la Mezquita?", o:["Una fuente","Un jardín","Una catedral"], a:2},
        {q:"¿Qué es el salmorejo?", o:["Una crema fría de tomate","Una carne frita","Un postre"], a:0},
        {q:"¿Desde dónde ve la Mezquita al final?", o:["Desde una torre","Desde el puente romano","Desde el tren"], a:1}]}
  ],
  granada: [
    {t:"La Alhambra", lvl:"A2", txt:"La entrada de la Alhambra tiene hora: Ana debe estar en los Palacios Nazaríes a las once y media. Llega media hora antes con el pasaporte, porque lo piden en la puerta. Los palacios tienen paredes llenas de letras árabes y patios con agua. En el Patio de los Leones hay una fuente con doce leones de piedra. Después pasea por el Generalife, los jardines del palacio, con vistas a la ciudad. Por la tarde sube al Albaicín, el barrio antiguo, por calles estrechas y blancas. Desde el mirador de San Nicolás ve la Alhambra con la Sierra Nevada detrás, llena de nieve. Por la noche va de tapas: en Granada, con cada bebida, el bar regala un plato de comida. Con tres cañas, Ana ya ha cenado.",
     q:[{q:"¿Por qué llega Ana media hora antes?", o:["Para comprar la entrada","Porque piden el pasaporte y la hora es fija","Para desayunar"], a:1},
        {q:"¿Cuántos leones hay en la fuente?", o:["Doce","Dos","Veinte"], a:0},
        {q:"¿Qué ve desde el mirador de San Nicolás?", o:["El mar","La Alhambra y la Sierra Nevada","El Generalife"], a:1},
        {q:"¿Qué pasa en los bares de Granada?", o:["La bebida es gratis","No hay tapas","Con cada bebida regalan una tapa"], a:2}]}
  ],
  valencia: [
    {t:"Paella de verdad", lvl:"A2", txt:"En Valencia Ana aprende que la paella de verdad no lleva marisco. La paella valenciana lleva pollo, conejo, judías verdes y garrofón, un tipo de alubia. Se come al mediodía, nunca por la noche. Ana toma el autobús 25 hasta El Palmar, un pueblo junto a la Albufera, un lago donde crece el arroz. El restaurante tarda cuarenta minutos en hacer la paella, porque la cocinan con fuego de leña. Lo mejor es el socarrat, el arroz tostado del fondo. Después del almuerzo da un paseo en barca por el lago al atardecer. Al volver a la ciudad pasea por el Jardín del Turia, un parque de nueve kilómetros en el antiguo río. Termina el día con una horchata fría y unos fartons en una horchatería del centro.",
     q:[{q:"¿Qué lleva la paella valenciana?", o:["Marisco y pescado","Pollo, conejo y judías verdes","Chorizo y jamón"], a:1},
        {q:"¿Cuándo se come la paella?", o:["Al mediodía","Por la noche","Para desayunar"], a:0},
        {q:"¿Qué es el socarrat?", o:["Una salsa","El arroz tostado del fondo","Una bebida"], a:1},
        {q:"¿Qué es el Jardín del Turia?", o:["Un lago","Un mercado","Un parque en el antiguo río"], a:2}]}
  ],
  zaragoza: [
    {t:"Una parada en el Pilar", lvl:"A2", txt:"Zaragoza está justo en medio del camino entre Madrid y Barcelona, a una hora y veinte minutos de cada una en tren rápido. Ana baja en la estación de Delicias y toma un autobús hasta la Plaza del Pilar. La basílica es enorme y tiene once cúpulas. Dentro, los zaragozanos besan una columna pequeña: el Pilar. También hay dos bombas de la guerra que cayeron en la iglesia y no explotaron. Al lado está el río Ebro, el más grande de España. Ana cruza el Puente de Piedra para hacer la foto de la basílica reflejada en el agua. Para comer va al Tubo, unas calles estrechas llenas de bares. Pide champiñones a la plancha con gamba y ternasco, que es cordero joven. De postre compra frutas de Aragón: fruta confitada con chocolate.",
     q:[{q:"¿Dónde está Zaragoza?", o:["Cerca del mar","Entre Madrid y Barcelona","Al sur de Sevilla"], a:1},
        {q:"¿Qué hacen los zaragozanos dentro de la basílica?", o:["Besan una columna","Tocan una campana","Encienden velas"], a:0},
        {q:"¿Qué es el Tubo?", o:["Un túnel del metro","Un puente","Unas calles llenas de bares"], a:2},
        {q:"¿Qué es el ternasco?", o:["Un pescado","Cordero joven","Un queso"], a:1}]}
  ],
  salamanca: [
    {t:"La rana de la universidad", lvl:"A2", txt:"Salamanca es una ciudad de estudiantes y de piedra dorada. Su universidad es la más antigua de España: tiene más de ochocientos años. En la fachada hay cientos de figuras pequeñas y, entre ellas, una rana sobre una calavera. Dicen que el estudiante que encuentra la rana sin ayuda aprueba los exámenes. Ana la busca durante diez minutos y al final la encuentra en la columna de la derecha. Después visita las dos catedrales, la vieja y la nueva. En la puerta de la nueva hay un astronauta: lo pusieron en 1992, en una restauración. Por la noche la Plaza Mayor se ilumina de color dorado y todo el mundo se sienta en las terrazas. Ana cena un hornazo, una empanada de chorizo, lomo y huevo, y se queda mirando la plaza hasta muy tarde.",
     q:[{q:"¿Qué tiene de especial la universidad de Salamanca?", o:["Es la más grande de Europa","Es la más antigua de España","Es nueva"], a:1},
        {q:"¿Dónde está la rana?", o:["En la Plaza Mayor","En la catedral","En la fachada de la universidad"], a:2},
        {q:"¿Cuándo pusieron el astronauta?", o:["En 1492","En 1992","En 2020"], a:1},
        {q:"¿Qué es el hornazo?", o:["Una empanada","Una sopa","Un vino"], a:0}]}
  ],
  avila: [
    {t:"La muralla", lvl:"A1", txt:"Ávila es la ciudad más alta de España y en febrero hace mucho frío. Ana lleva gorro, bufanda y guantes. La muralla rodea toda la ciudad antigua: tiene dos kilómetros y medio y ochenta y ocho torres. Ana compra la entrada y camina por encima de la muralla durante una hora. Desde arriba ve la catedral, los tejados y la sierra con nieve. Después visita la casa donde nació Santa Teresa, una monja muy famosa. Para comer pide un chuletón de Ávila, un filete de ternera muy grande, con patatas revolconas. De postre toma yemas de Santa Teresa, unos dulces pequeños de huevo y azúcar. Al atardecer cruza el río hasta los Cuatro Postes. Desde allí ve la muralla entera, iluminada. Es la foto más bonita del viaje.",
     q:[{q:"¿Qué tiempo hace en Ávila en febrero?", o:["Hace calor","Llueve mucho","Hace mucho frío"], a:2},
        {q:"¿Cuántas torres tiene la muralla?", o:["Ochenta y ocho","Dieciocho","Doscientas"], a:0},
        {q:"¿Qué es el chuletón?", o:["Un pescado","Un filete de ternera muy grande","Una sopa"], a:1},
        {q:"¿Desde dónde ve la muralla entera?", o:["Desde la catedral","Desde los Cuatro Postes","Desde el tren"], a:1}]}
  ],
  tarragona: [
    {t:"Romanos junto al mar", lvl:"A2", txt:"Tarragona está a una hora de Barcelona en tren. Hace dos mil años se llamaba Tarraco y era la capital romana de media España. Ana empieza por el anfiteatro, que está justo al lado de la playa: los romanos veían a los gladiadores con el mar de fondo. Después sube a la Part Alta, la ciudad antigua, y visita la catedral y las murallas. En el Balcón del Mediterráneo toca la barandilla de hierro, porque dicen que da suerte. Para comer baja al Serrallo, el barrio de los pescadores. Pide romesco, una salsa de pimiento seco y almendras que nació aquí, con pescado a la plancha. Por la tarde toma un autobús hasta el Puente del Diablo, un acueducto romano en medio de un bosque de pinos. Se puede caminar por encima.",
     q:[{q:"¿Cómo se llamaba Tarragona en tiempos romanos?", o:["Tarraco","Barcino","Hispalis"], a:0},
        {q:"¿Dónde está el anfiteatro?", o:["En la montaña","Al lado de la playa","Dentro de la catedral"], a:1},
        {q:"¿Por qué toca la barandilla del Balcón?", o:["Porque está caliente","Para hacer una foto","Porque dicen que da suerte"], a:2},
        {q:"¿Qué es el romesco?", o:["Un pescado","Una salsa de pimiento y almendras","Un vino"], a:1}]}
  ],
  ronda: [
    {t:"El puente sobre el Tajo", lvl:"A2", txt:"Para llegar a Ronda, Ana toma un autobús desde Sevilla que tarda casi dos horas por carreteras de montaña. La ciudad está dividida por un barranco de cien metros de profundidad: el Tajo. El Puente Nuevo lo cruza y tiene más de doscientos años. Ana lo ve primero desde arriba y luego baja por un camino para verlo entero desde el valle. La subida es cansada, pero la vista vale la pena. Después visita la plaza de toros, la más antigua de España, y los baños árabes, que están muy bien conservados. Para comer pide rabo de toro, un guiso que se cocina durante horas. Por la tarde pasea por la Alameda, un parque con miradores sobre la sierra. En el hotel, por la noche, se oye solo el viento.",
     q:[{q:"¿Cómo llega Ana a Ronda?", o:["En tren desde Madrid","En autobús desde Sevilla","En avión"], a:1},
        {q:"¿Qué es el Tajo de Ronda?", o:["Un río grande","Una plaza","Un barranco de cien metros"], a:2},
        {q:"¿Qué tiene de especial la plaza de toros?", o:["Es la más antigua de España","Es la más grande del mundo","Es nueva"], a:0},
        {q:"¿Qué es el rabo de toro?", o:["Un postre","Un guiso que se cocina durante horas","Un pescado"], a:1}]}
  ]
};
