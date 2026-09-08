import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, BadgeCheck, Check, ArrowRight } from "lucide-react";
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
import { useLang, useSite } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";
import { AnimatedCounter, Meter } from "@/components/site/AnimatedCounter";
import { ProjectCarousel } from "@/components/site/ProjectCarousel";
import { TestimonialRotator } from "@/components/site/TestimonialRotator";

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
  const { ui } = useLang();
  const { services, gallery, trustPoints, whyChoose, steps, testimonials } = useSite();

  return (
    <>
      {/* Hero */}
      <section className="surface-deep relative overflow-hidden">
        <img
          src={heroImg}
          alt="Freshly paved asphalt driveway at a home in Santa Rosa, California"
          width={1600}
          height={1008}
          className="float-slow absolute inset-0 size-full scale-110 object-cover opacity-40"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--brand-deep)_92%,transparent),color-mix(in_oklab,var(--brand-deep)_45%,transparent))]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <span className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-sm border border-copper/60 bg-copper/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-copper transition-colors duration-300 hover:bg-copper/25 sm:tracking-widest">
            <BadgeCheck className="size-4" /> {ui.home.badge}
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold uppercase leading-[1.05] sm:text-6xl">
            {ui.home.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-brand-foreground/85 sm:text-lg">
            {ui.home.sub}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="cta-glow h-14 bg-copper text-base font-bold tracking-wide text-copper-foreground shadow-lift hover:bg-copper/90"
            >
              <Link to="/contact">{ui.home.primaryCta}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 border-brand-foreground/40 bg-transparent text-base font-semibold text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground"
            >
              <a href={PHONE_HREF}>
                <Phone className="size-5" /> {ui.home.callPrefix} {BUSINESS_NAME} · {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 text-sm">
            {[
              { n: YEARS_IN_BUSINESS, label: ui.home.statYears, pct: 100 },
              { t: "A+", label: ui.home.statRating, pct: 100 },
              { t: ui.home.statFreeValue, label: ui.home.statFree, pct: 100 },
            ].map((s, i) => (
              <Reveal key={s.label} dir="up" delay={i * 120}>
                <dt className="font-display text-3xl font-extrabold text-copper sm:text-4xl">
                  <AnimatedCounter value={s.n} text={s.t} />
                </dt>
                <dd className="text-brand-foreground/75">{s.label}</dd>
                <Meter percent={s.pct} className="mt-3 max-w-24" />
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Trust strip */}
      <section aria-label={ui.home.trustAria} className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex items-start gap-3 bg-card px-5 py-7 transition-colors duration-300 hover:bg-secondary/50"
            >
              <Icon className="float-soft mt-0.5 size-7 shrink-0 text-copper transition-transform duration-300 group-hover:scale-110" />
              <div className="min-w-0">
                <p className="font-display text-lg font-bold uppercase leading-tight">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-sm text-muted-foreground">
          {ui.home.verify}{" "}
          <a
            href={BBB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand underline hover:text-copper"
          >
            {ui.home.verifyLink}
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
            {ui.home.servicesTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{ui.home.servicesIntro}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, short, slug }, i) => (
              <Reveal
                key={slug}
                dir={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
                delay={(i % 3) * 90}
                className="group flex h-full flex-col rounded-xl p-6 glass-card"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-copper/15 text-copper transition-all duration-500 group-hover:-translate-y-0.5 group-hover:bg-copper group-hover:text-copper-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-copper">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{short}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug }}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand transition-colors duration-300 hover:text-copper"
                >
                  {ui.home.learnMore}{" "}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
              {ui.home.whyTitle} {BUSINESS_NAME}
            </h2>
            <p className="mt-4 text-muted-foreground">{ui.home.whyBody}</p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-12 bg-copper font-bold text-copper-foreground hover:bg-copper/90"
            >
              <Link to="/contact">{ui.home.whyCta}</Link>
            </Button>
          </div>
          <ul className="space-y-3">
            {whyChoose.map((w, i) => (
              <Reveal
                as="li"
                key={w}
                dir="right"
                delay={i * 70}
                className="flex items-start gap-3 rounded-lg p-4 glass-card"
              >
                <Check className="mt-0.5 size-5 shrink-0 text-copper" />
                <span className="text-sm font-medium">{w}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
            {ui.home.recentTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{ui.home.recentIntro}</p>
          <div className="mt-10">
            <ProjectCarousel
              items={gallery}
              prevLabel={ui.home.prevSlide}
              nextLabel={ui.home.nextSlide}
              goLabel={ui.home.goToSlide}
            />
          </div>
          <Link
            to="/gallery"
            className="mt-8 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-brand hover:text-copper"
          >
            {ui.home.viewGallery} <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
          {ui.home.howTitle}
        </h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              dir={i % 2 === 0 ? "left" : "right"}
              delay={i * 100}
              className="group rounded-xl p-6 glass-card"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-md bg-brand-deep font-display text-lg font-extrabold text-copper transition-transform duration-500 group-hover:scale-110">
                {step.n}
              </span>
              <h3 className="mt-4 text-lg font-bold uppercase leading-tight tracking-wide">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              <Meter percent={((i + 1) / steps.length) * 100} className="mt-5" />
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="surface-deep py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
            {ui.home.testimonialsTitle}
          </h2>
          <div className="mt-10">
            <TestimonialRotator items={testimonials} goLabel={ui.home.goToReview} />
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
          {ui.home.areasTitle}
        </h2>
        <ul className="mt-8 flex flex-wrap gap-2">
          {serviceAreas.map((a) => (
            <li
              key={a}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-copper hover:text-copper hover:shadow-lift"
            >
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-muted-foreground">
          {ui.home.notListed}{" "}
          <a href={PHONE_HREF} className="font-semibold text-brand hover:text-copper">
            {ui.home.callUsAt} {PHONE_DISPLAY}
          </a>{" "}
          {ui.home.mayServe}
        </p>
      </section>

      <CtaBand title={ui.home.ctaTitle} body={ui.home.ctaBody} />
    </>
  );
}
