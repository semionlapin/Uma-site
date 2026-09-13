# Agent Instructions & Project Context

## 🌟 Project Overview & Mission
**Umaigra** is an interactive educational platform designed for classroom learning, tablets, interactive smartboards, and inclusive education. It empowers teachers, educators, and creators to build, play, and monetize gamified learning quests and interactive exercises.

### 🛠️ Tech Stack & Tooling
- **Core Framework**: React 19, TypeScript
- **Styling & Design System**: Tailwind CSS v4 / Vanilla CSS Tokens with `class-variance-authority` (CVA), `clsx`, `tailwind-merge`
- **Build Tool**: Vite (bundling local assets, fonts, and icons with zero external CDN dependencies)
- **Animation Strategy**: Self-contained GPU-accelerated CSS keyframe animations, dynamic React key resets, and Intersection Observer viewport controls

---

## 📌 Architecture & Recent Accomplishments

### 1. Multi-Language & Modular Content Architecture (`src/data/landing/`)
- Strict type definitions in [`src/data/landing/types.ts`](file:///Users/semionlapin/Documents/Umaigra/UmaSite_2026/src/data/landing/types.ts) for all landing sections (Hero, Key Features, Audience, FAQ, Footer).
- Modular localized content dictionaries in [`ru.ts`](file:///Users/semionlapin/Documents/Umaigra/UmaSite_2026/src/data/landing/ru.ts) and [`en.ts`](file:///Users/semionlapin/Documents/Umaigra/UmaSite_2026/src/data/landing/en.ts) exposed through [`index.ts`](file:///Users/semionlapin/Documents/Umaigra/UmaSite_2026/src/data/landing/index.ts).

### 2. Tab-Scoped Feature Logic & Graphic Bindings
- `KeyFeaturesContent` configured so each feature tab (`editor`, `catalog`, `ai`, `monetize`) independently owns its individual steps, descriptions, and linked `graphicKey` animation bindings.
- Built and wired interactive SVG/CSS animation modules in `src/components/landing/graphics/` (`CreateGame01..03`, `GenerateGame01..03`, `FindGame01..03`, `SellGame01..03`).

### 3. Audience Section Assets
- Localized `.webp` illustrations connected in `/public/images/sections/` (`ForTeachers.webp` and `ForStudents.webp`) within `FeatureContainer` blocks.

### 4. UI & Layout Polish for Feature Animations
- Refactored [`AutoAdvancingFeatureList`](file:///Users/semionlapin/Documents/Umaigra/UmaSite_2026/src/components/ui/cards-layout/AutoAdvancingFeatureList.tsx) to eliminate redundant double browser window frames.
- Standardized the right-side graphic container to a clean neutral card (`bg-[rgba(76,54,89,0.05)]`, `rounded-[24px]`, `p-4`) with centered `aspect-[16/10]` mock window scaling.
- Converted internal card grids and editor canvases to `flex-1` / `grid-rows-2` / `h-full` to eliminate vertical dead space.

### 5. Animation Lifecycle & Viewport Controls
- Dynamic keying per step and tab (`key={`${activeTabId}-${stepIdx}-${step.graphicKey}`}`) ensures animations reset cleanly from 0.0s upon step transitions.
- Integrated `IntersectionObserver` in `AutoAdvancingFeatureList` (`threshold: 0.25`) to defer auto-advancing timers, progress lines, and CSS animations until scrolled into the viewport.

---

## 🎯 Immediate Next Steps & Upcoming Priorities

1. **Feature Graphics Polish**: Refine custom illustrations and micro-interactions for remaining feature tabs as new Figma assets arrive.
2. **Language Switcher Runtime**: Hook up dynamic state/context to toggle between `ru` and `en` across the landing page from `HeaderMenu`.
3. **Responsive QA**: Validate cross-breakpoint layout behavior (Mobile < 640px, Tablet 768px - 1024px, Desktop > 1280px).
4. **Production Readiness**: Maintain clean `tsc -b` and `npm run build` verification for client previews and deployments.

---

## 📐 Critical Design Constraints & Rules
1. **Design Tokens Only**: Always use exact Figma design tokens defined in `src/index.css` and `tailwind.config.js` (`spacing-200`, `spacing-1200`, `text-display-hero`, `text-body-p2`, `surface-brand`, `surface-accent-1`, `rounded-card`, `max-w-page`, `max-w-content`). Never introduce arbitrary ad-hoc pixel values when a token exists.
2. **Hero Marquee Integrity**: DO NOT touch or alter the WebGL/shader/canvas logic in [`src/components/landing/HeroMarquee.tsx`](file:///Users/semionlapin/Documents/Umaigra/UmaSite_2026/src/components/landing/HeroMarquee.tsx).
3. **Transparent AutoAdvancingFeatureList**: Maintain clean container transparency with no outer card wrappers, borders, or container shadows.
4. **Container Alignment**: Maintain `w-full max-w-page mx-auto px-4 sm:px-6 lg:px-12` across all landing page sections for consistent vertical alignment with Header and Footer boundaries.