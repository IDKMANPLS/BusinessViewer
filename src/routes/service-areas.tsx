import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import {
  serviceAreas,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_URL,
  YEARS_IN_BUSINESS,
  localBusinessSchema,
} from "@/lib/site-data";
import { useLang, useSite } from "@/lib/i18n";

const highlights = [
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

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas | Paving in Santa Rosa & Sonoma County" },
      {
        name: "description",
        content:
          "Jim's Paving serves Santa Rosa, Petaluma, Sonoma, Rohnert Park, Windsor, Healdsburg, Sebastopol and parts of Napa and Mendocino counties. Call (707) 477-3291.",
      },
      { property: "og:title", content: "Where We Pave | Jim's Paving, Sonoma County" },
      {
        property: "og:description",
        content:
          "Asphalt driveway and parking lot paving across Sonoma County and neighboring communities. Not listed? Call us.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/service-areas" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/service-areas" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
    ],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  const { ui } = useLang();
  const { areaHighlights } = useSite();

  return (
    <>
      <PageHero eyebrow={ui.areas.eyebrow} title={ui.areas.title} intro={ui.areas.intro} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <ul className="flex flex-wrap gap-2">
          {serviceAreas.map((a) => (
            <li
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold"
            >
              <MapPin className="size-4 text-copper" /> {a}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areaHighlights.map((h) => (
            <div key={h.city} className="card-pop rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold uppercase">{h.city}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-secondary/60 p-6 sm:p-8">
          <h2 className="text-2xl font-bold uppercase">{ui.areas.notListedTitle}</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">{ui.areas.notListedBody}</p>
          <Button
            asChild
            size="lg"
            className="mt-6 h-12 bg-copper font-bold text-copper-foreground hover:bg-copper/90"
          >
            <a href={PHONE_HREF}>
              <Phone className="size-5" /> {PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
