# DESIGN.md - Visual Direction & Liveliness Specification

## 1. Design Read & Liveliness Dials
Reading this as: Spacious, minimalist Front-End Developer Endurance Test portfolio for Cretivox recruitment reviewers, blending the clean whitespace and concise copywriting of `wsafaat.my.id` and `albertirgi.com` with the bold editorial framing of `louisvigo.com` and Cretivox "Dream On", dial **ENERGY 2 / RHYTHM 3 / MOTION 3**.

- **Dial**: `ENERGY 2 / RHYTHM 3 / MOTION 3`
  - **ENERGY 2 (Balanced & Confident)**: Generous negative space (60%+ open canvas), calm typographic authority, zero nested box clutter, and concise copywriting (1 sentence per project or bio block).
  - **RHYTHM 3 (Asymmetric, Mixed Compositions)**:
    - Section 01 (Hero): Centered-left spacious intro with compact avatar badge, 4-word headline, 1-sentence bio, and minimal metadata strip.
    - Section 02 (Identity & Hobbies): Clean two-column split pairing mandatory Cretivox profile facts (STT NF Sem 5, 21 Tahun, Libra) on the left with a tactile 4-hobby switcher (`Gym`, `Gaming`, `Music`, `Film`) on the right.
    - Section 03 (Selected Works): Full-viewport GSAP `ScrollTrigger` pinned horizontal gallery on desktop presenting 3 projects (`ASTRO 2026`, `PEMIRA E-Voting 2025`, `ORMIK Explore 2025`) with interactive browser preview frames and 1-sentence summaries.
    - Section 04 (Stack & Experience): Clean interactive filter pills paired with a concise two-line career timeline.
    - Section 05 (Contact): High-breathing-room closing callout with instant email copy, social links, and a compact single-row quick-message bar.
  - **MOTION 3 (Parallax, Pin, Choreography)**: Smooth GSAP text entrance, ScrollTrigger horizontal pinning on `#archive`, and subtle state transitions on hobby and stack switches.

## 2. Color Palette (3 Core Neutrals + 1 Deliberate Accent)
- **Canvas Background (`#0A0A0A`)**: Deep carbon black providing maximum breathing room.
- **Subtle Surface (`#121212`) & Hairline Dividers (`#222222` structural, `#666666` interactive control boundaries)**: Minimalist framing without heavy box borders.
- **Foreground Text (`#F5F5F3` Primary, `#B3B3B3` Secondary, `#8F8F8F` Muted)**: High-contrast hierarchy (all >= 5.7:1 on `#0A0A0A` and `#121212`).
- **Deliberate Accent (`#D4FF00` Acid Lime)**: Applied sparingly to primary CTA, active indicator dot, and keyboard focus ring.

## 3. Typography & Copywriting Discipline
- **Headlines (`Syne`)**: 2 to 5 words maximum per heading.
- **Body (`Plus Jakarta Sans`)**: 1 sentence (12 to 22 words) per bio, hobby, or project description.
- **Metadata (`JetBrains Mono`)**: Compact index markers (`01` to `04`) and stack tags.

## 4. Written Decisions Log (antislop R-31)
- **Why this color palette?**: Deep `#0A0A0A` canvas with `#F5F5F3` text and sparse `#D4FF00` accents keeps the screen calm and lets the 3 project previews stand out.
- **Why this layout?**: High-whitespace sections separated by thin hairline dividers (`1px`) eliminate visual noise and follow the "one idea per block" principle from `wsafaat.my.id` and `albertirgi.com`.
- **Why this typography?**: Pairing `Syne` display headers with `Plus Jakarta Sans` body text and `JetBrains Mono` labels creates clear hierarchy without needing heavy borders.
- **Why this spacing?**: Vertical padding of `96px` to `140px` on desktop (`64px` on mobile) gives every section generous breathing room.
- **Why use differentiated project frames in the horizontal track?**: Only the 3 featured projects use elevated cards with varied widths (`56vw`, `48vw`, `44vw`) and distinct interactive preview headers so visitors can inspect each system while scrolling horizontally.
- **Why use the provided avatar?**: Okta's real uploaded avatar (`/images/okta-avatar.png`) anchors the hero and contact sections with personal authenticity.
