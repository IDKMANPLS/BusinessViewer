import { Link } from "@tanstack/react-router";
import { Phone, MapPin, BadgeCheck, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_HREF, FOUNDED_YEAR, navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <>
      <div className="surface-deep hidden py-2 text-xs sm:block">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4">
          <span className="inline-flex items-center gap-2 text-brand-foreground/85">
            <MapPin className="size-3.5 text-copper" /> Santa Rosa &amp; all of Sonoma County
          </span>
          <span className="inline-flex items-center gap-2 text-brand-foreground/85">
            <BadgeCheck className="size-3.5 text-copper" /> BBB A+ Accredited · Licensed &amp;
            Insured · Since {FOUNDED_YEAR}
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
          <Link to="/" className="min-w-0">
            <span className="block truncate font-display text-2xl font-extrabold uppercase tracking-tight text-brand-deep">
              {BUSINESS_NAME}
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              Asphalt Paving Contractor · Santa Rosa, CA
            </span>
          </Link>
          <nav className="flex shrink-0 items-center gap-6">
            <div className="hidden gap-6 text-sm font-semibold lg:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-copper" }}
                  className="hover:text-copper"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Button
              asChild
              className="hidden bg-copper font-bold text-copper-foreground hover:bg-copper/90 sm:inline-flex"
            >
              <a href={PHONE_HREF}>
                <Phone className="size-4" /> {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="sm" className="bg-copper font-bold text-copper-foreground hover:bg-copper/90 sm:hidden">
              <a href={PHONE_HREF} aria-label={`Call Jim's Paving at ${PHONE_DISPLAY}`}>
                <Phone className="size-4" /> Call
              </a>
            </Button>
            <details className="group relative lg:hidden">
              <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md border border-border text-foreground [&::-webkit-details-marker]:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </summary>
              <div className="absolute right-0 top-12 z-50 w-52 rounded-xl border border-border bg-card p-2 shadow-lift">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </details>
          </nav>
        </div>
      </header>
    </>
  );
}
