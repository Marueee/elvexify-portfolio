"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { TEAM, type TeamMember } from "@/data/team";
import { cn } from "@/lib/cn";

const ACCENT_BG: Record<TeamMember["accent"], string> = {
  electric: "from-electric/40 via-electric/10 to-transparent",
  violet: "from-violet/40 via-violet/10 to-transparent",
  cyan: "from-cyan/35 via-cyan/10 to-transparent",
};
const ACCENT_RING: Record<TeamMember["accent"], string> = {
  electric: "group-hover:border-electric/60",
  violet: "group-hover:border-violet/60",
  cyan: "group-hover:border-cyan/60",
};
const ACCENT_TEXT: Record<TeamMember["accent"], string> = {
  electric: "text-electric-bright",
  violet: "text-violet",
  cyan: "text-cyan",
};

function MemberTile({ m, i }: { m: TeamMember; i: number }) {
  const reduce = useReducedMotion();
  return (
    <Reveal as="div" delay={(i % 4) * 0.05}>
      <motion.article
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-hairline bg-surface/30 p-6 transition-colors duration-300 hover:bg-surface/50",
          ACCENT_RING[m.accent]
        )}
      >
        {/* photo placeholder */}
        <div
          className={cn(
            "relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-hairline bg-gradient-to-br",
            ACCENT_BG[m.accent]
          )}
        >
          <span className="font-display text-5xl font-semibold text-ink/90 transition-transform duration-500 group-hover:scale-105">
            {m.initials}
          </span>
          {/* grid overlay */}
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <span className="absolute right-3 top-3 rounded-full border border-hairline bg-base/60 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-widest text-faint backdrop-blur">
            photo
          </span>
        </div>

        {/* name + role (always visible) */}
        <h3 className="mt-5 font-display text-lg font-semibold text-ink">
          {m.name}
        </h3>
        <p className={cn("mt-1 text-sm font-medium", ACCENT_TEXT[m.accent])}>
          {m.role}
        </p>

        {/* specialty + tech tags reveal on hover */}
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-2 text-sm leading-relaxed text-muted">{m.specialty}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {m.interests.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-hairline bg-[rgb(var(--c-tint)/0.02)] px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Team() {
  return (
    <Section id="team" label="team" className="border-t border-hairline/40">
      <Reveal>
        <SectionHeading
          eyebrow="The Team"
          title="Seven Engineers, One Standard."
          description="A collaborative software engineering team — not a solo freelancer. Every member brings a discipline; together they ship complete products."
        />
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {TEAM.map((m, i) => (
          <MemberTile key={m.id} m={m} i={i} />
        ))}
      </div>
    </Section>
  );
}
