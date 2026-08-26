"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { VALUES } from "@/data/values";

export function Values() {
  const reduce = useReducedMotion();

  return (
    <Section id="values" label="values" className="border-t border-hairline/40">
      <Reveal>
        <SectionHeading
          eyebrow="Principles"
          title="What We Hold To."
          description="Five commitments that guide how we work — from the first call to the thousandth deploy."
        />
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-5">
        {VALUES.map((v, i) => (
          <Reveal key={v.index} delay={i * 0.05} as="div" className="bg-base">
            <motion.div
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex h-full flex-col gap-4 bg-base p-7 transition-colors duration-300 hover:bg-surface/50"
            >
              <span className="font-display text-4xl font-semibold text-transparent [-webkit-text-stroke:1px_rgba(123,139,180,0.5)] transition-all duration-500 group-hover:[-webkit-text-stroke:1px_rgba(34,211,238,0.85)]">
                {v.index}
              </span>
              <h3 className="font-display text-lg font-semibold text-ink">
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{v.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
