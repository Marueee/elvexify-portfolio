"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { TEAM, type TeamMember } from "@/data/team";
import { cn } from "@/lib/cn";

const ACCENT_GLOW: Record<TeamMember["accent"], string> = {
  electric: "rgba(43, 91, 255, 0.25)",
  violet: "rgba(123, 91, 255, 0.25)",
  cyan: "rgba(34, 211, 238, 0.22)",
};

const ACCENT_RING: Record<TeamMember["accent"], string> = {
  electric: "hover:border-electric/60 hover:shadow-[0_0_24px_rgba(43,91,255,0.15)]",
  violet: "hover:border-violet/60 hover:shadow-[0_0_24px_rgba(123,91,255,0.15)]",
  cyan: "hover:border-cyan/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]",
};

const ACCENT_TEXT: Record<TeamMember["accent"], string> = {
  electric: "text-electric-bright",
  violet: "text-violet",
  cyan: "text-cyan",
};

const ACCENT_DOT: Record<TeamMember["accent"], string> = {
  electric: "bg-electric shadow-[0_0_8px_rgba(43,91,255,0.8)]",
  violet: "bg-violet shadow-[0_0_8px_rgba(123,91,255,0.8)]",
  cyan: "bg-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]",
};

function MemberCard({ m, i }: { m: TeamMember; i: number }) {
  const reduce = useReducedMotion();

  return (
    <Reveal as="div" delay={i * 0.06}>
      <motion.article
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-3xl border border-hairline bg-surface/30 p-5 transition-all duration-500 hover:bg-surface/50 sm:p-6",
          ACCENT_RING[m.accent]
        )}
      >
        {/* Photo Container */}
        <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-2xl border border-hairline/80 bg-base/80">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${ACCENT_GLOW[m.accent]}, transparent 70%)`,
            }}
          />

          {/* Member Photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={m.image}
            alt={m.name}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Category / Discipline Pill */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline/80 bg-base/85 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink backdrop-blur-md shadow-lg">
              <span className={cn("h-1.5 w-1.5 rounded-full", ACCENT_DOT[m.accent])} />
              {m.initials}
            </span>
          </div>
        </div>

        {/* Member Info */}
        <div className="mt-5 flex flex-1 flex-col">
          <h3 className="font-display text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-white">
            {m.name}
          </h3>
          <p className={cn("mt-1 font-sans text-xs font-semibold uppercase tracking-wider", ACCENT_TEXT[m.accent])}>
            {m.role}
          </p>

          <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
            {m.specialty}
          </p>

          {/* Discipline Badges */}
          <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {m.interests.map((t) => (
              <span
                key={t}
                className="rounded-md border border-hairline bg-base/40 px-2.5 py-1 font-mono text-[0.65rem] text-ink-soft transition-colors group-hover:border-hairline/80 group-hover:text-ink"
              >
                {t}
              </span>
            ))}
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
          eyebrow="Key People"
          title="Six Engineers. One High Standard."
          description="A dedicated engineering collective — spanning full-stack architecture, machine learning, IoT telemetry, and mobile systems."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m, i) => (
          <MemberCard key={m.id} m={m} i={i} />
        ))}
      </div>
    </Section>
  );
}
