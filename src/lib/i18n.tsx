import { Globe } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { services as enServices, serviceDetails as enServiceDetails, gallery as enGallery, trustPoints as enTrustPoints, whyChoose as enWhyChoose, steps as enSteps, testimonials as enTestimonials, faqs as enFaqs, hours as enHours, navLinks, areaHighlights as enAreaHighlights, FOUNDED_YEAR, YEARS_IN_BUSINESS, LICENSE_NUMBER } from "@/lib/site-data";
import { esServices, esServiceDetails, esGallery, esTrustPoints, esWhyChoose, esSteps, esTestimonials, esFaqs, esHours, esNavLabels, esAreaHighlights } from "@/lib/site-data.es";

export type Lang = "en" | "es";
const STORAGE_KEY = "fm-lang";

const en = {
  langToggle: { label: "Español", short: "ES", aria: "View this site in Spanish" },
  header: { location: "Windsor & Sonoma County", trust: `CSLB C-20 #${LICENSE_NUMBER} · Active license · Since ${FOUNDED_YEAR}`, tagline: "Heating · Air Conditioning · Mechanical", call: "Call", openMenu: "Open menu", language: "Language" },
  footer: { about: `Professional HVAC installation, repair and maintenance based in Windsor, serving residential and commercial customers since ${FOUNDED_YEAR}.`, hours: "Availability", byAppointment: "Call to schedule service", serviceArea: "Service area", quickLinks: "Quick links", bbb: "License", viewBbb: "Verify CSLB license", licensed: `California C-20 contractor #${LICENSE_NUMBER}` },
  sticky: { call: "Call Now", estimate: "Request Service" },
  cta: { title: "Need dependable heating or cooling service?", body: "Tell us what your system is doing. We’ll assess the problem, explain the options and follow through after the work.", call: "Call", quote: "Request Service Online" },
  home: {
    badge: `California C-20 License #${LICENSE_NUMBER}`, h1: "Expert HVAC installation & repair in Windsor, CA.", sub: "Responsive service, professional craftsmanship and transparent pricing for heating, cooling and ductless systems across Sonoma County.", primaryCta: "Request Service", callPrefix: "Call", statYears: "Years in business", statRating: "Active CSLB license", statFreeValue: "C-20", statFree: "HVAC classification", ebWhy: "Who you're calling", ebServices: "Heating & cooling", ebProjects: "Technical expertise", ebProcess: "What to expect", ebReviews: "Customer feedback", ebFaq: "Helpful answers", ebAreas: "Where we work", statCrewValue: "Direct support", statCrew: "before, during and after the work", statFounded: "Serving customers since", ownerQuote: "Local mechanical expertise with a focus on quality workmanship, clear communication and dependable follow-through.", ownerSignature: "Juan Franco · Owner/Manager", guaranteeLabel: "Accountable service", trustAria: "Why customers choose Franco's Mechanical", verify: "Verify our credentials:", verifyLink: "view CSLB license #962011", servicesTitle: "HVAC services", servicesIntro: "Installation, repair and maintenance for the systems that keep Windsor and Sonoma County homes and businesses comfortable.", learnMore: "Learn more", whyTitle: "Why choose", whyBody: "Franco's Mechanical combines technical HVAC knowledge with accessible, accountable service. Juan Franco focuses on clear recommendations, professional workmanship and staying available after the installation—not disappearing once the equipment starts.", whyCta: "Request service", recentTitle: "How we work on HVAC systems", recentIntro: "A closer look at the installation, testing and diagnostic details that support dependable performance.", viewGallery: "Explore our expertise", prevSlide: "Previous example", nextSlide: "Next example", goToSlide: "Go to example", goToReview: "Go to review", howTitle: "A clear service process", testimonialsTitle: "Real customer reviews", reviewsPending: "Genuine Franco's Mechanical customer reviews will appear here once provided and verified.", systemsTitle: "Understand your comfort options", systemsBody: "Central systems, heat pumps and mini splits solve different problems. We explain how each works so your choice fits the building—not a sales script.", seasonalTitle: "Seasonal comfort checklist", seasonalTips: ["Spring: test cooling before the first heat wave and schedule maintenance early.", "Summer: keep outdoor equipment clear and check filters regularly for strong airflow.", "Fall: test heating before cold weather and address unusual sounds or odors.", "Winter: use steady thermostat settings and call if cycling or comfort changes suddenly."], areasTitle: "Based in Windsor. Serving Sonoma County.", notListed: "Not listed?", callUsAt: "Call us at", mayServe: "— we’ll confirm service availability for your address.", ctaTitle: "Comfort starts with a clear answer", ctaBody: "Call Franco's Mechanical for HVAC installation, repair or maintenance in Windsor and Sonoma County." },
  about: { eyebrow: `Established ${FOUNDED_YEAR}`, title: "Mechanical expertise. Responsive service.", intro: "Franco's Mechanical is a Windsor-based HVAC contractor led by owner and manager Juan Franco, serving residential and commercial customers.", heading: "Professional work, explained clearly", p1: `Since June 2011, Franco's Mechanical has focused on practical heating, air conditioning and mechanical solutions for local homes and businesses.`, p2: "Every system and building is different. We evaluate the equipment, airflow, controls and comfort concern before recommending a repair, replacement or upgrade.", p3: "The relationship does not end at startup. We explain operation and routine care, answer questions and remain accessible when post-installation support is needed.", bbbTitle: `CSLB C-20 License #${LICENSE_NUMBER}`, bbbBody: "California Heating & Air Conditioning contractor license, valid through June 30, 2027; active with a clear record as of July 14, 2026.", bbbLink: "Verify the license", figCaption: "Professional ductless system installation with attention to placement, testing and customer guidance.", whatYouGet: "What you can expect", howRuns: "How service works", words: "Customer reviews" },
  services: { eyebrow: "HVAC services", title: "Heating, cooling, controls & repair", intro: "Expert system installation and responsive service for residential and commercial properties across Windsor and Sonoma County.", faqTitle: "HVAC questions, answered", breadcrumb: "Services", otherServices: "Other services", detailCta: "Request Service" },
  gallery: { eyebrow: "Our expertise", title: "Installation details that drive performance", intro: "Explore the HVAC tasks behind reliable comfort—from sizing and setup to diagnostics, controls and commissioning.", footnote: "These representative images illustrate the types of HVAC work and technical details Franco's Mechanical handles; they are not presented as documented customer projects." },
  areas: { eyebrow: "Service areas", title: "HVAC service from Windsor across Sonoma County", intro: "Local heating, cooling and mechanical support for homes and businesses in Windsor and nearby communities.", mapTitle: "Windsor-based coverage", mapBody: "Our service area radiates from Windsor into surrounding Sonoma County communities. Call to confirm availability for your exact address.", notListedTitle: "Outside these cities? Call us.", notListedBody: "Service availability depends on location and schedule. Tell us where you are and what your system needs." },
  contact: { eyebrow: "Contact", title: "Request HVAC service", intro: "Call or send the form. Tell us what the system is doing, and we’ll follow up about the right next step.", talkTo: "Call", hours: "Availability", serviceArea: "Service area", notListed: "Call to confirm availability for your address." },
  form: { heading: "Request HVAC service", sub: "Share the system and comfort issue so we can respond prepared.", name: "Name", namePlaceholder: "Your name", phone: "Phone", email: "Email", cityZip: "City or ZIP code", propertyType: "Property type", sqft: "System age (if known)", sqftPlaceholder: "e.g. 12 years", condition: "What do you need?", notes: "System details (optional)", notesPlaceholder: "Equipment type, symptoms, timing and anything else we should know.", selectOne: "Select one", submit: "Request service", preferTalk: "Prefer to talk? Call", sentTitle: "Request received", sentBody: "Thanks. Please call if you need a faster response; online delivery is being configured.", call: "Call", propertyTypes: ["Residential home", "Apartment / multi-family", "Commercial property", "Other"], conditions: ["Mini-split installation", "New A/C or heating installation", "System is not cooling", "System is not heating", "Repair / unusual performance", "Maintenance / tune-up", "Thermostat or controls", "Not sure, need an assessment"] },
  notFound: { title: "Page not found", body: "The page you're looking for doesn't exist or has moved.", home: "Go home" },
};
export type UiCopy = typeof en;

