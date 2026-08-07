import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { promises, workTile } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Our Redlands Roofing Company | Roofing Demo Website" },
      {
        name: "description",
        content:
          "Family-run, licensed roofers serving Redlands and the Inland Empire for 20+ years with flat-rate pricing and a written workmanship warranty.",
      },
      { property: "og:title", content: "About Our Redlands Roofing Company" },
      {
        property: "og:description",
        content: "Licensed, family-owned roofers serving Redlands, CA for over twenty years.",
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
          name: "About Our Redlands Roofing Company",
          description:
            "Family-run, licensed roofers serving Redlands and the Inland Empire for 20+ years.",
          mainEntity: {
            "@type": "RoofingContractor",
            name: "Roofing Demo Website",
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
        title="Twenty years of Redlands roofing, one careful crew"
        intro="Family owned, locally staffed, and straight with you about whether you need a repair or a new roof."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <img
            src={workTile}
            alt="Clay tile roof restored by our Redlands roofing crew"
            width={1024}
            height={768}
            loading="lazy"
            className="w-full rounded-xl border border-border object-cover shadow-lift"
          />
          <div>
            <h2 className="shine-text inline-block text-3xl font-extrabold uppercase sm:text-4xl">Who we are</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Roofing Demo Website is a family-run roofing company based right here in Redlands,
              California, serving homeowners and small businesses across the Inland Empire for over
              twenty years. Every crew is licensed, insured and tied off, and shows up on time with
              the materials, dumpster and safety gear to keep your job moving.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We give a straight answer, a flat-rate quote before a single shingle comes off, and a
              warranty you can hold us to. No scare tactics, no surprise line items, no skipped steps.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {["Upfront flat-rate pricing", "Free roof inspection", "Workmanship warranty", "Local, family owned"].map((f) => (
                <li key={f} className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="size-5 shrink-0 text-brand" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:underline"
            >
              Book a free roof inspection <ArrowRight className="size-4" />
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