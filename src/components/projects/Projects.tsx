"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Cpu,
  Globe,
  Smartphone,
  X,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { PROJECTS, type Project } from "@/data/projects";
import { cn } from "@/lib/cn";

const FILTERS = [
  { id: "all", label: "All Systems", icon: Layers },
  { id: "ai-ml", label: "AI & ML", icon: Sparkles },
  { id: "iot", label: "IoT & Wearables", icon: Cpu },
  { id: "web", label: "Web Platforms", icon: Globe },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

const ACCENT_GLOW: Record<Project["accent"], string> = {
  electric: "rgba(43, 91, 255, 0.3)",
  violet: "rgba(123, 91, 255, 0.3)",
  cyan: "rgba(34, 211, 238, 0.25)",
};

const ACCENT_DOT: Record<Project["accent"], string> = {
  electric: "bg-electric shadow-[0_0_8px_rgba(43,91,255,0.8)]",
  violet: "bg-violet shadow-[0_0_8px_rgba(123,91,255,0.8)]",
  cyan: "bg-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]",
};

function ProjectCardThumbnail({ project }: { project: Project }) {
  const { previewType, coverImage, secondaryImage, name } = project;

  if (previewType === "web-dashboard") {
    return (
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-hairline/80 bg-base/90 shadow-inner">
        {/* Window Chrome */}
        <div className="flex items-center justify-between border-b border-hairline/60 bg-surface/80 px-3 py-2 backdrop-blur-md">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose/70" />
            <span className="h-2 w-2 rounded-full bg-amber-400/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
          </div>
          <span className="font-mono text-[0.6rem] text-muted/60">{project.id}.app</span>
          {project.logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.logoUrl} alt="" className="h-3.5 w-auto object-contain opacity-70" />
          ) : <span className="w-3.5" />}
        </div>
        <div className="relative flex-1 overflow-hidden bg-base/40 p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverImage}
            alt={`${name} Screenshot`}
            className="h-full w-full rounded-md object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  if (previewType === "multi-mobile") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-hairline/80 bg-base/60 p-3">
        <div
          className="absolute inset-0 opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: `radial-gradient(circle at 50% 50%, ${ACCENT_GLOW[project.accent]}, transparent 70%)` }}
        />
        <div className="relative flex w-full max-w-[190px] items-center justify-center gap-2">
          <div className="relative z-10 w-[52%] overflow-hidden rounded-xl border border-hairline bg-surface/90 shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
            <div className="aspect-[9/19] w-full overflow-hidden bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={coverImage} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
          {secondaryImage && (
            <div className="relative z-0 w-[46%] overflow-hidden rounded-xl border border-hairline/60 bg-surface/80 opacity-85 shadow-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1">
              <div className="aspect-[9/19] w-full overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={secondaryImage} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (previewType === "device-mockup") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-hairline/80 bg-base/60 p-3">
        <div
          className="absolute inset-0 opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-60"
          style={{ background: `radial-gradient(circle at 50% 50%, ${ACCENT_GLOW[project.accent]}, transparent 70%)` }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={coverImage}
          alt={`${name} Mockup`}
          className="relative z-10 max-h-[190px] w-auto max-w-full rounded-lg object-contain shadow-xl transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-hairline/80 bg-base/60 p-3">
      <div
        className="absolute inset-0 opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: `radial-gradient(circle at 50% 50%, ${ACCENT_GLOW[project.accent]}, transparent 70%)` }}
      />
      <div className="relative z-10 w-[45%] max-w-[130px] overflow-hidden rounded-xl border border-hairline bg-surface/90 shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
        <div className="aspect-[9/19] w-full overflow-hidden bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={coverImage} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState<string>(project.coverImage);
  const reduce = useReducedMotion();

  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const images = [
    { src: project.coverImage, label: "Primary Interface" },
    ...(project.secondaryImage
      ? [{ src: project.secondaryImage, label: "Analytics / Secondary View" }]
      : []),
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-base/80 backdrop-blur-xl"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-hairline bg-surface/95 shadow-2xl backdrop-blur-2xl"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-hairline/80 px-6 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-base/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink">
              <span className={cn("h-1.5 w-1.5 rounded-full", ACCENT_DOT[project.accent])} />
              {project.category}
            </span>
            <span className="hidden font-mono text-xs text-muted sm:inline">• {project.client}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-base/50 text-muted transition-colors hover:border-rose/50 hover:bg-rose/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
            {/* Visual Showcase (Left Column) */}
            <div className="flex flex-col gap-4">
              {/* Main Expanded Image Stage */}
              <div className="relative flex min-h-[300px] sm:min-h-[380px] w-full items-center justify-center overflow-hidden rounded-2xl border border-hairline bg-base/80 p-4 sm:p-6">
                <div
                  className="absolute inset-0 opacity-40 blur-3xl"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${ACCENT_GLOW[project.accent]}, transparent 70%)`,
                  }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="relative z-10 flex h-full w-full items-center justify-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeImage}
                      alt={`${project.name} preview`}
                      className="max-h-[380px] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                    />
                  </motion.div>
                </AnimatePresence>

                {project.logoUrl && (
                  <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full border border-hairline/80 bg-surface/90 px-3.5 py-1.5 backdrop-blur-md shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.logoUrl}
                      alt={`${project.name} logo`}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Multi-screen selector tabs if secondary image exists */}
              {images.length > 1 && (
                <div className="flex items-center gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setActiveImage(img.src)}
                      className={cn(
                        "flex flex-1 items-center gap-2 rounded-xl border p-2 text-left font-mono text-xs transition-all",
                        activeImage === img.src
                          ? "border-electric bg-electric/10 text-white"
                          : "border-hairline bg-base/40 text-muted hover:border-hairline hover:text-ink"
                      )}
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-surface text-[0.65rem] font-bold text-electric-bright">
                        {idx + 1}
                      </span>
                      <span className="truncate">{img.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Highlight Metric Card */}
              <div className="flex items-center justify-between rounded-2xl border border-hairline bg-base/40 p-5">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-faint">
                    Key Metric & Outcome
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink-soft">
                    {project.result}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl font-bold text-gradient-electric sm:text-4xl">
                    {project.metricValue}
                  </span>
                  <p className="font-mono text-[0.65rem] text-muted">
                    {project.metricLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Content (Right Column) */}
            <div className="flex flex-col">
              <div>
                <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-1 font-display text-base font-medium text-electric-bright">
                  {project.fullTitle}
                </p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {project.summary}
              </p>

              {/* Challenge vs Solution Breakdown */}
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-hairline/70 bg-base/40 p-4">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-rose/90">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>The Challenge</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                    {project.problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-hairline/70 bg-base/40 p-4">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Engineered Architecture</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Complete Tech Stack */}
              <div className="mt-6">
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-faint">
                  Technology Stack & Tools
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-hairline bg-base/60 px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-electric/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-hairline/60 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted">
                  Want to engineer a similar solution for your operations?
                </p>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-electric px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-electric-bright"
                >
                  Discuss System
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
          description="Explore our flagship enterprise platforms, AI-driven diagnostics, and intelligent IoT systems. Click any card to expand the full technical case study."
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

      {/* Compact Grid Showcase */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => (
            <motion.article
              key={p.id}
              layout
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -6 }}
              onClick={() => setSelectedProject(p)}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-hairline bg-surface/30 p-5 transition-all duration-500 hover:border-electric/50 hover:bg-surface/60 hover:shadow-2xl sm:p-6"
            >
              {/* Visual Thumbnail Area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <ProjectCardThumbnail project={p} />

                {/* Overlay prompt on hover */}
                <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-base/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-electric/90 px-4 py-2 font-mono text-xs font-medium text-white shadow-xl">
                    Explore Case Study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Header & Content */}
              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-base/50 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-widest text-ink">
                    <span className={cn("h-1.5 w-1.5 rounded-full", ACCENT_DOT[p.accent])} />
                    {p.category}
                  </span>

                  <span className="font-display text-sm font-bold text-gradient-electric">
                    {p.metricValue}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold text-ink transition-colors group-hover:text-electric-bright sm:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-1 font-sans text-xs font-medium text-ink-soft line-clamp-1">
                  {p.fullTitle}
                </p>

                <p className="mt-2.5 text-xs leading-relaxed text-muted line-clamp-2">
                  {p.summary}
                </p>

                {/* Tech Pills (Top 3) */}
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {p.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-hairline bg-base/40 px-2 py-0.5 font-mono text-[0.62rem] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                  {p.technologies.length > 3 && (
                    <span className="font-mono text-[0.62rem] text-faint">
                      +{p.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Card Footer Click Trigger */}
                <div className="mt-auto flex items-center justify-between border-t border-hairline/40 pt-4 mt-5 text-xs font-medium text-ink-soft group-hover:text-electric-bright transition-colors">
                  <span>View Full Details</span>
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
