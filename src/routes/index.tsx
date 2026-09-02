import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, BadgeCheck, Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-paving.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  FOUNDED_YEAR,
  YEARS_IN_BUSINESS,
  BBB_URL,
  services,
  gallery,
  trustPoints,
  whyChoose,
  steps,
  testimonials,
  serviceAreas,
  localBusinessSchema,
  SITE_URL,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asphalt Paving Santa Rosa, CA | Jim's Paving | 37 Years" },
      {
        name: "description",
        content:
          "Asphalt paving contractor in Santa Rosa serving Sonoma County since 1989. Driveway installation, resurfacing, sealcoating and commercial parking lots. BBB A+. Free estimates.",
      },
      { property: "og:title", content: "Asphalt Paving in Santa Rosa & Sonoma County | Jim's Paving" },
      {
        property: "og:description",
        content:
          "37 years of asphalt driveway and parking lot paving in Sonoma County. BBB A+ accredited, licensed and insured. Free estimates: (707) 477-3291.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          localBusinessSchema,
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: BUSINESS_NAME,
            url: SITE_URL,
          },
        ]),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="surface-deep relative overflow-hidden">
        <img
          src={heroImg}
          alt="Freshly paved asphalt driveway at a home in Santa Rosa, California"
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--brand-deep)_92%,transparent),color-mix(in_oklab,var(--brand-deep)_45%,transparent))]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-sm border border-copper/60 bg-copper/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-copper">
            <BadgeCheck className="size-4" /> BBB A+ Accredited · Licensed &amp; Insured
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold uppercase leading-[1.05] sm:text-6xl">
            Quality Asphalt Paving. {YEARS_IN_BUSINESS} Years. Sonoma County.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-brand-foreground/85 sm:text-lg">
            Professional driveway &amp; parking lot installation from a trusted, BBB A+ accredited
            contractor. Family-owned in Santa Rosa since {FOUNDED_YEAR}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 bg-copper text-base font-bold text-copper-foreground shadow-lift hover:bg-copper/90"
            >
              <Link to="/contact">Request Free Estimate</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 border-brand-foreground/40 bg-transparent text-base font-semibold text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground"
            >
              <a href={PHONE_HREF}>
                <Phone className="size-5" /> Call {BUSINESS_NAME} · {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 text-sm">
            {[
              [`${YEARS_IN_BUSINESS}`, "Years in business"],
              ["A+", "BBB accredited rating"],
              ["Free", "On-site estimates"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl font-extrabold text-copper">{k}</dt>
                <dd className="text-brand-foreground/75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Trust strip */}
      <section aria-label="Why you can trust Jim's Paving" className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 bg-card px-5 py-7">
              <Icon className="mt-0.5 size-7 shrink-0 text-copper" />
              <div className="min-w-0">
                <p className="font-display text-lg font-bold uppercase leading-tight">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-sm text-muted-foreground">
          Verify our record:{" "}
          <a
            href={BBB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand underline hover:text-copper"
          >
            view our Better Business Bureau profile
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">Our services</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Residential driveways and commercial pavement — installation, repair and the
            maintenance that keeps them out of trouble.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, short, slug }) => (
              <div key={slug} className="card-pop flex flex-col rounded-xl border border-border bg-card p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-copper/15 text-copper">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold uppercase">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{short}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug }}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand hover:text-copper"
                >
                  Learn more <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
              Why choose {BUSINESS_NAME}
            </h2>
            <p className="mt-4 text-muted-foreground">
              Jim Todorovitch Jr. has been paving Sonoma County driveways and lots since{" "}
              {FOUNDED_YEAR}. He handles the estimates himself, and the same small crew does the
              work — no rotating subcontractors, no pressure, no surprises on the invoice.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-12 bg-copper font-bold text-copper-foreground hover:bg-copper/90"
            >
              <Link to="/contact">Get my free estimate</Link>
            </Button>
          </div>
          <ul className="space-y-3">
            {whyChoose.map((w) => (
              <li key={w} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <Check className="mt-0.5 size-5 shrink-0 text-copper" />
                <span className="text-sm font-medium">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
            Recent projects
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Driveways, parking lots and site work completed across Sonoma County.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(0, 3).map((g) => (
              <figure key={g.type} className="media-pop overflow-hidden rounded-xl bg-card">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="p-4">
                  <p className="font-display text-lg font-bold uppercase leading-tight">{g.type}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {g.city} · {g.date}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <Link
            to="/gallery"
            className="mt-8 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-brand hover:text-copper"
          >
            View the full gallery <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">How it works</h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-xl border border-border bg-card p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-md bg-brand-deep font-display text-lg font-extrabold text-copper">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-bold uppercase leading-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="surface-deep py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">What customers say</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.quote}
                className="flex h-full flex-col rounded-xl border border-brand-foreground/15 bg-brand-foreground/5 p-6"
              >
                <div className="flex gap-1 text-copper">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-brand-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm font-bold uppercase tracking-wide">
                  {t.name}{" "}
                  <span className="font-normal text-brand-foreground/60">
                    · {t.place} · {t.date}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
          We proudly serve
        </h2>
        <ul className="mt-8 flex flex-wrap gap-2">
          {serviceAreas.map((a) => (
            <li
              key={a}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold"
            >
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-muted-foreground">
          Not listed?{" "}
          <a href={PHONE_HREF} className="font-semibold text-brand hover:text-copper">
            Call us at {PHONE_DISPLAY}
          </a>{" "}
          — we may service your area.
        </p>
      </section>

      <CtaBand
        title="Let's pave the way forward"
        body={`Contact ${BUSINESS_NAME} today for a free, honest estimate on your driveway or parking lot.`}
      />
    </>
  );
}
