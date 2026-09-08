import { createFileRoute } from "@tanstack/react-router";
import { Check, BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import heroImg from "@/assets/hero-paving.jpg";
import { BBB_URL, localBusinessSchema, SITE_URL } from "@/lib/site-data";
import { useLang, useSite } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jim's Paving | Santa Rosa Paving Since 1989" },
      {
        name: "description",
        content:
          "Jim's Paving is a family-owned, BBB A+ accredited asphalt contractor in Santa Rosa, CA. Owner Jim Todorovitch Jr. has paved Sonoma County since 1989 — 37 years.",
      },
      { property: "og:title", content: "About Jim's Paving | 37 Years in Sonoma County" },
      {
        property: "og:description",
        content:
          "A 3-person, family-owned paving crew in Santa Rosa. Licensed, bonded, insured and BBB A+ accredited since 1989.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          { "@context": "https://schema.org", "@type": "AboutPage", url: SITE_URL + "/about" },
          localBusinessSchema,
        ]),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Established ${FOUNDED_YEAR}`}
        title={`${YEARS_IN_BUSINESS} years paving Sonoma County`}
        intro={`${BUSINESS_NAME} is a family-owned asphalt contractor based in Santa Rosa. Owner ${OWNER_NAME} still runs the estimates and works alongside the crew.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
              A working business serving working people
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                We started paving driveways in Sonoma County in {FOUNDED_YEAR}. Since then the
                equipment has changed, the crew has stayed small, and the approach hasn't moved:
                prep the base properly, price the job honestly, and stand behind what we install.
              </p>
              <p>
                Today {BUSINESS_NAME} is a 3-person operation out of {ADDRESS_FULL}. That size is
                deliberate — Jim looks at every job himself, quotes it himself, and is on site while
                the work happens. You are never handed off to a salesperson or a subcontractor you've
                never met.
              </p>
              <p>
                {YEARS_IN_BUSINESS} years in one county teaches you things a national outfit doesn't
                know: which neighborhoods sit on clay that holds water, where winter runoff collects,
                how much base rock a rural west-county drive actually needs. That local knowledge is
                the difference between pavement that lasts decades and pavement that cracks in three
                winters.
              </p>
            </div>
            <div className="mt-8 rounded-xl border border-copper/40 bg-copper/10 p-5">
              <p className="inline-flex items-center gap-2 font-display text-xl font-extrabold uppercase">
                <BadgeCheck className="size-6 text-copper" /> BBB A+ Accredited
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Our rating with the Better Business Bureau is independently verified — you don't have
                to take our word for it.{" "}
                <a
                  href={BBB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand underline hover:text-copper"
                >
                  View our BBB profile
                </a>
                .
              </p>
            </div>
          </div>
          <figure className="media-pop overflow-hidden rounded-xl bg-card">
            <img
              src={heroImg}
              alt="Completed asphalt driveway paved by Jim's Paving in Santa Rosa, California"
              width={1600}
              height={1008}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="p-4 text-sm text-muted-foreground">
              Residential driveway paving in Santa Rosa — clean edges, correct drainage.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-border bg-card">
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
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
          What you get working with us
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {whyChoose.map((w) => (
            <li key={w} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <Check className="mt-0.5 size-5 shrink-0 text-copper" />
              <span className="text-sm font-medium">{w}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
            How a project runs
          </h2>
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="rule-copper text-3xl font-extrabold uppercase sm:text-4xl">
          In our customers' words
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.quote} className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
              <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-bold uppercase tracking-wide">
                {t.name}{" "}
                <span className="font-normal text-muted-foreground">
                  · {t.place} · {t.date}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
