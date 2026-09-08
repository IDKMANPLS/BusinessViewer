import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";
import { LanguageToggle, useLang, useSite } from "@/lib/i18n";

export function SiteHeader() {
  const { ui } = useLang();
  const { navLinks } = useSite();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-500 ease-out ${
          scrolled
            ? "border-border bg-background/95 shadow-[0_10px_30px_-24px_color-mix(in_oklab,var(--asphalt)_60%,transparent)]"
            : "border-transparent bg-background"

        }`}
      >
        <div
          className={`mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 transition-[padding] duration-500 ease-out ${
            scrolled ? "py-2.5" : "py-4"
          }`}
        >
          <Link to="/" className="group min-w-0">
            <span className="block truncate font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight transition-colors duration-300 group-hover:text-copper">
              {BUSINESS_NAME}
            </span>
            <span className="block truncate text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
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
            <span className="hidden sm:inline-flex"><LanguageToggle /></span>
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
          </nav>
        </div>

        {/* Inline sub-page links (no dropdown) — scrollable on small screens */}
        <div className="border-t border-border/60 lg:hidden">
          <div className="no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{
                  className: "border-copper/60 bg-copper/10 text-copper",
                }}
                className="shrink-0 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-[color,background-color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-copper/50 hover:bg-copper/10 hover:text-copper active:translate-y-0"
              >
                {l.label}
              </Link>
            ))}
            <span className="ml-auto shrink-0 sm:hidden">
              <LanguageToggle />
            </span>
          </div>
        </div>
      </header>

    </>
  );
}
