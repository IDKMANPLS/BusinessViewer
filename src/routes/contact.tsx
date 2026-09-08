import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { EstimateForm } from "@/components/site/EstimateForm";
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  ADDRESS_STREET,
  ADDRESS_CITY,
  ADDRESS_STATE,
  ADDRESS_ZIP,
  hours,
  serviceAreas,
  localBusinessSchema,
  SITE_URL,
} from "@/lib/site-data";
import { useLang, useSite } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Jim's Paving | Free Estimate | (707) 477-3291" },
      {
        name: "description",
        content:
          "Request a free asphalt paving estimate in Santa Rosa and Sonoma County. Call (707) 477-3291 or send the online estimate form — we reply within 1 business day.",
      },
      { property: "og:title", content: "Contact Jim's Paving | Free Paving Estimates" },
      {
        property: "og:description",
        content:
          "Call (707) 477-3291 or request a free, no-obligation estimate online. Santa Rosa, CA — serving all of Sonoma County.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          { "@context": "https://schema.org", "@type": "ContactPage", url: SITE_URL + "/contact" },
          localBusinessSchema,
        ]),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { ui } = useLang();
  const { hours: localHours } = useSite();

  return (
    <>
      <PageHero eyebrow={ui.contact.eyebrow} title={ui.contact.title} intro={ui.contact.intro} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <h2 className="rule-copper text-2xl font-extrabold uppercase sm:text-3xl">
                {ui.contact.talkTo} {BUSINESS_NAME}
              </h2>
              <a
                href={PHONE_HREF}
                className="mt-6 flex items-center gap-3 font-display text-3xl font-extrabold text-copper"
              >
                <Phone className="size-7" /> {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-4 flex items-center gap-3 font-medium hover:text-copper"
              >
                <Mail className="size-5 text-copper" /> {EMAIL}
              </a>
              <address className="mt-4 flex items-start gap-3 not-italic">
                <MapPin className="mt-0.5 size-5 shrink-0 text-copper" />
                <span>
                  {ADDRESS_STREET}
                  <br />
                  {ADDRESS_CITY}, {ADDRESS_STATE} {ADDRESS_ZIP}
                </span>
              </address>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="inline-flex items-center gap-2 text-lg font-bold uppercase">
                <Clock className="size-5 text-copper" /> {ui.contact.hours}
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {localHours.map((h) => (
                  <li key={h.day}>
                    <span className="font-semibold text-foreground">{h.day}:</span> {h.time}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-secondary/60 p-6">
              <h3 className="text-lg font-bold uppercase">{ui.contact.serviceArea}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{serviceAreas.join(" · ")}</p>
              <p className="mt-3 text-sm text-muted-foreground">{ui.contact.notListed}</p>
            </div>
          </div>

          <EstimateForm />
        </div>
      </section>
    </>
  );
}
