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

export function Process() {
  return (
    <Section id="process" label="process" className="border-t border-hairline/40">
      <Reveal>
        <SectionHeading
          eyebrow="How We Engineer"
          title="A Disciplined Approach To Software."
          description="Five commitments that shape how we take a problem from ambiguity to a system people rely on."
        />
      </Reveal>

      <div className="mt-16">
        {/* Five even columns of process steps */}
        <ol className="relative grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.04} as="li" className="bg-base">
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
                    <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                    Step {step.index}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Full-width Evolve card */}
        <div className="group relative mt-5 flex flex-col gap-4 overflow-hidden rounded-3xl border border-hairline bg-base p-7 transition-colors duration-300 hover:bg-surface/60 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <span className="pointer-events-none absolute -left-1 top-0 select-none font-display text-7xl font-semibold text-hairline-soft">
            {EVOLVE.index}
          </span>
          <div className="relative">
            <h3 className="font-display text-xl font-semibold text-ink">
              {EVOLVE.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {EVOLVE.description}
            </p>
          </div>
          <span className="relative flex shrink-0 items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            Always Iterating
          </span>
        </div>
      </div>
    </Section>
  );
}
