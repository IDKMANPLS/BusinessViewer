import type { ServiceSlug } from "@/lib/site-data";
import { FOUNDED_YEAR, YEARS_IN_BUSINESS } from "@/lib/site-data";

/** Spanish text for the service cards (merged over the English objects by slug). */
export const esServices: Record<ServiceSlug, { title: string; short: string }> = {
  "asphalt-driveway-installation": {
    title: "Instalación de entradas de asfalto",
    short:
      "Entradas residenciales nuevas construidas sobre una base nivelada y compactada que resiste los suelos del condado de Sonoma.",
  },
  "driveway-repair-resurfacing": {
    title: "Recapeo y reparación de entradas",
    short:
      "Grietas, baches y superficies cuarteadas reparadas o recapeadas en lugar de una demolición completa y costosa.",
  },
  sealcoating: {
    title: "Sellado de asfalto",
    short:
      "Mantenimiento protector que bloquea el agua, el aceite y el daño del sol, y devuelve un acabado negro profundo.",
  },
  "commercial-paving": {
    title: "Pavimentación de estacionamientos comerciales",
    short:
      "Estacionamientos, calles privadas y accesos comerciales para tráfico real, con líneas pintadas y accesibilidad ADA.",
  },
  "excavation-grading": {
    title: "Excavación y nivelación del terreno",
    short:
      "Preparación del sitio, base de grava y nivelación de drenaje para que el agua salga del pavimento y no lo atraviese.",
  },
  "parking-lot-maintenance": {
    title: "Mantenimiento y reparación de estacionamientos",
    short:
      "Sellado de grietas, parcheo, sellado y pintura que prolongan la vida del estacionamiento que ya tiene.",
  },
};

type EsDetail = {
  title: string;
  intro: string;
  imageAlt: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
};

