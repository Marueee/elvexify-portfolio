"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { SERVICES } from "@/data/services";

export function Services() {
  const reduce = useReducedMotion();

  return (
    <Section id="services" label="services" className="border-t border-hairline/40">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Capabilities Built Around Real Engineering."
          description="Not a menu of generic offerings — each service is a discipline we practise end to end, from first conversation to production."
        />
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal
              key={s.id}
              delay={(i % 3) * 0.06}
              as="div"
              className="group relative bg-base/80 p-px"
            >
              <motion.article
                initial={false}
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col gap-4 bg-base p-7 transition-colors duration-300 hover:bg-surface/60 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-hairline bg-[rgb(var(--c-tint)/0.02)] text-electric-bright transition-all duration-300 group-hover:border-electric/50 group-hover:bg-electric/10">
                    <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
                  </span>
                  <span className="font-mono text-sm text-faint">{s.index}</span>
                </div>

                <h3 className="font-display text-xl font-semibold text-ink sm:text-[1.35rem]">
                  {s.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted">{s.summary}</p>

                {/* expanding detail */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pb-4 pt-1 text-sm leading-relaxed text-ink-soft">
                      {s.detail}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-hairline bg-[rgb(var(--c-tint)/0.02)] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-cyan"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* subtle accent line that grows on hover */}
                <div className="mt-auto pt-4">
                  <div className="h-px w-full bg-hairline" />
                  <div className="h-px w-0 bg-gradient-to-r from-electric to-violet transition-all duration-500 group-hover:w-full" />
                </div>

                <span className="pointer-events-none absolute right-6 top-6 text-faint opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
