import type { ElementType, ReactNode } from "react";
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

  return (
    <As
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${base[dir]} ${inView ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </As>
  );
}
