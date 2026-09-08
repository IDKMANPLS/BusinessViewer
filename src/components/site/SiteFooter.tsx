import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  ADDRESS_STREET,
  ADDRESS_CITY,
  ADDRESS_STATE,
  ADDRESS_ZIP,
  BBB_URL,
  serviceAreas,
} from "@/lib/site-data";
import { LanguageToggle, useLang, useSite } from "@/lib/i18n";

export function SiteFooter() {
  const { ui } = useLang();
  const { hours, navLinks } = useSite();

  return (
    <footer className="surface-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-display text-2xl font-extrabold uppercase">{BUSINESS_NAME}</h2>
          <p className="mt-2 text-sm text-brand-foreground/75">{ui.footer.about}</p>
          <a
            href={PHONE_HREF}
            className="mt-4 inline-flex items-center gap-2 font-display text-2xl font-bold text-copper"
          >
            <Phone className="size-5" /> {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-2 flex items-center gap-2 text-sm text-brand-foreground/80 hover:text-copper"
          >
            <Mail className="size-4" /> {EMAIL}
          </a>
          <address className="mt-2 flex items-start gap-2 text-sm not-italic text-brand-foreground/80">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            <span>
              {ADDRESS_STREET}
              <br />
              {ADDRESS_CITY}, {ADDRESS_STATE} {ADDRESS_ZIP}
            </span>
          </address>
          <LanguageToggle className="mt-4 border-brand-foreground/30 text-brand-foreground/85" />
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-copper">
            {ui.footer.hours}
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-brand-foreground/80">
            {hours.map((h) => (
              <li key={h.day}>
                {h.day}: {h.time}
              </li>
            ))}
            <li className="pt-1">{ui.footer.byAppointment}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-copper">
            {ui.footer.serviceArea}
          </h3>
          <p className="mt-3 text-sm text-brand-foreground/80">{serviceAreas.join(" · ")}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-copper">
            {ui.footer.quickLinks}
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-brand-foreground/80">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-copper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-brand-foreground/80">
            {ui.footer.bbb}{" "}
            <a
              href={BBB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-copper"
            >
              {ui.footer.viewBbb}
            </a>
          </p>
          <p className="mt-1 text-xs text-brand-foreground/60">{ui.footer.licensed}</p>
        </div>
      </div>

      <div className="border-t border-brand-foreground/15 px-4 py-5 text-center text-xs text-brand-foreground/60">
        © {new Date().getFullYear()} {BUSINESS_NAME} · {ADDRESS_CITY}, {ADDRESS_STATE} ·{" "}
        {PHONE_DISPLAY}
      </div>
      <div className="h-20 md:hidden" />
    </footer>
  );
}
