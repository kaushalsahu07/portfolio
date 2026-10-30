# CLAUDE.md

## Project Overview

Personal portfolio website for Kaushal Sahu, live at https://www.kaushalsahu.tech/.
Single-page React app (anchor-based navigation: `#about`, `#projects`, `#contact`) with a dark glassmorphic theme. Deployed to GitHub Pages via `gh-pages`.

## Commands

- `npm run dev` — Start dev server (http://localhost:5173)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview the production build
- `npm run lint` — ESLint (flat config, `eslint.config.js`)
- `npm run deploy` — Builds and publishes `dist/` to GitHub Pages (`predeploy` runs automatically first)

There are no tests. Don't add a test framework unless asked.

## Tech Stack

- **React 19** + **Vite 6** — app code is **JavaScript/JSX** (`.jsx`), not TSX
- **Tailwind CSS 4** — CSS-first config; there is NO `tailwind.config.js`. Theme lives in `src/index.css` (`@theme`, `@plugin 'tailwindcss-animate'`, `@custom-variant dark`, CSS variables)
- **Framer Motion** — all animations (respects `useReducedMotion`)
- **FontAwesome** — icons via `@fortawesome/react-fontawesome`
- **React Router 7** — `HashRouter` in `src/main.jsx` (kept for GitHub Pages compatibility, though navigation is anchor-based)
- **shadcn/ui conventions** — `components.json` (new-york style), `cn()` helper in `src/lib/utils.ts`

## Structure

```
src/
├── main.jsx              # Entry point: HashRouter + lazy-loaded sections
├── index.css             # Tailwind 4 CSS-first config, theme vars, global styles
├── components/
│   ├── Navbar.jsx        # Fixed glass navbar (hides on scroll down)
│   ├── Home.jsx          # Hero/landing section
│   ├── About.jsx         # #about (lazy loaded)
│   ├── Project.jsx       # #projects (lazy loaded)
│   ├── Contact.jsx       # #contact (lazy loaded)
│   └── ui/               # Reusable UI primitives (GlassSurface, SpotlightCard,
│                         # hover-border-gradient, SkillsGrid, AnimatePresence...)
└── lib/
    ├── utils.ts          # cn() class merge helper
    └── svg.ts
```

## Key Conventions

- **Imports:** use the `@/` alias for `src/` (configured in both `vite.config.js` and `tsconfig.json`), e.g. `import { cn } from "@/lib/utils"`. Some files still use relative imports — match whatever the file you're editing uses.
- **Mixed JS/TS:** page components are `.jsx`; only `src/lib/*.ts` is TypeScript. New components should be `.jsx` unless specifically asked otherwise. `tsconfig.json` is minimal and only includes `src/**/*.ts`, `src/**/*.tsx`, and `src/main.jsx`.
- **Styling:** Tailwind utility classes inline. Use `cn()` (from `@/lib/utils`) for conditional classes. Theme colors are CSS variables in `index.css` (`--color-bg: #000000`, `--color-second: #111927`, `--color-main: #0395FF`) — use these, don't hardcode hex values in components.
- **Animations:** Framer Motion only (despite GSAP being mentioned in the README, it is not a dependency). Always guard motion with `useReducedMotion()` where the existing code does.
- **Layout:** global page width is set on `body` in `index.css` (80%, max 1440px, centered) — don't add per-page width wrappers.
- **Reusable UI:** shared primitives go in `src/components/ui/` (kebab-case file names there, e.g. `hover-border-gradient.tsx`); page sections stay in `src/components/`.

## Gotchas

- `vite.config.js` sets `base: "/"` and manual chunks for `react`, `motion`, and `icons` — keep large new deps out of the main bundle if possible.
- The `homepage` field in `package.json` controls the deployed URL; don't change it casually.
- ESLint rule `no-unused-vars` ignores names matching `^[A-Z_]` (so unused JSX components/imports don't error).
- Windows environment — use forward-safe paths and prefer `npm` (there's a `package-lock.json`, no yarn/pnpm lockfile).
