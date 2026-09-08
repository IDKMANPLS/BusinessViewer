import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Item = { src: string; alt: string; type: string; city: string; date: string };

/** Swipeable project carousel with arrows and clickable dots. */
export function ProjectCarousel({
  items,
  prevLabel,
  nextLabel,
  goLabel,
}: {
  items: Item[];
  prevLabel: string;
  nextLabel: string;
  goLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function goTo(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const idx = (i + items.length) % items.length;
    const child = track.children[idx] as HTMLElement | undefined;
    if (child) track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActive(idx);
  }

  function onScroll() {
    const track = trackRef.current;
    if (!track) return;
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((c, i) => {
      const el = c as HTMLElement;
      const center = el.offsetLeft - track.offsetLeft + el.clientWidth / 2;
      const d = Math.abs(center - mid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="snap-row sm:[&>*]:basis-[calc(50%-0.625rem)] lg:[&>*]:basis-[calc(33.333%-0.834rem)]"
      >
        {items.map((g) => (
          <figure key={g.type} className="media-pop group overflow-hidden rounded-xl bg-card">
            <div className="overflow-hidden">
              <img
                src={g.src}
                alt={g.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            </div>
            <figcaption className="p-4">
              <p className="font-display text-lg font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-copper">
                {g.type}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {g.city} · {g.date}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={prevLabel}
            onClick={() => goTo(active - 1)}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:scale-105 hover:border-copper hover:text-copper active:scale-95"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            onClick={() => goTo(active + 1)}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:scale-105 hover:border-copper hover:text-copper active:scale-95"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          {items.map((g, i) => (
            <button
              key={g.type}
              type="button"
              aria-label={`${goLabel} ${i + 1}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
              className={`dot ${i === active ? "dot-active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
