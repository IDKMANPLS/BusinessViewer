import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_HREF, navLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="surface-deep">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-display text-xl font-extrabold uppercase">{BUSINESS_NAME}</h2>
          <p className="mt-2 text-sm text-brand-foreground/75">
            Licensed painting contractor based in Redlands, California.
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
            <li>Monday–Friday: 7:00am – 6:00pm</li>
            <li>Saturday: 8:00am – 4:00pm</li>
            <li>Sunday: Closed</li>
            <li>Free estimates by appointment</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-copper">Service area</h3>
          <p className="mt-3 text-sm text-brand-foreground/80">
            Redlands · Loma Linda · Yucaipa · Mentone · Highland · San Bernardino · Calimesa
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-copper">Pages</h3>
          <ul className="mt-3 space-y-1 text-sm text-brand-foreground/80">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-copper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-foreground/15 px-4 py-5 text-center text-xs text-brand-foreground/60">
        © {new Date().getFullYear()} {BUSINESS_NAME} · Redlands, CA · {PHONE_DISPLAY}
      </div>
      <div className="h-20 md:hidden" />
    </footer>
  );
}