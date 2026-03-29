# Design System — zidanesyukri.com

Minimal, opinionated. Refer here before touching any layout or animation.

---

## Breakpoints

Two only. No exceptions.

| Name    | Width   | Prefix  |
| ------- | ------- | ------- |
| Mobile  | < 768px | default |
| Desktop | ≥ 768px | `md:`   |

---

## Spacing — 8px Grid

All spacing is a multiple of 8. No arbitrary values.

| Token      | Value | Tailwind |
| ---------- | ----- | -------- |
| --space-1  | 8px   | `p-2`    |
| --space-2  | 16px  | `p-4`    |
| --space-3  | 24px  | `p-6`    |
| --space-4  | 32px  | `p-8`    |
| --space-6  | 48px  | `p-12`   |
| --space-8  | 64px  | `p-16`   |
| --space-12 | 96px  | `p-24`   |
| --space-16 | 128px | `p-32`   |

---

## Layout

- **Max width:** 1100px (`max-w-275`)
- **Horizontal padding:** 32px (`px-8`) on every section
- **Navbar height:** 72px
- **Scroll offset:** `scroll-padding-top: 72px` on `:root` — handles all anchor navigation automatically
- **Sections:** `h-screen` — each section fills exactly one viewport

---

## Typography

| Role    | Font           | Usage                        |
| ------- | -------------- | ---------------------------- |
| Display | Bebas Neue     | Hero heading, section titles |
| Body    | DM Sans        | Paragraphs, descriptions     |
| Mono    | JetBrains Mono | Badges, labels, nav, footer  |

**Scale:**

| Use             | Class / Value                       |
| --------------- | ----------------------------------- |
| Hero            | `clamp(80px, 12vw, 148px)`          |
| Section heading | `clamp(40px, 5vw, 60px)`            |
| Body            | `text-[17px]` / `leading-[1.7]`     |
| Small body      | `text-[16px]` / `leading-[1.8]`     |
| Label / mono    | `text-[11px]` / `tracking-[0.12em]` |
| Nav / meta      | `text-[13px]` / `tracking-[0.05em]` |
| Section marker  | `text-[10px]` / `tracking-[0.15em]` |

---

## Colors

| Token     | Value   | Usage                    |
| --------- | ------- | ------------------------ |
| --accent  | #10a37f | CTAs, highlights, links  |
| --accent2 | #0d8a6a | Hover state of accent    |
| --bg      | #0b0b0d | Page background          |
| --surface | #111115 | Cards, elevated surfaces |
| --border  | #1e1e24 | Borders, dividers        |
| --muted   | #525260 | Placeholder, subtle text |
| --body    | #c8c8d8 | Body text                |
| --head    | #f0f0f5 | Headings, high contrast  |

---

## Animation

**One system: Framer Motion only.** No JS-based scroll observers. No CSS reveal classes.

All shared variants live in `lib/motion.ts`:

```ts
fadeUp  — { opacity: 0, y: 24 } → { opacity: 1, y: 0 }
stagger — wraps fadeUp children, 0.1s between each
ease    — { duration: 0.7, ease: "easeInOut" }
```

**Hero sections** → `initial="hidden" animate="visible" variants={stagger}`  
**All other sections** → `initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}`

---

## Component Rules

- **Shared** (2+ places) → `components/ui/`
- **Section-specific** → defined locally in the section file
- **No inline styles** — Tailwind classes only
- **No new CSS classes** — only keyframes and pseudo-elements in `globals.css`
- **No `padding-top` offsets** for navbar — handled globally via `scroll-padding-top`

---

## File Structure

```
app/
  globals.css          ← tokens, noise, service-card, keyframes only
  layout.tsx           ← fonts, metadata
  page.tsx             ← section composition only (server component)

lib/
  motion.ts            ← shared Framer Motion variants + ease config

components/
  ui/
    PrimaryButton.tsx
  Navbar.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  Stack.tsx
  Contact.tsx
  Footer.tsx

DESIGN_SYSTEM.md       ← you are here
```