export const esServiceDetails: Record<ServiceSlug, EsDetail> = {
  "asphalt-driveway-installation": {
    title: "Instalación de entradas de asfalto",
    intro:
      "Una entrada vale lo que hay debajo de ella. Nivelamos, compactamos y pavimentamos para que su asfalto nuevo drene bien y quede plano por décadas.",
    imageAlt: "Entrada de asfalto recién instalada con bordes limpios en una casa de Santa Rosa",
    sections: [
      {
        heading: "Qué incluye",
        body: "Cada instalación residencial se cotiza como trabajo completo: sin cargos sorpresa cuando el equipo ya está en el sitio.",
        bullets: [
          "Excavación y retiro del pavimento viejo, césped o tierra suelta",
          "Nivelación para que el agua se aleje de la cochera y los cimientos",
          "Base de grava Clase II colocada y compactada a la profundidad que pide su suelo",
          "Asfalto en caliente colocado en capas y compactado a la temperatura correcta",
          "Bordes y transiciones trabajados a mano, con uniones limpias en la calle y la cochera",
        ],
      },
      {
        heading: "Materiales que usamos",
        body: "Pavimentamos con asfalto en caliente de plantas locales del condado de Sonoma, ajustado al tráfico que realmente recibe su entrada. Una entrada residencial estándar recibe de 2 a 3 pulgadas de asfalto compactado sobre 4 pulgadas de base; las entradas que soportan casas rodantes, remolques o camiones reciben secciones más gruesas.",
      },
      {
        heading: "Tiempos",
        body: "La mayoría de las entradas residenciales se terminan en uno a tres días de trabajo, según la excavación necesaria. Jim recorre el sitio con usted antes de empezar y otra vez al terminar. Puede caminar sobre el asfalto nuevo el mismo día y estacionar después de unas 24 a 72 horas con clima cálido.",
      },
      {
        heading: "Qué afecta el precio",
        body: "La superficie, el retiro del pavimento existente, la condición de la base, el acceso para el equipo, el trabajo de drenaje y el espesor requerido. No adivinamos: medimos el sitio y le entregamos un presupuesto por escrito, gratis y sin compromiso.",
      },
      {
        heading: "Nuestro compromiso con el trabajo",
        body: `Respondemos por lo que instalamos. Si algo que colocamos no está bien, llámenos y vamos a revisarlo. Así es como un taller familiar pequeño lleva ${YEARS_IN_BUSINESS} años en el negocio y mantiene una acreditación BBB A+.`,
      },
    ],
  },
  "driveway-repair-resurfacing": {
    title: "Reparación y recapeo de entradas",
    intro:
      "No toda entrada gastada necesita demolerse. Le decimos con honestidad si conviene una reparación, un recapeo o un reemplazo completo.",
    imageAlt: "Entrada de asfalto agrietada con baches antes de repararse y recapearse",
    sections: [
      {
        heading: "Señales de que su entrada necesita atención",
        body: "Detectarlas a tiempo es la diferencia entre un parche y un reemplazo.",
        bullets: [
          "Grietas donde cabe un lápiz, o grietas con hierba creciendo",
          "Agrietamiento tipo piel de cocodrilo: grietas conectadas que parecen escamas",
          "Baches, puntos blandos o zonas que se hunden después de la lluvia",
          "Agua estancada o charcos que nunca drenan",
          "Superficie gris, quebradiza y suelta que desprende grava",
          "Bordes desmoronados donde el pavimento toca la tierra o el césped",
        ],
      },
      {
        heading: "Sellado vs. recapeo vs. reemplazo",
        body: "El sellado es mantenimiento para un pavimento que aún está firme: protege la superficie pero no arregla una base fallida. El recapeo coloca asfalto nuevo sobre una superficie que todavía tiene una base sólida. Si la base falló y las grietas atraviesan todo el espesor, el reemplazo es la única respuesta honesta, y se lo diremos en lugar de venderle un recapeo que falla en dos años.",
      },
      {
        heading: "Nuestro proceso de reparación",
        body: "Revisamos toda la superficie y el drenaje, cortamos y retiramos las secciones fallidas, reconstruimos y compactamos la base, y luego parcheamos o recapeamos con asfalto en caliente al nivel del pavimento existente. Las grietas que no requieren retiro se limpian y se rellenan antes de cualquier trabajo de superficie.",
      },
    ],
  },
  sealcoating: {
    title: "Sellado de asfalto",
    intro:
      "El sellado es lo más económico que puede hacer para proteger la inversión en asfalto que ya pagó.",
    imageAlt: "Entrada de asfalto recién sellada con un acabado negro profundo y uniforme",
    sections: [
      {
        heading: "Por qué el sellado protege su pavimento",
        body: "El asfalto falla de arriba hacia abajo. El sol oxida el ligante hasta que la superficie se vuelve gris y quebradiza, y luego la lluvia del invierno entra por las grietas finas y debilita la base. Un sellador coloca una capa de desgaste entre su pavimento y el agua, el aceite, la gasolina y los rayos UV, y hace que una entrada vieja se vea casi nueva.",
      },
      {
        heading: "Cada cuánto sellar",
        body: "El asfalto nuevo debe curar entre 6 y 12 meses antes del primer sellado. Después, la mayoría de las entradas del condado de Sonoma funcionan bien con un ciclo de dos a tres años; los estacionamientos comerciales con mucho tráfico y goteo de aceite suelen necesitar cada dos años. Sellar más seguido que eso normalmente es gastar de más.",
      },
      {
        heading: "Temporada en el condado de Sonoma",
        body: "El sellador necesita pavimento cálido y seco y una ventana sin lluvia para curar, así que nuestra temporada va de finales de primavera a principios de otoño. Programamos alrededor de los meses lluviosos en lugar de apurar un sellado que no va a adherir. Las grietas se limpian y rellenan primero: el sellador solo no repara grietas.",
      },
      {
        heading: "Cómo es el trabajo",
        body: "Soplamos y barremos la superficie, tratamos las manchas de aceite, rellenamos grietas, protegemos el concreto y los bordes, aplicamos el sellador y dejamos el área bloqueada mientras cura. La mayoría de las entradas residenciales están en uso al día siguiente.",
      },
    ],
  },
  "commercial-paving": {
    title: "Pavimentación comercial",
    intro:
      "Estacionamientos, caminos privados y accesos comerciales construidos para tráfico real y programados según el horario de su negocio.",
    imageAlt: "Estacionamiento comercial recién pavimentado con pintura nueva y espacios accesibles",
    sections: [
      {
        heading: "Instalación de estacionamientos",
        body: "Nos encargamos de los estacionamientos comerciales desde la nivelación y la base hasta el pavimento, y construimos la sección según el tráfico que va a recibir: los espacios de autos, los carriles de reparto y los accesos a los contenedores de basura no son lo mismo y no deben pavimentarse igual.",
      },
      {
        heading: "Superficies para tráfico pesado y drenaje",
        body: "Las rutas de camiones, las plataformas de contenedores y los carriles de circulación reciben asfalto más grueso sobre una base más profunda y compactada. Definimos las pendientes para que el agua corra a sus drenajes y no hacia el edificio, porque el agua estancada es lo que destruye un estacionamiento desde abajo.",
      },
      {
        heading: "Accesibilidad ADA y pintura",
        body: "Trazamos espacios accesibles, pasillos de acceso, zonas de carga y pendientes de ruta peatonal según sus requisitos, y luego pintamos con líneas rectas y limpias y marcas estándar para que su propiedad se vea bien y pase la inspección.",
      },
      {
        heading: "Programas de mantenimiento",
        body: "Los administradores de propiedades pueden programar sellado de grietas, parcheo, sellado y repintado de forma recurrente con un solo contacto. Un solo número al que llamar, y habla con Jim, no con un centro de llamadas.",
      },
      {
        heading: "Mínima interrupción",
        body: "Trabajamos por secciones, en las mañanas temprano o los fines de semana cuando hace falta, y mantenemos el acceso abierto para que sus inquilinos y clientes puedan llegar a la puerta.",
      },
    ],
  },
  "excavation-grading": {
    title: "Excavación y nivelación",
    intro:
      "Un buen pavimento empieza bajo la superficie. Hacemos el trabajo de tierra al que se debe la mayoría de las fallas.",
    imageAlt: "Equipo de pavimentación y rodillo compactador trabajando en un sitio nivelado",
    sections: [
      {
        heading: "Preparación del sitio",
        body: "Retiro de asfalto viejo, concreto, césped y tierra no apta; corte a nivel de subrasante; colocación y compactación de base de grava Clase II a la profundidad que pide el sitio. Cada capa se compacta antes de colocar la siguiente.",
      },
      {
        heading: "Consideraciones de drenaje",
        body: `Después de ${YEARS_IN_BUSINESS} años en el condado de Sonoma sabemos cómo retienen el agua los suelos arcillosos locales y por dónde corre el escurrimiento del invierno. Definimos pendientes y canales para llevar el agua fuera del pavimento y lejos de las estructuras, y podemos conectar drenajes donde el sitio lo requiera.`,
      },
      {
        heading: "Equipo y capacidad",
        body: "Nuestro equipo es del tamaño adecuado para entradas residenciales, caminos rurales y estacionamientos comerciales pequeños y medianos: compacto para patios angostos de Santa Rosa y capaz para reconstruir un estacionamiento completo. Jim revisa el acceso antes de cotizar para no dañar nada al entrar y salir.",
      },
    ],
  },
  "parking-lot-maintenance": {
    title: "Mantenimiento y reparación de estacionamientos",
    intro:
      "Cuidado continuo que cuesta una fracción de un reemplazo y lo retrasa por años.",
    imageAlt: "Estacionamiento comercial con sellado nuevo y pintura blanca limpia",
    sections: [
      {
        heading: "Qué cubre el mantenimiento",
        body: "Una visita de mantenimiento se ajusta a lo que su estacionamiento realmente necesita, no a un paquete fijo.",
        bullets: [
          "Sellado de grietas en caliente antes de que el agua llegue a la base",
          "Parcheo de baches y secciones fallidas, cortado y compactado",
          "Sellado en un ciclo de dos a tres años",
          "Repintado de espacios, flechas, banquetas y marcas de accesibilidad",
          "Limpieza de drenaje donde se acumula el agua",
        ],
      },
      {
        heading: "Programación por temporada",
        body: "El sellado de grietas y el parcheo se hacen antes de la temporada de lluvias para que el agua no entre a la base durante el invierno. El sellado y la pintura se programan en meses cálidos y secos. Ponemos su propiedad en un calendario y le avisamos cuando toca.",
      },
      {
        heading: "Por qué vale la pena",
        body: "El mantenimiento postergado es lo que convierte un sellado y pintado de $4,000 en una reconstrucción completa. Atender las grietas a tiempo es lo más rentable que puede hacer un dueño con su presupuesto de pavimento.",
      },
    ],
  },
};

