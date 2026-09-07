import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  services as enServices,
  serviceDetails as enServiceDetails,
  gallery as enGallery,
  trustPoints as enTrustPoints,
  whyChoose as enWhyChoose,
  steps as enSteps,
  testimonials as enTestimonials,
  faqs as enFaqs,
  hours as enHours,
  navLinks,
  areaHighlights as enAreaHighlights,
  FOUNDED_YEAR,
  YEARS_IN_BUSINESS,
} from "@/lib/site-data";
import {
  esServices,
  esServiceDetails,
  esGallery,
  esTrustPoints,
  esWhyChoose,
  esSteps,
  esTestimonials,
  esFaqs,
  esHours,
  esNavLabels,
  esAreaHighlights,
} from "@/lib/site-data.es";

export type Lang = "en" | "es";

const STORAGE_KEY = "jp-lang";

/* ---------------------------------- UI copy --------------------------------- */

const en = {
  langToggle: { label: "Español", short: "ES", aria: "Ver este sitio en español" },
  header: {
    location: "Santa Rosa & all of Sonoma County",
    trust: `BBB A+ Accredited · Licensed & Insured · Since ${FOUNDED_YEAR}`,
    tagline: "Asphalt Paving Contractor · Santa Rosa, CA",
    call: "Call",
    openMenu: "Open menu",
  },
  footer: {
    about: `Asphalt paving contractor serving Sonoma County since ${FOUNDED_YEAR} — ${YEARS_IN_BUSINESS} years. Licensed, bonded and insured.`,
    hours: "Hours",
    byAppointment: "Free estimates by appointment",
    serviceArea: "Service area",
    quickLinks: "Quick links",
    bbb: "BBB A+ Accredited ·",
    viewBbb: "View BBB profile",
    licensed: "Licensed & insured California contractor",
  },
  sticky: { call: "Call Now", estimate: "Free Estimate" },
  cta: {
    title: "Ready for your free estimate?",
    body: "Jim will come out, measure the site and give you a written, no-obligation price.",
    call: "Call",
    quote: "Request Quote Online",
  },
  home: {
    badge: "BBB A+ Accredited · Licensed & Insured",
    h1: `Quality Asphalt Paving. ${YEARS_IN_BUSINESS} Years. Sonoma County.`,
    sub: `Professional driveway & parking lot installation from a trusted, BBB A+ accredited contractor. Family-owned in Santa Rosa since ${FOUNDED_YEAR}.`,
    primaryCta: "Request Free Estimate",
    callPrefix: "Call",
    statYears: "Years in business",
    statRating: "BBB accredited rating",
    statFreeValue: "Free",
    statFree: "On-site estimates",
    trustAria: "Why you can trust Jim's Paving",
    verify: "Verify our record:",
    verifyLink: "view our Better Business Bureau profile",
    servicesTitle: "Our services",
    servicesIntro:
      "Residential driveways and commercial pavement — installation, repair and the maintenance that keeps them out of trouble.",
    learnMore: "Learn more",
    whyTitle: "Why choose",
    whyBody: `Jim Todorovitch Jr. has been paving Sonoma County driveways and lots since ${FOUNDED_YEAR}. He handles the estimates himself, and the same small crew does the work — no rotating subcontractors, no pressure, no surprises on the invoice.`,
    whyCta: "Get my free estimate",
    recentTitle: "Recent projects",
    recentIntro: "Driveways, parking lots and site work completed across Sonoma County.",
    viewGallery: "View the full gallery",
    howTitle: "How it works",
    testimonialsTitle: "What customers say",
    areasTitle: "We proudly serve",
    notListed: "Not listed?",
    callUsAt: "Call us at",
    mayServe: "— we may service your area.",
    ctaTitle: "Let's pave the way forward",
    ctaBody: "Contact Jim's Paving today for a free, honest estimate on your driveway or parking lot.",
  },
  about: {
    eyebrow: `Established ${FOUNDED_YEAR}`,
    title: `${YEARS_IN_BUSINESS} years paving Sonoma County`,
    intro:
      "Jim's Paving is a family-owned asphalt contractor based in Santa Rosa. Owner Jim Todorovitch Jr. still runs the estimates and works alongside the crew.",
    heading: "A working business serving working people",
    p1: `We started paving driveways in Sonoma County in ${FOUNDED_YEAR}. Since then the equipment has changed, the crew has stayed small, and the approach hasn't moved: prep the base properly, price the job honestly, and stand behind what we install.`,
    p2: "Today Jim's Paving is a 3-person operation out of 4130 Whistler Avenue, Santa Rosa, CA 95407. That size is deliberate — Jim looks at every job himself, quotes it himself, and is on site while the work happens. You are never handed off to a salesperson or a subcontractor you've never met.",
    p3: `${YEARS_IN_BUSINESS} years in one county teaches you things a national outfit doesn't know: which neighborhoods sit on clay that holds water, where winter runoff collects, how much base rock a rural west-county drive actually needs. That local knowledge is the difference between pavement that lasts decades and pavement that cracks in three winters.`,
    bbbTitle: "BBB A+ Accredited",
    bbbBody:
      "Our rating with the Better Business Bureau is independently verified — you don't have to take our word for it.",
    bbbLink: "View our BBB profile",
    figCaption: "Residential driveway paving in Santa Rosa — clean edges, correct drainage.",
    whatYouGet: "What you get working with us",
    howRuns: "How a project runs",
    words: "In our customers' words",
  },
  services: {
    eyebrow: "Services",
    title: "Asphalt paving, repair and maintenance",
    intro:
      "Residential and commercial asphalt work across Sonoma County, quoted in writing before anything starts.",
    faqTitle: "Common questions",
    breadcrumb: "Services",
    otherServices: "Other services",
    detailCta: "Request Free Estimate",
  },
  gallery: {
    eyebrow: "Project gallery",
    title: "Our work, on real Sonoma County properties",
    intro:
      "Driveways, parking lots, repairs and site prep — with the city, project type and completion date for each job.",
    footnote:
      "Want to see a project like yours? Ask when Jim comes out for your estimate — he can point you to comparable work nearby.",
  },
  areas: {
    eyebrow: "Service areas",
    title: `Paving Sonoma County for ${YEARS_IN_BUSINESS} years`,
    intro:
      "We proudly serve the following communities — and we know the soil, drainage and weather in each of them.",
    notListedTitle: "Not listed? Call us.",
    notListedBody: `After ${YEARS_IN_BUSINESS} years we travel well beyond the city limits, including parts of Napa and Mendocino counties. Tell us where the property is and we'll tell you straight whether we can serve it.`,
  },
  contact: {
    eyebrow: "Contact",
    title: "Request your free estimate",
    intro:
      "Call us or send the form below. Jim will come out, measure the site and give you an honest written price with no obligation.",
    talkTo: "Talk to",
    hours: "Hours",
    serviceArea: "Service area",
    notListed: "Not listed? Call us — we may still service your area.",
  },
  form: {
    heading: "Request a free estimate",
    sub: "No obligation. We'll get back to you within 1 business day.",
    name: "Name",
    namePlaceholder: "Your name",
    phone: "Phone",
    email: "Email",
    cityZip: "City or ZIP code",
    propertyType: "Property type",
    sqft: "Approximate square footage",
    sqftPlaceholder: "e.g. 900 sq ft (or 30 x 30)",
    condition: "Current condition",
    notes: "Notes (optional)",
    notesPlaceholder: "Drainage issues, access, timing, anything else we should know.",
    selectOne: "Select one",
    submit: "Request my free estimate",
    preferTalk: "Prefer to talk? Call",
    sentTitle: "Request received",
    sentBody: "Thanks! We'll contact you within 1 business day for a free estimate. Need to talk sooner?",
    call: "Call",
    propertyTypes: [
      "Residential driveway",
      "Private road / shared drive",
      "Commercial parking lot",
      "Other",
    ],
    conditions: [
      "New pavement (nothing there now)",
      "Existing asphalt — needs repair",
      "Existing asphalt — needs resurfacing",
      "Existing asphalt — needs sealcoating",
      "Not sure, need an assessment",
    ],
  },
  notFound: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has been moved.",
    home: "Go home",
  },
};

