"use client";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const PILLARS = [
  { t: "Collaborative engineering", d: "Six engineers, one standard of quality." },
  { t: "User-centered development", d: "Built for the people who actually use it." },
  { t: "Practical problem solving", d: "Technology in service of a real outcome." },
  { t: "Continuous learning", d: "We invest in staying ahead of the curve." },
  { t: "Quality", d: "Clean, tested and maintainable by default." },
  { t: "Innovation", d: "New tools applied where they earn their place." },
];

export function About() {
  return (
    <Section id="about" label="about" className="border-t border-hairline/40">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="About Elvexify"
            title="Built By Engineers. Driven By Problems Worth Solving."
            description="Elvexify was created by a team of 7 developers who believe technology should solve real problems — not exist for its own sake. We combine deep engineering with genuine care for the people our software serves."
          />

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal
                key={p.t}
                delay={i * 0.05}
                className="group bg-base p-5 transition-colors hover:bg-surface/60"
              >
                <p className="font-display text-sm font-semibold text-ink">{p.t}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Visual: stacked engineer cards / stat block */}
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-grid bg-grid-fade opacity-50" />
            <div className="rounded-3xl border border-hairline bg-surface/40 p-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display text-6xl font-semibold text-gradient-electric">
                    6
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-faint">
                    founding engineers
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-6xl font-semibold text-ink">∞</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-faint">
                    problems to solve
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Understand the real problem",
                  "Design for the people using it",
                  "Engineer with discipline",
                  "Ship, measure, improve",
                ].map((line, i) => (
                  <div
                    key={line}
                    className="flex items-center gap-3 rounded-xl border border-hairline bg-[rgb(var(--c-tint)/0.02)] px-4 py-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-electric/10 font-mono text-xs text-electric-bright">
                      {i + 1}
                    </span>
                    <span className="text-sm text-ink-soft">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
