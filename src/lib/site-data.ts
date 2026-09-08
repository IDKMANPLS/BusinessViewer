import {
  Layers,
  Wrench,
  Droplets,
  Building2,
  Mountain,
  ClipboardCheck,
  ShieldCheck,
  BadgeCheck,
  Users,
  Receipt,
} from "lucide-react";
import workDriveway from "@/assets/work-driveway.jpg";
import workRepair from "@/assets/work-repair.jpg";
import workSealcoat from "@/assets/work-sealcoat.jpg";
import workParkingLot from "@/assets/work-parkinglot.jpg";
import workGrading from "@/assets/work-grading.jpg";

export const BUSINESS_NAME = "Jim's Paving";
export const OWNER_NAME = "Jim Todorovitch Jr.";
export const PHONE_DISPLAY = "(707) 477-3291";
export const PHONE_HREF = "tel:+17074773291";
export const EMAIL = "estimates@jimspavingca.com";
export const ADDRESS_STREET = "4130 Whistler Avenue";
export const ADDRESS_CITY = "Santa Rosa";
export const ADDRESS_STATE = "CA";
export const ADDRESS_ZIP = "95407";
export const ADDRESS_FULL = `${ADDRESS_STREET}, ${ADDRESS_CITY}, ${ADDRESS_STATE} ${ADDRESS_ZIP}`;
export const YEARS_IN_BUSINESS = 37;
export const FOUNDED_YEAR = 1989;
export const BBB_URL = "https://www.bbb.org/us/ca/santa-rosa";
export const SITE_URL = "https://demobusiness.lovable.app";

