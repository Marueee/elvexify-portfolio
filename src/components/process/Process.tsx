"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { PROCESS } from "@/data/values";

export function Process() {
  const reduce = useReducedMotion();

  return (
    <Section id="process" label="process" className="border-t border-hairline/40">
      <Reveal>
        <SectionHeading
          eyebrow="Process"
          title="From Ambiguity To Production."
          description="A connected path through discovery, design, build and beyond — every step deliberate, every handoff clean."
        />
      </Reveal>

      <div className="relative mt-16">
        {/* connector line */}
        <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-electric/0 via-hairline to-electric/0 lg:block" />

        <ol className="relative grid gap-10 lg:grid-cols-7 lg:gap-4">
          {PROCESS.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.04} as="li" className="lg:px-1">
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                className="group flex flex-col items-start gap-4 lg:items-center lg:text-center"
              >
                <span className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-hairline bg-base font-display text-lg font-semibold text-electric-bright transition-all duration-300 group-hover:border-electric/70 group-hover:bg-electric/10 group-hover:shadow-[0_0_24px_-4px_rgba(43,91,255,0.6)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="lg:text-center">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted lg:mx-auto">
                    {step.description}
                  </p>
                </div>
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-faint lg:block">
                  {step.index}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </ol>

        {/* completion badge */}
        <Reveal delay={0.2}>
          <div className="mt-14 flex items-center justify-center gap-3 rounded-full border border-cyan/30 bg-cyan/5 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-cyan">
            <Check className="h-4 w-4" />
            Continuous improvement loop
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
