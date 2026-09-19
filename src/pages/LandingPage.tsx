import React, { useState } from 'react';
import {
  Sparkles,
  Hourglass,
  BookOpenCheck,
  Sprout,
  Gamepad2,
  PencilRuler,
  Star,
  Wand2,
  Activity,
  Presentation,
  Smile,
  Compass,
} from 'lucide-react';
import {
  HeaderMenu,
  Footer,
  Button,
  Tab,
  Accordion,
  UspCard,
  AutoAdvancingFeatureList,
  FeatureContainer,
  Logo,
} from '@/components/ui';
import { HeroMarquee } from '@/components/landing/HeroMarquee';
import * as Graphics from '@/components/landing/graphics';
import { defaultContent } from '@/data/landing';
import type {
  LandingContent,
  FeatureTabIconKey,
  UspCardIconKey,
  AudiencePillIconKey,
} from '@/data/landing';

interface LandingPageProps {
  content?: LandingContent;
}

const graphicsMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FindGame01: Graphics.FindGame01,
  FindGame02: Graphics.FindGame02,
  FindGame03: Graphics.FindGame03,
  CreateGame01: Graphics.CreateGame01,
  CreateGame02: Graphics.CreateGame02,
  CreateGame03: Graphics.CreateGame03,
  GenerateGame01: Graphics.GenerateGame01,
  GenerateGame02: Graphics.GenerateGame02,
  GenerateGame03: Graphics.GenerateGame03,
  SellGame01: Graphics.SellGame01,
  SellGame02: Graphics.SellGame02,
  SellGame03: Graphics.SellGame03,
};

const featureTabIcons: Record<
  FeatureTabIconKey,
  React.ComponentType<{ className?: string }>
> = {
  gamepad: Gamepad2,
  pencil: PencilRuler,
  sparkles: Sparkles,
  sprout: Sprout,
};

const uspIcons: Record<
  UspCardIconKey,
  React.ComponentType<{ className?: string }>
> = {
  activity: Activity,
  presentation: Presentation,
  smile: Smile,
};

const audiencePillIcons: Record<
  AudiencePillIconKey,
  React.ComponentType<{ className?: string }>
> = {
  hourglass: Hourglass,
  book: BookOpenCheck,
  sprout: Sprout,
  gamepad: Gamepad2,
  star: Star,
  wand: Wand2,
};