export const hours = [
  { day: "Monday – Friday", time: "7:00am – 5:00pm" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Closed" },
];

export type ServiceSlug =
  | "asphalt-driveway-installation"
  | "driveway-repair-resurfacing"
  | "sealcoating"
  | "commercial-paving"
  | "excavation-grading"
  | "parking-lot-maintenance";

export const services: {
  slug: ServiceSlug;
  icon: typeof Layers;
  title: string;
  short: string;
}[] = [
  {
    slug: "asphalt-driveway-installation",
    icon: Layers,
    title: "Asphalt Driveway Installation",
    short: "New residential driveways built on a properly graded, compacted base that holds up in Sonoma County soil.",
  },
  {
    slug: "driveway-repair-resurfacing",
    icon: Wrench,
    title: "Driveway Resurfacing & Repair",
    short: "Cracks, potholes and alligatored surfaces repaired or overlaid instead of a full, costly tear-out.",
  },
  {
    slug: "sealcoating",
    icon: Droplets,
    title: "Sealcoating",
    short: "Protective maintenance that blocks water, oil and UV damage and restores a deep black finish.",
  },
  {
    slug: "commercial-paving",
    icon: Building2,
    title: "Commercial Parking Lot Paving",
    short: "Traffic-rated parking lots, private streets and commercial approaches, striped and ADA compliant.",
  },
  {
    slug: "excavation-grading",
    icon: Mountain,
    title: "Excavation & Site Grading",
    short: "Site prep, base rock and drainage grading so water moves off your pavement instead of through it.",
  },
  {
    slug: "parking-lot-maintenance",
    icon: ClipboardCheck,
    title: "Parking Lot Maintenance & Repairs",
    short: "Crack filling, patching, seal and stripe programs that stretch the life of the lot you already own.",
  },
];

export const serviceDetails: Record<
  ServiceSlug,
  {
    title: string;
    metaTitle: string;
    metaDescription: string;
    intro: string;
    image: string;
    imageAlt: string;
    sections: { heading: string; body: string; bullets?: string[] }[];
  }
> = {
  "asphalt-driveway-installation": {
    title: "Asphalt Driveway Installation",
    metaTitle: "Asphalt Driveway Installation in Santa Rosa | Jim's Paving",
    metaDescription:
      "New asphalt driveway installation in Santa Rosa and Sonoma County. 37 years, BBB A+ accredited, licensed and insured. Free estimates: (707) 477-3291.",
    intro:
      "A driveway is only as good as what's under it. We grade, compact and pave so your new asphalt drains correctly and stays flat for decades.",
    image: workDriveway,
    imageAlt: "Newly installed asphalt driveway with clean edges at a Santa Rosa home",
    sections: [
      {
        heading: "What's included",
        body: "Every residential installation is quoted as a complete job — no surprise add-ons once the equipment is on site.",
        bullets: [
          "Excavation of old pavement, sod or soft soil and haul-off",
          "Grading for positive drainage away from your garage and foundation",
          "Class II base rock placed and compacted to the depth your soil needs",
          "Hot-mix asphalt laid in lifts and rolled while at temperature",
          "Hand-worked edges, transitions and clean tie-ins at the street and garage",
        ],
      },
      {
        heading: "Materials we use",
        body: "We pave with commercially available hot-mix asphalt from local Sonoma County plants, matched to the traffic your driveway actually sees. Standard residential driveways get 2–3 inches of compacted asphalt over 4 inches of base; drives that carry RVs, trailers or delivery trucks get thicker sections.",
      },
      {
        heading: "Timeline",
        body: "Most residential driveways are finished in one to three working days depending on how much excavation is involved. Jim walks the site with you before work starts and again when it's done. You can walk on new asphalt the same day and park on it after about 24–72 hours in warm weather.",
      },
      {
        heading: "What affects your price",
        body: "Square footage, existing pavement removal, base condition, access for equipment, drainage work and the thickness required. There is no guessing — we measure the site and hand you a written estimate at no cost and with no obligation.",
      },
      {
        heading: "Our workmanship commitment",
        body: "We stand behind the work we install. If something we placed isn't right, call us and we'll come look at it. That's how a small family shop stays in business for 37 years and holds a BBB A+ accreditation.",
      },
    ],
  },
  "driveway-repair-resurfacing": {
    title: "Driveway Repair & Resurfacing",
    metaTitle: "Driveway Repair & Asphalt Resurfacing in Santa Rosa | Jim's Paving",
    metaDescription:
      "Asphalt driveway repair, patching and resurfacing in Santa Rosa and Sonoma County. Honest assessment, free estimates. Call (707) 477-3291.",
    intro:
      "Not every tired driveway needs to be torn out. We tell you honestly whether a repair, an overlay or a full replacement is the right money to spend.",
    image: workRepair,
    imageAlt: "Cracked asphalt driveway with potholes before repair and resurfacing",
    sections: [
      {
        heading: "Signs your driveway needs attention",
        body: "Catching these early is the difference between a patch and a replacement.",
        bullets: [
          "Cracks wide enough to hold a pencil, or cracks with weeds growing through",
          "Alligator cracking — interconnected cracks that look like scales",
          "Potholes, soft spots or areas that sink after rain",
          "Standing water or puddles that never drain",
          "Gray, brittle, raveling surface that sheds loose aggregate",
          "Crumbling edges where the pavement meets dirt or lawn",
        ],
      },
      {
        heading: "Sealing vs. resurfacing vs. replacement",
        body: "Sealcoating is maintenance for pavement that is still structurally sound — it protects the surface but does not fix a failing base. Resurfacing (an overlay) puts new asphalt over an existing surface that still has a solid foundation. If the base has failed and the cracking runs full-depth, replacement is the only honest answer, and we will say so rather than sell you an overlay that fails in two years.",
      },
      {
        heading: "Our repair process",
        body: "We inspect the whole surface and the drainage, saw-cut and remove failed sections, rebuild and compact the base underneath, then patch or overlay with hot-mix asphalt and roll it flush with the surrounding pavement. Cracks that don't need removal are cleaned and filled before any surface work.",
      },
    ],
  },
  sealcoating: {
    title: "Sealcoating",
    metaTitle: "Asphalt Sealcoating in Santa Rosa & Sonoma County | Jim's Paving",
    metaDescription:
      "Professional driveway and parking lot sealcoating in Santa Rosa. Protect your asphalt from water, oil and UV. Free estimates: (707) 477-3291.",
    intro:
      "Sealcoating is the cheapest thing you can do to protect an asphalt investment you've already paid for.",
    image: workSealcoat,
    imageAlt: "Freshly sealcoated asphalt driveway with a deep black uniform finish",
    sections: [
      {
        heading: "Why sealcoating protects your pavement",
        body: "Asphalt fails from the top down. Sun oxidizes the binder until the surface turns gray and brittle, then winter rain gets into the hairline cracks and undermines the base. A sealcoat puts a wearing layer between your pavement and water, oil, gasoline and UV — and it makes an older driveway look close to new again.",
      },
      {
        heading: "How often to sealcoat",
        body: "New asphalt should cure for roughly 6 to 12 months before its first seal. After that, most Sonoma County driveways do well on a two- to three-year cycle; commercial lots with heavy traffic and oil drips are often better on a two-year schedule. Sealing on a shorter cycle than that mostly wastes money.",
      },
      {
        heading: "Seasonal timing in Sonoma County",
        body: "Sealer needs warm, dry pavement and a dry window to cure, so our season generally runs late spring through early fall. We schedule around our rainy months instead of rushing a seal that won't bond. Cracks get cleaned and filled first — sealer alone is not a crack repair.",
      },
      {
        heading: "What the job looks like",
        body: "We blow and sweep the surface clean, treat oil spots, fill cracks, mask concrete and edges, apply sealer to the driveway or lot, and keep it barricaded while it cures. Most residential driveways are back in service the next day.",
      },
    ],
  },
  "commercial-paving": {
    title: "Commercial Paving",
    metaTitle: "Commercial Paving & Parking Lots in Sonoma County | Jim's Paving",
    metaDescription:
      "Commercial asphalt paving, parking lot installation, striping and maintenance in Santa Rosa and Sonoma County. Licensed, insured, BBB A+. (707) 477-3291.",
    intro:
      "Parking lots, private drives and commercial approaches, built to carry real traffic and scheduled around your business hours.",
    image: workParkingLot,
    imageAlt: "Newly paved commercial parking lot with fresh striping and accessible stalls",
    sections: [
      {
        heading: "Parking lot installation",
        body: "We handle commercial lots from grading and base through paving, and we build the pavement section to the traffic it will see — passenger stalls, delivery lanes and trash-enclosure approaches are not the same thing and shouldn't be paved the same way.",
      },
      {
        heading: "Traffic-rated surfaces & drainage",
        body: "Heavy truck routes, dumpster pads and drive aisles get thicker asphalt over deeper compacted base. We set grades so water runs to your inlets, not toward the building, because standing water is what destroys a lot from underneath.",
      },
      {
        heading: "ADA compliance & striping",
        body: "We lay out accessible stalls, access aisles, loading zones and path-of-travel slopes with your requirements in mind, then stripe with clean, straight lines and standard markings so your property presents well and passes inspection.",
      },
      {
        heading: "Maintenance programs",
        body: "Property managers can put crack fill, patching, sealcoating and re-striping on a recurring schedule with a single point of contact. You get one number to call — and you talk to Jim, not a call center.",
      },
      {
        heading: "Minimal disruption",
        body: "We phase work section by section, work early mornings or weekends where needed, and keep access open so your tenants and customers can still reach the door.",
      },
    ],
  },
  "excavation-grading": {
    title: "Excavation & Grading",
    metaTitle: "Excavation & Site Grading in Santa Rosa, CA | Jim's Paving",
    metaDescription:
      "Excavation, site prep, base rock and drainage grading for paving projects in Sonoma County. 37 years local experience. Free estimates: (707) 477-3291.",
    intro:
      "Good pavement starts below the surface. We do the earthwork most failures can be traced back to.",
    image: workGrading,
    imageAlt: "Asphalt paving equipment and compaction roller working a graded job site",
    sections: [
      {
        heading: "Site preparation",
        body: "Removal of old asphalt, concrete, sod and unsuitable soil; cutting to subgrade; placing and compacting Class II base rock to the depth the site calls for. Every layer is compacted before the next one goes down.",
      },
      {
        heading: "Drainage considerations",
        body: "After 37 years in Sonoma County we know how local clay soils hold water and where winter runoff wants to go. We set slopes and swales to move water off the pavement and away from structures, and can tie in area drains where the site needs them.",
      },
      {
        heading: "Equipment & capabilities",
        body: "Our equipment is sized for residential driveways, rural roads and small-to-mid commercial lots — compact enough for tight Santa Rosa side yards, capable enough for a full parking lot rebuild. Jim looks at access before quoting so nothing gets torn up getting in and out.",
      },
    ],
  },
  "parking-lot-maintenance": {
    title: "Parking Lot Maintenance & Repairs",
    metaTitle: "Parking Lot Maintenance & Repair in Santa Rosa | Jim's Paving",
    metaDescription:
      "Crack filling, patching, sealcoating and striping maintenance programs for Sonoma County parking lots. Licensed and insured. Call (707) 477-3291.",
    intro:
      "Ongoing care that costs a fraction of a replacement and pushes that replacement years down the road.",
    image: workParkingLot,
    imageAlt: "Commercial parking lot with fresh sealcoat and clean white striping",
    sections: [
      {
        heading: "What maintenance covers",
        body: "A maintenance visit is scoped to what your lot actually needs, not a package.",
        bullets: [
          "Hot-applied crack filling before water reaches the base",
          "Pothole and failed-section patching, saw-cut and compacted",
          "Sealcoating on a two- to three-year cycle",
          "Re-striping stalls, arrows, curbs and accessible markings",
          "Drainage clean-up where water is pooling",
        ],
      },
      {
        heading: "Seasonal timing",
        body: "Crack filling and patching are done ahead of the rainy season so water stays out of the base over winter. Seal and stripe work is scheduled for warm, dry months. We'll put your property on a calendar and remind you when it's due.",
      },
      {
        heading: "Why it pays",
        body: "Deferred maintenance is how a lot goes from a $4,000 seal-and-stripe to a full reconstruction. Catching cracks early is the single highest-return thing a property owner can do with their pavement budget.",
      },
    ],
  },
};

export const gallery = [
  {
    src: workDriveway,
    alt: "New asphalt driveway installation with clean edges at a Santa Rosa home",
    city: "Santa Rosa, CA",
    type: "Residential driveway installation",
    date: "Completed June 2026",
  },
  {
    src: workRepair,
    alt: "Cracked asphalt driveway with potholes before resurfacing",
    city: "Petaluma, CA",
    type: "Before: cracked driveway awaiting resurfacing",
    date: "Assessed May 2026",
  },
  {
    src: workSealcoat,
    alt: "Freshly sealcoated residential asphalt driveway with deep black finish",
    city: "Windsor, CA",
    type: "Sealcoating & crack filling",
    date: "Completed August 2026",
  },
  {
    src: workParkingLot,
    alt: "Newly paved commercial parking lot with fresh striping and accessible stalls",
    city: "Rohnert Park, CA",
    type: "Commercial parking lot paving & striping",
    date: "Completed July 2026",
  },
  {
    src: workGrading,
    alt: "Grading and compaction equipment on an asphalt paving job site",
    city: "Sebastopol, CA",
    type: "Excavation, base rock & grading",
    date: "Completed April 2026",
  },
  {
    src: workDriveway,
    alt: "Detail of a hand-worked asphalt driveway edge and clean transition line",
    city: "Sonoma, CA",
    type: "Detail: hand-worked edges and transitions",
    date: "Completed March 2026",
  },
];

export const trustPoints = [
  {
    icon: BadgeCheck,
    title: "BBB A+ Accredited",
    desc: "Independently verified A+ rating with the Better Business Bureau.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Multiple California contractor licenses, bonded and fully insured.",
  },
  {
    icon: Users,
    title: "Local & Family-Owned",
    desc: `Jim and the entire crew, serving Sonoma County since ${FOUNDED_YEAR}.`,
  },
  {
    icon: Receipt,
    title: "Free Estimates",
    desc: "On-site, written, no obligation and no pressure to sign anything.",
  },
];

export const whyChoose = [
  `${YEARS_IN_BUSINESS} years paving Sonoma County — established ${FOUNDED_YEAR}`,
  "BBB A+ accredited: third-party verification you can check yourself",
  "Jim handles estimates personally and walks you through the whole process",
  "Free, honest estimates — we'll tell you when a repair beats a replacement",
  "The same small, experienced crew on every job, not rotating subcontractors",
  "Licensed, bonded and fully insured for residential and commercial work",
  "Local knowledge of Sonoma County soil, drainage and weather",
  "Quality workmanship that protects the value of your property",
];

export const steps = [
  {
    n: "1",
    title: "Free consultation & estimate",
    desc: "Jim comes out, measures the site, checks your base and drainage, and answers your questions on the spot.",
  },
  {
    n: "2",
    title: "Custom proposal & timeline",
    desc: "You get a written scope and price with the materials and thickness spelled out, plus a realistic schedule.",
  },
  {
    n: "3",
    title: "Professional installation",
    desc: "Our crew preps, paves and compacts, keeps the site clean, and protects everything around the work area.",
  },
  {
    n: "4",
    title: "Final walk-through",
    desc: "We walk the finished surface with you, review curing and care, and stand behind the workmanship.",
  },
];

export const testimonials = [
  {
    quote:
      "I couldn't be happier with the work from Jim's Paving! From start to finish, their team was professional, courteous, and incredibly detail-oriented. Jim himself took the time to walk me through every step of the process.",
    name: "Samuel Oakes",
    place: "Google review",
    date: "2025",
  },
  {
    quote:
      "Thank you for the beautiful driveway... now I can park my car and not step in mud after the rain.",
    name: "Office Manager",
    place: "Google review",
    date: "2025",
  },
  {
    quote: "Very professional and I would definitely hire them again!!",
    name: "Jaime",
    place: "Google review",
    date: "2025",
  },
  {
    quote: "Great company! Thanks....",
    name: "BB Torliatt",
    place: "Google review",
    date: "2025",
  },
];

export const serviceAreas = [
  "Santa Rosa",
  "Petaluma",
  "Sonoma",
  "Rohnert Park",
  "Windsor",
  "Healdsburg",
  "Sebastopol",
  "Cotati",
  "Cloverdale",
  "Bodega Bay",
  "Napa County",
  "Mendocino County",
];

export const faqs = [
  {
    q: "Are estimates really free?",
    a: "Yes. Jim comes to the property, measures, looks at the existing pavement and drainage, and gives you a written estimate at no cost and with no obligation.",
  },
  {
    q: "How long has Jim's Paving been in business?",
    a: `We've been paving driveways and parking lots in Sonoma County since ${FOUNDED_YEAR} — ${YEARS_IN_BUSINESS} years — and we're BBB A+ accredited.`,
  },
  {
    q: "Do I need a new driveway or just a repair?",
    a: "It depends on whether the base is still sound. If the cracking is surface-level we can often patch, overlay or sealcoat. If the base has failed, we'll tell you honestly that replacement is the better value.",
  },
  {
    q: "How soon can I drive on new asphalt?",
    a: "You can usually walk on it the same day and park on it after roughly 24 to 72 hours in warm weather. Avoid turning tires while stopped and keep heavy vehicles off for the first few weeks.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — we carry multiple California contractor licenses and are bonded and fully insured for both residential and commercial work.",
  },
  {
    q: "What areas do you serve?",
    a: "Santa Rosa, Petaluma, Sonoma, Rohnert Park, Windsor, Healdsburg, Sebastopol and the rest of Sonoma County, plus parts of Napa and Mendocino counties. Not listed? Call us — we may still service your area.",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/contact", label: "Contact" },
] as const;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: BUSINESS_NAME,
  description: `Asphalt paving contractor serving Santa Rosa and Sonoma County since ${FOUNDED_YEAR}. Driveway installation, resurfacing, sealcoating and commercial parking lot paving.`,
  telephone: "+17074773291",
  email: EMAIL,
  url: SITE_URL,
  foundingDate: String(FOUNDED_YEAR),
  founder: { "@type": "Person", name: OWNER_NAME },
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_STREET,
    addressLocality: ADDRESS_CITY,
    addressRegion: ADDRESS_STATE,
    postalCode: ADDRESS_ZIP,
    addressCountry: "US",
  },
  areaServed: serviceAreas.map((a) => ({ "@type": "Place", name: a })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "3.9",
    reviewCount: "7",
  },
};

export const areaHighlights = [
  {
    city: "Santa Rosa",
    body: "Our home base. Driveway installation, resurfacing and commercial lots throughout Santa Rosa, from Roseland to Fountaingrove.",
  },
  {
    city: "Petaluma",
    body: "Asphalt driveways and parking lot maintenance for Petaluma homes, wineries and light-industrial properties.",
  },
  {
    city: "Sonoma & Sonoma Valley",
    body: "Long rural driveways, private lanes and hospitality parking built for seasonal traffic.",
  },
  {
    city: "Windsor & Healdsburg",
    body: "New driveways, overlays and sealcoating on properties where winter runoff needs to be managed.",
  },
  {
    city: "Rohnert Park & Cotati",
    body: "Commercial paving, striping and ADA-compliant parking layouts for local businesses.",
  },
  {
    city: "Sebastopol & west county",
    body: "Grading, base rock and paving for rural drives on soft, water-holding soils.",
  },
];
