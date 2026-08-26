import { Logo } from "@/components/shared/Logo";
import { NAV_LINKS, SITE } from "@/lib/site";

const SERVICE_LINKS = [
  { label: "Custom Software", href: "#services" },
  { label: "Web Applications", href: "#services" },
  { label: "Mobile Applications", href: "#services" },
  { label: "Automation", href: "#services" },
  { label: "System Integration", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
];

const PROJECT_LINKS = [
  { label: "Enterprise Systems", href: "#projects" },
  { label: "Business Automation", href: "#projects" },
  { label: "Digital Platforms", href: "#projects" },
  { label: "Mobile Products", href: "#projects" },
  { label: "Case Studies", href: "#projects" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline/70 bg-base">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand */}
          <div className="max-w-sm">
            <Logo size={38} className="h-9 sm:h-10" />
            <p className="mt-5 font-display text-lg font-semibold text-ink">
              {SITE.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Modern software solutions, web applications, digital platforms and
              business automation — engineered, not just built.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.social.github}
                aria-label="Elvexify on GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink-soft transition-colors hover:border-electric/60 hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                </svg>
              </a>
              <a
                href={SITE.social.linkedin}
                aria-label="Elvexify on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink-soft transition-colors hover:border-electric/60 hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
                </svg>
              </a>
              <a
                href={SITE.social.twitter}
                aria-label="Elvexify on X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink-soft transition-colors hover:border-electric/60 hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* nav */}
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-faint">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-faint">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* projects + contact */}
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-faint">
              Work
            </p>
            <ul className="mt-5 space-y-3">
              {PROJECT_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm font-medium text-electric-bright transition-colors hover:text-ink"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-hairline/60 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs uppercase tracking-widest text-faint">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-faint">
            Elvexify — Elevate Ideas. Engineer Possibilities.
          </p>
        </div>
      </div>
    </footer>
  );
}
