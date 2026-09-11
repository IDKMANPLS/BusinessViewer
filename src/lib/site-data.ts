import { Snowflake, Flame, Wind, Wrench, Thermometer, Gauge, BadgeCheck, ShieldCheck, MessagesSquare, ClipboardCheck } from "lucide-react";
import miniSplit from "@/assets/hvac-mini-split.jpg.asset.json";
import acService from "@/assets/hvac-ac-service.jpg.asset.json";
import heating from "@/assets/hvac-heating.jpg.asset.json";
import thermostat from "@/assets/hvac-thermostat.jpg.asset.json";
import maintenance from "@/assets/hvac-maintenance.jpg.asset.json";
import commercial from "@/assets/hvac-commercial.jpg.asset.json";

export const BUSINESS_NAME = "Franco's Mechanical";
export const OWNER_NAME = "Juan Franco";
export const PHONE_DISPLAY = "(707) 695-3726";
export const PHONE_HREF = "tel:+17076953726";
export const EMAIL = "";
export const ADDRESS_STREET = "9409 Lazy Creek Dr";
export const ADDRESS_CITY = "Windsor";
export const ADDRESS_STATE = "CA";
export const ADDRESS_ZIP = "95492";
export const ADDRESS_FULL = `${ADDRESS_STREET}, ${ADDRESS_CITY}, ${ADDRESS_STATE} ${ADDRESS_ZIP}`;
export const YEARS_IN_BUSINESS = 14;
export const FOUNDED_YEAR = 2011;
export const LICENSE_NUMBER = "962011";
export const LICENSE_URL = `https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=${LICENSE_NUMBER}`;
export const SITE_URL = "https://jimspaving.lovable.app";

export const hours = [
  { day: "Monday – Friday", time: "Call for availability" },
  { day: "Saturday", time: "Call for availability" },
  { day: "Sunday", time: "Call for availability" },
];

export type ServiceSlug = "mini-split-installation" | "air-conditioning" | "heating-installation" | "hvac-repair" | "thermostats-zoning" | "preventive-maintenance";

type Service = { slug: ServiceSlug; icon: typeof Snowflake; title: string; short: string };
export const services: Service[] = [
  { slug: "mini-split-installation", icon: Wind, title: "Mini-Split Installation", short: "Efficient ductless heating and cooling, carefully sized and positioned for room-by-room comfort." },
  { slug: "air-conditioning", icon: Snowflake, title: "Air Conditioning", short: "Central A/C installation, replacement and service built around airflow, efficiency and reliable summer cooling." },
  { slug: "heating-installation", icon: Flame, title: "Heating Installation", short: "Professional furnace and heat-pump solutions for consistent, efficient comfort through Sonoma County winters." },
  { slug: "hvac-repair", icon: Wrench, title: "HVAC Repair", short: "Clear diagnostics and responsive repairs for systems that will not heat, cool, start or run correctly." },
  { slug: "thermostats-zoning", icon: Thermometer, title: "Thermostats & Zoning", short: "Controls, smart thermostats and zoning improvements that put comfort and energy use in your hands." },
  { slug: "preventive-maintenance", icon: Gauge, title: "Preventive Maintenance", short: "Seasonal inspections and tune-ups that improve performance and catch developing problems early." },
];

