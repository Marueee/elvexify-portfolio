"use client";

import { ArrowRight } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/shared/Reveal";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { SITE } from "@/lib/site";

export function Cta() {
  return (
    <Section id="contact" label="contact" className="border-t border-hairline/40">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[2rem] border border-hairline bg-gradient-to-br from-surface/70 via-base to-base px-7 py-16 sm:px-14 sm:py-24"
        >
          {/* glow + grid */}
          <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-electric/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-violet/12 blur-[100px]" />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/[0.03] px-4 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-cyan">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan" />
              Let&apos;s build
            </span>

            <h2 className="mt-7 font-display text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Have a problem
              <br />
              <span className="text-gradient-electric">worth solving?</span>
            </h2>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Let&apos;s turn your idea, workflow, or business challenge into a
              digital solution. Tell us what you&apos;re working on — we&apos;ll
              bring the engineering.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href={`mailto:${SITE.email}`} variant="primary">
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton href="#projects" variant="outline">
                View Our Work
              </MagneticButton>
            </div>

            <a
              href={`mailto:${SITE.email}`}
              className="mt-8 font-mono text-sm text-ink-soft underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {SITE.email}
            </a>
          </div>
        </div>
        </Reveal>
      </Section>
  );
}
