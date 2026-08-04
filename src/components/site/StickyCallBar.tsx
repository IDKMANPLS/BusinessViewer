import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 shadow-float backdrop-blur md:hidden">
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <Button asChild size="lg" className="shine h-12 bg-copper font-bold text-copper-foreground hover:bg-copper/90">
          <a href={PHONE_HREF}>
            <Phone className="size-5" /> Call {PHONE_DISPLAY}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="shine h-12 font-semibold">
          <Link to="/contact">Quote</Link>
        </Button>
      </div>
    </div>
  );
}