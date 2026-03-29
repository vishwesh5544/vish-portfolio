# AGENTS.md — Vishwesh Shukla Portfolio

Context file for AI coding agents (OpenAI Codex CLI, Claude Code, GitHub Copilot Workspace, etc.).

---

## Project Overview

Personal portfolio for Vishwesh Shukla — Software Engineer & Architect.
- Live at: https://vishcodes.live/
- Static SPA deployed to Firebase Hosting
- Dark-themed, data-driven, tab-based navigation

---

## Stack

- **React 19** + **TypeScript ~5.7** + **Vite 6**
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.ts` theming needed)
- **Framer Motion 12** for tab transitions
- **shadcn/ui** component library
- **Firebase Hosting** for deployment
- **Yarn** as package manager (always use yarn)

---

## Commands

```bash
yarn dev          # Dev server
yarn build        # Typecheck + production build → dist/
yarn lint         # ESLint
firebase deploy   # Deploy dist/ to vishcodes.live
```

---

## Repository Layout

```
src/
  data/           # All portfolio content (single source of truth)
    personal.ts   # Name, title, headline, email, location, summary
    experience.ts # Work history []
    projects.ts   # Projects []
    skills.ts     # technicalSkills grouped by category
    softSkills.ts # Soft skill string[]
    education.ts  # Education/certs []
    social.ts     # GitHub, LinkedIn, Instagram URLs
  sections/       # One component per tab (Overview, Skills, Experience, Projects, Education)
  components/ui/  # shadcn/ui components
  types/data.ts   # TypeScript interfaces
  App.tsx         # Layout: sidebar + tab state + Framer Motion
  index.css       # Tailwind v4 tokens, dark theme CSS vars, dot-grid pattern
```

---

## Content Updates

**All portfolio data lives in `src/data/`**. Never hardcode personal data in section components.

### Add a project
Edit `src/data/projects.ts` — prepend to array:
```ts
{
  name: string,
  description?: string,
  stack: string[],
  cloud?: string[],
  notes?: string[],
  type: "Contract" | "Freelance" | "Full-Time"
}
```

### Add experience
Edit `src/data/experience.ts` — prepend to array:
```ts
{
  company: string,
  role: string,
  duration: string,   // "Mon YYYY - Mon YYYY"
  highlights: string[]
}
```

### Update personal info
Edit `src/data/personal.ts`. The `summary` field is a multi-paragraph template literal (`\n\n` between paragraphs, rendered with `whitespace-pre-line`).

---

## Design System

Dark theme — forced via `class="dark"` on `<html>`. Do NOT use `dark:` prefixed Tailwind classes.

| Color | Hex | Use |
|---|---|---|
| Background | `#080B12` | Page bg |
| Surface | `#0F1420` | Cards, sidebar |
| Border | `#1E2840` | Card/section borders |
| Accent blue | `#38BDF8` | Primary accent |
| Accent indigo | `#818CF8` | Secondary accent |
| Accent green | `#34D399` | Tertiary accent |
| Text primary | `#E2E8F0` | Headings |
| Text secondary | `#94A3B8` | Body |
| Text muted | `#475569` | Labels, dates |

**Standard card:** `bg-[#0F1420] border border-[#1E2840] rounded-xl hover:border-[#38BDF8]/30 transition-colors duration-300`

**Section h2:** `text-2xl font-bold text-[#E2E8F0] mb-8 pl-4 border-l-2 border-[#38BDF8]`

Custom brand colors are in `src/index.css` `@theme inline {}` as `--color-brand-*`.

---

## TypeScript Notes

- Path alias: `@/` → `src/` (configured in `tsconfig.app.json` and `vite.config.ts`)
- Strict mode enabled
- Types are in `src/types/data.ts` — always extend interfaces there if new fields are needed

---

## Rules for AI Agents

1. **Use yarn** — never npm
2. **Edit `src/data/` for content changes** — never hardcode in components
3. **Run `yarn build`** after any change to verify no TypeScript errors
4. **Do not add routing** (React Router etc.) — tab state is in `App.tsx` with `useState`
5. **Do not add a backend** — static site only
6. **Do not add `dark:` Tailwind classes** — dark mode is always-on via CSS variables
7. **Tailwind v4**: add new tokens in `src/index.css` `@theme inline {}`, not `tailwind.config.ts`
8. **Most recent items first** in experience[] and projects[] arrays
9. **Import alias `@/`** — always use this instead of relative `../../` paths
10. **Deploy workflow**: `yarn build && firebase deploy`
