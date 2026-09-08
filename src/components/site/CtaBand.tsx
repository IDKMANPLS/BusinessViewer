import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_HREF, YEARS_IN_BUSINESS } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";

export function CtaBand({ title, body }: { title?: string; body?: string }) {
  const { ui } = useLang();

  return (
    <section className="surface-deep grain relative overflow-hidden">
      <div className="ambient-amber pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-28">
        <Reveal dir="up" className="max-w-3xl">
          <p className="eyebrow">
            {YEARS_IN_BUSINESS} {ui.home.statYears}
          </p>
          <h2 className="display-xl mt-5 text-4xl sm:text-6xl">{title ?? ui.cta.title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-foreground/70">
            {body ?? ui.cta.body}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-14 bg-copper px-7 text-base font-bold tracking-wide text-copper-foreground hover:bg-copper"
            >
              <a href={PHONE_HREF}>
                <Phone className="size-5" /> {ui.cta.call} {PHONE_DISPLAY}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group h-14 border-brand-foreground/25 bg-transparent px-6 text-base font-semibold text-brand-foreground hover:border-brand-foreground/50 hover:bg-brand-foreground/5 hover:text-brand-foreground"
            >
              <Link to="/contact">
                {ui.cta.quote}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
