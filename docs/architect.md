# Architecture Document (`/docs/architect.md`)

## 1. Architectural Pattern
- **Framework**: Next.js (App Router, `src/app/` directory) with TypeScript strict mode enabled.
- **Rendering Strategy**: Server Components by default at the page/layout level (`src/app/layout.tsx`, `src/app/page.tsx`), with interactive GSAP and stateful UI isolated into leaf Client Components (`'use client'`) inside `src/components/sections/` and `src/components/interactive/`.
- **Data Layer**: Typed static data modules inside `src/lib/data/profile.ts` validated via Zod schemas in `src/lib/schemas/profile.ts`.
- **Mutations / Actions**: Any interactive form or contact/feedback interaction uses Server Actions in `src/app/actions.ts` returning the standard `ActionResponse<T>` union type.

## 2. Directory Structure
```text
d:\Code\04-playgrounds\Cretivox\
├── DESIGN.md                         # Brand & visual direction + Liveliness Dials (antislop R-37)
├── docs/
│   ├── architect.md                  # Architecture decisions & patterns
│   ├── tech-spec.md                  # Technical specifications & GSAP choreography
│   ├── prd.md                        # Product requirements & verified profile data
│   └── changelog/
│       └── pending.md                # Auto-changelog log entries
├── public/
│   └── images/
│       └── okta-avatar.png           # User-provided profile avatar
└── src/
    ├── app/
    │   ├── actions.ts                # Server Actions with Zod validation
    │   ├── globals.css               # Tailwind directives & custom CSS variables
    │   ├── layout.tsx                # Root Server Component layout & fonts
    │   └── page.tsx                  # Main Server Component entry with Suspense boundaries
    ├── components/
    │   ├── layout/
    │   │   ├── navbar.tsx            # Sticky compact navigation with real anchor links
    │   │   └── footer.tsx            # Direct contact & attribution footer
    │   ├── sections/
    │   │   ├── hero-section.tsx      # GSAP kinetic text & avatar hero
    │   │   ├── identity-explorer.tsx # Interactive Identity, Libra Zodiac & Hobby tabs
    │   │   ├── project-showcase.tsx  # GSAP ScrollTrigger pinned horizontal showcase
    │   │   ├── capability-matrix.tsx # Interactive tech stack & internship timeline
    │   │   └── contact-section.tsx   # Interactive quick message / copy email & social links
    │   └── ui/                       # Atomic shadcn-compatible primitives (no barrel files)
    └── lib/
        ├── data/
        │   └── profile-data.ts       # Verified candidate & project dataset
        ├── schemas/
        │   └── profile-schema.ts     # Zod validation schemas
        └── types/
            └── action-response.ts    # Standard ActionResponse<T> type definition
```

## 3. Component & Coding Standards
- **No Barrel Files**: Every component is imported directly from its file path.
- **Strict TypeScript**: Explicit interfaces and return types on all exported functions; zero usage of `any`.
- **Next/Image Mandatory**: All images (including `/images/okta-avatar.png`) use `next/image` with explicit `width` and `height`.
- **GSAP Lifecycle Cleanup**: All GSAP animations and `ScrollTrigger` instances use `gsap.context()` or `@gsap/react` (`useGSAP`) inside Client Components to ensure clean teardown on unmount or resize, with `gsap.matchMedia()` handling desktop vs. mobile choreography cleanly.
