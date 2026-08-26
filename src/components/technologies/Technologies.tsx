"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { TECH_CATEGORIES, ALL_TECH } from "@/data/technologies";

export function Technologies() {
  const reduce = useReducedMotion();

  return (
    <Section id="technologies" label="technologies" className="border-t border-hairline/40">
      <Reveal>
        <SectionHeading
          eyebrow="Technology"
          title="An Ecosystem, Not A Wall Of Logos."
          description="We choose tools by fit, not fashion — and connect them into coherent systems across the stack."
        />
      </Reveal>

      {/* category clusters */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TECH_CATEGORIES.map((cat, i) => (
          <Reveal key={cat.id} delay={(i % 3) * 0.06}>
            <motion.div
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-full overflow-hidden rounded-2xl border border-hairline bg-surface/40 p-6 transition-colors duration-300 hover:border-electric/40 hover:bg-surface/60 sm:p-7"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-electric/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-electric-bright">
                {cat.label}
              </span>
              <p className="mt-2 text-sm text-muted">{cat.note}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-hairline bg-white/[0.02] px-3 py-1.5 text-sm text-ink-soft transition-colors duration-300 group-hover:border-electric/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* connectivity strip */}
      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-hairline bg-base/50 px-5 py-7 sm:gap-3 sm:px-8">
          {ALL_TECH.map((t, i) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 font-mono text-xs text-faint"
            >
              <span className="inline-flex rounded-md border border-hairline bg-white/[0.02] px-2.5 py-1.5 text-ink-soft">
                {t}
              </span>
              {i < ALL_TECH.length - 1 && (
                <span className="text-electric/40" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
