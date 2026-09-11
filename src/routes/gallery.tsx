import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { gallery, SITE_URL, BUSINESS_NAME } from "@/lib/site-data";
import { useLang, useSite } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "HVAC Installation Expertise | Franco's Mechanical" },
      {
        name: "description",
        content:
          "See the installation, diagnostic and commissioning expertise behind Franco's Mechanical HVAC service in Windsor and Sonoma County.",
      },
      { property: "og:title", content: "HVAC Installation Expertise | Franco's Mechanical" },
      {
        property: "og:description",
        content:
          "Explore professional mini-split, air conditioning, heating, thermostat and commercial HVAC work.",
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
          about: "HVAC installation, diagnostics and maintenance expertise in Sonoma County, California",
        }),
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { ui } = useLang();
  const { gallery: localGallery } = useSite();

  return (
    <>
      <PageHero eyebrow={ui.gallery.eyebrow} title={ui.gallery.title} intro={ui.gallery.intro} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {localGallery.map((g, i) => (
            <Reveal
              as="figure"
              key={g.type}
              dir={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
              delay={(i % 3) * 90}
              className="media-pop group overflow-hidden rounded-xl bg-card"
            >
              <img
                src={g.src}
                alt={g.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <figcaption className="p-4">
                <p className="font-display text-lg font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-copper">
                  {g.type}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{g.city}</p>
                <p className="text-sm text-muted-foreground">{g.date}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">{ui.gallery.footnote}</p>
      </section>

      <CtaBand />
    </>
  );
}
