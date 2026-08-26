import { cn } from "@/lib/cn";

/**
 * Brand logo — uses cropped high-resolution Elvexify PNG assets from `public/logo/`.
 *
 * - `showWordmark=true`  → horizontal lockup: vibrant eX icon + crisp "ELVEXIFY" wordmark.
 * - `showWordmark=false` → icon mark only (the eX emblem).
 * - `variant` allows selecting "white" (default, optimized for dark mode), "color", "light", or "stacked".
 */
export interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: number;
  variant?: "white" | "color" | "light" | "stacked";
  alt?: string;
}

export function Logo({
  className,
  showWordmark = true,
  size = 36,
  variant = "white",
  alt = "Elvexify",
}: LogoProps) {
  if (!showWordmark) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo/elvexify-icon.png"
        alt={alt}
        style={size ? { height: `${size}px` } : undefined}
        className={cn("h-8 w-auto shrink-0 object-contain", className)}
      />
    );
  }

  const src =
    variant === "stacked"
      ? "/logo/elvexify-logo-stacked.png"
      : variant === "color"
      ? "/logo/elvexify-logo-color.png"
      : variant === "light"
      ? "/logo/elvexify-logo-light.png"
      : "/logo/elvexify-logo.png";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={size ? { height: `${size}px` } : undefined}
      className={cn("h-8 sm:h-9 w-auto shrink-0 object-contain", className)}
    />
  );
}