/** Index-matched with the English gallery array. */
export const esGallery = [
  {
    alt: "Instalación de entrada de asfalto nueva con bordes limpios en una casa de Santa Rosa",
    type: "Instalación de entrada residencial",
    date: "Terminado en junio de 2026",
  },
  {
    alt: "Entrada de asfalto agrietada con baches antes del recapeo",
    type: "Antes: entrada agrietada pendiente de recapeo",
    date: "Evaluado en mayo de 2026",
  },
  {
    alt: "Entrada residencial de asfalto recién sellada con acabado negro profundo",
    type: "Sellado y relleno de grietas",
    date: "Terminado en agosto de 2026",
  },
  {
    alt: "Estacionamiento comercial recién pavimentado con pintura nueva y espacios accesibles",
    type: "Pavimentación y pintura de estacionamiento comercial",
    date: "Terminado en julio de 2026",
  },
  {
    alt: "Equipo de nivelación y compactación en una obra de pavimentación",
    type: "Excavación, base de grava y nivelación",
    date: "Terminado en abril de 2026",
  },
  {
    alt: "Detalle del borde de una entrada de asfalto trabajado a mano",
    type: "Detalle: bordes y transiciones trabajados a mano",
    date: "Terminado en marzo de 2026",
  },
];

export const esTrustPoints = [
  {
    title: "Acreditado BBB A+",
    desc: "Calificación A+ verificada de forma independiente por el Better Business Bureau.",
  },
  {
    title: "Con licencia y seguro",
    desc: "Varias licencias de contratista de California, con fianza y seguro completo.",
  },
  {
    title: "Local y familiar",
    desc: `Jim y todo el equipo, sirviendo al condado de Sonoma desde ${FOUNDED_YEAR}.`,
  },
  {
    title: "Presupuestos gratis",
    desc: "En su propiedad, por escrito, sin compromiso y sin presión para firmar.",
  },
];

