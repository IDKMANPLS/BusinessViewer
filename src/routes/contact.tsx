import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Redlands Plumber · +1 111 111 111" },
      {
        name: "description",
        content:
          "Call +1 111 111 111 or send a message for same-day plumbing in Redlands, Loma Linda, Yucaipa, Mentone, Highland and San Bernardino.",
      },
      { property: "og:title", content: "Contact Us | Redlands Plumber" },
      {
        property: "og:description",
        content: "Phone, hours and service area for our Redlands plumbing team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="Calling is the fastest way to reach us — otherwise send a message and we'll respond within the hour during business hours."
      />

      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">Reach us</h2>
            <div className="mt-8 space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-lift"
              >
                <Phone className="size-6 shrink-0 text-brand" />
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    Call us
                  </span>
                  <span className="block truncate font-display text-2xl font-extrabold">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <MapPin className="size-6 shrink-0 text-brand" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Service area
                  </p>
                  <p className="font-semibold">
                    Redlands, Loma Linda, Yucaipa, Mentone, Highland, San Bernardino & surrounding
                    Inland Empire
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <Clock className="size-6 shrink-0 text-brand" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Hours</p>
                  <p className="font-semibold">Mon–Fri 7am–7pm · Sat 8am–4pm · 24/7 emergencies</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}