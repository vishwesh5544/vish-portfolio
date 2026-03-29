# CLAUDE.md — Vishwesh Shukla Portfolio

This file is the primary context document for AI assistants (Claude Code, Codex, etc.) working on this repo.

---

## Project Identity

**What it is:** Personal portfolio for Vishwesh Shukla — Software Engineer & Architect.

**Live URL:** https://vishcodes.live/

**Brand voice:** "Self-forged. Purpose-built. I architect systems and shape storms."
- Problem solver first, engineer second
- Deep backend & systems expertise, full-stack execution, AI/RAG builder
- Mindset: coding is the primary tool for solving real-world problems

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19 |
| Language | TypeScript | ~5.7 |
| Build tool | Vite | ^6.3 |
| CSS | Tailwind CSS | v4 (CSS-first, no `tailwind.config.ts` needed) |
| UI components | shadcn/ui (new-york style) | — |
| Animation | Framer Motion | ^12.7 |
| Icons | lucide-react + react-icons | — |
| Package manager | **yarn** (always use yarn, not npm) |
| Hosting | Firebase Hosting | project: `vish-portfolio-9156b` |

> **Tailwind v4 note:** Custom colors are defined in `src/index.css` inside `@theme inline {}`, NOT in `tailwind.config.ts`. Arbitrary values like `bg-[#38BDF8]/15` work natively.

---

## Commands

```bash
yarn dev          # Start dev server (http://localhost:5173)
yarn build        # TypeScript check + Vite production build → dist/
yarn lint         # ESLint
yarn preview      # Preview production build locally

firebase deploy   # Deploy dist/ to Firebase Hosting (vishcodes.live)
```

> Always run `yarn build` before `firebase deploy` to ensure dist/ is up to date.

---

## Project Structure

```
src/
├── App.tsx                  # Root layout: sidebar + tab routing + Framer Motion transitions
├── index.css                # Global CSS, Tailwind v4 tokens, dark theme, dot-grid bg
├── main.tsx                 # React entry point
│
├── data/                    # All portfolio content lives here (single source of truth)
│   ├── personal.ts          # Name, title, headline, email, location, summary
│   ├── experience.ts        # Work history array
│   ├── projects.ts          # Project portfolio array
│   ├── skills.ts            # technicalSkills object (grouped by category)
│   ├── softSkills.ts        # Array of soft skill strings
│   ├── education.ts         # Education/certification array
│   ├── social.ts            # GitHub, LinkedIn, Instagram URLs
│   └── index.ts             # Barrel export (re-exports everything)
│
├── sections/                # One component per portfolio tab
│   ├── OverviewSection.tsx  # Hero, stats, core expertise, identity cards, contact
│   ├── SkillsSection.tsx    # Chip-style skill display grouped by category
│   ├── ExperienceSection.tsx# Vertical timeline
│   ├── ProjectsSection.tsx  # Cards with stack/cloud chips
│   ├── EducationSection.tsx # Accent border cards
│   ├── SectionWrapper.tsx   # Max-width container wrapper
│   └── index.ts             # Barrel export
│
├── components/
│   └── ui/button.tsx        # shadcn/ui Button component
│
├── types/
│   ├── data.ts              # TypeScript interfaces for all data
│   ├── social.ts            # Social type
│   └── index.ts             # Barrel export
│
└── lib/
    └── utils.ts             # cn() utility (clsx + tailwind-merge)
```

---

## Design System

### Dark Theme Color Palette

| Variable | Hex | Use |
|---|---|---|
| Brand BG | `#080B12` | Page background |
| Brand Surface | `#0F1420` | Cards, sidebar |
| Brand Border | `#1E2840` | Borders, dividers |
| Accent Blue | `#38BDF8` | Primary accent, active nav, timeline dots, chip highlights |
| Accent Indigo | `#818CF8` | Secondary chips, soft skills, cloud badges, education diploma |
| Accent Green | `#34D399` | Third identity card, certificate badges |
| Text Primary | `#E2E8F0` | Headings, bold text |
| Text Secondary | `#94A3B8` | Body text, bullet points |
| Text Muted | `#475569` | Durations, labels, muted info |

### Typography
- Font: **Inter** (via Google Fonts, loaded in `index.html`)
- Hero gradient: `bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#38BDF8] bg-clip-text text-transparent`

### Consistent Patterns
- **Section headers:** `<h2 className="text-2xl font-bold text-[#E2E8F0] mb-8 pl-4 border-l-2 border-[#38BDF8]">`
- **Cards:** `bg-[#0F1420] border border-[#1E2840] rounded-xl hover:border-[#38BDF8]/30 transition-colors duration-300`
- **Cards with top accent:** `style={{ borderTopColor: '#38BDF8', borderTopWidth: '2px' }}`
- **Cards with left accent:** `border-r border-t border-b border-[#1E2840] border-l-2 border-l-[#38BDF8]`
- **Skill chips (Expert):** `bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30 rounded-lg px-3 py-1.5 text-sm`
- **Skill chips (Advanced):** `border border-[#38BDF8]/40 text-[#94A3B8] rounded-lg px-3 py-1.5 text-sm`
- **Stack tech chips:** `bg-[#38BDF8]/10 text-[#38BDF8] rounded-md px-2.5 py-1 text-xs font-medium`
- **Cloud chips:** `border border-[#818CF8]/40 text-[#818CF8] rounded-md px-2.5 py-1 text-xs font-medium`
- **Dot-grid background:** `dot-grid-bg` (CSS class defined in `index.css`)

