import { useState, type FormEvent } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";

const propertyTypes = [
  "Residential driveway",
  "Private road / shared drive",
  "Commercial parking lot",
  "Other",
];

const conditions = [
  "New pavement (nothing there now)",
  "Existing asphalt — needs repair",
  "Existing asphalt — needs resurfacing",
  "Existing asphalt — needs sealcoating",
  "Not sure, need an assessment",
];

export function EstimateForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const selectClass =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div
      id="estimate"
      className="rounded-xl border border-border bg-card p-6 shadow-lift sm:p-8"
    >
      {sent ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <CheckCircle2 className="size-12 text-copper" />
          <h2 className="mt-4 text-2xl font-bold uppercase">Request received</h2>
          <p className="mt-2 max-w-sm text-muted-foreground">
            Thanks! We'll contact you within 1 business day for a free estimate. Need to talk
            sooner?
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-copper font-bold text-copper-foreground hover:bg-copper/90"
          >
            <a href={PHONE_HREF}>
              <Phone className="size-5" /> Call {PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold uppercase">Request a free estimate</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              No obligation. We'll get back to you within 1 business day.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="(707) 555-0148"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">City or ZIP code</Label>
              <Input id="zip" name="zip" required placeholder="Santa Rosa / 95407" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property type</Label>
              <select id="propertyType" name="propertyType" className={selectClass} defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {propertyTypes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sqft">Approximate square footage</Label>
              <Input id="sqft" name="sqft" placeholder="e.g. 900 sq ft (or 30 x 30)" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="condition">Current condition</Label>
            <select id="condition" name="condition" className={selectClass} defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {conditions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes (optional)</Label>
            <Textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Drainage issues, access, timing, anything else we should know."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="h-12 w-full bg-copper text-base font-bold text-copper-foreground hover:bg-copper/90"
          >
            Request my free estimate
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Prefer to talk? Call{" "}
            <a href={PHONE_HREF} className="font-semibold text-brand hover:underline">
              {PHONE_DISPLAY}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
