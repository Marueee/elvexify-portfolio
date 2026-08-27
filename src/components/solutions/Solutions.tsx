"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { SOLUTIONS } from "@/data/solutions";

export function Solutions() {
  const reduce = useReducedMotion();

  return (
    <Section id="solutions" label="solutions" className="border-t border-hairline/40">
      <Reveal>
        <SectionHeading
          eyebrow="Solutions"
          title="What We Build."
          description="Six capability areas we take from first conversation to production — each shaped around your problem, not a template."
        />
      </Reveal>

      {/* 6 cards in an even 3 x 2 grid (no empty cell) */}
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((item, i) => (
          <Reveal key={item.index} delay={(i % 3) * 0.05} as="div" className="bg-base">
            <motion.div
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex h-full flex-col gap-5 bg-base p-7 transition-colors duration-300 hover:bg-surface/50 sm:p-8"
            >
              <span className="font-display text-5xl font-semibold leading-none text-transparent [-webkit-text-stroke:1px_rgba(123,139,180,0.4)] transition-all duration-500 group-hover:[-webkit-text-stroke:1px_rgba(79,123,255,0.9)]">
                {item.index}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
              {/* progress tick */}
              <div className="mt-auto flex items-center gap-2 pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-electric transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_12px_2px_rgba(43,91,255,0.6)]" />
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-faint">
                  solution {item.index}
                </span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