export type UiCopy = typeof en;

const es: UiCopy = {
  langToggle: { label: "English", short: "EN", aria: "View this site in English" },
  header: {
    location: "Santa Rosa y todo el condado de Sonoma",
    trust: `Acreditado BBB A+ · Con licencia y asegurado · Desde ${FOUNDED_YEAR}`,
    tagline: "Contratista de pavimento asfáltico · Santa Rosa, CA",
    call: "Llamar",
    openMenu: "Abrir menú",
  },
  footer: {
    about: `Contratista de pavimento asfáltico al servicio del condado de Sonoma desde ${FOUNDED_YEAR} — ${YEARS_IN_BUSINESS} años. Con licencia, fianza y seguro.`,
    hours: "Horario",
    byAppointment: "Presupuestos gratis con cita previa",
    serviceArea: "Área de servicio",
    quickLinks: "Enlaces rápidos",
    bbb: "Acreditado BBB A+ ·",
    viewBbb: "Ver perfil de BBB",
    licensed: "Contratista de California con licencia y seguro",
  },
  sticky: { call: "Llamar ahora", estimate: "Presupuesto gratis" },
  cta: {
    title: "¿Listo para su presupuesto gratis?",
    body: "Jim visita su propiedad, mide el área y le entrega un precio por escrito, sin compromiso.",
    call: "Llamar",
    quote: "Pedir presupuesto en línea",
  },
  home: {
    badge: "Acreditado BBB A+ · Con licencia y asegurado",
    h1: `Pavimento asfáltico de calidad. ${YEARS_IN_BUSINESS} años. Condado de Sonoma.`,
    sub: `Instalación profesional de entradas de auto y estacionamientos por un contratista de confianza acreditado BBB A+. Empresa familiar en Santa Rosa desde ${FOUNDED_YEAR}.`,
    primaryCta: "Pedir presupuesto gratis",
    callPrefix: "Llame a",
    statYears: "Años de experiencia",
    statRating: "Calificación acreditada BBB",
    statFreeValue: "Gratis",
    statFree: "Presupuestos a domicilio",
    trustAria: "Por qué puede confiar en Jim's Paving",
    verify: "Verifique nuestro historial:",
    verifyLink: "vea nuestro perfil en el Better Business Bureau",
    servicesTitle: "Nuestros servicios",
    servicesIntro:
      "Entradas residenciales y pavimento comercial: instalación, reparación y el mantenimiento que evita problemas mayores.",
    learnMore: "Más información",
    whyTitle: "Por qué elegir a",
    whyBody: `Jim Todorovitch Jr. pavimenta entradas y estacionamientos en el condado de Sonoma desde ${FOUNDED_YEAR}. Él mismo hace los presupuestos y la misma cuadrilla pequeña realiza el trabajo: sin subcontratistas rotativos, sin presión y sin sorpresas en la factura.`,
    whyCta: "Quiero mi presupuesto gratis",
    recentTitle: "Proyectos recientes",
    recentIntro:
      "Entradas de auto, estacionamientos y preparación de terreno terminados en todo el condado de Sonoma.",
    viewGallery: "Ver la galería completa",
    howTitle: "Cómo funciona",
    testimonialsTitle: "Lo que dicen los clientes",
    areasTitle: "Con orgullo servimos a",
    notListed: "¿No aparece su zona?",
    callUsAt: "Llámenos al",
    mayServe: "— es posible que sí demos servicio en su área.",
    ctaTitle: "Pavimentemos el camino",
    ctaBody:
      "Comuníquese hoy con Jim's Paving para un presupuesto gratis y honesto de su entrada o estacionamiento.",
  },
  about: {
    eyebrow: `Fundada en ${FOUNDED_YEAR}`,
    title: `${YEARS_IN_BUSINESS} años pavimentando el condado de Sonoma`,
    intro:
      "Jim's Paving es un contratista de asfalto familiar con base en Santa Rosa. El dueño, Jim Todorovitch Jr., sigue haciendo los presupuestos y trabaja junto a la cuadrilla.",
    heading: "Un negocio de trabajo al servicio de gente trabajadora",
    p1: `Empezamos a pavimentar entradas en el condado de Sonoma en ${FOUNDED_YEAR}. Desde entonces el equipo ha cambiado, la cuadrilla sigue siendo pequeña y la forma de trabajar no se ha movido: preparar bien la base, cobrar con honestidad y responder por lo que instalamos.`,
    p2: "Hoy Jim's Paving es una operación de 3 personas ubicada en 4130 Whistler Avenue, Santa Rosa, CA 95407. Ese tamaño es a propósito: Jim revisa cada trabajo, lo cotiza él mismo y está en la obra mientras se realiza. Nunca lo pasamos con un vendedor ni con un subcontratista desconocido.",
    p3: `${YEARS_IN_BUSINESS} años en un solo condado le enseñan cosas que una empresa nacional no sabe: qué vecindarios están sobre arcilla que retiene agua, dónde se acumula el escurrimiento del invierno y cuánta base de grava necesita de verdad una entrada rural del oeste del condado. Ese conocimiento local es la diferencia entre un pavimento que dura décadas y uno que se agrieta en tres inviernos.`,
    bbbTitle: "Acreditado BBB A+",
    bbbBody:
      "Nuestra calificación con el Better Business Bureau está verificada de forma independiente: no tiene que creernos solo a nosotros.",
    bbbLink: "Ver nuestro perfil de BBB",
    figCaption:
      "Pavimentación de entrada residencial en Santa Rosa: bordes limpios y drenaje correcto.",
    whatYouGet: "Lo que recibe al trabajar con nosotros",
    howRuns: "Cómo se desarrolla un proyecto",
    words: "En palabras de nuestros clientes",
  },
  services: {
    eyebrow: "Servicios",
    title: "Pavimentación, reparación y mantenimiento de asfalto",
    intro:
      "Trabajos de asfalto residenciales y comerciales en todo el condado de Sonoma, cotizados por escrito antes de comenzar.",
    faqTitle: "Preguntas frecuentes",
    breadcrumb: "Servicios",
    otherServices: "Otros servicios",
    detailCta: "Pedir presupuesto gratis",
  },
  gallery: {
    eyebrow: "Galería de proyectos",
    title: "Nuestro trabajo en propiedades reales del condado de Sonoma",
    intro:
      "Entradas, estacionamientos, reparaciones y preparación de terreno, con la ciudad, el tipo de proyecto y la fecha de cada trabajo.",
    footnote:
      "¿Quiere ver un proyecto como el suyo? Pregúntele a Jim cuando venga a darle su presupuesto: puede mostrarle trabajos similares cerca de usted.",
  },
  areas: {
    eyebrow: "Áreas de servicio",
    title: `Pavimentando el condado de Sonoma desde hace ${YEARS_IN_BUSINESS} años`,
    intro:
      "Servimos con orgullo a las siguientes comunidades, y conocemos el suelo, el drenaje y el clima de cada una.",
    notListedTitle: "¿No aparece su zona? Llámenos.",
    notListedBody: `Después de ${YEARS_IN_BUSINESS} años viajamos mucho más allá de los límites de la ciudad, incluidas partes de los condados de Napa y Mendocino. Díganos dónde está la propiedad y le diremos con claridad si podemos atenderla.`,
  },
  contact: {
    eyebrow: "Contacto",
    title: "Pida su presupuesto gratis",
    intro:
      "Llámenos o envíe el formulario. Jim visitará su propiedad, medirá el área y le dará un precio honesto por escrito, sin compromiso.",
    talkTo: "Hable con",
    hours: "Horario",
    serviceArea: "Área de servicio",
    notListed: "¿No aparece su zona? Llámenos: es posible que sí demos servicio en su área.",
  },
  form: {
    heading: "Solicite un presupuesto gratis",
    sub: "Sin compromiso. Le responderemos en 1 día hábil.",
    name: "Nombre",
    namePlaceholder: "Su nombre",
    phone: "Teléfono",
    email: "Correo electrónico",
    cityZip: "Ciudad o código postal",
    propertyType: "Tipo de propiedad",
    sqft: "Superficie aproximada",
    sqftPlaceholder: "ej. 900 pies² (o 30 x 30)",
    condition: "Condición actual",
    notes: "Notas (opcional)",
    notesPlaceholder: "Problemas de drenaje, acceso, fechas o cualquier detalle importante.",
    selectOne: "Seleccione una opción",
    submit: "Pedir mi presupuesto gratis",
    preferTalk: "¿Prefiere hablar? Llame al",
    sentTitle: "Solicitud recibida",
    sentBody:
      "¡Gracias! Lo contactaremos en 1 día hábil para su presupuesto gratis. ¿Necesita hablar antes?",
    call: "Llamar",
    propertyTypes: [
      "Entrada residencial",
      "Camino privado / entrada compartida",
      "Estacionamiento comercial",
      "Otro",
    ],
    conditions: [
      "Pavimento nuevo (no hay nada ahora)",
      "Asfalto existente: necesita reparación",
      "Asfalto existente: necesita recapeo",
      "Asfalto existente: necesita sellado",
      "No estoy seguro, necesito una evaluación",
    ],
  },
  notFound: {
    title: "Página no encontrada",
    body: "La página que busca no existe o fue movida.",
    home: "Ir al inicio",
  },
};

