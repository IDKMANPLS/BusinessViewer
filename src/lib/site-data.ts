import {
  Home,
  Layers,
  Hammer,
  Sparkles,
  Ruler,
  Building2,
  ShieldCheck,
  BadgeCheck,
  Timer,
  Receipt,
} from "lucide-react";
import workHardwood from "@/assets/work-hardwood.jpg";
import workTileFloor from "@/assets/work-tilefloor.jpg";
import workLvp from "@/assets/work-lvp.jpg";
import workCarpet from "@/assets/work-carpet.jpg";

export const PHONE_DISPLAY = "+1 111 111 111";
export const PHONE_HREF = "tel:+1111111111";
export const BUSINESS_NAME = "Flooring Demo Website";

export const services = [
  { icon: Home, title: "Hardwood Flooring", desc: "Solid and engineered oak installed plank by plank, racked for grain and color before a single nail." },
  { icon: Sparkles, title: "Refinishing & Sanding", desc: "Dustless sanding, stain matching and durable low-VOC finishes that bring tired wood back to life." },
  { icon: Layers, title: "Luxury Vinyl & Laminate", desc: "Waterproof LVP and laminate systems that handle kids, pets and Inland Empire heat." },
  { icon: Ruler, title: "Tile & Stone Floors", desc: "Porcelain, ceramic and natural stone set flat and level with proper underlayment and grout." },
  { icon: Hammer, title: "Carpet & Subfloor Repair", desc: "Plush and Berber carpet, stair runners, plus squeak and level fixes before anything goes down." },
  { icon: Building2, title: "Commercial Flooring", desc: "Offices, retail and rentals floored on schedule, with after-hours installs to keep you open." },
];

export const gallery = [
  { src: workHardwood, alt: "New wide-plank white oak hardwood floor installed in a Redlands living room" },
  { src: workTileFloor, alt: "Large format porcelain tile floor set in a remodeled bathroom" },
  { src: workLvp, alt: "Waterproof luxury vinyl plank flooring in an open kitchen and dining area" },
  { src: workCarpet, alt: "Plush neutral carpet newly installed on a staircase and upstairs hallway" },
];

export { workHardwood };

export const promises = [
  { icon: Timer, title: "On-schedule installs", desc: "Start dates we keep, and rooms back in use when we said." },
  { icon: Receipt, title: "Flat-rate quotes", desc: "Measured, itemized and approved before any demo starts." },
  { icon: BadgeCheck, title: "Licensed & insured", desc: "Fully bonded installers, workers' comp on every crew." },
  { icon: ShieldCheck, title: "Warranty backed", desc: "Manufacturer materials plus a written workmanship warranty." },
];

export const testimonials = [
  {
    quote:
      "They pulled up old carpet and laid white oak through the whole downstairs in three days. Furniture moved carefully, floors swept every evening, and the price matched the quote exactly.",
    name: "Marisol R.",
    place: "Redlands",
  },
  {
    quote:
      "Our hallway had a bad squeak and dips. They fixed the subfloor first instead of covering it up, and the new planks are dead flat and silent.",
    name: "Dan K.",
    place: "Yucaipa",
  },
  {
    quote:
      "Our 1940s oak floors looked done for. They sanded and refinished instead of replacing and saved us thousands — they look brand new.",
    name: "Priya S.",
    place: "Loma Linda",
  },
  {
    quote:
      "A washer leak ruined the laundry and hall floors. They had waterproof vinyl plank down within the week and handled the insurance photos for me.",
    name: "Greg T.",
    place: "Mentone",
  },
  {
    quote:
      "New porcelain tile in both bathrooms. Perfectly level, tight grout lines, and they cleaned up better than they found it.",
    name: "Ana V.",
    place: "Highland",
  },
  {
    quote:
      "They brought samples to the house and let us live with them for a few days. No pressure to buy the most expensive product in the van.",
    name: "Bill H.",
    place: "San Bernardino",
  },
];

export const faqs = [
  {
    q: "Are in-home estimates free?",
    a: "Yes. We measure every room, bring samples to your house, and email a written flat-rate quote at no cost.",
  },
  {
    q: "How long does a flooring install take?",
    a: "Most Redlands homes are demoed and floored in two to four days; large tile jobs and full hardwood refinishing can run about a week.",
  },
  {
    q: "Can you refinish instead of replacing?",
    a: "Often, yes. If the wood has enough thickness left we sand and refinish it, and we tell you honestly when replacement is the better value.",
  },
  {
    q: "Do you move furniture and haul away the old flooring?",
    a: "Yes. We move standard furniture, tear out the old carpet, tile or plank, and haul all the debris off site when we're done.",
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