import { useState, type FormEvent } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export function EstimateForm() {
  const { ui } = useLang();
  const [sent, setSent] = useState(false);
  const [filled, setFilled] = useState<Record<string, boolean>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div
      id="estimate"
      className="rounded-2xl border border-border bg-card/85 p-6 shadow-lift sm:p-8"
    >
      {sent ? (
        <div className="fade-swap flex flex-col items-center justify-center py-12 text-center">
          <CheckCircle2 className="float-soft size-12 text-copper" />
          <h2 className="mt-4 text-2xl font-bold uppercase tracking-wide">{ui.form.sentTitle}</h2>
          <p className="mt-2 max-w-sm text-muted-foreground">{ui.form.sentBody}</p>
          <Button
            asChild
            size="lg"
            className="cta-glow mt-6 bg-copper font-bold text-copper-foreground hover:bg-copper/90"
          >
            <a href={PHONE_HREF}>
              <Phone className="size-5" /> {ui.form.call} {PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wide">{ui.form.heading}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{ui.form.sub}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="field">
              <input id="name" name="name" required autoComplete="name" placeholder=" " />
              <label htmlFor="name">{ui.form.name}</label>
            </div>
            <div className="field">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder=" "
              />
              <label htmlFor="phone">{ui.form.phone}</label>
            </div>
            <div className="field">
              <input id="email" name="email" type="email" autoComplete="email" placeholder=" " />
              <label htmlFor="email">{ui.form.email}</label>
            </div>
            <div className="field">
              <input id="zip" name="zip" required placeholder=" " />
              <label htmlFor="zip">{ui.form.cityZip}</label>
            </div>
            <div className="field">
              <select
                id="propertyType"
                name="propertyType"
                defaultValue=""
                data-filled={filled.propertyType ? "true" : "false"}
                onChange={(e) =>
                  setFilled((f) => ({ ...f, propertyType: e.target.value !== "" }))
                }
              >
                <option value="" disabled>
                  {ui.form.selectOne}
                </option>
                {ui.form.propertyTypes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <label htmlFor="propertyType">{ui.form.propertyType}</label>
            </div>
            <div className="field">
              <input id="sqft" name="sqft" placeholder=" " />
              <label htmlFor="sqft">{ui.form.sqft}</label>
            </div>
          </div>

          <div className="field">
            <select
              id="condition"
              name="condition"
              defaultValue=""
              data-filled={filled.condition ? "true" : "false"}
              onChange={(e) => setFilled((f) => ({ ...f, condition: e.target.value !== "" }))}
            >
              <option value="" disabled>
                {ui.form.selectOne}
              </option>
              {ui.form.conditions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <label htmlFor="condition">{ui.form.condition}</label>
          </div>

          <div className="field">
            <textarea id="notes" name="notes" rows={4} placeholder=" " />
            <label htmlFor="notes">{ui.form.notes}</label>
          </div>

          <Button
            type="submit"
            size="lg"
            className="cta-glow h-12 w-full bg-copper text-base font-bold tracking-wide text-copper-foreground hover:bg-copper/90"
          >
            {ui.form.submit}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            {ui.form.preferTalk}{" "}
            <a
              href={PHONE_HREF}
              className="font-semibold text-brand transition-colors duration-300 hover:text-copper"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
