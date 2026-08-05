import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PHONE_DISPLAY } from "@/lib/site-data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-lift sm:p-8">
      {sent ? (
        <div className="flex h-full flex-col items-center justify-center py-10 text-center">
          <CheckCircle2 className="size-12 text-brand" />
          <h3 className="mt-4 text-2xl font-bold uppercase">Message sent</h3>
          <p className="mt-2 text-muted-foreground">
            Thanks — we'll be in touch shortly. For urgent issues, call {PHONE_DISPLAY}.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="text-2xl font-bold uppercase">Request service</h2>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required placeholder="Adriana Leit" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="+1 111 111 111" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us what you'd like painted..."
            />
          </div>
          <Button type="submit" size="lg" className="w-full bg-brand text-brand-foreground hover:bg-brand-deep">
            Send message
          </Button>
        </form>
      )}
    </div>
  );
}