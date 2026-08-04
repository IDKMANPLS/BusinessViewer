import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

/** Re-mounts on every navigation so the page-load reveal animation replays. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
