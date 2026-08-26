"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { PROCESS } from "@/data/values";

export function Solutions() {
  const reduce = useReducedMotion();

  return (
    <Section id="solutions" label="solutions" className="border-t border-hairline/40">
      <Reveal>
        <SectionHeading
          eyebrow="How We Engineer"
          title="A Disciplined Approach To Software."
          description="Five commitments that shape how we take a problem from ambiguity to a system people rely on."
        />
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline lg:grid-cols-5">
        {PROCESS.slice(0, 5).map((step, i) => (
          <Reveal key={step.index} delay={i * 0.05} as="div" className="bg-base">
            <motion.div
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex h-full flex-col gap-5 bg-base p-7 transition-colors duration-300 hover:bg-surface/50 sm:p-8"
            >
              <span className="font-display text-5xl font-semibold leading-none text-transparent [-webkit-text-stroke:1px_rgba(123,139,180,0.4)] transition-all duration-500 group-hover:[-webkit-text-stroke:1px_rgba(79,123,255,0.9)]">
                {step.index}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
              {/* progress tick */}
              <div className="mt-auto flex items-center gap-2 pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-electric transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_12px_2px_rgba(43,91,255,0.6)]" />
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-faint">
                  step {step.index}
                </span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Evolve strip */}
      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-col items-start gap-6 rounded-3xl border border-hairline bg-gradient-to-r from-surface/60 to-base p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <span className="font-display text-4xl font-semibold text-transparent [-webkit-text-stroke:1px_rgba(123,139,180,0.5)] sm:text-5xl">
              05
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
              Evolve — continuously.
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
              The launch is the start, not the finish. We measure, learn and
              improve the system from real-world feedback.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-cyan">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan" />
            Always iterating
          </span>
        </div>
      </Reveal>
    </Section>
  );
}
