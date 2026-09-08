import { useState, type FormEvent } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export function EstimateForm() {
  const { ui } = useLang();
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
          <h2 className="mt-4 text-2xl font-bold uppercase">{ui.form.sentTitle}</h2>
          <p className="mt-2 max-w-sm text-muted-foreground">{ui.form.sentBody}</p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-copper font-bold text-copper-foreground hover:bg-copper/90"
          >
            <a href={PHONE_HREF}>
              <Phone className="size-5" /> {ui.form.call} {PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold uppercase">{ui.form.heading}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{ui.form.sub}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">{ui.form.name}</Label>
              <Input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder={ui.form.namePlaceholder}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{ui.form.phone}</Label>
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
              <Label htmlFor="email">{ui.form.email}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">{ui.form.cityZip}</Label>
              <Input id="zip" name="zip" required placeholder="Santa Rosa / 95407" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyType">{ui.form.propertyType}</Label>
              <select id="propertyType" name="propertyType" className={selectClass} defaultValue="">
                <option value="" disabled>
                  {ui.form.selectOne}
                </option>
                {ui.form.propertyTypes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sqft">{ui.form.sqft}</Label>
              <Input id="sqft" name="sqft" placeholder={ui.form.sqftPlaceholder} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="condition">{ui.form.condition}</Label>
            <select id="condition" name="condition" className={selectClass} defaultValue="">
              <option value="" disabled>
                {ui.form.selectOne}
              </option>
              {ui.form.conditions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">{ui.form.notes}</Label>
            <Textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder={ui.form.notesPlaceholder}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="h-12 w-full bg-copper text-base font-bold text-copper-foreground hover:bg-copper/90"
          >
            {ui.form.submit}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            {ui.form.preferTalk}{" "}
            <a href={PHONE_HREF} className="font-semibold text-brand hover:underline">
              {PHONE_DISPLAY}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
