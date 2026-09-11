import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import {
  serviceDetails,
  services,
  PHONE_DISPLAY,
  PHONE_HREF,
  BUSINESS_NAME,
  SITE_URL,
  type ServiceSlug,
} from "@/lib/site-data";
import { useLang, useSite } from "@/lib/i18n";

function isSlug(slug: string): slug is ServiceSlug {
  return slug in serviceDetails;
}

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    if (!isSlug(params.slug)) throw notFound();
    return { detail: serviceDetails[params.slug], slug: params.slug };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service unavailable | Franco's Mechanical" }, { name: "robots", content: "noindex" }],
      };
    }
    const d = loaderData.detail;
    const url = `${SITE_URL}/services/${params.slug}`;
    return {
      meta: [
        { title: d.metaTitle },
        { name: "description", content: d.metaDescription },
        { property: "og:title", content: d.metaTitle },
        { property: "og:description", content: d.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: d.title,
              description: d.metaDescription,
              serviceType: d.title,
              areaServed: "Sonoma County, California",
              provider: {
                "@type": "HVACBusiness",
                name: BUSINESS_NAME,
                telephone: "+17076953726",
              },
              url,
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
                { "@type": "ListItem", position: 2, name: "Services", item: SITE_URL + "/services" },
                { "@type": "ListItem", position: 3, name: d.title, item: url },
              ],
            },
          ]),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const { ui } = useLang();
  const { serviceDetails: localDetails, services: localServices } = useSite();
  const detail = localDetails[slug];
  const others = localServices.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="surface-deep">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-xs font-bold uppercase tracking-widest text-copper">
            <Link to="/services" className="hover:underline">
              {ui.services.breadcrumb}
            </Link>{" "}
            / {detail.title}
          </nav>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
            {detail.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-foreground/85 sm:text-lg">
            {detail.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 bg-copper text-base font-bold text-copper-foreground hover:bg-copper/90"
            >
              <Link to="/contact">{ui.services.detailCta}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 border-brand-foreground/40 bg-transparent text-base font-semibold text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground"
            >
              <a href={PHONE_HREF}>
                <Phone className="size-5" /> {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-10">
            {detail.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="rule-copper text-2xl font-extrabold uppercase sm:text-3xl">
                  {s.heading}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
                {s.bullets && (
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check className="mt-0.5 size-5 shrink-0 text-copper" />
                        <span className="text-sm font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            <figure className="media-pop overflow-hidden rounded-xl bg-card">
              <img
                src={detail.image}
                alt={detail.imageAlt}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-4 text-sm text-muted-foreground">
                {detail.imageAlt}
              </figcaption>
            </figure>
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold uppercase">{ui.services.otherServices}</h2>
              <ul className="mt-4 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: o.slug }}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-copper"
                    >
                      {o.title} <ArrowRight className="size-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