type Detail = { title: string; metaTitle: string; metaDescription: string; intro: string; image: string; imageAlt: string; sections: { heading: string; body: string; bullets?: string[] }[] };
export const serviceDetails: Record<ServiceSlug, Detail> = {
  "mini-split-installation": {
    title: "Mini-Split Installation", metaTitle: "Mini-Split Installation Windsor, CA | Franco's Mechanical", metaDescription: "Professional ductless mini-split installation in Windsor and Sonoma County. Proper sizing, clean installation and dependable support. Call (707) 695-3726.", intro: "Ductless systems can heat and cool efficiently without major ductwork—but performance depends on correct sizing, placement and commissioning.", image: miniSplit.url, imageAlt: "HVAC technician carefully installing a ductless mini-split indoor unit",
    sections: [
      { heading: "Is a mini split right for your space?", body: "Mini splits work well for additions, garages, older homes without ducts and rooms that never stay comfortable. We evaluate the room load, insulation, electrical capacity and outdoor-unit location before recommending a configuration." },
      { heading: "What professional installation includes", body: "A complete installation coordinates the indoor head, outdoor condenser, refrigerant line set, condensate drain, electrical connection and system controls.", bullets: ["Load-based equipment sizing", "Thoughtful indoor and outdoor unit placement", "Neat, protected line-set routing", "Pressure testing, evacuation and commissioning", "Owner walkthrough and operating guidance"] },
      { heading: "Single-zone or multi-zone", body: "A single-zone system serves one focused area. A multi-zone system connects several indoor units to one outdoor unit. We explain the comfort, control and efficiency tradeoffs so you can choose without overspending." },
      { heading: "Support after installation", body: "We stay available after startup. If you have questions about settings, filters, drainage or performance, call us. Clear communication after the installation is part of the service." },
    ],
  },
  "air-conditioning": {
    title: "Air Conditioning", metaTitle: "Air Conditioning Installation Windsor, CA | Franco's", metaDescription: "A/C installation, replacement and service in Windsor and Sonoma County. Expert sizing, airflow checks and transparent recommendations. (707) 695-3726.", intro: "Reliable cooling starts with more than the equipment box. Capacity, airflow, duct condition and installation quality all determine comfort and operating cost.", image: acService.url, imageAlt: "HVAC technician servicing an outdoor air conditioning condenser",
    sections: [
      { heading: "Installation and replacement", body: "We assess the existing system, home layout, ductwork and electrical requirements before recommending a replacement. The goal is even cooling and dependable operation—not simply the largest unit available." },
      { heading: "Why correct sizing matters", body: "An oversized system can short-cycle, control humidity poorly and wear components faster. An undersized system may run continuously on hot days. Proper sizing supports comfort, efficiency and equipment life." },
      { heading: "Airflow and ductwork", body: "A new condenser cannot overcome restricted returns, undersized ducts or leaky connections. We look at the complete air path and explain any issue that could limit the new system." },
      { heading: "Before summer", body: "Schedule cooling maintenance before sustained hot weather. A clean coil, proper airflow, sound electrical connections and verified operation reduce the chance of a breakdown when demand peaks." },
    ],
  },
  "heating-installation": {
    title: "Heating Installation", metaTitle: "Heating & Furnace Installation Windsor, CA | Franco's", metaDescription: "Furnace and heat-pump installation in Windsor, CA and Sonoma County. Professional workmanship, system guidance and responsive follow-up.", intro: "A heating system should deliver steady comfort safely and efficiently. We help you understand furnace and heat-pump options before work begins.", image: heating.url, imageAlt: "HVAC technician commissioning a residential furnace and air handler",
    sections: [
      { heading: "Furnace or heat pump?", body: "Furnaces provide familiar forced-air heat. Heat pumps move heat and can provide both heating and cooling. The best choice depends on the building, existing utilities, comfort priorities and budget." },
      { heading: "Installation details matter", body: "Equipment must be matched, connected, vented and configured correctly. We focus on safe installation, clean workmanship, proper airflow and complete startup testing." },
      { heading: "What we review with you", body: "Before finishing, we explain thermostat operation, filter access, routine care and what normal system operation sounds like. You should know how to use the equipment you purchased." },
      { heading: "Before colder weather", body: "Have heating equipment checked before the first long cold stretch. Early inspection gives more time to address worn parts, airflow issues or ignition problems before comfort becomes urgent." },
    ],
  },
  "hvac-repair": {
    title: "HVAC Repair", metaTitle: "HVAC Repair Windsor, CA | Franco's Mechanical", metaDescription: "Responsive heating and air conditioning repair in Windsor and Sonoma County. Thorough diagnostics and clear repair recommendations. Call (707) 695-3726.", intro: "When comfort stops, you need a clear diagnosis—not guesswork. We inspect the system, explain what failed and discuss practical next steps.", image: maintenance.url, imageAlt: "HVAC technician using gauges to diagnose an outdoor heat-pump system",
    sections: [
      { heading: "Problems we diagnose", body: "We troubleshoot common no-cool, no-heat and performance complaints across residential and light commercial systems.", bullets: ["System will not start or repeatedly shuts off", "Air is warm when cooling or cool when heating", "Weak or uneven airflow", "Unusual noise, odor or water near equipment", "Thermostat or control problems", "Unexpected increase in energy use"] },
      { heading: "Repair versus replacement", body: "Age, repair cost, condition, comfort and efficiency all matter. We explain what is repairable and when replacement may be the more responsible long-term choice." },
      { heading: "Transparent communication", body: "We describe the finding and proposed work before proceeding. If additional issues appear, we communicate them instead of adding unexplained work." },
      { heading: "Follow-through", body: "After a repair, we verify operation and answer questions. If the same concern returns, call us so we can review the system and the work performed." },
    ],
  },
  "thermostats-zoning": {
    title: "Thermostats & Zoning", metaTitle: "Smart Thermostats & HVAC Zoning Windsor, CA | Franco's", metaDescription: "Thermostat installation, control upgrades and HVAC zoning solutions in Windsor and Sonoma County. Improve comfort and system control.", intro: "Better controls can improve comfort and convenience, but they must be compatible with the equipment and wired correctly.", image: thermostat.url, imageAlt: "Technician precisely installing a modern smart thermostat",
    sections: [
      { heading: "Thermostat installation", body: "We verify equipment compatibility, available wiring and system configuration before installing or replacing a thermostat. Then we test every operating mode." },
      { heading: "Smart controls", body: "Smart thermostats can add schedules, remote adjustments and energy-use insights. We help configure practical settings without making everyday operation complicated." },
      { heading: "Zoned comfort", body: "Zoning uses controls and dampers—or separate ductless heads—to manage different areas independently. It can help when upstairs and downstairs spaces behave differently." },
      { heading: "When controls are not the cause", body: "A thermostat cannot fix poor airflow, failing equipment or incorrect sizing. We diagnose the complete system before recommending a control upgrade." },
    ],
  },
  "preventive-maintenance": {
    title: "Preventive Maintenance", metaTitle: "HVAC Maintenance Windsor, CA | Franco's Mechanical", metaDescription: "Seasonal HVAC maintenance and tune-ups in Windsor and Sonoma County. Improve reliability, airflow and efficiency before peak weather.", intro: "Routine maintenance helps equipment run as designed and gives you time to address wear before a peak-season breakdown.", image: commercial.url, imageAlt: "HVAC technician inspecting commercial heating and cooling equipment",
    sections: [
      { heading: "What maintenance checks", body: "The visit focuses on operation, cleanliness, airflow and visible wear rather than a quick visual glance.", bullets: ["Filters, coils and accessible drains", "Electrical connections and controls", "Temperature change and airflow", "Refrigerant-circuit operating indicators", "Heating startup and safety-related operation", "Thermostat response and system cycling"] },
      { heading: "Seasonal timing", body: "Cooling systems are best checked in spring before hot weather. Heating systems are best checked in fall before sustained cold. Filters should be inspected more frequently based on use, pets and indoor conditions." },
      { heading: "What maintenance cannot guarantee", body: "A tune-up cannot prevent every future failure, but it can identify many developing problems and improve the chance that the system performs when needed." },
      { heading: "Residential and commercial", body: "We support both homes and commercial properties. Service scope is matched to the equipment and how the building is used." },
    ],
  },
};

