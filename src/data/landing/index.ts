import { ruContent } from './ru';
import { enContent } from './en';
import type { LandingContent } from './types';

export * from './types';
export * from './ru';
export * from './en';

export type Locale = 'ru' | 'en';

export const locales: Record<Locale, LandingContent> = {
  ru: ruContent,
  en: enContent,
};

export const defaultContent: LandingContent = ruContent;
