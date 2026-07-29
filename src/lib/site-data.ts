import {
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  Hammer,
  AlertTriangle,
  ShieldCheck,
  BadgeCheck,
  Timer,
  Receipt,
} from "lucide-react";
import workWaterheater from "@/assets/work-waterheater.jpg";
import workRepipe from "@/assets/work-repipe.jpg";
import workBathroom from "@/assets/work-bathroom.jpg";
import workFaucet from "@/assets/work-faucet.jpg";

export const PHONE_DISPLAY = "+1 111 111 111";
export const PHONE_HREF = "tel:+1111111111";
export const BUSINESS_NAME = "My Businesses Website";

export const services = [
  { icon: Droplets, title: "Drain Cleaning", desc: "Hydro-jetting and snaking for slow or blocked kitchen, bath and main lines." },
  { icon: Flame, title: "Water Heater Repair & Install", desc: "Tank and tankless diagnostics, replacements and yearly maintenance." },
  { icon: AlertTriangle, title: "24/7 Emergency Plumbing", desc: "Burst pipes, overflows and no-water calls answered day or night." },
  { icon: Wrench, title: "Leak Detection & Repair", desc: "Slab, wall and under-sink leaks located without tearing up your home." },
  { icon: Hammer, title: "Repiping & Sewer Lines", desc: "Copper and PEX repipes, sewer camera inspection and line replacement." },
  { icon: ShowerHead, title: "Fixture Installation", desc: "Faucets, toilets, garbage disposals, showers and water filtration." },
];

export const gallery = [
  { src: workWaterheater, alt: "Newly installed tankless water heater with copper piping" },
  { src: workRepipe, alt: "Completed copper repipe work under a Redlands home" },
  { src: workBathroom, alt: "Bathroom after a full fixture and plumbing upgrade" },
  { src: workFaucet, alt: "New chrome kitchen faucet installed on a quartz countertop" },
];

export { workFaucet };

export const promises = [
  { icon: Timer, title: "Same-day service", desc: "Most Redlands calls booked within a few hours." },
  { icon: Receipt, title: "Flat-rate quotes", desc: "You approve the price before any work starts." },
  { icon: BadgeCheck, title: "Licensed & insured", desc: "Background-checked techs, fully bonded." },
  { icon: ShieldCheck, title: "Warranty backed", desc: "Parts and workmanship guaranteed in writing." },
];

export const testimonials = [
  {
    quote:
      "Water heater died on a Sunday night. They picked up on the second ring and had hot water back before noon Monday. Price matched the quote exactly.",
    name: "Marisol R.",
    place: "Redlands",
  },
  {
    quote:
      "Whole-house repipe done in two days. Crew laid down drop cloths every morning and cleaned up better than they found it.",
    name: "Dan K.",
    place: "Yucaipa",
  },
  {
    quote:
      "Slab leak found in twenty minutes with no guesswork and no holes in the wrong wall. Honest people.",
    name: "Priya S.",
    place: "Loma Linda",
  },
  {
    quote:
      "Main line backed up the morning we were hosting family. They cleared it, camera-scoped it, and showed me the footage so I knew it was actually fixed.",
    name: "Greg T.",
    place: "Mentone",
  },
  {
    quote:
      "Quoted half of what a big franchise wanted for the same water heater, and they were done by lunch. I keep their number on the fridge now.",
    name: "Ana V.",
    place: "Highland",
  },
  {
    quote:
      "Polite, on time, explained everything without talking down to me. Rare these days.",
    name: "Bill H.",
    place: "San Bernardino",
  },
];

export const faqs = [
  {
    q: "Do you charge for emergency callouts after hours?",
    a: "We quote a flat rate up front, nights and weekends included. You will always know the price before we start work.",
  },
  {
    q: "How fast can you get here?",
    a: "Most Redlands, Loma Linda and Mentone calls are handled the same day. True emergencies — burst pipes, no water, sewage backups — go to the front of the line 24/7.",
  },
  {
    q: "Are your plumbers licensed?",
    a: "Yes. Every technician is licensed, bonded, insured and background-checked before they set foot on your property.",
  },
  {
    q: "Do you warranty your work?",
    a: "All parts and workmanship are covered by a written warranty, and we come back at no charge if something related fails.",
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