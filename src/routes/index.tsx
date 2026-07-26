import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  Hammer,
  AlertTriangle,
  CheckCircle2,
  Star,
  BadgeCheck,
  Timer,
  Receipt,
  ChevronDown,
  Menu,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import heroImg from "@/assets/hero-plumber.jpg";
import workWaterheater from "@/assets/work-waterheater.jpg";
import workRepipe from "@/assets/work-repipe.jpg";
import workBathroom from "@/assets/work-bathroom.jpg";
import workFaucet from "@/assets/work-faucet.jpg";

const PHONE_DISPLAY = "+1 111 111 111";
const PHONE_HREF = "tel:+1111111111";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Businesses Website | Plumbing in Redlands, CA" },
      {
        name: "description",
        content:
          "Licensed Redlands plumbers for drain cleaning, water heaters, repiping and 24/7 emergency plumbing. Call +1 111 111 111 for same-day service.",
      },
      { property: "og:title", content: "My Businesses Website | Plumbing in Redlands, CA" },
      {
        property: "og:description",
        content:
          "Fast, reliable plumbing across Redlands and the Inland Empire. Drain cleaning, water heaters, leak repair and 24/7 emergency service.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Droplets, title: "Drain Cleaning", desc: "Hydro-jetting and snaking for slow or blocked kitchen, bath and main lines." },
  { icon: Flame, title: "Water Heater Repair & Install", desc: "Tank and tankless diagnostics, replacements and yearly maintenance." },
  { icon: AlertTriangle, title: "24/7 Emergency Plumbing", desc: "Burst pipes, overflows and no-water calls answered day or night." },
  { icon: Wrench, title: "Leak Detection & Repair", desc: "Slab, wall and under-sink leaks located without tearing up your home." },
  { icon: Hammer, title: "Repiping & Sewer Lines", desc: "Copper and PEX repipes, sewer camera inspection and line replacement." },
  { icon: ShowerHead, title: "Fixture Installation", desc: "Faucets, toilets, garbage disposals, showers and water filtration." },
];

const gallery = [
  { src: workWaterheater, alt: "Newly installed tankless water heater with copper piping" },
  { src: workRepipe, alt: "Completed copper repipe work under a Redlands home" },
  { src: workBathroom, alt: "Bathroom after a full fixture and plumbing upgrade" },
  { src: workFaucet, alt: "New chrome kitchen faucet installed on a quartz countertop" },
];

function Index() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
          <a href="#top" className="min-w-0">
            <span className="block truncate font-display text-xl font-extrabold uppercase tracking-tight text-brand-deep">
              My Businesses Website
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              Plumbing · Redlands, California
            </span>
          </a>
          <nav className="flex shrink-0 items-center gap-6">
            <div className="hidden gap-6 text-sm font-semibold md:flex">
              <a href="#about" className="hover:text-brand">About</a>
              <a href="#services" className="hover:text-brand">Services</a>
              <a href="#work" className="hover:text-brand">Our Work</a>
              <a href="#contact" className="hover:text-brand">Contact</a>
            </div>
            <Button asChild size="sm" className="bg-copper text-copper-foreground hover:bg-copper/90">
              <a href={PHONE_HREF}>
                <Phone className="size-4" /> Call
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="surface-deep relative overflow-hidden">
        <img
          src={heroImg}
          alt="Licensed plumber servicing a kitchen sink in Redlands, California"
          width={1600}
          height={1000}
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/25 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="size-4" /> Licensed · Bonded · Insured
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold uppercase leading-[1.05] sm:text-6xl">
            Redlands plumbing done right the first time
          </h1>
          <p className="mt-4 max-w-xl text-base text-brand-foreground/80 sm:text-lg">
            Same-day repairs, honest pricing, and 24/7 emergency service across the Inland Empire.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 bg-copper text-base font-bold text-copper-foreground shadow-lift hover:bg-copper/90"
            >
              <a href={PHONE_HREF}>
                <Phone className="size-5" /> Call Now · {PHONE_DISPLAY}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 border-brand-foreground/40 bg-transparent text-base font-semibold text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground"
            >
              <a href="#contact">Request a quote</a>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm">
            {[
              ["20+", "Years serving Redlands"],
              ["24/7", "Emergency callouts"],
              ["100%", "Upfront pricing"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-2xl font-extrabold text-copper">{k}</dt>
                <dd className="text-brand-foreground/75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <img
            src={workFaucet}
            alt="Finished fixture installation by our Redlands plumbing team"
            width={1024}
            height={768}
            loading="lazy"
            className="w-full rounded-xl border border-border object-cover shadow-lift"
          />
          <div>
            <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">About us</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My Businesses Website is a family-run plumbing company based right here in Redlands,
              California, serving homeowners and small businesses across the Inland Empire for over
              twenty years. Every technician is licensed, background-checked, and shows up on time
              with the parts needed to finish the job in one visit.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We answer the phone at 2 a.m. the same way we do at 2 p.m. — with a straight answer, a
              flat-rate quote before any work starts, and a warranty you can hold us to.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {["Upfront flat-rate pricing", "Same-day appointments", "Workmanship warranty", "Local, family owned"].map((f) => (
                <li key={f} className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="size-5 shrink-0 text-brand" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">Our services</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Residential and light commercial plumbing, from a dripping faucet to a full repipe.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lift"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold uppercase">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">Recent work</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          A look at completed jobs around Redlands, Loma Linda and Yucaipa.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </section>

      {/* Contact */}
      <section id="contact" className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">Get in touch</h2>
            <p className="mt-3 text-muted-foreground">
              Need a plumber today? Calling is the fastest way to reach us — otherwise send a message
              and we'll respond within the hour during business hours.
            </p>
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

          <div className="rounded-xl border border-border bg-card p-6 shadow-lift sm:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="size-12 text-brand" />
                <h3 className="mt-4 text-2xl font-bold uppercase">Message sent</h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks — we'll be in touch shortly. For urgent issues, call {PHONE_DISPLAY}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold uppercase">Request service</h3>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Adriana Leit" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+1 111 111 111"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what's going on with your plumbing..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-brand text-brand-foreground hover:bg-brand-deep">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="surface-deep">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:grid-cols-3">
          <div>
            <h2 className="font-display text-xl font-extrabold uppercase">My Businesses Website</h2>
            <p className="mt-2 text-sm text-brand-foreground/75">
              Licensed plumbing contractor based in Redlands, California.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-4 inline-flex items-center gap-2 font-display text-xl font-bold text-copper"
            >
              <Phone className="size-5" /> {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-copper">Hours</h3>
            <ul className="mt-3 space-y-1 text-sm text-brand-foreground/80">
              <li>Monday–Friday: 7:00am – 7:00pm</li>
              <li>Saturday: 8:00am – 4:00pm</li>
              <li>Sunday: Emergency calls only</li>
              <li>24/7 emergency line</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-copper">Service area</h3>
            <p className="mt-3 text-sm text-brand-foreground/80">
              Redlands · Loma Linda · Yucaipa · Mentone · Highland · San Bernardino · Calimesa
            </p>
          </div>
        </div>
        <div className="border-t border-brand-foreground/15 px-4 py-5 text-center text-xs text-brand-foreground/60">
          © {new Date().getFullYear()} My Businesses Website · Redlands, CA · {PHONE_DISPLAY}
        </div>
      </footer>
    </div>
  );
}
