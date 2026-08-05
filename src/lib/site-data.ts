import {
  Home,
  PaintRoller,
  Brush,
  Layers,
  Sparkles,
  Building2,
  ShieldCheck,
  BadgeCheck,
  Timer,
  Receipt,
} from "lucide-react";
import workExterior from "@/assets/work-exterior.jpg";
import workInterior from "@/assets/work-interior.jpg";
import workCabinets from "@/assets/work-cabinets.jpg";
import workDeck from "@/assets/work-deck.jpg";

export const PHONE_DISPLAY = "+1 111 111 111";
export const PHONE_HREF = "tel:+1111111111";
export const BUSINESS_NAME = "Redlands Painting";

export const services = [
  { icon: Home, title: "Exterior House Painting", desc: "Stucco, siding and trim prepped, primed and finished in premium exterior coatings." },
  { icon: PaintRoller, title: "Interior Painting", desc: "Walls, ceilings, baseboards and crown molding with clean lines and covered floors." },
  { icon: Brush, title: "Cabinet Refinishing", desc: "Sprayed kitchen and bath cabinets in a factory-smooth, durable finish." },
  { icon: Layers, title: "Deck & Fence Staining", desc: "Sanding, sealing and staining to protect wood from Inland Empire sun." },
  { icon: Sparkles, title: "Drywall & Stucco Repair", desc: "Patching, texture matching and caulking so the new paint lays flat." },
  { icon: Building2, title: "Commercial Painting", desc: "Offices, retail and apartment turnovers painted on nights and weekends." },
];

export const gallery = [
  { src: workExterior, alt: "Freshly painted beige exterior with white trim on a Redlands home" },
  { src: workInterior, alt: "Living room repainted in warm greige with crisp white molding" },
  { src: workCabinets, alt: "Kitchen cabinets refinished in a sprayed warm white finish" },
  { src: workDeck, alt: "Backyard deck and pergola freshly stained and sealed" },
];

export { workInterior };

export const promises = [
  { icon: Timer, title: "On-schedule crews", desc: "We start when we say and finish when we promise." },
  { icon: Receipt, title: "Flat-rate quotes", desc: "You approve the price before any work starts." },
  { icon: BadgeCheck, title: "Licensed & insured", desc: "Background-checked painters, fully bonded." },
  { icon: ShieldCheck, title: "Warranty backed", desc: "Prep and workmanship guaranteed in writing." },
];

export const testimonials = [
  {
    quote:
      "They repainted our whole exterior in three days. Taped, masked and pressure-washed before a drop of paint went on, and the price matched the quote exactly.",
    name: "Marisol R.",
    place: "Redlands",
  },
  {
    quote:
      "Interior of the whole house, ceilings included. Crew laid drop cloths every morning and left it cleaner than they found it.",
    name: "Dan K.",
    place: "Yucaipa",
  },
  {
    quote:
      "Our kitchen cabinets look factory sprayed — no brush marks anywhere. Saved us thousands over a full replacement.",
    name: "Priya S.",
    place: "Loma Linda",
  },
  {
    quote:
      "They patched years of stucco cracks, matched the texture perfectly, then painted. You cannot tell where the old damage was.",
    name: "Greg T.",
    place: "Mentone",
  },
  {
    quote:
      "Deck and fence sanded and stained before summer. Two years of Redlands sun later and it still looks new.",
    name: "Ana V.",
    place: "Highland",
  },
  {
    quote:
      "Helped us pick the color, brought real samples, and never once made us feel rushed. Polite and on time every day.",
    name: "Bill H.",
    place: "San Bernardino",
  },
];

export const faqs = [
  {
    q: "Are estimates free?",
    a: "Yes. We walk the property, measure, talk through colors and sheens, and email a written flat-rate quote at no cost.",
  },
  {
    q: "How long does a typical house take?",
    a: "Most Redlands exteriors take three to five days, and a full interior repaint runs two to four days depending on square footage and ceilings.",
  },
  {
    q: "What kind of prep is included?",
    a: "Pressure washing, scraping, sanding, caulking, patching and full masking are part of every job — prep is most of what makes paint last.",
  },
  {
    q: "Do you warranty your work?",
    a: "Yes. Prep and workmanship are covered by a written warranty, and we come back at no charge if anything peels or fails.",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/ourwork", label: "Our Work" },
  { to: "/customerreviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;