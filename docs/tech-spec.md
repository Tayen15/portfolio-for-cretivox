# Technical Specification (`/docs/tech-spec.md`)

## 1. Core Stack & Dependencies
- **Runtime & Package Manager**: Bun (`bun install`, `bun run dev`, `bun run build`)
- **Framework**: Next.js 15+ (App Router), React 19, TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS, `clsx`, `tailwind-merge`
- **Animation Engine**: `gsap` (with `ScrollTrigger` plugin registered client-side)
- **Validation**: `zod` for schema validation in `src/lib/schemas/`

## 2. GSAP & ScrollTrigger Choreography Plan
1. **Hero Section Kinetic Reveal (`hero-section.tsx`)**:
   - Staggered character/word clip-path reveal on initial load for `"DREAM ON / FIRTIANSYAH OKTA RESAMA"`.
   - Scroll-linked parallax on the index marker (`01 // FRONT-END DEVELOPER`) and avatar frame.
   - Respects `prefers-reduced-motion` via `gsap.matchMedia()`.
2. **Interactive Identity Card & Zodiac/Hobby Explorer (`identity-explorer.tsx`)**:
   - Interactive mode switcher between 4 verified dimensions:
     - `01. ACADEMIC & BIO`: STT Terpadu Nurul Fikri, Teknik Informatika Semester 5, Umur 21 Tahun.
     - `02. ZODIAC: LIBRA`: Interactive balance slider comparing Front-End Aesthetics (UI/Motion) vs. Systems Engineering (Next.js/Laravel/Docker).
     - `03. HOBBY DECK`: Interactive switcher for Gym, Gaming, Music, and Movies, showing how each hobby shapes Okta's discipline and front-end craft, animated via GSAP flip/tween transitions on state change.
3. **Pinned Horizontal Scroll Showcase (`project-showcase.tsx`)**:
   - Desktop (`(min-width: 1024px)` via `gsap.matchMedia()`):
     - Section pins (`pin: true`, `scrub: 1`) while scrolling vertically, translating the horizontal track of 3 verified flagship Next.js campus platforms (`ASTRO 2026`, `PEMIRA E-Voting 2025`, `ORMIK Explore 2025`) from right to left.
     - Each project exhibition panel uses differentiated width, padding, and interactive sub-inspectors reflecting its architectural hierarchy (satisfying `antislop` R-14).
     - Includes a live progress bar (`01 / 03` to `03 / 03`) synchronized with `ScrollTrigger` progress.
   - Mobile & Tablet (`(max-width: 1023px)`):
     - Reflows cleanly into a vertical/staggered stack with scroll-triggered entrance reveals so there is zero horizontal overflow and every card fits narrow viewports comfortably.
4. **Capability Matrix & Quick Message (`capability-matrix.tsx`, `contact-section.tsx`)**:
   - Interactive stack inspector (Next.js, Laravel, Docker, CI/CD) that filters which featured projects use each technology.
   - Interactive message/ping form validated by Zod via Next.js Server Action (`sendQuickPingAction`) with explicit Empty, Loading, Error, and Success states (satisfying `antislop` R-27).

## 3. Accessibility & Contrast Compliance (WCAG AA)
- **Background Primary**: `#0A0A0A`
- **Surface Elevated**: `#141414` (Border `#2E2E2E`, contrast > 3:1 for interactive control edges when paired with `#525252` / `#D4FF00` focus/hover states)
- **Text Primary**: `#F5F5F3` on `#0A0A0A` -> Ratio **19.1:1** (PASS AA/AAA)
- **Text Secondary**: `#A3A3A3` on `#0A0A0A` -> Ratio **7.86:1** (PASS AA)
- **Accent Primary**: `#D4FF00` (Acid Lime) on `#0A0A0A` -> Ratio **17.4:1** (PASS AA); Dark text `#0A0A0A` on `#D4FF00` button -> Ratio **17.4:1** (PASS AA).
- **Focus Ring**: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4FF00]` on all interactive controls.
- **Tap Targets**: All interactive buttons, tabs, and links enforce `min-h-[44px] min-w-[44px]` with at least `8px` spacing.
