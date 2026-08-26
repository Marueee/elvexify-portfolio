"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  /** stagger delay in seconds */
  delay?: number;
  /** travel distance in px */
  y?: number;
  className?: string;
  as?: ElementType;
  once?: boolean;
}

/**
 * Scroll-reveal that is safe for SSR / no-JS:
 * - Without JS, content is fully visible (the `.js` class is never added).
 * - With JS, elements start hidden only when `.js` is present, then reveal
 *   on intersection via the `is-visible` class (CSS transition).
 */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  as: Tag = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            if (once) io.unobserve(el);
          } else if (!once) {
            el.classList.remove("is-visible");
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={cn(className)}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-y": `${y}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
