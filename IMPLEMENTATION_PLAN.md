# Phased Implementation Plan - Umaigra UI Kit & Landing Page

This plan outlines the architecture for establishing a **Foundational UI Kit & Design System** using **CVA (Class Variance Authority)**, building an interactive **Kitchen Sink / Component Catalog**, and assembling the landing page.

---

## Key Principles & Architecture Rules

1. **Foundational UI Kit First (Gradual Ingestion)**:
   - Extract and implement design tokens and components gradually as selected in Figma.
   - Follow the specific directory tree structure (`src/components/ui/`, `src/components/landing/`).
2. **Type-Safe Component Variants with `cva`**:
   - Use `class-variance-authority` + `clsx` + `tailwind-merge` (`cn` helper) for robust, clean, type-safe variant definitions (`sm`, `md`, `lg` sizes, `Primary`, `Neutral`, `Subtle`, `Borderless` variants, states).
3. **Interactive Kitchen Sink Showcase**:
   - A dedicated catalog page to visually preview, inspect, and test all typography scales, color palettes, button states, badges, accordions, and cards.
4. **100% Local / Zero CDN**:
   - Fonts: Self-hosted Google Fonts (`Rubik` and `Montserrat`) via local `@fontsource` npm packages.
   - Icons: `lucide-react` bundled locally as pure React SVG components (no runtime CDN requests).
5. **Modular Multi-Language Architecture**:
   - Strict TypeScript models in `src/data/landing/types.ts` powering localized content maps (`ru.ts`, `en.ts`).

---

## Phased Roadmap

