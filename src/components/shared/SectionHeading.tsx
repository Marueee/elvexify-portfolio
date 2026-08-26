import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-electric-bright">
          <span className="h-px w-7 bg-electric/60" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-balance text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl md:text-[2.85rem]">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
