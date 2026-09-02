import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { gallery, SITE_URL, BUSINESS_NAME } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Paving Project Gallery | Jim's Paving, Sonoma County" },
      {
        name: "description",
        content:
          "Photos of completed asphalt work in Sonoma County: residential driveway installations, resurfacing and sealcoating results, commercial parking lots and site grading.",
      },
      { property: "og:title", content: "Completed Paving Projects | Jim's Paving" },
      {
        property: "og:description",
        content:
          "See finished driveways, parking lots and sealcoating work across Santa Rosa, Petaluma, Windsor and Sonoma County.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/gallery" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: `${BUSINESS_NAME} project gallery`,
          url: SITE_URL + "/gallery",
          about: "Asphalt paving projects completed in Sonoma County, California",
        }),
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Project gallery"
        title="Our work, on real Sonoma County properties"
        intro="Driveways, parking lots, repairs and site prep — with the city, project type and completion date for each job."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
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
                <p className="mt-1 text-sm text-muted-foreground">{g.city}</p>
                <p className="text-sm text-muted-foreground">{g.date}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          Want to see a project like yours? Ask when Jim comes out for your estimate — he can point
          you to comparable work nearby.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