### Phase 1: Project Setup & Core Tooling
- [x] Initialize Vite + React + TypeScript + Tailwind CSS project in the workspace.
- [x] Install local dependencies (`class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, `@fontsource/rubik`, `@fontsource/montserrat`, `tailwindcss`, `postcss`, `autoprefixer`).
- [x] Create utility helper `src/lib/utils.ts` (`cn` function with `clsx` + `twMerge`).
- [x] Setup `tailwind.config.js` and `src/index.css` with exact Figma CSS variables (surfaces, text colors, radiuses, shadows, font families).
- [x] Verify build and local dev server setup.

### Phase 2: Foundational UI Kit Development
- [x] **Design Tokens (Colors & Scales)**: Primitive palettes (`lime-uma`, `violet`, `sky`, `berry`, `amber`, `cucumber`, `gray`, `warm-gray`, `slate-purple`, `white`, `black`) & Semantic tokens (`surface`, `text`, `border`, `icon`).
- [x] **Design Tokens (Spacing, Sizing, Radii & Containers)**: Spacing (`0` to `4000`), Radii (`rounded-card-sm`, `rounded-card`, `rounded-card-lg`, `rounded-pill-lg`, `rounded-full`), Icon sizes (`xs` to `3xl`), Stroke & Containers (`max-w-page`, `max-w-content`, `max-w-narrow`, `max-w-cta`).
- [x] **Design Tokens (Typography & Text Hierarchy)**: Google Fonts `Rubik` (400, 500, 600, 700) and `Montserrat` (400, 500, 600, 700) self-hosted; Full hierarchy (`.text-display-giant`, `.text-display-hero`, `.text-h1` to `.text-h4`, `.text-title-*`, `.text-body-p1` to `.text-body-p4`).
- [x] **Base Components using `cva`**:
  - [x] `Button` (with `primary`, `neutral`, `subtle` variants; `sm`, `md`, `lg` sizes; slotted Lucide icons; disabled/hover states).
  - [x] `IconButton` (with `primary`, `neutral`, `subtle` variants; `sm`, `md`, `lg` sizes; 1:1 circular ratio; Lucide icons; aria-label; disabled/hover states).
  - [x] `NavItem` (semantic anchor links; `default`, `inverse`, `muted` variants; `isActive`, `disabled` states; Lucide icon slots).
  - [x] `HeaderMenu` (responsive top navigation bar with Logo, dynamic NavItems, CTA action button, language selector RU ⌵, and mobile hamburger drawer).
  - [x] `Footer` (responsive bottom navigation bar with Secondary Logo, copyright disclaimer, dynamic NavItems, and social action buttons).
  - [x] `Tab` (pill tab button component with `cva`; `sm`, `md` sizes; `isSelected`, `disabled`, `hover` states; Lucide icon slots).
  - [x] `Accordion` / `AccordionItem` (pill card collapsible container matching Figma's Accordion_Fat; `borderless` and `bordered` outline variants; accessible trigger button, animated ChevronDown, and smooth grid expand/collapse).
  - [x] `UspCard` (vertical feature benefit card matching Figma's `UspCard`; top `Tile` circular indicator; `p-8`, `rounded-card-sm`, `fill` and `outline` variants).
  - [x] `UspPill` / `SuppositoryCard` (concise horizontal benefit pill matching Figma's `Suppositery`; plain `fill` and `outline` variants; integrated `Tile` icon indicator; `rounded-pill-lg` geometry).
  - [x] `AutoAdvancingFeatureList` (interactive step carousel; auto-advancing progress bar, pause-on-hover, neutral container styling, and framed browser window mockup).
  - [x] `FeatureContainer` (vibrant brand section container with 2-column responsive layout, stacked `UspPill` items, Rubik H1/H2 typography, and framed media preview window).
  - [x] `ProgressDeterminate` / `ProgressBar` (accessible progress bar; `hairline`, `sm`, `md`, `lg` sizes; semantic theme colorways; smooth transition; `role="progressbar"`).
  - [x] `Logo` (pure scalable SVG vectors; `full` wordmark vs `mark` pictogram; `default`, `white`, `gray`, `secondary` colorways).
  - [x] `Tile` (circular icon badge containers; `sm`, `md`, `lg` sizes; brand and semantic theme variants; Lucide icon slot).

### Phase 3: Interactive Kitchen Sink Showcase
- [x] Build an organized Kitchen Sink catalog view:
  - [x] Token Inspector (Colors, Radiuses, Font Families)
  - [x] Typography Sandbox
  - [x] Component Variant Matrix (Buttons, Badges, Tabs, Accordions, Cards, Features)
  - [x] Direct Kitchen Sink floating navigator button

### Phase 4: Landing Page Assembly & Feature Graphics
- [x] **Step 4.1: Overall Page Assembly & Layout**
  - [x] Assemble **Hero Section**: badge, display heading, subtitle, dual CTAs, and 3D Infinite Marquee.
  - [x] Assemble **Key Features Section ("Ключевые возможности")**: title, `Tab` row, `AutoAdvancingFeatureList`, and 3 bottom `UspCard` elements.
  - [x] Assemble **Audience Section ("Umaigra — это для всех")**: stacked `FeatureContainer` blocks for Teachers and Students.
  - [x] Assemble **FAQ Section**: title, accordion list, and pre-footer CTA banner.
  - [x] Assemble **Footer** with legal links and action icons.

- [x] **Step 4.2: Hero Dual 3D Infinite Marquee**
  - [x] Integrated 14 game thumbnails in `public/images/games/`.
  - [x] Implemented dual counter-scrolling infinite tracks with 3D perspective distortion and alpha gradient fade masks.

- [x] **Step 4.3: Modular Multi-Language & Tab-Scoped Content**
  - [x] Created `src/data/landing/` (`types.ts`, `ru.ts`, `en.ts`, `index.ts`).
  - [x] Structured `KeyFeaturesContent` with tab-scoped step sequences and dynamic graphic key bindings.
  - [x] Connected `/images/sections/ForTeachers.webp` and `/images/sections/ForStudents.webp` assets.

- [x] **Step 4.4: UI Refactoring & Viewport Playback Controls**
  - [x] Removed outer double browser frames; standardized neutral card wrapper with 16:10 aspect ratio.
  - [x] Converted inner content grids and editor canvases to `flex-1` / `h-full` to eliminate vertical dead space.
  - [x] Dynamic React key remounting for 0s animation resets across step switches.
  - [x] Added `IntersectionObserver` in `AutoAdvancingFeatureList` to defer auto-advancing timers and CSS keyframes until scrolled into view.

- [ ] **Step 4.5: Language Switcher Runtime Integration**
  - [ ] Connect language dropdown in `HeaderMenu` to dynamically toggle between `ru` and `en` content across `LandingPage`.

- [ ] **Step 4.6: Responsive QA & Deployment**
  - [ ] Final visual QA on mobile (<640px) and tablet (768px-1024px) viewports.
  - [ ] Verify clean `npm run build` and production asset bundle.

---

## Verification & Review
- [x] **TypeScript Validation**: `npx tsc --noEmit` exits with 0 errors.
- [x] **Production Build**: `npm run build` completes successfully and produces optimized assets in `dist/`.
