import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/customerreviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Redlands Plumbers Rated 4.9/5" },
      {
        name: "description",
        content:
          "Read 4.9-star reviews from Redlands, Yucaipa, Loma Linda and Highland homeowners about our plumbing repairs, water heaters and emergency service.",
      },
      { property: "og:title", content: "Customer Reviews | Redlands Plumbers Rated 4.9/5" },
      {
        property: "og:description",
        content: "What Inland Empire neighbors say about our plumbing work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/customerreviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/customerreviews" }],
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
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "312",
            bestRating: "5",
          },
          review: testimonials.map((t) => ({
            "@type": "Review",
            author: { "@type": "Person", name: t.name },
            reviewBody: t.quote,
            locationCreated: { "@type": "Place", name: t.place },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          })),
        }),
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer reviews"
        title="4.9 out of 5 from 312 local reviews"
        intro="Neighbors across Redlands and the Inland Empire on what it's like to have us in their home."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-lift"
            >
              <div className="flex gap-1 text-copper">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-bold uppercase tracking-wide">
                {t.name}{" "}
                <span className="font-normal text-muted-foreground">· {t.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link to="/contact" className="mt-10 inline-flex font-semibold text-brand hover:underline">
          Ready to book? Contact us
        </Link>
      </section>
    </>
  );
}