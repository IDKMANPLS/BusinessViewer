import type { ServiceSlug } from "@/lib/site-data";
import { LICENSE_NUMBER, YEARS_IN_BUSINESS } from "@/lib/site-data";

export const esServices: Record<ServiceSlug, { title: string; short: string }> = {
  "mini-split-installation": { title: "Instalación de mini splits", short: "Calefacción y aire acondicionado sin ductos, dimensionados e instalados para comodidad por habitación." },
  "air-conditioning": { title: "Aire acondicionado", short: "Instalación, reemplazo y servicio de A/C central con atención al flujo de aire, eficiencia y confiabilidad." },
  "heating-installation": { title: "Instalación de calefacción", short: "Soluciones profesionales de hornos y bombas de calor para comodidad eficiente durante el invierno." },
  "hvac-repair": { title: "Reparación de HVAC", short: "Diagnósticos claros y reparaciones ágiles para sistemas que no calientan, enfrían, arrancan o funcionan bien." },
  "thermostats-zoning": { title: "Termostatos y zonas", short: "Controles, termostatos inteligentes y mejoras de zonificación para manejar comodidad y consumo." },
  "preventive-maintenance": { title: "Mantenimiento preventivo", short: "Inspecciones y afinaciones de temporada para mejorar el rendimiento y detectar problemas a tiempo." },
};

