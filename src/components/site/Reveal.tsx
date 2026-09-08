import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/lib/use-in-view";

type Dir = "left" | "right" | "up";

const base: Record<Dir, string> = {
  left: "reveal-left",
  right: "reveal-right",
  up: "reveal-up",
};

/** Slides its children in from a direction once scrolled into view. */
export function Reveal({
  children,
  dir = "up",
  delay = 0,
  as: As = "div",
  className = "",
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  if (inView) {
    style.opacity = 1;
    style.transform = "none";
  }

  return (
    <As ref={ref} style={style} className={`${base[dir]} ${className}`}>
      {children}
    </As>
  );
}
