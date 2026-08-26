import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className,
  containerClassName,
  label,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  label?: string;
}) {
  return (
    <section
      id={id}
      data-section={label}
      className={cn("relative scroll-mt-24 py-20 sm:py-28 lg:py-36", className)}
    >
      <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
