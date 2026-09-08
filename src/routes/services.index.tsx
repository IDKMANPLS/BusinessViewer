import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { services, faqs, localBusinessSchema, SITE_URL, BUSINESS_NAME } from "@/lib/site-data";
import { useLang, useSite } from "@/lib/i18n";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Paving Services in Sonoma County | Jim's Paving" },
      {
        name: "description",
        content:
          "Asphalt driveway installation, resurfacing and repair, sealcoating, commercial parking lot paving, excavation and grading in Santa Rosa and Sonoma County.",
      },
      { property: "og:title", content: "Asphalt Paving Services | Jim's Paving, Santa Rosa" },
      {
        property: "og:description",
        content:
          "Driveways, parking lots, sealcoating, repairs and site grading — 37 years serving Sonoma County. Free estimates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "Asphalt paving services in Sonoma County, California",
            itemListElement: services.map((s, i) => ({
              "@type": "Offer",
              position: i + 1,
              itemOffered: {
                "@type": "Service",
                name: s.title,
                description: s.short,
                serviceType: s.title,
                areaServed: "Sonoma County, California",
                provider: { "@type": "GeneralContractor", name: BUSINESS_NAME },
                url: `${SITE_URL}/services/${s.slug}`,
              },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          localBusinessSchema,
        ]),
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const { ui } = useLang();
  const { services: localServices, faqs: localFaqs } = useSite();

  return (
    <>
      <PageHero
        eyebrow={ui.services.eyebrow}
        title={ui.services.title}
        intro={ui.services.intro}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {localServices.map(({ icon: Icon, title, short, slug }) => (
            <div key={slug} className="card-pop flex flex-col rounded-xl border border-border bg-card p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-md bg-copper/15 text-copper">
                <Icon className="size-6" />
              </span>
              <h2 className="mt-4 text-xl font-bold uppercase">{title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{short}</p>
              <Link
                to="/services/$slug"
                params={{ slug }}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand hover:text-copper"
              >
                {ui.home.learnMore} <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
            {ui.services.faqTitle}
          </h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {localFaqs.map((f) => (
              <details key={f.q} className="faq-row group rounded-lg py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="size-5 shrink-0 text-copper transition-transform group-open:rotate-180" />
                </summary>
                <p className="faq-answer mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
