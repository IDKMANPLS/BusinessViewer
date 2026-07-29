import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-plumber.jpg";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  services,
  gallery,
  promises,
  testimonials,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Businesses Website | Plumbing in Redlands, CA" },
      {
        name: "description",
        content:
          "Licensed Redlands plumbers for drain cleaning, water heaters, repiping and 24/7 emergency plumbing. Call +1 111 111 111 for same-day service.",
      },
      { property: "og:title", content: "My Businesses Website | Plumbing in Redlands, CA" },
      {
        property: "og:description",
        content:
          "Fast, reliable plumbing across Redlands and the Inland Empire. Drain cleaning, water heaters, leak repair and 24/7 emergency service.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: "My Businesses Website",
          telephone: "+1111111111",
          areaServed: "Redlands, California",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Redlands",
            addressRegion: "CA",
            addressCountry: "US",
          },
          openingHours: ["Mo-Fr 07:00-19:00", "Sa 08:00-16:00"],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "312" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section id="top" className="surface-deep relative overflow-hidden">
        <img
          src={heroImg}
          alt="Licensed plumber servicing a kitchen sink in Redlands, California"
          width={1600}
          height={1000}
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_15%_10%,transparent,color-mix(in_oklab,var(--brand-deep)_75%,transparent))]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/25 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="size-4" /> Licensed · Bonded · Insured
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold uppercase leading-[1.05] sm:text-6xl">
            Redlands plumbing done right the first time
          </h1>
          <p className="mt-4 max-w-xl text-base text-brand-foreground/80 sm:text-lg">
            Same-day repairs, honest pricing, and 24/7 emergency service across the Inland Empire.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 bg-copper text-base font-bold text-copper-foreground shadow-lift hover:bg-copper/90"
            >
              <a href={PHONE_HREF}>
                <Phone className="size-5" /> Call Now · {PHONE_DISPLAY}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 border-brand-foreground/40 bg-transparent text-base font-semibold text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground"
            >
              <Link to="/contact">Request a quote</Link>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm">
            {[
              ["20+", "Years serving Redlands"],
              ["24/7", "Emergency callouts"],
              ["100%", "Upfront pricing"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-2xl font-extrabold text-copper">{k}</dt>
                <dd className="text-brand-foreground/75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Promise strip */}
      <section aria-label="Why homeowners call us" className="border-b border-border bg-card">
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

      {/* About */}
      {/* Services */}
      <section id="services" className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">What we do</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Residential and light commercial plumbing, from a dripping faucet to a full repipe.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lift"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold uppercase">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:underline"
          >
            See all services <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">Recent work</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          A look at completed jobs around Redlands, Loma Linda and Yucaipa.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g) => (
            <figure key={g.alt} className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={g.src}
                alt={g.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <figcaption className="p-3 text-sm text-muted-foreground">{g.alt}</figcaption>
            </figure>
          ))}
        </div>
        <Link
          to="/ourwork"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:underline"
        >
          View the full gallery <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* Reviews */}
      <section id="reviews" className="surface-deep py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-hairline text-xs font-bold text-copper">Reviews</p>
          <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
            Neighbors who called us first
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <figure
                key={t.name}
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
                  {t.name} <span className="font-normal text-brand-foreground/60">· {t.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <Link
            to="/customerreviews"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-copper hover:underline"
          >
            Read all customer reviews <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