export const LandingPage: React.FC<LandingPageProps> = ({
  content = defaultContent,
}) => {
  const [activeKeyFeatureTab, setActiveKeyFeatureTab] = useState<number>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const activeTab =
    content.keyFeatures.tabs.find((tab) => tab.id === activeKeyFeatureTab) ||
    content.keyFeatures.tabs[0];
  const activeSteps = activeTab?.steps || [];

  return (
    <div className="min-h-screen bg-surface-base text-text-neutral font-body flex flex-col selection:bg-surface-brand-subtle selection:text-text-neutral">
      {/* 1. TOP NAVIGATION (Sticky Header without bottom border) */}
      <HeaderMenu
        items={content.header.navItems}
        ctaLabel={content.header.ctaLabel}
        currentLang={content.header.currentLang}
        className="sticky top-0 z-50 backdrop-blur-md bg-surface-base/80"
      />

      {/* 2. HERO SECTION */}
      <section className="w-full flex flex-col items-center justify-center pt-4 pb-6 sm:pb-8 lg:pb-12">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full bg-surface-accent-1-tertiary rounded-card overflow-hidden pt-24 pb-12 flex flex-col items-center text-center">
            {/* Promo / Heading / Description / CTA Block */}
            <div className="flex flex-col items-center text-center gap-12 w-full max-w-4xl px-4 sm:px-6">
              {/* Text Block: Promo + Headline + Subtitle (spacing-200 / 8px gap) */}
              <div className="flex flex-col items-center gap-2 max-w-4xl">
                {/* Promo Line */}
                <div className="inline-flex items-center gap-2 text-text-inverse">
                  <Sparkles className="size-5 text-surface-warning fill-surface-warning" />
                  <span className="font-heading font-normal text-base text-text-inverse">
                    {content.hero.badge}
                  </span>
                </div>

                {/* Display Headline */}
                <h1 className="text-display-hero text-text-inverse text-center">
                  {content.hero.title}
                  {content.hero.titleHighlight}
                </h1>

                {/* Subtitle */}
                <p className="text-body-p2 text-text-inverse-tertiary max-w-2xl text-center leading-6">
                  {content.hero.description}
                </p>
              </div>

              {/* Dual CTAs with helper caption */}
              <div className="flex flex-col sm:flex-row items-start justify-center gap-3 w-full max-w-md sm:max-w-[500px]">
                <div className="w-full sm:flex-1">
                  <Button
                    variant="primary"
                    negative
                    size="lg"
                    className="w-full"
                    onClick={() => {}}
                  >
                    {content.hero.primaryCta}
                  </Button>
                </div>
                <div className="flex flex-col items-center w-full sm:flex-1 gap-2">
                  <Button
                    variant="subtle"
                    negative
                    size="lg"
                    className="w-full"
                    onClick={() => {}}
                  >
                    {content.hero.secondaryCta}
                  </Button>
                  <span className="text-body-p3 text-text-neutral-tertiary text-center">
                    {content.hero.secondaryCtaCaption}
                  </span>
                </div>
              </div>
            </div>

            {/* 3D Infinite Dual Marquee (spacing-600 / 24px margin top) */}
            <HeroMarquee className="w-full mt-6 bg-surface-accent-1-tertiary" />
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES SECTION ("Ключевые возможности") */}
      <section className="w-full py-16 md:py-24 bg-surface-base flex flex-col items-center">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12 md:gap-16">
          {/* Section Header & Tabs with exact spacing-1200 (48px) gap */}
          <div className="flex flex-col items-center gap-12 w-full">
            <h2 className="text-h1 text-text-neutral text-center">
              {content.keyFeatures.title}
            </h2>

            {/* Interactive Tab Bar Group */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full">
              {content.keyFeatures.tabs.map((tab) => {
                const Icon = featureTabIcons[tab.iconKey];
                return (
                  <Tab
                    key={tab.id}
                    size="md"
                    leadingIcon={Icon}
                    isSelected={activeKeyFeatureTab === tab.id}
                    onClick={() => setActiveKeyFeatureTab(tab.id)}
                  >
                    {tab.label}
                  </Tab>
                );
              })}
            </div>
          </div>

          {/* Auto-advancing feature carousel (transparent surface without card wrappers) */}
          <div className="w-full">
            <AutoAdvancingFeatureList
              key={activeKeyFeatureTab}
              duration={5000}
              items={activeSteps.map((step, stepIdx) => {
                const GraphicComponent =
                  graphicsMap[step.graphicKey] || Graphics.CreateGame01;
                return {
                  step: step.step,
                  title: step.title,
                  description: step.description,
                  url: step.url,
                  media: GraphicComponent ? (
                    <GraphicComponent
                      key={`${activeKeyFeatureTab}-${stepIdx}-${step.graphicKey}`}
                    />
                  ) : undefined,
                };
              })}
            />

          </div>

          {/* Subheading: "А ещё..." */}
          <div className="flex flex-col items-center gap-2 pt-4">
            <h3 className="text-h3 text-text-neutral text-center">
              {content.keyFeatures.moreTitle}
            </h3>
          </div>

          {/* 3-Column USP Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {content.keyFeatures.uspCards.map((card, idx) => {
              const Icon = uspIcons[card.iconKey];
              return (
                <UspCard
                  key={idx}
                  title={card.title}
                  description={card.description}
                  icon={Icon}
                  tileVariant="brand"
                  className="w-full"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. AUDIENCE SECTION ("Umaigra — это для всех") */}
      <section className="w-full py-16 md:py-24 bg-surface-base flex flex-col items-center">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12 md:gap-16">
          {/* Section Header with Brand Logo Mark Glyph */}
          <div className="flex items-center justify-center gap-3 text-center flex-wrap">
            <span className="text-h1 text-text-neutral">
              {content.audience.titlePrefix}
            </span>
            <Logo
              variant="mark"
              className="size-8 sm:size-10 inline-block align-middle"
            />
            <span className="text-h1 text-text-neutral">
              {content.audience.titleSuffix}
            </span>
          </div>

          {/* Teacher Card: Lime Canvas */}
          <FeatureContainer
            variant="brand"
            title={content.audience.teachers.title}
            description={content.audience.teachers.description}
            pills={content.audience.teachers.pills.map((pill) => ({
              icon: audiencePillIcons[pill.iconKey],
              title: pill.title,
              description: pill.description,
              tileVariant: 'brand',
            }))}
            image={{
              src: content.audience.teachers.imageSrc,
              alt: content.audience.teachers.imageAlt,
            }}
          />

          {/* Student Card: Soft Violet Canvas */}
          <FeatureContainer
            variant="accent1"
            title={content.audience.students.title}
            description={content.audience.students.description}
            pills={content.audience.students.pills.map((pill) => ({
              icon: audiencePillIcons[pill.iconKey],
              title: pill.title,
              description: pill.description,
              tileVariant: 'brand',
            }))}
            image={{
              src: content.audience.students.imageSrc,
              alt: content.audience.students.imageAlt,
            }}
          />
        </div>
      </section>

      {/* 5. FAQ SECTION & PRE-FOOTER CTA (No divider borders) */}
      <section className="w-full py-16 md:py-24 bg-surface-base-hover flex flex-col items-center">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
          {/* FAQ Title */}
          <div className="flex flex-col items-center text-center gap-2">
            <h2 className="text-h2 text-text-neutral">
              {content.faq.title}
            </h2>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-4 w-full max-w-[600px]">
            {content.faq.items.map((item, idx) => (
              <Accordion
                key={idx}
                isOpen={openFaqIndex === idx}
                onToggle={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                title={item.question}
                variant="borderless"
              >
                {item.answer}
              </Accordion>
            ))}
          </div>

          {/* Pre-Footer Dual CTA Banner */}
          <div className="flex flex-col sm:flex-row gap-3 items-start justify-center max-w-[600px] w-full pt-4">
            <div className="flex flex-col items-center w-full sm:w-1/2 gap-1.5">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {}}
              >
                {content.faq.cta.primaryCta}
              </Button>
              <span className="text-body-p3 text-text-neutral-secondary">
                {content.faq.cta.primaryCtaCaption}
              </span>
            </div>
            <div className="w-full sm:w-1/2">
              <Button
                variant="subtle"
                size="lg"
                className="w-full"
                onClick={() => {}}
              >
                {content.faq.cta.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <Footer links={content.footer.links} />

      {/* Floating Kitchen Sink quick switcher button */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="#kitchen-sink"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-neutral text-text-neutral text-xs font-heading font-semibold border border-border-neutral-subtle shadow-md hover:bg-surface-base-hover transition-colors"
          title="Open UI Kit Kitchen Sink"
        >
          <Compass className="size-4 text-surface-brand" />
          <span>Kitchen Sink</span>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;

