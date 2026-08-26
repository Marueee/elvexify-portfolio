"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { PROJECTS, type Project } from "@/data/projects";
import { cn } from "@/lib/cn";

const ACCENT: Record<Project["accent"], string> = {
  electric: "from-electric/30 via-electric/5 to-transparent",
  violet: "from-violet/30 via-violet/5 to-transparent",
  cyan: "from-cyan/25 via-cyan/5 to-transparent",
};
const ACCENT_DOT: Record<Project["accent"], string> = {
  electric: "bg-electric",
  violet: "bg-violet",
  cyan: "bg-cyan",
};

function ProjectPreview({ project }: { project: Project }) {
  // An abstract, code/architecture-inspired generated preview (no stock images).
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-hairline bg-base/60">
      <div className={cn("absolute inset-0 bg-gradient-to-br", ACCENT[project.accent])} />
      {/* faux window chrome */}
      <div className="absolute left-4 right-4 top-4 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
        <span className="ml-3 h-4 w-40 rounded bg-white/[0.04]" />
      </div>
      {/* faux dashboard / code lines */}
      <div className="absolute inset-x-4 top-16 space-y-2.5">
        {Array.from({ length: 6 }).map((_, r) => (
          <div key={r} className="flex items-center gap-2">
            <span className={cn("h-2 w-2 shrink-0 rounded-full", ACCENT_DOT[project.accent])} />
            <span
              className="h-2 rounded bg-white/[0.07]"
              style={{ width: `${50 + ((r * 37) % 45)}%` }}
            />
          </div>
        ))}
      </div>
      {/* faux chart */}
      <svg className="absolute bottom-4 left-4 right-4 h-24" viewBox="0 0 100 40" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`pg-${project.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={project.accent === "cyan" ? "#22d3ee" : project.accent === "violet" ? "#7b5bff" : "#2b5bff"} stopOpacity="0.5" />
            <stop offset="1" stopColor={project.accent === "cyan" ? "#22d3ee" : project.accent === "violet" ? "#7b5bff" : "#2b5bff"} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 34 Q 12 20 24 26 T 48 18 T 72 22 T 100 10 L100 40 L0 40 Z"
          fill={`url(#pg-${project.id})`}
        />
        <path
          d="M0 34 Q 12 20 24 26 T 48 18 T 72 22 T 100 10"
          fill="none"
          stroke={project.accent === "cyan" ? "#22d3ee" : project.accent === "violet" ? "#7b5bff" : "#4f7bff"}
          strokeWidth="0.8"
          strokeOpacity="0.8"
        />
      </svg>
    </div>
  );
}

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <Section id="projects" label="projects" className="border-t border-hairline/40">
      <Reveal>
        <SectionHeading
          eyebrow="Selected Work"
          title="Engineering In Practice."
          description="Editorial case studies — each one a real class of problem we solve. Replace the placeholders with your engagements when ready."
        />
      </Reveal>

      <div className="mt-14 flex flex-col gap-8">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.04}>
            <motion.article
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group grid gap-8 rounded-3xl border border-hairline bg-surface/30 p-6 transition-colors duration-500 hover:border-electric/40 hover:bg-surface/50 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-10"
            >
              {/* content */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/[0.03] px-3 py-1 font-mono text-[0.62rem] uppercase tracking-widest text-cyan">
                    <span className={cn("h-1.5 w-1.5 rounded-full", ACCENT_DOT[p.accent])} />
                    {p.category}
                  </span>
                  <span className="font-mono text-xs text-faint">{p.client}</span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {p.name}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {p.summary}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[0.6rem] uppercase tracking-widest text-faint">
                      Problem
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {p.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.6rem] uppercase tracking-widest text-faint">
                      Solution
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {p.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-hairline bg-white/[0.02] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-7">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl font-semibold text-gradient-electric sm:text-4xl">
                      {p.metricValue}
                    </span>
                    <span className="max-w-[8rem] text-xs leading-tight text-muted">
                      {p.metricLabel}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-electric-bright">
                    View Case Study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>

              {/* preview with subtle movement */}
              <div className="relative min-h-[220px] lg:min-h-full">
                <motion.div
                  className="h-full min-h-[220px]"
                  whileHover={reduce ? undefined : { scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectPreview project={p} />
                </motion.div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
