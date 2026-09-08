import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_HREF, BUSINESS_NAME } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export function StickyCallBar() {
  const { ui } = useLang();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background p-3 shadow-float md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Button
          asChild
          size="lg"
          className="h-12 bg-copper font-bold text-copper-foreground hover:bg-copper/90"
        >
          <a href={PHONE_HREF} aria-label={`${ui.sticky.call} ${BUSINESS_NAME} ${PHONE_DISPLAY}`}>
            <Phone className="size-5" /> {ui.sticky.call}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-12 font-semibold">
          <Link to="/contact">{ui.sticky.estimate}</Link>
        </Button>
      </div>
    </div>
  );
}