const copy: Record<Lang, UiCopy> = { en, es };

/* ---------------------------------- Context --------------------------------- */

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; ui: UiCopy };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
  ui: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "es" || stored === "en") {
        setLangState(stored);
        return;
      }
      if (navigator.language?.toLowerCase().startsWith("es")) setLangState("es");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang(lang === "en" ? "es" : "en"),
      ui: copy[lang],
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

/** Localized site content: same shapes as site-data, translated when lang === "es". */
export function useSite() {
  const { lang } = useLang();

  return useMemo(() => {
    if (lang === "en") {
      return {
        services: enServices,
        serviceDetails: enServiceDetails,
        gallery: enGallery,
        trustPoints: enTrustPoints,
        whyChoose: enWhyChoose,
        steps: enSteps,
        testimonials: enTestimonials,
        faqs: enFaqs,
        hours: enHours,
        navLinks,
        areaHighlights: enAreaHighlights,
      };
    }

    return {
      services: enServices.map((s) => ({ ...s, ...esServices[s.slug] })),
      serviceDetails: Object.fromEntries(
        Object.entries(enServiceDetails).map(([slug, d]) => [
          slug,
          { ...d, ...esServiceDetails[slug as keyof typeof esServiceDetails] },
        ]),
      ) as typeof enServiceDetails,
      gallery: enGallery.map((g, i) => ({ ...g, ...esGallery[i] })),
      trustPoints: enTrustPoints.map((t, i) => ({ ...t, ...esTrustPoints[i] })),
      whyChoose: esWhyChoose,
      steps: enSteps.map((s, i) => ({ ...s, ...esSteps[i] })),
      testimonials: esTestimonials,
      faqs: esFaqs,
      hours: esHours,
      navLinks: navLinks.map((l) => ({ ...l, label: esNavLabels[l.to] ?? l.label })),
      areaHighlights: esAreaHighlights,
    };
  }, [lang]);
}

/** Header/footer language switch. */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggle, ui } = useLang();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ui.langToggle.aria}
      title={ui.langToggle.label}
      className={`inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-2.5 text-xs font-bold uppercase tracking-wide transition-colors hover:border-copper hover:text-copper ${className}`}
    >
      <span aria-hidden="true">{lang === "en" ? "EN" : "ES"}</span>
      <span aria-hidden="true" className="opacity-40">
        /
      </span>
      <span aria-hidden="true" className="opacity-70">
        {ui.langToggle.short}
      </span>
    </button>
  );
}
