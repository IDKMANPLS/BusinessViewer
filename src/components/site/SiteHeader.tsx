import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Star, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_NAME, PHONE_HREF, navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <>
      <div className="surface-deep hidden py-2 text-xs sm:block">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4">
          <span className="inline-flex items-center gap-2 text-brand-foreground/80">
            <MapPin className="size-3.5 text-copper" /> Serving Redlands & the Inland Empire
          </span>
          <span className="inline-flex items-center gap-2 text-brand-foreground/80">
            <Star className="size-3.5 fill-copper text-copper" /> 4.9 / 5 from 312 local reviews
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
          <Link to="/" className="min-w-0">
            <span className="block truncate font-display text-xl font-extrabold uppercase tracking-tight text-brand-deep">
              {BUSINESS_NAME}
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              Flooring Installation · Redlands, California
            </span>
          </Link>
          <nav className="flex shrink-0 items-center gap-6">
            <div className="hidden gap-6 text-sm font-semibold md:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-brand" }}
                  className="shine-text hover:text-brand"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Button asChild size="sm" className="shine bg-copper text-copper-foreground hover:bg-copper/90">
              <a href={PHONE_HREF}>
                <Phone className="size-4" /> Call
              </a>
            </Button>
            <details className="group relative md:hidden">
              <summary className="flex size-9 cursor-pointer list-none items-center justify-center rounded-md border border-border text-foreground [&::-webkit-details-marker]:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </summary>
              <div className="absolute right-0 top-11 z-50 w-44 rounded-xl border border-border bg-card p-2 shadow-lift">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary"
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