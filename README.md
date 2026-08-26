# Elvexify — Company Portfolio Landing Page

Premium, dark, technical portfolio site for **Elvexify**, a 7-engineer software
solutions company. Built with Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
+ Motion + Lucide icons.

## Run it

```bash
cd web
npm install        # already done
npm run dev        # dev server (hot reload)
npm run build      # production build
npm run start      # serve the production build
```

The site is currently served at **http://localhost:3003** (port 3000 is occupied by
another local app).

## Editing content (all placeholders, no fake data)

All copy lives in typed data arrays under `src/data/` so you can swap in real
content without touching components:

| File | What to edit |
|------|--------------|
| `src/data/services.ts` | The 7 services (title, summary, detail, tech tags, icon) |
| `src/data/projects.ts` | Case studies — uses `[PROJECT NAME]`, `[CLIENT / ORGANIZATION]`, `[PROJECT DESCRIPTION]` placeholders and editable metric values |
| `src/data/technologies.ts` | Tech ecosystem categories + items |
| `src/data/team.ts` | 7 team members — name, role, specialty, interests, accent (photo is a placeholder tile) |
| `src/data/values.ts` | Company values + process steps + intro flow |
| `src/lib/site.ts` | Email, social links, nav links, tagline |
| `src/lib/cn.ts` | `cn()` class-merge helper |

Brand assets (logo SVGs, favicon) live in `public/logo/` (copied from `../brand/`).

## Structure

```
src/
  app/            layout (SEO/metadata/fonts), page, globals.css (design system), sitemap.ts
  components/
    shared/      Logo, Section, SectionHeading, Reveal, MagneticButton, ScrollProgress
    navbar/      Navbar (scroll transition + mobile menu)
    hero/        Hero + HeroNodeField (interactive animated node network)
    intro/       Value proposition + process diagram
    services/    Hover-expand service grid
    solutions/   Approach steps
    projects/    Editorial case-study showcases (generated previews)
    technologies/Interactive tech ecosystem
    about/       Company story
    team/        Team grid (hover reveal)
    values/      Principles
    process/     Process timeline
    cta/         Final call-to-action
    footer/      Footer
```

## Design system (in `globals.css`)

Palette: base `#070b1c`, surface `#0e1535`, electric `#2b5bff`, violet `#7b5bff`,
cyan `#22d3ee`. Fonts: Geist (body/mono) + Space Grotesk (display), matching the
brand's Geist wordmark. Dark, minimal, technical.

## Accessibility / performance notes

- Scroll reveals are progressive-enhancement: `.js` class gates the hidden initial
  state, so content is fully visible without JS and for `prefers-reduced-motion`.
- Semantic headings, skip-link, focus-visible rings, alt text via `aria-label`s.
- SEO: title, description, Open Graph, Twitter card, canonical, `sitemap.xml`.
- No console errors; passes `tsc`, `eslint` (0 warnings), and `next build`.

## Deploy

Static export-friendly (all routes prerender). Set `SITE.url` in `src/lib/site.ts`
and the `metadataBase` in `src/app/layout.tsx` to your domain before deploying.
