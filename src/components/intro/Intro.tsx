"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { INTRO_FLOW } from "@/data/values";

export function Intro() {
  const reduce = useReducedMotion();

  return (
    <Section id="intro" label="intro" className="border-t border-hairline/40">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Turning Complex Problems Into Digital Solutions."
            description="We start from the problem itself — not the technology. Before a single line of code is written, we work to understand the people, the process and the constraints. Then we design and build software that earns its place."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {["Discovery-led", "Engineering-first", "Outcome-focused"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-hairline bg-white/[0.02] px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Animated process flow */}
        <Reveal delay={0.1}>
          <div className="relative rounded-2xl border border-hairline bg-surface/40 p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-grid bg-grid-fade opacity-40" />
            <ol className="relative flex flex-col gap-0">
              {INTRO_FLOW.map((step, i) => (
                <li key={step} className="relative">
                  <motion.div
                    initial={reduce ? { opacity: 0 } : { opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center gap-4 rounded-xl px-3 py-3.5 transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-base font-mono text-sm text-electric-bright transition-colors group-hover:border-electric/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-medium text-ink">
                      {step}
                    </span>
                    {i === 0 && (
                      <span className="ml-auto rounded-full bg-rose/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-rose">
                        input
                      </span>
                    )}
                    {i === INTRO_FLOW.length - 1 && (
                      <span className="ml-auto rounded-full bg-cyan/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-cyan">
                        outcome
                      </span>
                    )}
                  </motion.div>
                  {i < INTRO_FLOW.length - 1 && (
                    <div className="ml-[27px] h-6 w-px bg-gradient-to-b from-electric/60 to-transparent" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