export const gallery = [
  { src: miniSplit.url, alt: "Technician installing a ductless mini-split indoor unit", city: "Ductless systems", type: "Precise mini-split installation", date: "Sizing · Placement · Commissioning" },
  { src: acService.url, alt: "Technician servicing a residential air conditioner", city: "Cooling systems", type: "Air conditioning diagnostics", date: "Airflow · Electrical · Performance" },
  { src: heating.url, alt: "Technician testing a furnace installation", city: "Heating systems", type: "Furnace and air-handler setup", date: "Safety · Airflow · Startup testing" },
  { src: thermostat.url, alt: "Careful installation of a modern thermostat", city: "Comfort controls", type: "Thermostat installation", date: "Compatibility · Wiring · Configuration" },
  { src: maintenance.url, alt: "Technician checking HVAC operating pressures", city: "Repair expertise", type: "Measured system diagnostics", date: "Test · Explain · Repair" },
  { src: commercial.url, alt: "Technician inspecting commercial HVAC equipment", city: "Commercial service", type: "Light commercial HVAC support", date: "Reliability · Communication · Follow-through" },
];

export const trustPoints = [
  { icon: BadgeCheck, title: "CSLB Licensed", desc: `Active C-20 Heating & Air Conditioning license #${LICENSE_NUMBER}.` },
  { icon: ShieldCheck, title: "Clear License Record", desc: "License status reported active and clear as of July 14, 2026." },
  { icon: MessagesSquare, title: "Responsive Communication", desc: "Clear explanations before work and accessible support after installation." },
  { icon: ClipboardCheck, title: "Workmanship Focus", desc: "Careful installation, complete startup checks and an owner walkthrough." },
];

export const whyChoose = [
  `${YEARS_IN_BUSINESS} years serving residential and commercial customers`,
  `California C-20 Heating & Air Conditioning license #${LICENSE_NUMBER}`,
  "Recommendations based on the system and building—not a one-size-fits-all package",
  "Clear repair-versus-replacement explanations before you decide",
  "Professional installation with attention to airflow, controls and commissioning",
  "Direct communication with owner and manager Juan Franco",
  "Support with operation and questions after installation",
  "Local service based in Windsor for Sonoma County customers",
];

