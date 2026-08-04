import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { services, faqs, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plumbing Services in Redlands, CA | My Businesses Website" },
      {
        name: "description",
        content:
          "Drain cleaning, water heater repair, leak detection, repiping, fixture installs and 24/7 emergency plumbing across Redlands and the Inland Empire.",
      },
      { property: "og:title", content: "Plumbing Services in Redlands, CA" },
      {
        property: "og:description",
        content: "Full residential and light commercial plumbing services with flat-rate pricing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "Plumbing services in Redlands, CA",
            itemListElement: services.map((s, i) => ({
              "@type": "Offer",
              position: i + 1,
              itemOffered: {
                "@type": "Service",
                name: s.title,
                description: s.desc,
                serviceType: s.title,
                areaServed: "Redlands, California",
                provider: { "@type": "Plumber", name: "My Businesses Website" },
              },
            })),
          },
        ]),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything from a dripping faucet to a full repipe"
        intro="Residential and light commercial plumbing, quoted flat-rate before we pick up a wrench."
      >
        <Button asChild size="lg" className="mt-8 h-14 bg-copper text-base font-bold text-copper-foreground hover:bg-copper/90">
          <a href={PHONE_HREF}>
            <Phone className="size-5" /> Call Now · {PHONE_DISPLAY}
          </a>
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lift"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon className="size-6" />
              </span>
              <h2 className="mt-4 text-xl font-bold uppercase">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
            Common questions
          </h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="size-5 shrink-0 text-brand transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-flex font-semibold text-brand hover:underline"
          >
            Still have a question? Send us a message
          </Link>
        </div>
      </section>
    </>
  );
}