export const esWhyChoose = [
  `${YEARS_IN_BUSINESS} años pavimentando el condado de Sonoma — fundada en ${FOUNDED_YEAR}`,
  "Acreditados BBB A+: una verificación independiente que usted mismo puede consultar",
  "Jim hace los presupuestos en persona y le explica todo el proceso",
  "Presupuestos gratis y honestos: le diremos cuándo conviene reparar en lugar de reemplazar",
  "La misma cuadrilla pequeña y experimentada en cada obra, no subcontratistas rotativos",
  "Con licencia, fianza y seguro completo para trabajos residenciales y comerciales",
  "Conocimiento local del suelo, el drenaje y el clima del condado de Sonoma",
  "Trabajo de calidad que protege el valor de su propiedad",
];

export const esSteps = [
  {
    title: "Consulta y presupuesto gratis",
    desc: "Jim visita su propiedad, mide el área, revisa la base y el drenaje, y responde sus preguntas en el momento.",
  },
  {
    title: "Propuesta y calendario a su medida",
    desc: "Recibe el alcance y el precio por escrito, con los materiales y el espesor detallados, más un calendario realista.",
  },
  {
    title: "Instalación profesional",
    desc: "Nuestra cuadrilla prepara, pavimenta y compacta, mantiene el sitio limpio y protege todo alrededor del área de trabajo.",
  },
  {
    title: "Recorrido final",
    desc: "Recorremos la superficie terminada con usted, explicamos el curado y el cuidado, y respondemos por el trabajo.",
  },
];

