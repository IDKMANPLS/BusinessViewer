import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, BadgeCheck, Check, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
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
  serviceAreas,
  localBusinessSchema,
  SITE_URL,
} from "@/lib/site-data";
import { useLang, useSite } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { ProjectCarousel } from "@/components/site/ProjectCarousel";
import { TestimonialRotator } from "@/components/site/TestimonialRotator";
import { Parallax } from "@/components/site/Parallax";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asphalt Paving Santa Rosa, CA | Jim's Paving | 37 Years" },
      {
        name: "description",
        content:
          "Asphalt paving contractor in Santa Rosa serving Sonoma County since 1989. Driveway installation, resurfacing, sealcoating and commercial parking lots. BBB A+. Free estimates.",
      },
      {
        property: "og:title",
        content: "Asphalt Paving in Santa Rosa & Sonoma County | Jim's Paving",
      },
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
  const { services, gallery, trustPoints, whyChoose, steps, testimonials, faqs } = useSite();

  return (
    <>
      {/* ---------------- HERO: layered depth stack ---------------- */}
      <section className="surface-deep grain relative overflow-hidden">
        {/* layer 1 — photograph, drifts slower than the page */}
        <Parallax speed={0.18} className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            width={1600}
            height={1008}
            className="size-full scale-[1.12] object-cover opacity-[0.22]"
          />
        </Parallax>
        {/* layer 2 — ambient amber pool + tonal wash */}
        <div className="ambient-amber pointer-events-none absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,color-mix(in_oklab,var(--asphalt)_92%,transparent)_0%,color-mix(in_oklab,var(--asphalt)_74%,transparent)_58%,color-mix(in_oklab,var(--asphalt)_40%,transparent)_100%)]" />

        {/* layer 3 — content */}
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="stage stage-1 inline-flex items-center gap-2 rounded-full border border-copper/40 bg-copper/10 px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-copper">
              <BadgeCheck className="size-3.5" /> {ui.home.badge}
            </span>
            <h1 className="display-xl stage stage-2 mt-7 text-[2.6rem] sm:text-6xl lg:text-[4.2rem]">
              {ui.home.h1}
            </h1>
            <p className="stage stage-3 mt-6 max-w-xl text-base leading-relaxed text-brand-foreground/75 sm:text-lg">
              {ui.home.sub}
            </p>
            <div className="stage stage-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-14 bg-copper px-7 text-base font-bold tracking-wide text-copper-foreground hover:bg-copper"
              >
                <Link to="/contact">{ui.home.primaryCta}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 border-brand-foreground/25 bg-transparent px-6 text-base font-semibold text-brand-foreground hover:border-brand-foreground/50 hover:bg-brand-foreground/5 hover:text-brand-foreground"
              >
                <a href={PHONE_HREF}>
                  <Phone className="size-5" /> {PHONE_DISPLAY}
                </a>
              </Button>
            </div>

            {/* layer 4 — foreground micro-detail: stat row on hairlines */}
            <dl className="stage stage-5 mt-14 grid max-w-lg grid-cols-3 border-t border-brand-foreground/15 pt-6">
              {[
                { n: YEARS_IN_BUSINESS, label: ui.home.statYears },
                { t: "A+", label: ui.home.statRating },
                { t: ui.home.statFreeValue, label: ui.home.statFree },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={
                    i === 0
                      ? "pr-4"
                      : "border-l border-brand-foreground/15 pl-4 sm:pl-6"
                  }
                >
                  <dt className="font-display text-3xl font-extrabold leading-none text-copper sm:text-[2.6rem]">
                    <AnimatedCounter value={s.n} text={s.t} />
                  </dt>
                  <dd className="mt-2 text-xs leading-snug text-brand-foreground/60 sm:text-sm">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

        </div>

        <div className="relative mx-auto hidden max-w-6xl px-4 pb-8 lg:block">
          <ChevronDown className="float-soft size-5 text-brand-foreground/35" />
        </div>
      </section>

      {/* ---------------- TRUST STRIP ---------------- */}
      <section aria-label={ui.home.trustAria} className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {trustPoints.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              dir="up"
              delay={i * 80}
              className="group flex items-start gap-3.5 px-6 py-7 transition-colors duration-300 hover:bg-secondary/45"
            >
              <Icon className="mt-0.5 size-6 shrink-0 text-copper transition-transform duration-500 ease-out group-hover:-translate-y-0.5" />
              <div className="min-w-0">
                <p className="font-display text-base font-bold uppercase leading-tight tracking-wide">
                  {title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 pb-7">
          <a
            href={BBB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-4 py-2.5 text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-copper/60"
          >
            <BadgeCheck className="size-4 text-copper" />
            <span className="text-muted-foreground">{ui.home.verify}</span>
            <span className="font-semibold text-foreground transition-colors duration-300 group-hover:text-copper">
              {ui.home.verifyLink}
            </span>
            <ArrowUpRight className="size-4 text-copper transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      {/* ---------------- CORE VALUE PROPOSITION (editorial) ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal dir="left">
            <p className="eyebrow">{ui.home.ebWhy}</p>
            <h2 className="display-xl mt-4 text-4xl sm:text-5xl">{BUSINESS_NAME}</h2>
          </Reveal>
          <Reveal dir="right" delay={90}>
            <p className="text-xl leading-relaxed text-foreground/85 sm:text-[1.4rem] sm:leading-[1.5]">
              {ui.home.whyBody}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-6">
              <span className="text-sm text-muted-foreground">
                <strong className="font-display text-2xl font-extrabold text-foreground">
                  <AnimatedCounter value={3} />
                </strong>{" "}
                {ui.home.statCrew}
              </span>
              <span className="text-sm text-muted-foreground">
                <strong className="font-display text-2xl font-extrabold text-foreground">
                  {FOUNDED_YEAR}
                </strong>{" "}
                {ui.home.statFounded}
              </span>
              <Button
                asChild
                className="h-11 bg-foreground font-bold text-background hover:bg-foreground/90"
              >
                <Link to="/contact">{ui.home.whyCta}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVICES (asymmetric rows, not a card wall) ---------------- */}
      <section className="border-y border-border bg-secondary/45 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">{ui.home.ebServices}</p>
              <h2 className="display-xl rule-amber mt-4 text-4xl sm:text-5xl">
                {ui.home.servicesTitle}
              </h2>
            </div>
            <p className="max-w-xl text-muted-foreground lg:pb-2">{ui.home.servicesIntro}</p>
          </div>

          <ul className="mt-14 border-t border-border">
            {services.map(({ icon: Icon, title, short, slug }, i) => (
              <Reveal
                as="li"
                key={slug}
                dir="up"
                delay={i * 60}
                className="border-b border-border"
              >
                <Link
                  to="/services/$slug"
                  params={{ slug }}
                  className="hover-row group grid grid-cols-[auto_1fr_auto] items-center gap-5 px-2 py-7 sm:gap-8 sm:px-4"
                >
                  <span className="font-display text-sm font-bold text-concrete sm:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:items-center sm:gap-8">
                    <h3 className="flex items-center gap-3 font-display text-xl font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-copper sm:text-2xl">
                      <Icon className="size-5 text-copper transition-transform duration-500 ease-out group-hover:scale-110" />
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-0">
                      {short}
                    </p>
                  </div>
                  <ArrowRight className="size-5 text-concrete transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-copper" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- DIFFERENTIATION (full-bleed dark) ---------------- */}
      <section className="surface-deep grain relative overflow-hidden py-24 sm:py-32">
        <div className="ambient-amber pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal dir="left">
            <p className="eyebrow">{ui.home.ebWhy}</p>
            <h2 className="display-xl mt-4 text-4xl sm:text-5xl">{ui.home.ctaTitle}</h2>
            <p className="mt-6 max-w-md text-brand-foreground/70">{ui.home.ctaBody}</p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-14 bg-copper px-7 font-bold text-copper-foreground hover:bg-copper"
            >
              <a href={PHONE_HREF}>
                <Phone className="size-5" /> {PHONE_DISPLAY}
              </a>
            </Button>
          </Reveal>
          <ul className="grid gap-px bg-brand-foreground/12 sm:grid-cols-2">
            {whyChoose.map((w, i) => (
              <Reveal
                as="li"
                key={w}
                dir="up"
                delay={i * 60}
                className="group flex items-start gap-3 bg-asphalt/80 p-6 transition-colors duration-500 hover:bg-graphite/70"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-copper transition-transform duration-500 group-hover:scale-110" />
                <span className="text-sm leading-relaxed text-brand-foreground/85">{w}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- VISUAL SHOWCASE ---------------- */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">{ui.home.ebProjects}</p>
              <h2 className="display-xl rule-amber mt-4 text-4xl sm:text-5xl">
                {ui.home.recentTitle}
              </h2>
            </div>
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-copper"
            >
              {ui.home.viewGallery}
              <ArrowRight className="size-4 text-copper transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <p className="mt-5 max-w-xl text-muted-foreground">{ui.home.recentIntro}</p>
          <div className="mt-12">
            <ProjectCarousel
              items={gallery}
              prevLabel={ui.home.prevSlide}
              nextLabel={ui.home.nextSlide}
              goLabel={ui.home.goToSlide}
            />
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS (numbered timeline) ---------------- */}
      <section className="border-y border-border bg-secondary/45 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow">{ui.home.ebProcess}</p>
          <h2 className="display-xl rule-amber mt-4 max-w-xl text-4xl sm:text-5xl">
            {ui.home.howTitle}
          </h2>
          <ol className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                dir="up"
                delay={i * 90}
                className="group relative bg-background p-7 transition-colors duration-500 hover:bg-card"
              >
                <span className="absolute right-6 top-6 font-display text-5xl font-extrabold leading-none text-foreground/5 transition-colors duration-500 group-hover:text-copper/20">
                  {step.n}
                </span>
                <span className="inline-flex h-8 items-center border-b-2 border-copper font-display text-sm font-bold uppercase tracking-[0.18em] text-copper">
                  {String(step.n).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold uppercase leading-tight tracking-wide">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4">
          <p className="eyebrow text-center">{ui.home.ebReviews}</p>
          <h2 className="display-xl mt-4 text-center text-4xl sm:text-5xl">
            {ui.home.testimonialsTitle}
          </h2>
          <div className="mt-12">
            <TestimonialRotator items={testimonials} goLabel={ui.home.goToReview} />
          </div>
        </div>
      </section>

      {/* ---------------- FAQ + SERVICE AREAS ---------------- */}
      <section className="border-t border-border bg-secondary/45 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="eyebrow">{ui.home.ebFaq}</p>
            <h2 className="display-xl rule-amber mt-4 text-3xl sm:text-4xl">
              {ui.services.faqTitle}
            </h2>
            <div className="mt-10 border-t border-border">
              {faqs.slice(0, 5).map((f) => (
                <details key={f.q} className="faq-row group border-b border-border py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown className="size-4 shrink-0 text-copper transition-transform duration-500 ease-out group-open:rotate-180" />
                  </summary>
                  <p className="faq-answer mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">{ui.home.ebAreas}</p>
            <h2 className="display-xl rule-amber mt-4 text-3xl sm:text-4xl">
              {ui.home.areasTitle}
            </h2>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-px">
              {serviceAreas.map((a) => (
                <li
                  key={a}
                  className="group flex items-center gap-2.5 border-b border-border py-3 text-sm font-medium transition-colors duration-300 hover:text-copper"
                >
                  <span className="size-1.5 shrink-0 bg-copper/50 transition-colors duration-300 group-hover:bg-copper" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              {ui.home.notListed}{" "}
              <a
                href={PHONE_HREF}
                className="font-semibold text-foreground underline decoration-copper decoration-2 underline-offset-4 transition-colors duration-300 hover:text-copper"
              >
                {ui.home.callUsAt} {PHONE_DISPLAY}
              </a>{" "}
              {ui.home.mayServe}
            </p>
          </div>
        </div>
      </section>

      <CtaBand title={ui.home.ctaTitle} body={ui.home.ctaBody} />
    </>
  );
}
