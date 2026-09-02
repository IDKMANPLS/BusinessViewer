import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 shadow-float backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Button
          asChild
          size="lg"
          className="h-12 bg-copper font-bold text-copper-foreground hover:bg-copper/90"
        >
          <a href={PHONE_HREF} aria-label={`Call Jim's Paving at ${PHONE_DISPLAY}`}>
            <Phone className="size-5" /> Call Now
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-12 font-semibold">
          <Link to="/contact">Free Estimate</Link>
        </Button>
      </div>
    </div>
  );
}
