import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { useLang } from "@/lib/i18n";

/**
 * Re-mounts on every navigation so the page-load reveal animation replays,
 * and gently reveals each section as it scrolls into view.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // The first block is already covered by the page-enter animation.
    const targets = Array.from(root.querySelectorAll<HTMLElement>("section")).slice(1);
    targets.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("reveal-in");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname, lang]);

  return (
    <div key={`${pathname}-${lang}`} ref={ref} className="page-enter">
      {children}
    </div>
  );
}
