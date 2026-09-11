import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, BadgeCheck } from "lucide-react";
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  ADDRESS_STREET,
  ADDRESS_CITY,
  ADDRESS_STATE,
  ADDRESS_ZIP,
  LICENSE_URL,
  FOUNDED_YEAR,
  serviceAreas,
} from "@/lib/site-data";
import { LanguageToggle, useLang, useSite } from "@/lib/i18n";

export function SiteFooter() {
  const { ui } = useLang();
  const { hours, navLinks } = useSite();

  return (
    <footer className="surface-deep grain relative overflow-hidden">
      {/* brand statement */}
      <div className="relative mx-auto max-w-6xl px-4 pt-20">
        <p className="eyebrow">
          {ADDRESS_CITY}, {ADDRESS_STATE} · {FOUNDED_YEAR}
        </p>
        <p className="display-xl mt-5 text-[13vw] leading-[0.85] text-brand-foreground/12 sm:text-[9rem] lg:text-[11rem]">
          {BUSINESS_NAME}
        </p>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <a
            href={PHONE_HREF}
            className="group inline-flex items-center gap-3 font-display text-3xl font-extrabold text-copper transition-opacity duration-300 hover:opacity-80"
          >
            <Phone className="size-6" /> {PHONE_DISPLAY}
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-foreground/65">
            {ui.footer.about}
          </p>
          {EMAIL && <a href={`mailto:${EMAIL}`} className="mt-5 flex items-center gap-2.5 text-sm text-brand-foreground/75 transition-colors duration-300 hover:text-copper">
            <Mail className="size-4 text-copper" /> {EMAIL}
          </a>}
          <address className="mt-2.5 flex items-start gap-2.5 text-sm not-italic text-brand-foreground/75">
            <MapPin className="mt-0.5 size-4 shrink-0 text-copper" />
            <span>
              {ADDRESS_STREET}
              <br />
              {ADDRESS_CITY}, {ADDRESS_STATE} {ADDRESS_ZIP}
            </span>
          </address>
          <LanguageToggle className="mt-6" />
        </div>

        <div>
          <h3 className="eyebrow">{ui.footer.hours}</h3>
          <ul className="mt-4 space-y-1.5 text-sm text-brand-foreground/75">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4 border-b border-brand-foreground/8 pb-1.5">
                <span>{h.day}</span>
                <span className="text-brand-foreground/60">{h.time}</span>
              </li>
            ))}
            <li className="pt-1 text-brand-foreground/55">{ui.footer.byAppointment}</li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">{ui.footer.quickLinks}</h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-foreground/75">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-block transition-all duration-300 ease-out hover:translate-x-1 hover:text-copper"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">{ui.footer.serviceArea}</h3>
          <p className="mt-4 text-sm leading-relaxed text-brand-foreground/70">
            {serviceAreas.join(" · ")}
          </p>
          <a
            href={LICENSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-2 rounded-full border border-brand-foreground/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-copper/60 hover:text-copper"
          >
            <BadgeCheck className="size-4 text-copper" /> {ui.footer.viewBbb}
          </a>
          <p className="mt-4 text-xs text-brand-foreground/50">{ui.footer.licensed}</p>
        </div>
      </div>

      <div className="relative border-t border-brand-foreground/12 px-4 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-xs text-brand-foreground/50 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {BUSINESS_NAME} · {ADDRESS_CITY}, {ADDRESS_STATE}
          </span>
          <span>{PHONE_DISPLAY}</span>
        </div>
      </div>
      <div className="h-20 md:hidden" />
    </footer>
  );
}
