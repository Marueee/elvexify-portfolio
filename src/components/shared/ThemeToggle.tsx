"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Light/dark mode toggle.
 * - Default theme is light; dark mode adds `.dark` to <html>.
 * - Choice is persisted in localStorage ('elvexify-theme') and read by the
 *   no-FOUC script in layout.tsx so the correct theme paints immediately.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [light, setLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLight(document.documentElement.classList.contains("light"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    const root = document.documentElement;
    root.classList.toggle("light", next);
    try {
      localStorage.setItem("elvexify-theme", next ? "light" : "dark");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={light}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink-soft transition-colors hover:border-electric/60 hover:text-ink",
        className
      )}
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch. */}
      {mounted && light ? (
        <Moon className="h-[1.15rem] w-[1.15rem]" />
      ) : (
        <Sun className="h-[1.15rem] w-[1.15rem]" />
      )}
    </button>
  );
}