type EsDetail = { title: string; intro: string; imageAlt: string; sections: { heading: string; body: string; bullets?: string[] }[] };
export const esServiceDetails: Record<ServiceSlug, EsDetail> = {
  "mini-split-installation": { title: "Instalación de mini splits", intro: "Los sistemas sin ductos pueden climatizar eficientemente, pero su rendimiento depende del tamaño, ubicación y puesta en marcha correctos.", imageAlt: "Técnico instalando cuidadosamente una unidad interior mini split", sections: [
    { heading: "¿Es adecuado para su espacio?", body: "Los mini splits son ideales para ampliaciones, garajes, casas sin ductos y habitaciones difíciles de climatizar. Evaluamos la carga, aislamiento, electricidad y ubicación exterior." },
    { heading: "Qué incluye la instalación", body: "Coordinamos unidad interior y exterior, tubería de refrigerante, drenaje, conexión eléctrica y controles.", bullets: ["Dimensionamiento según la carga", "Ubicación cuidadosa de las unidades", "Tuberías protegidas y ordenadas", "Pruebas, vacío y puesta en marcha", "Explicación de operación al cliente"] },
    { heading: "Una zona o varias", body: "Un sistema de una zona sirve un área. Un sistema multizona conecta varias unidades interiores. Explicamos comodidad, control y eficiencia para elegir sin gastar de más." },
    { heading: "Apoyo después de instalar", body: "Seguimos disponibles para preguntas sobre ajustes, filtros, drenaje o rendimiento. La comunicación posterior es parte del servicio." },
  ]},
  "air-conditioning": { title: "Aire acondicionado", intro: "El enfriamiento confiable depende de la capacidad, el flujo de aire, los ductos y la calidad de la instalación.", imageAlt: "Técnico dando servicio a un condensador de aire acondicionado", sections: [
    { heading: "Instalación y reemplazo", body: "Evaluamos el sistema, la vivienda, los ductos y los requisitos eléctricos antes de recomendar un reemplazo." },
    { heading: "La importancia del tamaño", body: "Un sistema sobredimensionado puede ciclar demasiado y desgastarse; uno pequeño puede trabajar sin parar. El tamaño correcto mejora comodidad y vida útil." },
    { heading: "Flujo de aire y ductos", body: "Un equipo nuevo no corrige retornos restringidos, ductos pequeños o fugas. Revisamos la ruta completa del aire y explicamos cualquier limitación." },
    { heading: "Antes del verano", body: "Programe mantenimiento antes del calor fuerte para revisar serpentines, flujo de aire, conexiones y operación." },
  ]},
  "heating-installation": { title: "Instalación de calefacción", intro: "Un sistema de calefacción debe brindar comodidad constante de manera segura y eficiente.", imageAlt: "Técnico poniendo en marcha un horno y manejador de aire", sections: [
    { heading: "¿Horno o bomba de calor?", body: "Los hornos brindan calor por aire forzado. Las bombas de calor pueden calentar y enfriar. La mejor opción depende del edificio, servicios, presupuesto y prioridades." },
    { heading: "Los detalles importan", body: "El equipo debe combinarse, conectarse, ventilarse y configurarse correctamente. Nos enfocamos en seguridad, limpieza, flujo de aire y pruebas." },
    { heading: "Lo que explicamos", body: "Antes de terminar explicamos el termostato, acceso al filtro, cuidado rutinario y operación normal." },
    { heading: "Antes del frío", body: "Revise la calefacción antes de la primera temporada fría para atender desgaste, flujo de aire o encendido con tiempo." },
  ]},
  "hvac-repair": { title: "Reparación de HVAC", intro: "Cuando falla la comodidad, necesita un diagnóstico claro. Inspeccionamos, explicamos la falla y presentamos opciones prácticas.", imageAlt: "Técnico usando medidores para diagnosticar una bomba de calor", sections: [
    { heading: "Problemas que diagnosticamos", body: "Revisamos fallas comunes de calefacción, enfriamiento y rendimiento.", bullets: ["El sistema no arranca o se apaga", "Aire a temperatura incorrecta", "Flujo débil o desigual", "Ruido, olor o agua inusual", "Problemas de termostato", "Aumento inesperado del consumo"] },
    { heading: "Reparar o reemplazar", body: "Consideramos edad, costo, condición, comodidad, eficiencia e historial. Explicamos ambas opciones cuando son viables." },
    { heading: "Comunicación transparente", body: "Describimos el hallazgo y el trabajo antes de proceder. Si aparece algo adicional, lo comunicamos." },
    { heading: "Seguimiento", body: "Verificamos la operación después de reparar y respondemos sus preguntas. Si vuelve el problema, llámenos." },
  ]},
  "thermostats-zoning": { title: "Termostatos y zonas", intro: "Los buenos controles mejoran la comodidad, pero deben ser compatibles y estar bien conectados.", imageAlt: "Técnico instalando con precisión un termostato inteligente", sections: [
    { heading: "Instalación de termostato", body: "Verificamos compatibilidad, cableado y configuración antes de instalar, y probamos todos los modos." },
    { heading: "Controles inteligentes", body: "Pueden añadir horarios, ajustes remotos e información de consumo. Configuramos funciones prácticas sin complicar el uso." },
    { heading: "Comodidad por zonas", body: "La zonificación usa controles y compuertas, o unidades sin ductos, para manejar áreas por separado." },
    { heading: "Cuando el control no es la causa", body: "Un termostato no corrige mal flujo, equipo defectuoso o tamaño incorrecto. Diagnosticamos todo el sistema primero." },
  ]},
  "preventive-maintenance": { title: "Mantenimiento preventivo", intro: "El mantenimiento ayuda al equipo a funcionar como fue diseñado y permite atender desgaste antes de una falla en temporada alta.", imageAlt: "Técnico inspeccionando equipo comercial de calefacción y aire", sections: [
    { heading: "Qué revisamos", body: "La visita se enfoca en operación, limpieza, flujo y desgaste visible.", bullets: ["Filtros, serpentines y drenajes accesibles", "Conexiones eléctricas y controles", "Cambio de temperatura y flujo", "Indicadores del circuito refrigerante", "Arranque de calefacción", "Respuesta del termostato y ciclos"] },
    { heading: "Momento de temporada", body: "Revise el enfriamiento en primavera y la calefacción en otoño. Los filtros pueden requerir revisiones más frecuentes." },
    { heading: "Lo que no puede garantizar", body: "Una afinación no evita toda falla futura, pero puede identificar muchos problemas y mejorar la confiabilidad." },
    { heading: "Residencial y comercial", body: "Atendemos casas y propiedades comerciales, ajustando el alcance al equipo y uso del edificio." },
  ]},
};

