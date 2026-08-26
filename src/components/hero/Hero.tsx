"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Users } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { HeroNodeField } from "./HeroNodeField";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pt-24"
    >
      {/* background grid + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-60" />
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-electric/12 blur-[120px]" />
        <div className="absolute right-10 top-10 h-[300px] w-[300px] rounded-full bg-violet/10 blur-[110px]" />
      </div>

      {/* Left: copy — CSS-driven entrance so content is visible without JS */}
      <div className="flex max-w-2xl flex-col items-start text-left">
        <span
          className="fade-up inline-flex items-center gap-2.5 rounded-full border border-hairline bg-white/[0.03] px-4 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-ink-soft"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-dot" />
          Software Solutions · Digital Engineering
        </span>

        <h1
          className="fade-up mt-7 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.4rem] lg:leading-[1.0]"
          style={{ animationDelay: "0.14s" }}
        >
          Elevate Ideas.
          <br />
          <span className="text-gradient-electric">Engineer Possibilities.</span>
        </h1>

        <p
          className="fade-up mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "0.24s" }}
        >
          Elvexify builds modern digital solutions that turn complex business
          challenges into scalable, intelligent, and meaningful software
          experiences.
        </p>

        <div
          className="fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "0.34s" }}
        >
          <MagneticButton href="#projects" variant="primary">
            Explore Our Work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton href="#team" variant="outline">
            <Users className="h-4 w-4" />
            Meet The Team
          </MagneticButton>
        </div>

        <div
          className="fade-up mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-widest text-faint"
          style={{ animationDelay: "0.44s" }}
        >
          <span>7 Engineers</span>
          <span className="h-3 w-px bg-hairline" />
          <span>Custom Software</span>
          <span className="h-3 w-px bg-hairline" />
          <span>Web · Mobile · Data</span>
        </div>
      </div>

      {/* Right: interactive node field */}
      <motion.div
        initial={false}
        animate={reduce ? {} : { opacity: [0, 1], scale: [0.94, 1] }}
        transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fade-in relative mt-14 hidden aspect-square w-full max-w-[520px] lg:mt-0 lg:block"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="absolute inset-0 rounded-full border border-hairline/60" />
        <div className="absolute inset-6 rounded-full border border-hairline/40" />
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <HeroNodeField />
        </div>
        {/* center core */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-electric to-violet shadow-[0_0_30px_8px_rgba(43,91,255,0.5)]" />
        {/* orbiting label */}
        <div className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-hairline bg-base/80 px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-cyan backdrop-blur">
          architecture.engine
        </div>
      </motion.div>

      {/* scroll cue */}
      <div className="fade-in pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-faint">
          scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-electric/70 to-transparent" />
      </div>
    </section>
  );
}
