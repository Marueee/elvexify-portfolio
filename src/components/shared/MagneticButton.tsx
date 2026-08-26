"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/cn";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  ariaLabel?: string;
}

const VARIANTS: Record<string, string> = {
  primary:
    "bg-electric text-white shadow-[0_14px_40px_-12px_rgba(43,91,255,0.7)] hover:bg-electric-bright",
  outline:
    "border border-hairline text-ink hover:border-electric/70 hover:text-white bg-white/[0.02]",
  ghost: "text-ink-soft hover:text-white bg-white/[0.03] hover:bg-white/[0.06]",
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  ariaLabel,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18 });
  const y = useSpring(my, { stiffness: 220, damping: 18 });

  function handleMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.4);
  }
  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      aria-label={ariaLabel}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 sm:px-7 sm:py-3.5",
        VARIANTS[variant],
        className
      )}
    >
      {children}
    </motion.a>
  );
}
