import {
  Layers,
  Hammer,
  CloudRain,
  Search,
  Wrench,
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
  { icon: Layers, title: "Roof Replacement", desc: "Full tear-off and re-roof with new underlayment, flashing and manufacturer-warrantied shingles." },
  { icon: Wrench, title: "Roof Repair", desc: "Cracked tiles, lifted shingles, dry-rotted fascia and failed flashing repaired right the first time." },
  { icon: Search, title: "Leak Detection", desc: "We trace the water back to its real entry point instead of guessing and patching the stain." },
  { icon: Hammer, title: "Tile & Shingle Roofing", desc: "Clay and concrete tile, architectural shingles — matched to your home and Inland Empire heat." },
  { icon: Building2, title: "Flat & Commercial Roofing", desc: "TPO and modified bitumen systems for offices, retail and rentals, installed around your hours." },
  { icon: CloudRain, title: "Gutters & Ventilation", desc: "Seamless gutters, downspouts and attic venting so water and heat leave your roof properly." },
];

export const gallery = [
  { src: workShingle, alt: "New charcoal architectural shingle roof installed on a Redlands stucco home" },
  { src: workTile, alt: "Replaced terracotta clay tile roof on a Spanish-style Inland Empire home" },
  { src: workFlatRoof, alt: "New white TPO flat membrane roof on a small commercial building" },
  { src: workGutters, alt: "Seamless aluminum gutters and downspout newly installed along a roofline" },
];

export { workShingle };

export const promises = [
  { icon: Timer, title: "Same-week response", desc: "Active leaks tarped fast, inspections booked within days." },
  { icon: Receipt, title: "Flat-rate quotes", desc: "Inspected, itemized and approved before any tear-off starts." },
  { icon: BadgeCheck, title: "Licensed & insured", desc: "Fully bonded roofers, workers' comp on every crew." },
  { icon: ShieldCheck, title: "Warranty backed", desc: "Manufacturer materials plus a written workmanship warranty." },
];

export const testimonials = [
  {
    quote:
      "They tore off our old roof and had new shingles on in three days. Yard magnet-swept every evening and the final price matched the quote exactly.",
    name: "Marisol R.",
    place: "Redlands",
  },
  {
    quote:
      "A ceiling stain three other guys said was a pipe turned out to be flashing. They found it in an hour and fixed it for a fraction of what a re-roof would have cost.",
    name: "Dan K.",
    place: "Yucaipa",
  },
  {
    quote:
      "Our 1940s tile roof looked done for. They relaid the existing tile over new underlayment instead of replacing everything and saved us thousands.",
    name: "Priya S.",
    place: "Loma Linda",
  },
  {
    quote:
      "A storm took shingles off overnight. They tarped it the same afternoon and handled all the insurance photos and paperwork for me.",
    name: "Greg T.",
    place: "Mentone",
  },
  {
    quote:
      "New seamless gutters and attic vents. Water finally goes where it should, and the upstairs is noticeably cooler in summer.",
    name: "Ana V.",
    place: "Highland",
  },
  {
    quote:
      "They walked the roof with me, showed me photos of every problem area, and never once pushed a full replacement I didn't need.",
    name: "Bill H.",
    place: "San Bernardino",
  },
];

export const faqs = [
  {
    q: "Are roof inspections and estimates free?",
    a: "Yes. We inspect the roof and attic, photograph what we find, and email a written flat-rate quote at no cost.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most Redlands homes are torn off and re-roofed in two to four days; large tile roofs and commercial flat systems can run about a week.",
  },
  {
    q: "Can you repair instead of replacing?",
    a: "Often, yes. If the decking and underlayment are sound we repair the failed section, and we tell you honestly when replacement is the better value.",
  },
  {
    q: "Do you help with storm damage and insurance claims?",
    a: "Yes. We tarp active leaks quickly, document the damage with photos and measurements, and work directly with your adjuster.",
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