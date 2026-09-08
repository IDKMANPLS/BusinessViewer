import { Link } from "@tanstack/react-router";
import { Phone, MapPin, BadgeCheck, Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";
import { LanguageToggle, useLang, useSite } from "@/lib/i18n";

export function SiteHeader() {
  const { ui } = useLang();
  const { navLinks } = useSite();

  return (
    <>
      <div className="surface-deep hidden py-2 text-xs sm:block">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4">
          <span className="inline-flex items-center gap-2 text-brand-foreground/85">
            <MapPin className="size-3.5 text-copper" /> {ui.header.location}
          </span>
          <span className="inline-flex items-center gap-2 text-brand-foreground/85">
            <BadgeCheck className="size-3.5 text-copper" /> {ui.header.trust}
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
          <Link to="/" className="group min-w-0">
            <span className="block truncate font-display text-2xl font-extrabold uppercase tracking-tight text-brand-deep transition-colors duration-300 group-hover:text-copper">
              {BUSINESS_NAME}
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              {ui.header.tagline}
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
                  className="nav-link"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <LanguageToggle />
            <Button
              asChild
              className="hidden bg-copper font-bold text-copper-foreground hover:bg-copper/90 sm:inline-flex"
            >
              <a href={PHONE_HREF}>
                <Phone className="size-4" /> {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="sm" className="bg-copper font-bold text-copper-foreground hover:bg-copper/90 sm:hidden">
              <a href={PHONE_HREF} aria-label={`${ui.header.call} ${BUSINESS_NAME} ${PHONE_DISPLAY}`}>
                <Phone className="size-4" /> {ui.header.call}
              </a>
            </Button>
            <details className="group relative lg:hidden">
              <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md border border-border text-foreground transition-all duration-300 hover:border-copper hover:text-copper active:scale-95 [&::-webkit-details-marker]:hidden">
                <Menu className="size-5 transition-transform duration-300 group-open:rotate-90" />
                <span className="sr-only">{ui.header.openMenu}</span>
              </summary>
              <div className="menu-pop absolute right-0 top-12 z-50 w-56 rounded-xl border border-border bg-card p-2 shadow-lift">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{ className: "text-copper" }}
                    className="menu-item"
                  >
                    {l.label}
                    <ChevronRight className="size-4 opacity-50" />
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
