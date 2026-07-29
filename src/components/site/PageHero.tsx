import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="surface-deep relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_15%_10%,transparent,color-mix(in_oklab,var(--brand-deep)_70%,transparent))]" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-copper">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-brand-foreground/80 sm:text-lg">{intro}</p>
        {children}
      </div>
    </section>
  );
}