export const esGallery = [
  { alt: "Técnico instalando una unidad mini split", type: "Instalación precisa de mini split", date: "Tamaño · Ubicación · Puesta en marcha" },
  { alt: "Técnico revisando un aire acondicionado residencial", type: "Diagnóstico de aire acondicionado", date: "Flujo · Electricidad · Rendimiento" },
  { alt: "Técnico probando una instalación de calefacción", type: "Configuración de horno y manejador", date: "Seguridad · Flujo · Pruebas" },
  { alt: "Instalación cuidadosa de un termostato moderno", type: "Instalación de termostato", date: "Compatibilidad · Cableado · Configuración" },
  { alt: "Técnico midiendo el funcionamiento de HVAC", type: "Diagnóstico medido del sistema", date: "Probar · Explicar · Reparar" },
  { alt: "Técnico inspeccionando equipo HVAC comercial", type: "Servicio comercial ligero", date: "Confiabilidad · Comunicación · Seguimiento" },
];
export const esTrustPoints = [
  { title: "Licencia CSLB", desc: `Licencia C-20 de Calefacción y Aire Acondicionado activa #${LICENSE_NUMBER}.` },
  { title: "Historial limpio", desc: "Estado de licencia activo y sin acciones, verificado al 14 de julio de 2026." },
  { title: "Comunicación ágil", desc: "Explicaciones claras antes del trabajo y apoyo accesible después de la instalación." },
  { title: "Trabajo profesional", desc: "Instalación cuidadosa, pruebas completas y explicación al propietario." },
];
export const esWhyChoose = [
  `${YEARS_IN_BUSINESS} años atendiendo clientes residenciales y comerciales`, `Licencia C-20 de California #${LICENSE_NUMBER}`, "Recomendaciones basadas en el sistema y el edificio", "Explicación clara de reparar o reemplazar", "Instalación profesional con atención al flujo y puesta en marcha", "Comunicación directa con Juan Franco", "Apoyo después de la instalación", "Servicio local desde Windsor para el condado de Sonoma",
];
export const esSteps = [
  { title: "Escuchar y evaluar", desc: "Empezamos con el problema de comodidad e inspeccionamos el sistema." },
  { title: "Explicar opciones", desc: "Recibe un alcance claro, opciones prácticas y precio transparente antes de comenzar." },
  { title: "Instalar o reparar", desc: "Hacemos el trabajo con cuidado por el equipo, su propiedad y la limpieza." },
  { title: "Probar y dar seguimiento", desc: "Verificamos operación, explicamos controles y seguimos disponibles." },
];
export const esTestimonials: { quote: string; name: string; place: string; date: string }[] = [];
export const esFaqs = [
  { q: "¿Instalan mini splits?", a: "Sí. Evaluamos carga, ubicación, tubería, electricidad y drenaje; luego ponemos en marcha el sistema y explicamos sus controles." },
  { q: "¿Cómo sé si debo reparar o reemplazar?", a: "Consideramos la pieza dañada, edad, condición, comodidad, eficiencia, historial y costo. Explicamos ambos caminos cuando son viables." },
  { q: "¿Qué significa dimensionar bien el equipo?", a: "El equipo debe corresponder a la carga térmica del edificio. Más grande no siempre es mejor; puede causar ciclos cortos y desgaste." },
  { q: "¿Cuándo debo hacer mantenimiento?", a: "Conviene revisar el enfriamiento en primavera y la calefacción en otoño, antes de la temporada alta." },
  { q: "¿Atienden sistemas residenciales y comerciales?", a: "Sí. Franco's Mechanical ofrece soluciones HVAC y mecánicas para clientes residenciales y comerciales." },
  { q: "¿Tienen licencia?", a: `Sí. Licencia CSLB #${LICENSE_NUMBER}, clasificación C-20, válida hasta el 30 de junio de 2027; activa y sin acciones al 14 de julio de 2026.` },
  { q: "¿Qué garantía recibo?", a: "La cobertura depende del equipo y alcance. Explicamos las garantías aplicables del fabricante y del trabajo antes de instalar." },
  { q: "¿Qué pasa después de la instalación?", a: "Probamos el sistema, explicamos controles y cuidado, y seguimos disponibles para preguntas." },
  { q: "¿Qué áreas atienden?", a: "Tenemos base en Windsor y atendemos comunidades cercanas del condado de Sonoma. Llame para confirmar su dirección." },
];
export const esHours = [{ day: "Lunes a viernes", time: "Llame para disponibilidad" }, { day: "Sábado", time: "Llame para disponibilidad" }, { day: "Domingo", time: "Llame para disponibilidad" }];
export const esNavLabels: Record<string, string> = { "/": "Inicio", "/services": "Servicios", "/gallery": "Nuestro trabajo", "/about": "Nosotros", "/service-areas": "Áreas de servicio", "/contact": "Contacto" };
export const esAreaHighlights = [
  { city: "Windsor", body: "Nuestra base para mini splits, aire acondicionado, calefacción, controles, reparaciones y mantenimiento." },
  { city: "Santa Rosa", body: "Apoyo HVAC residencial y comercial en Santa Rosa y comunidades cercanas." },
  { city: "Healdsburg", body: "Soluciones de calefacción, enfriamiento y sistemas sin ductos para casas y negocios." },
  { city: "Rohnert Park y Cotati", body: "Reemplazo, reparación, termostatos y mantenimiento preventivo." },
  { city: "Sebastopol", body: "Soluciones prácticas para distintas viviendas, ampliaciones y aplicaciones sin ductos." },
  { city: "Sonoma y Petaluma", body: "Evaluación y servicio profesional; llame para confirmar disponibilidad en su dirección." },
];