export const steps = [
  { n: "1", title: "Listen & assess", desc: "We start with the comfort problem, inspect the system and gather the details needed for a sound recommendation." },
  { n: "2", title: "Explain the options", desc: "You receive a clear scope with practical choices and transparent pricing before work begins." },
  { n: "3", title: "Install or repair", desc: "The work is completed carefully, with attention to the equipment, your property and a clean workspace." },
  { n: "4", title: "Test & follow through", desc: "We verify operation, explain the controls and stay available for post-service questions." },
];

export const testimonials: { quote: string; name: string; place: string; date: string }[] = [];

export const serviceAreas = ["Windsor", "Santa Rosa", "Healdsburg", "Sebastopol", "Rohnert Park", "Cotati", "Sonoma", "Petaluma"];

export const faqs = [
  { q: "Do you install ductless mini splits?", a: "Yes. We evaluate room load, placement, line routing, electrical needs and condensate drainage, then commission the system and explain its controls." },
  { q: "How do I know whether to repair or replace my HVAC system?", a: "Age is only one factor. We also consider the failed component, overall condition, comfort, efficiency, repair history and cost. We explain both practical paths when both are viable." },
  { q: "What does proper HVAC sizing mean?", a: "Equipment should match the building's heating and cooling load. Bigger is not automatically better; oversizing can cause short cycles, uneven comfort and unnecessary wear." },
  { q: "When should I schedule maintenance?", a: "Cooling equipment is best checked in spring and heating equipment in fall, before peak demand. Filter checks may be needed more often depending on use, pets and indoor conditions." },
  { q: "Do you work on residential and commercial systems?", a: "Yes. Franco's Mechanical provides mechanical and HVAC solutions for residential and commercial customers in Windsor and surrounding Sonoma County communities." },
  { q: "Are you a licensed HVAC contractor?", a: `Yes. Franco's Mechanical holds California CSLB license #${LICENSE_NUMBER}, classification C-20 Heating & Air Conditioning, valid through June 30, 2027. The record was active and clear as of July 14, 2026.` },
  { q: "What warranty do I receive?", a: "Warranty coverage depends on the equipment and the scope of work. We explain applicable manufacturer and workmanship coverage for your project before installation; no one-size-fits-all term is advertised." },
  { q: "What happens after installation?", a: "We test operation, walk you through the controls and routine care, and remain available for questions. Responsive follow-up is a core part of how we work." },
  { q: "Which areas do you serve?", a: "We are based in Windsor and serve surrounding Sonoma County communities, including Santa Rosa, Healdsburg, Sebastopol, Rohnert Park, Cotati, Sonoma and Petaluma. Call to confirm your address." },
];

export const navLinks = [
  { to: "/", label: "Home" }, { to: "/services", label: "Services" }, { to: "/gallery", label: "Our Work" }, { to: "/about", label: "About" }, { to: "/service-areas", label: "Service Areas" }, { to: "/contact", label: "Contact" },
] as const;

export const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "HVACBusiness", name: BUSINESS_NAME,
  description: "HVAC installation, repair and maintenance in Windsor and Sonoma County, including mini splits, air conditioning, heating and controls.",
  telephone: "+17076953726", url: SITE_URL, foundingDate: "2011-06-10", founder: { "@type": "Person", name: OWNER_NAME }, priceRange: "$$",
  address: { "@type": "PostalAddress", streetAddress: ADDRESS_STREET, addressLocality: ADDRESS_CITY, addressRegion: ADDRESS_STATE, postalCode: ADDRESS_ZIP, addressCountry: "US" },
  areaServed: serviceAreas.map((a) => ({ "@type": "City", name: `${a}, California` })),
  hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: "California C-20 Heating & Air Conditioning Contractor License", identifier: LICENSE_NUMBER },
};

export const areaHighlights = [
  { city: "Windsor", body: "Our home base for mini-split installation, air conditioning, heating, controls, repairs and maintenance." },
  { city: "Santa Rosa", body: "Responsive residential and commercial HVAC support across Santa Rosa and nearby neighborhoods." },
  { city: "Healdsburg", body: "Heating, cooling and ductless comfort solutions for homes and local businesses." },
  { city: "Rohnert Park & Cotati", body: "System replacement, repair, thermostat and preventive-maintenance service." },
  { city: "Sebastopol", body: "Practical HVAC solutions for varied homes, additions and ductless applications." },
  { city: "Sonoma & Petaluma", body: "Professional HVAC assessment and service; call to confirm availability for your address." },
];
