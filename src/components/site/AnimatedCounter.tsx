import { useEffect, useState } from "react";
import { useInView } from "@/lib/use-in-view";

/**
 * Counts up from 0 to `value` the first time it scrolls into view.
 * Non-numeric stats can pass `text` to stay static.
 */
export function AnimatedCounter({
  value,
  text,
  suffix = "",
  duration = 1400,
  className = "",
}: {
  value?: number;
  text?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>("-5%");
  const [n, setN] = useState(0);


  useEffect(() => {
    if (!inView || value === undefined) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  // Text stats (A+, Free) get a matching entrance instead of a count-up.
  if (text !== undefined) {
    return (
      <span ref={ref} className={className}>
        <span className={inView ? "stat-pop" : "opacity-0"}>{text}</span>
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      <span className={inView ? "stat-pop" : ""}>{`${n}${suffix}`}</span>
    </span>
  );
}

/** Thin bar that fills to `percent` when scrolled into view. */
export function Meter({ percent, className = "" }: { percent: number; className?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>("-5%");

  return (
    <span ref={ref} className={`meter ${className}`}>
      <span className="meter-fill" style={{ width: inView ? `${percent}%` : "0%" }} />
    </span>
  );
}
