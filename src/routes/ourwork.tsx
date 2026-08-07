import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { gallery } from "@/lib/site-data";

export const Route = createFileRoute("/ourwork")({
  head: () => ({
    meta: [
      { title: "Our Work | Redlands Roofing Photo Gallery" },
      {
        name: "description",
        content:
          "Photos of completed roofing jobs around Redlands, Loma Linda and Yucaipa: shingle re-roofs, tile restoration, flat commercial roofs and new gutters.",
      },
      { property: "og:title", content: "Our Work | Redlands Roofing Photo Gallery" },
      {
        property: "og:description",
        content: "See completed roofing projects across Redlands and the Inland Empire.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ourwork" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ourwork" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Our Work | Redlands Roofing Photo Gallery",
          description:
            "Photos of completed roofing jobs around Redlands, Loma Linda and Yucaipa.",
          about: { "@type": "RoofingContractor", name: "Roofing Demo Website" },
          associatedMedia: gallery.map((g) => ({
            "@type": "ImageObject",
            name: g.alt,
            caption: g.alt,
          })),
        }),
      },
    ],
  }),
  component: OurWorkPage,
});

function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Recent roofing jobs around the Inland Empire"
        intro="A look at finished shingle re-roofs, tile restorations, flat roofs and gutter work in Redlands, Loma Linda, Yucaipa and Mentone."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          to="/contact"
          className="mt-10 inline-flex font-semibold text-brand hover:underline"
        >
          Want work like this at your place? Get a quote
        </Link>
      </section>
    </>
  );
}