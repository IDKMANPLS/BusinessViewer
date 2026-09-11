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
  localBusinessSchema,
} from "@/lib/site-data";
import { useLang, useSite } from "@/lib/i18n";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "HVAC Service Areas | Windsor & Sonoma County" },
      {
        name: "description",
        content:
          "Franco's Mechanical provides HVAC installation and repair from Windsor across Santa Rosa, Healdsburg, Petaluma and Sonoma County. Call (707) 695-3726.",
      },
      { property: "og:title", content: "HVAC Service Areas | Franco's Mechanical" },
      {
        property: "og:description",
        content:
          "Heating, cooling, mini-split and HVAC repair service from Windsor across Sonoma County communities.",
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
        <div className="relative mb-12 overflow-hidden rounded-xl border border-border bg-secondary/60 p-8 sm:p-12">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,var(--copper)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">{ui.areas.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-extrabold uppercase">{ui.areas.mapTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{ui.areas.mapBody}</p>
            </div>
            <div className="relative min-h-64 border border-border bg-card/70">
              <div className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-copper/25" />
              <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-copper/45" />
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                <MapPin className="size-8 text-copper" />
                <strong className="mt-1 uppercase">Windsor</strong>
                <span className="text-xs text-muted-foreground">Sonoma County</span>
              </div>
            </div>
          </div>
        </div>
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