const es: UiCopy = {
  langToggle: { label: "English", short: "EN", aria: "Ver este sitio en inglés" },
  header: { location: "Windsor y condado de Sonoma", trust: `CSLB C-20 #${LICENSE_NUMBER} · Licencia activa · Desde ${FOUNDED_YEAR}`, tagline: "Calefacción · Aire acondicionado · Mecánica", call: "Llamar", openMenu: "Abrir menú", language: "Idioma" },
  footer: { about: `Instalación, reparación y mantenimiento profesional de HVAC desde Windsor para clientes residenciales y comerciales desde ${FOUNDED_YEAR}.`, hours: "Disponibilidad", byAppointment: "Llame para programar servicio", serviceArea: "Área de servicio", quickLinks: "Enlaces", bbb: "Licencia", viewBbb: "Verificar licencia CSLB", licensed: `Contratista C-20 de California #${LICENSE_NUMBER}` },
  sticky: { call: "Llamar ahora", estimate: "Pedir servicio" },
  cta: { title: "¿Necesita servicio confiable de calefacción o aire?", body: "Cuéntenos qué hace su sistema. Evaluamos, explicamos las opciones y damos seguimiento después del trabajo.", call: "Llamar", quote: "Pedir servicio en línea" },
  home: {
    badge: `Licencia C-20 de California #${LICENSE_NUMBER}`, h1: "Instalación y reparación experta de HVAC en Windsor, CA.", sub: "Servicio ágil, trabajo profesional y precios transparentes para calefacción, aire y sistemas sin ductos en el condado de Sonoma.", primaryCta: "Pedir servicio", callPrefix: "Llame", statYears: "Años en el negocio", statRating: "Licencia CSLB activa", statFreeValue: "C-20", statFree: "Clasificación HVAC", ebWhy: "A quién llama", ebServices: "Calefacción y aire", ebProjects: "Experiencia técnica", ebProcess: "Qué esperar", ebReviews: "Opiniones", ebFaq: "Respuestas útiles", ebAreas: "Dónde trabajamos", statCrewValue: "Apoyo directo", statCrew: "antes, durante y después", statFounded: "Sirviendo desde", ownerQuote: "Experiencia mecánica local con enfoque en calidad, comunicación clara y seguimiento confiable.", ownerSignature: "Juan Franco · Dueño/Gerente", guaranteeLabel: "Servicio responsable", trustAria: "Por qué elegir Franco's Mechanical", verify: "Verifique nuestras credenciales:", verifyLink: "ver licencia CSLB #962011", servicesTitle: "Servicios HVAC", servicesIntro: "Instalación, reparación y mantenimiento de los sistemas que mantienen cómodas casas y negocios.", learnMore: "Más información", whyTitle: "Por qué elegir", whyBody: "Franco's Mechanical combina conocimiento técnico con servicio accesible y responsable. Juan Franco se enfoca en recomendaciones claras, trabajo profesional y apoyo después de instalar.", whyCta: "Pedir servicio", recentTitle: "Cómo trabajamos los sistemas HVAC", recentIntro: "Instalación, pruebas y diagnóstico que ayudan al rendimiento confiable.", viewGallery: "Explorar experiencia", prevSlide: "Ejemplo anterior", nextSlide: "Ejemplo siguiente", goToSlide: "Ir al ejemplo", goToReview: "Ir a reseña", howTitle: "Un proceso claro", testimonialsTitle: "Reseñas reales", reviewsPending: "Las reseñas genuinas de Franco's Mechanical aparecerán cuando sean proporcionadas y verificadas.", systemsTitle: "Entienda sus opciones de comodidad", systemsBody: "Sistemas centrales, bombas de calor y mini splits resuelven necesidades distintas. Explicamos cada opción para que se adapte al edificio.", seasonalTitle: "Lista de comodidad por temporada", seasonalTips: ["Primavera: pruebe el aire antes del calor y programe mantenimiento temprano.", "Verano: mantenga libre el equipo exterior y revise filtros para buen flujo.", "Otoño: pruebe la calefacción antes del frío y atienda ruidos u olores.", "Invierno: use ajustes estables y llame si cambia el ciclo o la comodidad."], areasTitle: "Con base en Windsor. Sirviendo Sonoma.", notListed: "¿No aparece?", callUsAt: "Llámenos al", mayServe: "— confirmaremos servicio para su dirección.", ctaTitle: "La comodidad empieza con una respuesta clara", ctaBody: "Llame a Franco's Mechanical para instalación, reparación o mantenimiento HVAC." },
  about: { eyebrow: `Establecida en ${FOUNDED_YEAR}`, title: "Experiencia mecánica. Servicio ágil.", intro: "Franco's Mechanical es un contratista HVAC de Windsor dirigido por Juan Franco para clientes residenciales y comerciales.", heading: "Trabajo profesional, explicado claramente", p1: "Desde junio de 2011, Franco's Mechanical ofrece soluciones prácticas de calefacción, aire acondicionado y mecánica.", p2: "Cada sistema y edificio es distinto. Evaluamos equipo, flujo, controles y comodidad antes de recomendar.", p3: "La relación no termina al arrancar el equipo. Explicamos operación y cuidado, respondemos preguntas y seguimos disponibles.", bbbTitle: `Licencia CSLB C-20 #${LICENSE_NUMBER}`, bbbBody: "Licencia de Calefacción y Aire Acondicionado válida hasta el 30 de junio de 2027; activa y con historial limpio al 14 de julio de 2026.", bbbLink: "Verificar licencia", figCaption: "Instalación profesional sin ductos con atención a ubicación, pruebas y orientación al cliente.", whatYouGet: "Lo que puede esperar", howRuns: "Cómo funciona el servicio", words: "Reseñas de clientes" },
  services: { eyebrow: "Servicios HVAC", title: "Calefacción, aire, controles y reparación", intro: "Instalación experta y servicio ágil para propiedades residenciales y comerciales.", faqTitle: "Preguntas sobre HVAC", breadcrumb: "Servicios", otherServices: "Otros servicios", detailCta: "Pedir servicio" },
  gallery: { eyebrow: "Nuestra experiencia", title: "Detalles de instalación que mejoran el rendimiento", intro: "Conozca las tareas técnicas detrás de la comodidad confiable.", footnote: "Estas imágenes representativas ilustran tipos de trabajo HVAC; no se presentan como proyectos documentados de clientes." },
  areas: { eyebrow: "Áreas de servicio", title: "Servicio HVAC desde Windsor en el condado de Sonoma", intro: "Apoyo local para calefacción, aire y mecánica en casas y negocios.", mapTitle: "Cobertura desde Windsor", mapBody: "Nuestra área se extiende desde Windsor a comunidades cercanas. Llame para confirmar su dirección.", notListedTitle: "¿Fuera de estas ciudades? Llámenos.", notListedBody: "La disponibilidad depende de ubicación y horario. Díganos dónde está y qué necesita." },
  contact: { eyebrow: "Contacto", title: "Pida servicio HVAC", intro: "Llame o envíe el formulario. Cuéntenos qué hace el sistema y daremos seguimiento.", talkTo: "Llame a", hours: "Disponibilidad", serviceArea: "Área de servicio", notListed: "Llame para confirmar servicio en su dirección." },
  form: { heading: "Pida servicio HVAC", sub: "Comparta el sistema y problema para responder preparados.", name: "Nombre", namePlaceholder: "Su nombre", phone: "Teléfono", email: "Correo", cityZip: "Ciudad o código postal", propertyType: "Tipo de propiedad", sqft: "Edad del sistema", sqftPlaceholder: "ej. 12 años", condition: "¿Qué necesita?", notes: "Detalles (opcional)", notesPlaceholder: "Tipo de equipo, síntomas, tiempo y otros detalles.", selectOne: "Seleccione", submit: "Pedir servicio", preferTalk: "¿Prefiere hablar? Llame", sentTitle: "Solicitud recibida", sentBody: "Gracias. Llame si necesita respuesta más rápida; el envío en línea se está configurando.", call: "Llamar", propertyTypes: ["Casa residencial", "Apartamento / multifamiliar", "Propiedad comercial", "Otro"], conditions: ["Instalación de mini split", "Nueva calefacción o aire", "No enfría", "No calienta", "Reparación / operación inusual", "Mantenimiento", "Termostato o controles", "No estoy seguro"] },
  notFound: { title: "Página no encontrada", body: "La página no existe o fue movida.", home: "Ir al inicio" },
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
    // Preserve the reader's place: language changes swap words, never scroll.
    const y = typeof window !== "undefined" ? window.scrollY : 0;
    const html = typeof document !== "undefined" ? document.documentElement : null;
    const prevBehavior = html?.style.scrollBehavior;
    if (html) html.style.scrollBehavior = "auto";

    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }

    if (typeof window !== "undefined") {
      let frames = 0;
      const hold = () => {
        if (Math.abs(window.scrollY - y) > 1) window.scrollTo(0, y);
        if (++frames < 30) requestAnimationFrame(hold);
        else if (html) html.style.scrollBehavior = prevBehavior ?? "";
      };
      requestAnimationFrame(hold);
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
      title={ui.langToggle.aria}
      className={`group inline-flex items-center gap-2 rounded-full bg-copper px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.14em] !text-white shadow-[0_8px_20px_-14px_color-mix(in_oklab,var(--copper)_80%,transparent)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-copper/90 ${className}`}
    >
      <Globe className="size-3.5 text-white transition-transform duration-500 ease-out group-hover:rotate-12" />
      <span key={lang} className="fade-swap">
        {ui.langToggle.label}
      </span>
    </button>
  );
}
