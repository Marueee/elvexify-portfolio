"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight, Sparkles, Layers, Cpu, Globe, Smartphone } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { PROJECTS, type Project } from "@/data/projects";
import { cn } from "@/lib/cn";

const FILTERS = [
  { id: "all", label: "All Systems", icon: Layers },
  { id: "ai-ml", label: "AI & Machine Learning", icon: Sparkles },
  { id: "iot", label: "IoT & Wearables", icon: Cpu },
  { id: "web", label: "Web Platforms", icon: Globe },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

const ACCENT_GLOW: Record<Project["accent"], string> = {
  electric: "rgba(43, 91, 255, 0.25)",
  violet: "rgba(123, 91, 255, 0.25)",
  cyan: "rgba(34, 211, 238, 0.22)",
};

const ACCENT_DOT: Record<Project["accent"], string> = {
  electric: "bg-electric shadow-[0_0_8px_rgba(43,91,255,0.8)]",
  violet: "bg-violet shadow-[0_0_8px_rgba(123,91,255,0.8)]",
  cyan: "bg-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]",
};

function ProjectImagePreview({ project }: { project: Project }) {
  const { previewType, coverImage, secondaryImage, name } = project;

  if (previewType === "web-dashboard") {
    return (
      <div className="relative flex h-full min-h-[280px] w-full flex-col overflow-hidden rounded-2xl border border-hairline/80 bg-base/80 shadow-2xl transition-all duration-500 group-hover:border-electric/40">
        {/* Browser Top Bar */}
        <div className="flex items-center gap-2 border-b border-hairline/80 bg-surface/80 px-4 py-2.5 backdrop-blur-md">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="mx-auto flex h-5 w-48 max-w-full items-center justify-center rounded-md bg-base/60 px-2 font-mono text-[0.65rem] text-muted/70">
            https://{project.id}.elvexify.app
          </div>
          {project.logoUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.logoUrl}
              alt={`${name} logo`}
              className="h-4 w-auto object-contain opacity-70"
            />
          )}
        </div>

        {/* Screenshot Container */}
        <div className="relative flex-1 overflow-hidden bg-base/50 p-2 sm:p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverImage}
            alt={`${name} Dashboard`}
            className="h-full w-full rounded-lg object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>
    );
  }

  if (previewType === "multi-mobile") {
    return (
      <div className="relative flex h-full min-h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border border-hairline/80 bg-base/60 p-4 sm:p-6">
        {/* Ambient Glow */}
        <div
          className="absolute inset-0 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: `radial-gradient(circle at 50% 50%, ${ACCENT_GLOW[project.accent]}, transparent 70%)` }}
        />

        {/* Dual Phone Showcase */}
        <div className="relative flex w-full max-w-xs items-center justify-center gap-3 sm:gap-4">
          {/* Main Primary Phone */}
          <div className="relative z-10 w-[48%] overflow-hidden rounded-2xl border-2 border-hairline bg-surface/90 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
            <div className="aspect-[9/19] w-full overflow-hidden bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={coverImage}
                alt={`${name} Screen 1`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Secondary Layered Phone */}
          {secondaryImage && (
            <div className="relative z-0 w-[45%] overflow-hidden rounded-2xl border border-hairline/70 bg-surface/80 opacity-90 shadow-xl transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1">
              <div className="aspect-[9/19] w-full overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={secondaryImage}
                  alt={`${name} Screen 2`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Project Logo Badge */}
        {project.logoUrl && (
          <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 rounded-full border border-hairline/80 bg-surface/90 px-3 py-1 backdrop-blur-md shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.logoUrl}
              alt={`${name} brand`}
              className="h-4 w-auto object-contain"
            />
          </div>
        )}
      </div>
    );
  }

  if (previewType === "device-mockup") {
    return (
      <div className="relative flex h-full min-h-[280px] w-full items-center justify-center overflow-hidden rounded-2xl border border-hairline/80 bg-base/70 p-3 sm:p-4">
        <div
          className="absolute inset-0 opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
          style={{ background: `radial-gradient(circle at 50% 50%, ${ACCENT_GLOW[project.accent]}, transparent 70%)` }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={coverImage}
          alt={`${name} Multi-Device Mockup`}
          className="relative z-10 max-h-[300px] w-auto max-w-full rounded-xl object-contain shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {project.logoUrl && (
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full border border-hairline/80 bg-surface/90 px-3 py-1 backdrop-blur-md shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.logoUrl}
              alt={`${name} brand`}
              className="h-4 w-auto object-contain"
            />
          </div>
        )}
      </div>
    );
  }

  // default single mobile device with side badge
  return (
    <div className="relative flex h-full min-h-[280px] w-full items-center justify-center overflow-hidden rounded-2xl border border-hairline/80 bg-base/60 p-4">
      <div
        className="absolute inset-0 opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: `radial-gradient(circle at 50% 50%, ${ACCENT_GLOW[project.accent]}, transparent 70%)` }}
      />
      <div className="relative z-10 w-full max-w-[200px] overflow-hidden rounded-2xl border-2 border-hairline bg-surface/90 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
        <div className="aspect-[9/19] w-full overflow-hidden bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverImage}
            alt={`${name} App Screen`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {project.logoUrl && (
        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 rounded-full border border-hairline/80 bg-surface/90 px-3 py-1 backdrop-blur-md shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.logoUrl}
            alt={`${name} brand`}
            className="h-4 w-auto object-contain"
          />
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<FilterId>("all");
  const reduce = useReducedMotion();

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => {
          if (filter === "ai-ml") return p.filterCategory === "ai-ml" || p.id === "waterguard";
          if (filter === "iot") return p.filterCategory === "iot";
          if (filter === "web") return p.filterCategory === "web";
          if (filter === "mobile")
            return (
              p.filterCategory === "mobile" ||
              p.filterCategory === "ai-ml" ||
              p.filterCategory === "iot"
            );
          return true;
        });

  return (
    <Section id="projects" label="projects" className="border-t border-hairline/40">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Deployments"
          title="Engineered Solutions. Real Impact."
          description="A showcase of enterprise platforms, AI-driven diagnostics, and intelligent IoT systems architected by Elvexify."
        />
      </Reveal>

      {/* Filter Tabs */}
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {FILTERS.map((f) => {
            const Icon = f.icon;
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  "relative inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs transition-all duration-300",
                  active
                    ? "text-white shadow-lg"
                    : "border border-hairline bg-surface/30 text-muted hover:border-hairline hover:text-ink"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter-active"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-electric to-violet ring-1 ring-white/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span>{f.label}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Projects List */}
      <div className="mt-12 flex flex-col gap-10 sm:gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => (
            <motion.article
              key={p.id}
              layout
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group grid gap-8 rounded-3xl border border-hairline bg-surface/30 p-6 transition-all duration-500 hover:border-electric/40 hover:bg-surface/50 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-10"
            >
              {/* Content Column */}
              <div className="flex flex-col">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-base/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink">
                    <span className={cn("h-1.5 w-1.5 rounded-full", ACCENT_DOT[p.accent])} />
                    {p.category}
                  </span>
                  <span className="font-mono text-xs text-muted">• {p.client}</span>
                </div>

                {/* Title & Subtitle */}
                <div className="mt-5">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-display text-sm font-medium text-electric-bright sm:text-base">
                    {p.fullTitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {p.summary}
                </p>

                {/* Problem vs Solution Grid */}
                <div className="mt-6 grid gap-4 rounded-2xl border border-hairline/60 bg-base/40 p-4 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-widest text-rose/90">
                      Challenge
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft sm:text-[0.8rem]">
                      {p.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-widest text-cyan">
                      Engineered Solution
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft sm:text-[0.8rem]">
                      {p.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-hairline bg-base/50 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink-soft transition-colors hover:border-electric/50 hover:text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Metric & CTA Footer */}
                <div className="mt-auto flex items-center justify-between border-t border-hairline/50 pt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl font-bold text-gradient-electric sm:text-4xl">
                      {p.metricValue}
                    </span>
                    <span className="max-w-[9rem] font-sans text-xs leading-tight text-muted">
                      {p.metricLabel}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface/50 px-4 py-2 text-xs font-medium text-ink transition-all duration-300 hover:border-electric/70 hover:bg-electric hover:text-white sm:text-sm"
                  >
                    Discuss Solution
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Preview Column with Real Screenshots */}
              <div className="relative flex min-h-[260px] items-center justify-center lg:min-h-full">
                <ProjectImagePreview project={p} />
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
