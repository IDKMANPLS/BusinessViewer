import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

type Item = { quote: string; name: string; place: string; date: string; stars?: number };

/** Auto-rotating testimonial with fade transitions and clickable dots. */
export function TestimonialRotator({
  items,
  goLabel,
}: {
  items: Item[];
  goLabel: string;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const t = items[i];
  if (!t) return null;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <figure
        key={t.quote}
        className="fade-swap glass-dark mx-auto flex max-w-3xl flex-col items-center rounded-2xl p-8 text-center sm:p-12"
      >
        <Quote className="size-8 text-copper" aria-hidden="true" />
        {typeof t.stars === "number" && t.stars > 0 && (
          <div className="mt-5 flex gap-1 text-copper" aria-label={`${t.stars} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, s) => (
              <Star
                key={s}
                className={`size-4 ${s < t.stars ? "fill-current" : "text-brand-foreground/20"}`}
                aria-hidden="true"
              />
            ))}
          </div>
        )}
        <blockquote className="mt-6 text-lg leading-relaxed text-brand-foreground/90 sm:text-xl">
          “{t.quote}”
        </blockquote>
        <figcaption className="mt-6 text-sm font-bold uppercase tracking-wide">
          {t.name}
          <span className="ml-1 font-normal normal-case tracking-normal text-brand-foreground/60">
            · {t.place} · {t.date}
          </span>
        </figcaption>
      </figure>

      <div className="mt-7 flex items-center justify-center gap-2">
        {items.map((item, idx) => (
          <button
            key={item.quote}
            type="button"
            aria-label={`${goLabel} ${idx + 1}`}
            aria-current={idx === i}
            onClick={() => setI(idx)}
            className={`dot bg-brand-foreground/30 ${idx === i ? "dot-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
