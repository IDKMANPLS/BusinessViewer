import { useEffect, useRef, useState } from "react";

/** True once the element has scrolled into view (fires once). */
export function useInView<T extends HTMLElement = HTMLDivElement>(margin = "-10%") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: `0px 0px ${margin} 0px`, threshold: 0.12 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [margin]);

  return { ref, inView };
}
