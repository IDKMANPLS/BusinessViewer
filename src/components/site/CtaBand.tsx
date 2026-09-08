import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export function CtaBand({ title, body }: { title?: string; body?: string }) {
  const { ui } = useLang();

  return (
    <section className="surface-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">{title ?? ui.cta.title}</h2>
          <p className="mt-3 max-w-xl text-brand-foreground/80">{body ?? ui.cta.body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <Button
            asChild
            size="lg"
            className="cta-glow h-14 bg-copper text-base font-bold tracking-wide text-copper-foreground hover:bg-copper/90"
          >
            <a href={PHONE_HREF}>
              <Phone className="size-5" /> {ui.cta.call} {PHONE_DISPLAY}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 border-brand-foreground/40 bg-transparent text-base font-semibold text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground"
          >
            <Link to="/contact">{ui.cta.quote}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
