"use client";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { PROCESS } from "@/data/values";

const EVOLVE = {
  index: "06",
  title: "Evolve — continuously.",
  description:
    "The launch is the start, not the finish. We measure, learn and improve the system from real-world feedback.",
};

const STEPS = [
  ...PROCESS,
  { index: EVOLVE.index, title: EVOLVE.title, description: EVOLVE.description },
];

export function Process() {
  return (
    <Section id="process" label="process" className="border-t border-hairline/40">
      <Reveal>
        <SectionHeading
          eyebrow="How We Engineer"
          title="A Disciplined Approach To Software."
          description="Six commitments that shape how we take a problem from ambiguity to a system people rely on."
        />
      </Reveal>

      {/* Even 3 x 2 grid — all six cards equal, no empty cell */}
      <ol className="relative mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((step, i) => (
          <Reveal key={step.index} delay={(i % 3) * 0.04} as="li" className="bg-base">
            <div className="group relative h-full p-7 transition-colors duration-300 hover:bg-surface/60 sm:p-8">
              <span className="pointer-events-none absolute right-4 top-2 select-none font-display text-6xl font-semibold text-hairline-soft">
                {step.index}
              </span>
              <div className="relative">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
                <span className="mt-6 flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-widest text-faint">
                  <span
                    className={
                      step.index === EVOLVE.index
                        ? "h-1.5 w-1.5 rounded-full bg-cyan"
                        : "h-1.5 w-1.5 rounded-full bg-electric"
                    }
                  />
                  {step.index === EVOLVE.index ? "Always Iterating" : `Step ${step.index}`}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