export const esTestimonials = [
  {
    quote:
      "¡No podría estar más contento con el trabajo de Jim's Paving! De principio a fin, su equipo fue profesional, amable y muy detallista. Jim mismo se tomó el tiempo de explicarme cada paso del proceso.",
    name: "Samuel Oakes",
    place: "Reseña de Google",
    date: "2025",
  },
  {
    quote:
      "Gracias por la hermosa entrada... ahora puedo estacionar mi carro y no pisar barro después de la lluvia.",
    name: "Office Manager",
    place: "Reseña de Google",
    date: "2025",
  },
  {
    quote: "Muy profesionales y definitivamente los volvería a contratar.",
    name: "Jaime",
    place: "Reseña de Google",
    date: "2025",
  },
  {
    quote: "¡Excelente compañía! Gracias....",
    name: "BB Torliatt",
    place: "Reseña de Google",
    date: "2025",
  },
];

export const esFaqs = [
  {
    q: "¿Los presupuestos son realmente gratis?",
    a: "Sí. Jim va a la propiedad, mide, revisa el pavimento existente y el drenaje, y le entrega un presupuesto por escrito sin costo y sin compromiso.",
  },
  {
    q: "¿Cuánto tiempo lleva Jim's Paving en el negocio?",
    a: `Llevamos pavimentando entradas y estacionamientos en el condado de Sonoma desde ${FOUNDED_YEAR} — ${YEARS_IN_BUSINESS} años — y estamos acreditados BBB A+.`,
  },
  {
    q: "¿Necesito una entrada nueva o solo una reparación?",
    a: "Depende de si la base sigue firme. Si el agrietamiento es superficial, muchas veces podemos parchear, recapear o sellar. Si la base falló, le diremos con honestidad que reemplazar conviene más.",
  },
  {
    q: "¿Cuándo puedo manejar sobre el asfalto nuevo?",
    a: "Normalmente puede caminar sobre él el mismo día y estacionar después de unas 24 a 72 horas con clima cálido. Evite girar las llantas estando detenido y mantenga vehículos pesados fuera las primeras semanas.",
  },
  {
    q: "¿Tienen licencia y seguro?",
    a: "Sí: contamos con varias licencias de contratista de California, además de fianza y seguro completo para trabajos residenciales y comerciales.",
  },
  {
    q: "¿Qué áreas atienden?",
    a: "Santa Rosa, Petaluma, Sonoma, Rohnert Park, Windsor, Healdsburg, Sebastopol y el resto del condado de Sonoma, además de partes de los condados de Napa y Mendocino. ¿No aparece su zona? Llámenos, quizá sí demos servicio ahí.",
  },
];

export const esHours = [
  { day: "Lunes a viernes", time: "7:00 a.m. – 5:00 p.m." },
  { day: "Sábado", time: "Con cita previa" },
  { day: "Domingo", time: "Cerrado" },
];

export const esNavLabels: Record<string, string> = {
  "/": "Inicio",
  "/services": "Servicios",
  "/gallery": "Galería",
  "/about": "Nosotros",
  "/service-areas": "Áreas de servicio",
  "/contact": "Contacto",
};

export const esAreaHighlights = [
  {
    city: "Santa Rosa",
    body: "Nuestra base. Instalación de entradas, recapeo y estacionamientos comerciales en todo Santa Rosa, de Roseland a Fountaingrove.",
  },
  {
    city: "Petaluma",
    body: "Entradas de asfalto y mantenimiento de estacionamientos para casas, viñedos y propiedades industriales ligeras de Petaluma.",
  },
  {
    city: "Sonoma y el Valle de Sonoma",
    body: "Entradas rurales largas, caminos privados y estacionamientos de hotelería preparados para el tráfico de temporada.",
  },
  {
    city: "Windsor y Healdsburg",
    body: "Entradas nuevas, recapeos y sellados en propiedades donde hay que manejar el escurrimiento del invierno.",
  },
  {
    city: "Rohnert Park y Cotati",
    body: "Pavimentación comercial, pintura y distribución de estacionamientos con accesibilidad ADA para negocios locales.",
  },
  {
    city: "Sebastopol y el oeste del condado",
    body: "Nivelación, base de grava y pavimentación para entradas rurales sobre suelos blandos que retienen agua.",
  },
];
