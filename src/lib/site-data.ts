import {
  Home,
  Layers,
  Wrench,
  CloudRain,
  Search,
  Building2,
  ShieldCheck,
  BadgeCheck,
  Timer,
  Receipt,
} from "lucide-react";
import workShingle from "@/assets/work-shingle.jpg";
import workTile from "@/assets/work-tile.jpg";
import workFlatRoof from "@/assets/work-flatroof.jpg";
import workGutters from "@/assets/work-gutters.jpg";

export const PHONE_DISPLAY = "+1 111 111 111";
export const PHONE_HREF = "tel:+1111111111";
export const BUSINESS_NAME = "Roofing Demo Website";

export const services = [
  { icon: Home, title: "Roof Replacement", desc: "Full tear-off and re-roof in architectural shingle, tile or metal with new underlayment." },
  { icon: Wrench, title: "Roof Repair", desc: "Cracked tiles, lifted shingles, flashing and vent boots fixed fast before the next storm." },
  { icon: Search, title: "Leak Detection", desc: "We trace the water back to the real entry point instead of guessing and patching." },
  { icon: Layers, title: "Tile & Shingle Roofing", desc: "Clay and concrete tile restoration plus premium composition shingle systems." },
  { icon: Building2, title: "Flat & Commercial Roofing", desc: "TPO and modified bitumen membranes for flat roofs, offices, retail and apartments." },
  { icon: CloudRain, title: "Gutters & Ventilation", desc: "Seamless gutters, downspouts and attic ventilation to move water and heat out." },
];

export const gallery = [
  { src: workShingle, alt: "New charcoal architectural shingle roof installed on a Redlands home" },
  { src: workTile, alt: "Restored terracotta clay tile roof on a Spanish style house" },
  { src: workFlatRoof, alt: "Flat commercial roof finished with a new white TPO membrane" },
  { src: workGutters, alt: "New seamless gutters and downspout installed along a roofline" },
];

export { workTile };

export const promises = [
  { icon: Timer, title: "Emergency tarping", desc: "Active leak? We get a crew out and the roof dried in fast." },
  { icon: Receipt, title: "Flat-rate quotes", desc: "You approve the price before any tear-off starts." },
  { icon: BadgeCheck, title: "Licensed & insured", desc: "Fully bonded roofers, workers' comp on every crew." },
  { icon: ShieldCheck, title: "Warranty backed", desc: "Manufacturer materials plus a written workmanship warranty." },
];

export const testimonials = [
  {
    quote:
      "They tore off and replaced our whole roof in two days. Dumpster placed carefully, yard magnet-swept every evening, and the price matched the quote exactly.",
    name: "Marisol R.",
    place: "Redlands",
  },
  {
    quote:
      "We had a leak over the kitchen for months. They found it at a bad flashing joint the first visit and it has been dry through two winters.",
    name: "Dan K.",
    place: "Yucaipa",
  },
  {
    quote:
      "Our clay tile roof looked done for. They replaced the underlayment, reused most of the tile and saved us thousands over a full replacement.",
    name: "Priya S.",
    place: "Loma Linda",
  },
  {
    quote:
      "Storm took shingles off at night and they had the roof tarped the next morning. Insurance paperwork was handled without me chasing anyone.",
    name: "Greg T.",
    place: "Mentone",
  },
  {
    quote:
      "New seamless gutters and attic vents. The upstairs is noticeably cooler and the patio no longer floods when it rains.",
    name: "Ana V.",
    place: "Highland",
  },
  {
    quote:
      "Photos of every problem area before and after, explained in plain English. No pressure to buy a roof I did not need yet.",
    name: "Bill H.",
    place: "San Bernardino",
  },
];

export const faqs = [
  {
    q: "Are roof inspections and estimates free?",
    a: "Yes. We get on the roof, photograph the problem areas, and email a written flat-rate quote at no cost.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most Redlands homes are torn off and re-roofed in two to four days; tile and larger or steeper roofs can run about a week.",
  },
  {
    q: "Can you repair instead of replacing?",
    a: "Often, yes. If the decking and underlayment are sound we repair flashing, tiles or shingles and tell you honestly how many years are left.",
  },
  {
    q: "Do you handle storm damage and insurance claims?",
    a: "We tarp active leaks the same day, document the damage for your carrier, and meet the adjuster on site.",
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