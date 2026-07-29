import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { gallery } from "@/lib/site-data";

export const Route = createFileRoute("/ourwork")({
  head: () => ({
    meta: [
      { title: "Our Work | Redlands Plumbing Photo Gallery" },
      {
        name: "description",
        content:
          "Photos of completed plumbing jobs around Redlands, Loma Linda and Yucaipa: water heaters, repipes, bathroom upgrades and fixture installs.",
      },
      { property: "og:title", content: "Our Work | Redlands Plumbing Photo Gallery" },
      {
        property: "og:description",
        content: "See completed plumbing projects across Redlands and the Inland Empire.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurWorkPage,
});

function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Recent jobs around the Inland Empire"
        intro="A look at finished work in Redlands, Loma Linda, Yucaipa and Mentone homes."
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