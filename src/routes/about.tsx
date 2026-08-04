import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { promises, workFaucet } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Our Redlands Plumbing Company | My Businesses Website" },
      {
        name: "description",
        content:
          "Family-run, licensed plumbers serving Redlands and the Inland Empire for 20+ years with flat-rate pricing and a written workmanship warranty.",
      },
      { property: "og:title", content: "About Our Redlands Plumbing Company" },
      {
        property: "og:description",
        content: "Licensed, family-owned plumbers serving Redlands, CA for over twenty years.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Our Redlands Plumbing Company",
          description:
            "Family-run, licensed plumbers serving Redlands and the Inland Empire for 20+ years.",
          mainEntity: {
            "@type": "Plumber",
            name: "My Businesses Website",
            telephone: "+1111111111",
            foundingDate: "2005",
            areaServed: "Redlands, California",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Redlands",
              addressRegion: "CA",
              addressCountry: "US",
            },
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Twenty years of Redlands plumbing, one honest crew"
        intro="Family owned, locally staffed, and answering the phone at 2 a.m. the same way we do at 2 p.m."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <img
            src={workFaucet}
            alt="Finished fixture installation by our Redlands plumbing team"
            width={1024}
            height={768}
            loading="lazy"
            className="w-full rounded-xl border border-border object-cover shadow-lift"
          />
          <div>
            <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">Who we are</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My Businesses Website is a family-run plumbing company based right here in Redlands,
              California, serving homeowners and small businesses across the Inland Empire for over
              twenty years. Every technician is licensed, background-checked, and shows up on time
              with the parts needed to finish the job in one visit.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We give a straight answer, a flat-rate quote before any work starts, and a warranty you
              can hold us to. No upsells, no surprise line items, no waiting around all afternoon.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {["Upfront flat-rate pricing", "Same-day appointments", "Workmanship warranty", "Local, family owned"].map((f) => (
                <li key={f} className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="size-5 shrink-0 text-brand" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:underline"
            >
              Book a visit <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Our promises" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {promises.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 bg-card px-4 py-6">
              <Icon className="mt-0.5 size-6 shrink-0 text-copper" />
              <div className="min-w-0">
                <p className="font-display text-lg font-bold uppercase leading-tight">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}