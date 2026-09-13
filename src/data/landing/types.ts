export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderContent {
  navItems: NavItem[];
  ctaLabel: string;
  currentLang: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryCtaCaption: string;
}

export interface FeatureStepItem {
  step: string;
  title: string;
  description: string;
  url: string;
  graphicKey: string;
}

export type FeatureTabIconKey = 'gamepad' | 'pencil' | 'sparkles' | 'sprout';

export interface FeatureTab {
  id: number;
  label: string;
  iconKey: FeatureTabIconKey;
  steps: FeatureStepItem[];
}

export type UspCardIconKey = 'activity' | 'presentation' | 'smile';

export interface UspCardItem {
  title: string;
  description: string;
  iconKey: UspCardIconKey;
}

export interface KeyFeaturesContent {
  title: string;
  tabs: FeatureTab[];
  moreTitle: string;
  uspCards: UspCardItem[];
}

export type AudiencePillIconKey =
  | 'hourglass'
  | 'book'
  | 'sprout'
  | 'gamepad'
  | 'star'
  | 'wand';

export interface AudiencePill {
  title: string;
  description: string;
  iconKey: AudiencePillIconKey;
}

export interface AudienceCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  pills: AudiencePill[];
}

export interface AudienceContent {
  titlePrefix: string;
  titleSuffix: string;
  teachers: AudienceCard;
  students: AudienceCard;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PreFooterCta {
  primaryCta: string;
  primaryCtaCaption: string;
  secondaryCta: string;
}

export interface FaqContent {
  title: string;
  items: FaqItem[];
  cta: PreFooterCta;
}

export interface FooterContent {
  links: NavItem[];
}

export interface LandingContent {
  header: HeaderContent;
  hero: HeroContent;
  keyFeatures: KeyFeaturesContent;
  audience: AudienceContent;
  faq: FaqContent;
  footer: FooterContent;
}
