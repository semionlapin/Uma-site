# Umaigra (Умайгра) — Web Platform

**Umaigra** is an interactive educational platform designed for classroom learning, tablets, interactive smartboards, and inclusive education. It enables teachers, educators, and creators to build, play, and monetize gamified learning quests and interactive exercises.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with Figma Design Tokens
- **Component Primitives**: [Class Variance Authority (CVA)](https://cva.style/docs) + `clsx` + `tailwind-merge`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Self-hosted Google Fonts (`Rubik`, `Montserrat`) via `@fontsource` (Zero CDN)
- **Animations**: GPU-accelerated CSS Keyframes, React dynamic key transitions, and Intersection Observer viewport controls

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── landing/              # Landing page sections & custom graphics
│   │   ├── graphics/         # Interactive mock browser feature animations
│   │   └── HeroMarquee.tsx   # 3D Dual Infinite Marquee stage
│   └── ui/                   # Modular CVA UI Kit components
│       ├── buttons/          # Button, IconButton
│       ├── navigation/       # HeaderMenu, NavItem, Footer
│       ├── cards/            # UspCard, SuppositoryCard (UspPill)
│       ├── cards-layout/     # AutoAdvancingFeatureList, FeatureContainer
│       ├── feedback/         # Tab, Accordion, ProgressDeterminate
│       └── media/            # Logo, Tile
├── data/
│   ├── heroGames.ts          # Hero marquee game cards metadata
│   └── landing/              # Localized content models (types.ts, ru.ts, en.ts)
├── lib/
│   └── utils.ts              # cn helper (clsx + twMerge)
├── pages/
│   ├── LandingPage.tsx       # Main marketing landing page
│   └── KitchenSink.tsx       # Interactive UI Kit design token showcase
└── index.css                 # Global CSS variables & token scales
```

---

## 🛠️ Quick Start

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Type Checking & Production Build
```bash
npx tsc --noEmit
npm run build
```
The production bundle is generated in the `dist/` directory.