### Tab Navigation
Tabs (defined in `App.tsx`): `overview` | `skills` | `experience` | `projects` | `education`

---

## Data Layer — How to Update Content

**All portfolio content is data-driven.** To update what appears on the site, edit the files in `src/data/`. Do not hardcode content in section components except for presentation-layer groupings (like `coreExpertise` in OverviewSection).

### Adding a new project (`src/data/projects.ts`)
```ts
{
  name: "Project Name",
  description: "One-sentence description of what it is and what you did.",
  stack: ["Tech1", "Tech2", "Tech3"],
  cloud: ["AWS EC2", "AWS S3"],           // optional
  notes: ["Key note 1", "Key note 2"],    // optional bullet points
  type: "Contract" | "Freelance" | "Full-Time"
}
```
Add new projects at the **top** of the array (most recent first).

### Adding a new experience (`src/data/experience.ts`)
```ts
{
  company: "Company Name",
  role: "Role Title (Remote)",
  duration: "Mon YYYY - Mon YYYY",
  highlights: [
    "Specific, impactful achievement with technologies named",
    "Second highlight",
  ]
}
```
Add new experiences at the **top** of the array (most recent first).

### Adding a new skill (`src/data/skills.ts`)
Skills are grouped in `technicalSkills` object. Keys: `programmingLanguages`, `frameworks`, `tools`, `cloud`, `devOps`, `frontend`, `databases`, `aiml`, `caching`, `architecture`, `leadership`.

```ts
{
  name: "Skill Name",
  proficiency: "Expert" | "Advanced" | "Intermediate" | "Beginner",
  yearsOfExperience: 3,         // optional
  description: "Short description",  // optional
  category: "Category label"    // optional, shown in skill card
}
```

### Updating personal info (`src/data/personal.ts`)
Fields: `name`, `title`, `headline`, `phone`, `email`, `location`, `summary`

The `summary` field uses a template literal (backtick string) with `\n\n` for paragraph breaks. It's rendered with `whitespace-pre-line` in `OverviewSection.tsx`.

### Adding a new tab/section
1. Create `src/sections/NewSection.tsx`
2. Export from `src/sections/index.ts`
3. Add to `tabs` array in `App.tsx`
4. Add case in `renderSection()` in `App.tsx`

---

## TypeScript Types

Key interfaces in `src/types/data.ts`:

```ts
PersonalDetails { name, title, headline?, phone, email, location, summary }
Skill           { name, proficiency, yearsOfExperience?, description?, category? }
SkillSet        { programmingLanguages, frameworks, tools, cloud, devOps, frontend, databases, aiml, caching, architecture, leadership }
ExperienceItem  { company, role, duration, highlights[] }
Project         { name, description?, stack[], cloud[]?, notes[]?, type }
EducationItem   { university?, degree?, major?, course?, platform?, instructor?, institution?, type }
SoftSkill       = string
```

---

## Firebase Deployment

- Firebase project: `vish-portfolio-9156b`
- Hosting public dir: `dist/`
- SPA rewrites: all routes → `/index.html`
- Deploy command: `yarn build && firebase deploy`
- Live at: https://vishcodes.live/

---

## Key Constraints & Conventions

- **Always use `yarn`**, never `npm` for this project
- **Never hardcode personal data** in section components — update `src/data/` files
- **Tailwind v4**: no `theme.extend` in `tailwind.config.ts` — add custom tokens in `src/index.css` `@theme inline {}` block
- **Dark mode is forced** via `class="dark"` on `<html>` in `index.html` — do not add `dark:` prefixed Tailwind classes or toggle logic
- **Do not add routing** (React Router etc.) — the app uses tab-based navigation with `useState` in `App.tsx`
- **Do not add a backend** — this is a static site deployed to Firebase Hosting
- **Framer Motion** is used for tab transitions — maintain `AnimatePresence + motion.div` pattern in `App.tsx`
- **shadcn/ui** components live in `src/components/ui/` — add new ones with the shadcn CLI pattern (copy into this dir, don't install as a package)
- Import alias `@/` maps to `src/` (configured in both `tsconfig.app.json` and `vite.config.ts`)

---

## Custom Slash Commands

The following slash commands are available for this project (defined in `.claude/commands/`):

| Command | Description |
|---|---|
| `/deploy` | Build and deploy to Firebase Hosting |
| `/add-project` | Guided workflow to add a new project |
| `/add-experience` | Guided workflow to add a new experience entry |
| `/update-personal` | Update personal details, headline, or summary |
