import React, { useState } from 'react';
import {
  Palette,
  Type,
  Layout,
  Square,
  Layers,
  Film,
  Sparkles,
  Play,
  Plus,
  ArrowRight,
  Check,
  Settings,
  X,
  Search,
  Heart,
  Share2,
  Apple,
  Award,
  BookOpen,
  Zap,
  Target,
  Compass,
  SendHorizontal,
  ShieldCheck,
  Flame,
  Activity,
  GraduationCap,
  Clock,
  RotateCcw,
  Pause,
} from 'lucide-react';
import {
  Button,
  IconButton,
  Logo,
  Tile,
  NavItem,
  HeaderMenu,
  Footer,
  YoutubeIcon,
  Tab,
  Accordion,
  UspPill,
  UspCard,
  ProgressDeterminate,
  AutoAdvancingFeatureList,
  FeatureContainer,
} from '@/components/ui';
import { FindGame01, FindGame02, FindGame03, CreateGame01, CreateGame02, CreateGame03, GenerateGame01, GenerateGame02, GenerateGame03, SellGame01, SellGame02, SellGame03 } from '@/components/landing/graphics';


export const KitchenSink: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'typography' | 'buttons' | 'navigation' | 'cards' | 'accordions' | 'progress' | 'media'>('tokens');
  const [selectedDemoTab, setSelectedDemoTab] = useState<'all' | 'quizzes' | 'flashcards' | 'games'>('quizzes');
  const [demoProgress, setDemoProgress] = useState<number>(65);

  return (
    <div className="min-h-screen bg-surface-base text-text-neutral font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-surface-base/80 border-b border-border-neutral-subtle px-6 py-4">
        <div className="max-w-page mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-heading font-semibold text-2xl text-text-neutral">
              Umaigra <span className="text-surface-brand">UI Kit</span>
            </span>
            <span className="bg-surface-brand-subtle text-text-brand px-2.5 py-0.5 rounded-full text-xs font-semibold">
              Kitchen Sink
            </span>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex gap-1 bg-surface-neutral p-1 rounded-full border border-border-neutral-subtle shadow-xs">
            {[
              { id: 'tokens', label: 'Color Tokens', icon: Palette },
              { id: 'typography', label: 'Typography', icon: Type },
              { id: 'buttons', label: 'Buttons', icon: Square },
              { id: 'navigation', label: 'Navigation', icon: Compass },
              { id: 'cards', label: 'Cards & Layout', icon: Layout },
              { id: 'accordions', label: 'Accordions', icon: Layers },
              { id: 'progress', label: 'Progress', icon: Activity },
              { id: 'media', label: 'Media & Video', icon: Film },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold transition-all ${
                  activeTab === id
                    ? 'bg-surface-accent-1-tertiary text-text-inverse shadow-xs'
                    : 'text-text-neutral-secondary hover:text-text-neutral hover:bg-surface-base-hover'
                }`}
              >
                <Icon className="size-3.5" />
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-page mx-auto p-6 md:p-12 space-y-12">
        {/* TAB 1: COLOR TOKENS */}
        {activeTab === 'tokens' && (
          <section className="space-y-12">
            <div>
              <h2 className="text-h2 text-text-neutral">Design Tokens: Semantic Colors</h2>
              <p className="text-body-p2 text-text-neutral-secondary mt-1">
                Full styleguide specification across Surface, Text, Border, and Icon tokens organized by semantic category.
              </p>
            </div>

            {/* 1. SURFACE COLORS */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-4">
                <div>
                  <h3 className="text-h3 text-text-neutral">1. Surface Colors</h3>
                  <p className="text-body-p3 text-text-neutral-secondary">
                    Background fills for canvases, cards, buttons, badges, and overlays (<code className="text-xs font-mono bg-surface-base px-1.5 py-0.5 rounded">--surface-*</code>)
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-base text-text-neutral-secondary">
                  34 Tokens
                </span>
              </div>

              {/* Subcategories */}
              <div className="space-y-6">
                {[
                  {
                    category: 'Base & Canvas',
                    tokens: [
                      { name: 'surface/base/default', cssVar: '--surface-base-default', hex: '#F9F7F2', class: 'bg-surface-base', border: 'border border-border-neutral-subtle' },
                      { name: 'surface/base/default:hover', cssVar: '--surface-base-default-hover', hex: '#F2EFE8', class: 'bg-surface-base-hover' },
                      { name: 'surface/base/secondary', cssVar: '--surface-base-secondary', hex: '#F2EFE8', class: 'bg-surface-base-secondary' },
                      { name: 'surface/base/secondary:hover', cssVar: '--surface-base-secondary-hover', hex: '#E5E0D6', class: 'bg-surface-base-secondary-hover' },
                    ],
                  },
                  {
                    category: 'Neutral & Cards',
                    tokens: [
                      { name: 'surface/neutral/default', cssVar: '--surface-neutral-default', hex: '#FFFFFF', class: 'bg-surface-neutral', border: 'border border-border-neutral-subtle' },
                      { name: 'surface/neutral/default:hover', cssVar: '--surface-neutral-default-hover', hex: '#FAFAFA', class: 'bg-surface-neutral-hover', border: 'border border-border-neutral-subtle' },
                      { name: 'surface/neutral/secondary', cssVar: '--surface-neutral-secondary', hex: '#FAFAFA', class: 'bg-surface-neutral-secondary', border: 'border border-border-neutral-subtle' },
                      { name: 'surface/neutral/secondary:hover', cssVar: '--surface-neutral-secondary-hover', hex: '#F4F4F5', class: 'bg-surface-neutral-secondary-hover' },
                      { name: 'surface/neutral/tertiary', cssVar: '--surface-neutral-tertiary', hex: '#E4E4E7', class: 'bg-surface-neutral-tertiary' },
                      { name: 'surface/neutral/tertiary:hover', cssVar: '--surface-neutral-tertiary-hover', hex: '#D4D4D8', class: 'bg-surface-neutral-tertiary-hover' },
                    ],
                  },
                  {
                    category: 'Brand (Lime Uma)',
                    tokens: [
                      { name: 'surface/brand/default', cssVar: '--surface-brand-default', hex: '#CDE83E', class: 'bg-surface-brand' },
                      { name: 'surface/brand/default:hover', cssVar: '--surface-brand-default-hover', hex: '#B6D119', class: 'bg-surface-brand-hover' },
                      { name: 'surface/brand/subtle', cssVar: '--surface-brand-subtle', hex: '#E6F699', class: 'bg-surface-brand-subtle' },
                      { name: 'surface/brand/secondary', cssVar: '--surface-brand-secondary', hex: '#7F8811', class: 'bg-surface-brand-secondary', textLight: true },
                      { name: 'surface/brand/secondary:hover', cssVar: '--surface-brand-secondary-hover', hex: '#6A6E15', class: 'bg-surface-brand-secondary-hover', textLight: true },
                    ],
                  },
                  {
                    category: 'Accent 1 (Violet)',
                    tokens: [
                      { name: 'surface/accent-1/default', cssVar: '--surface-accent-1-default', hex: '#CEAAEA', class: 'bg-surface-accent-1' },
                      { name: 'surface/accent-1/default:hover', cssVar: '--surface-accent-1-default-hover', hex: '#B37DDB', class: 'bg-surface-accent-1-hover' },
                      { name: 'surface/accent-1/secondary', cssVar: '--surface-accent-1-secondary', hex: '#5E2488', class: 'bg-surface-accent-1-secondary', textLight: true },
                      { name: 'surface/accent-1/secondary:hover', cssVar: '--surface-accent-1-secondary-hover', hex: '#461966', class: 'bg-surface-accent-1-secondary-hover', textLight: true },
                      { name: 'surface/accent-1/tertiary', cssVar: '--surface-accent-1-tertiary', hex: '#31143D', class: 'bg-surface-accent-1-tertiary', textLight: true },
                      { name: 'surface/accent-1/tertiary:hover', cssVar: '--surface-accent-1-tertiary-hover', hex: '#1D0A26', class: 'bg-surface-accent-1-tertiary-hover', textLight: true },
                    ],
                  },
                  {
                    category: 'Accent 2 (Sky)',
                    tokens: [
                      { name: 'surface/accent-2/default', cssVar: '--surface-accent-2-default', hex: '#BAE6FD', class: 'bg-surface-accent-2' },
                      { name: 'surface/accent-2/default:hover', cssVar: '--surface-accent-2-default-hover', hex: '#7DD3FC', class: 'bg-surface-accent-2-hover' },
                      { name: 'surface/accent-2/secondary', cssVar: '--surface-accent-2-secondary', hex: '#7DD3FC', class: 'bg-surface-accent-2-secondary' },
                      { name: 'surface/accent-2/secondary:hover', cssVar: '--surface-accent-2-secondary-hover', hex: '#64C3F4', class: 'bg-surface-accent-2-secondary-hover' },
                    ],
                  },
                  {
                    category: 'Feedback: Danger, Warning, Positive',
                    tokens: [
                      { name: 'surface/danger/default', cssVar: '--surface-danger-default', hex: '#EC5E89', class: 'bg-surface-danger' },
                      { name: 'surface/danger/default:hover', cssVar: '--surface-danger-default-hover', hex: '#E34878', class: 'bg-surface-danger-hover' },
                      { name: 'surface/danger/secondary', cssVar: '--surface-danger-secondary', hex: '#FCE4EC', class: 'bg-surface-danger-secondary' },
                      { name: 'surface/warning/default', cssVar: '--surface-warning-default', hex: '#FCD34D', class: 'bg-surface-warning' },
                      { name: 'surface/warning/default:hover', cssVar: '--surface-warning-default-hover', hex: '#FBBF24', class: 'bg-surface-warning-hover' },
                      { name: 'surface/warning/secondary', cssVar: '--surface-warning-secondary', hex: '#FEF3C7', class: 'bg-surface-warning-secondary' },
                      { name: 'surface/positive/default', cssVar: '--surface-positive-default', hex: '#86EFAC', class: 'bg-surface-positive' },
                      { name: 'surface/positive/default:hover', cssVar: '--surface-positive-default-hover', hex: '#4ADE80', class: 'bg-surface-positive-hover' },
                      { name: 'surface/positive/secondary', cssVar: '--surface-positive-secondary', hex: '#DCFCE7', class: 'bg-surface-positive-secondary' },
                    ],
                  },
                  {
                    category: 'Disabled & Utilities',
                    tokens: [
                      { name: 'surface/disabled/default', cssVar: '--surface-disabled-default', hex: '#E4E4E7', class: 'bg-surface-disabled' },
                      { name: 'surface/disabled/secondary', cssVar: '--surface-disabled-secondary', hex: '#F4F4F5', class: 'bg-surface-disabled-secondary' },
                      { name: 'surface/utilities/scrim', cssVar: '--surface-utilities-scrim', hex: 'rgba(255,255,255,0.85)', class: 'bg-surface-utilities-scrim', border: 'border border-border-neutral-subtle' },
                      { name: 'surface/utilities/overlay', cssVar: '--surface-utilities-overlay', hex: 'rgba(12,12,13,0.50)', class: 'bg-surface-utilities-overlay', textLight: true },
                      { name: 'surface/utilities/hover', cssVar: '--surface-utilities-hover', hex: 'rgba(12,12,13,0.08)', class: 'bg-surface-utilities-hover', border: 'border border-border-neutral-subtle' },
                      { name: 'surface/utilities/sticky', cssVar: '--surface-utilities-sticky', hex: 'rgba(249,247,242,0.80)', class: 'bg-surface-utilities-sticky', border: 'border border-border-neutral-subtle' },
                    ],
                  },
                ].map((group) => (
                  <div key={group.category} className="space-y-2.5">
                    <span className="text-xs font-semibold text-text-neutral-secondary tracking-wide uppercase block">
                      {group.category}
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                      {group.tokens.map((token) => (
                        <div
                          key={token.name}
                          className={`p-3.5 rounded-2xl shadow-xs flex flex-col justify-between h-24 transition-transform hover:scale-[1.02] ${
                            token.class
                          } ${token.border || ''}`}
                        >
                          <span
                            className={`text-xs font-semibold leading-tight break-words ${
                              token.textLight ? 'text-white' : 'text-text-neutral'
                            }`}
                          >
                            {token.name}
                          </span>
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-[10px] font-mono opacity-80 ${
                                token.textLight ? 'text-white' : 'text-text-neutral-secondary'
                              }`}
                            >
                              {token.hex}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. TEXT COLORS */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-4">
                <div>
                  <h3 className="text-h3 text-text-neutral">2. Text Colors</h3>
                  <p className="text-body-p3 text-text-neutral-secondary">
                    Typographic color styles for body text, headings, links, states, and inverse contrasts (<code className="text-xs font-mono bg-surface-base px-1.5 py-0.5 rounded">--text-*</code>)
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-base text-text-neutral-secondary">
                  21 Tokens
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'text/neutral/default', cssVar: '--text-neutral-default', hex: '#371850', sample: 'Primary body & headings', style: { color: 'var(--text-neutral-default)' } },
                  { name: 'text/neutral/secondary', cssVar: '--text-neutral-secondary', hex: '#6E6178', sample: 'Secondary body & subtitles', style: { color: 'var(--text-neutral-secondary)' } },
                  { name: 'text/neutral/tertiary', cssVar: '--text-neutral-tertiary', hex: '#9E96A6', sample: 'Captions & helper text', style: { color: 'var(--text-neutral-tertiary)' } },
                  { name: 'text/brand/default', cssVar: '--text-brand-default', hex: '#B6D119', sample: 'Brand accent text', style: { color: 'var(--text-brand-default)' } },
                  { name: 'text/brand/on-brand-default', cssVar: '--text-brand-on-brand-default', hex: '#371850', sample: 'On-brand button text', style: { color: 'var(--text-brand-on-brand-default)' }, bg: 'bg-surface-brand' },
                  { name: 'text/accent-1/default', cssVar: '--text-accent-1-default', hex: '#9551C7', sample: 'Violet accent text', style: { color: 'var(--text-accent-1-default)' } },
                  { name: 'text/accent-1/on-accent-1-default', cssVar: '--text-accent-1-on-accent-1-default', hex: '#7935AB', sample: 'Violet emphasis', style: { color: 'var(--text-accent-1-on-accent-1-default)' } },
                  { name: 'text/accent-1/on-accent-1-secondary', cssVar: '--text-accent-1-on-accent-1-secondary', hex: '#D6EF5E', sample: 'Lime on dark violet', style: { color: 'var(--text-accent-1-on-accent-1-secondary)' }, bg: 'bg-surface-accent-1-tertiary' },
                  { name: 'text/accent-1/on-accent-1-tertiary', cssVar: '--text-accent-1-on-accent-1-tertiary', hex: '#E6F699', sample: 'Lime subtle on dark', style: { color: 'var(--text-accent-1-on-accent-1-tertiary)' }, bg: 'bg-surface-accent-1-tertiary' },
                  { name: 'text/accent-2/default', cssVar: '--text-accent-2-default', hex: '#0EA5E9', sample: 'Sky blue text', style: { color: 'var(--text-accent-2-default)' } },
                  { name: 'text/accent-2/on-accent-2-default', cssVar: '--text-accent-2-on-accent-2-default', hex: '#0284C7', sample: 'Deep sky text', style: { color: 'var(--text-accent-2-on-accent-2-default)' } },
                  { name: 'text/danger/default', cssVar: '--text-danger-default', hex: '#B52E58', sample: 'Danger message text', style: { color: 'var(--text-danger-default)' } },
                  { name: 'text/danger/on-danger-secondary', cssVar: '--text-danger-on-danger-secondary', hex: '#912044', sample: 'Deep danger text', style: { color: 'var(--text-danger-on-danger-secondary)' }, bg: 'bg-surface-danger-secondary' },
                  { name: 'text/warning/default', cssVar: '--text-warning-default', hex: '#D97706', sample: 'Warning alert text', style: { color: 'var(--text-warning-default)' } },
                  { name: 'text/warning/on-warning-secondary', cssVar: '--text-warning-on-warning-secondary', hex: '#92400E', sample: 'Deep warning text', style: { color: 'var(--text-warning-on-warning-secondary)' }, bg: 'bg-surface-warning-secondary' },
                  { name: 'text/positive/default', cssVar: '--text-positive-default', hex: '#009951', sample: 'Positive success text', style: { color: 'var(--text-positive-default)' } },
                  { name: 'text/positive/on-positive-secondary', cssVar: '--text-positive-on-positive-secondary', hex: '#065F32', sample: 'Deep success text', style: { color: 'var(--text-positive-on-positive-secondary)' }, bg: 'bg-surface-positive-secondary' },
                  { name: 'text/disabled/default', cssVar: '--text-disabled-default', hex: '#A1A1AA', sample: 'Disabled state text', style: { color: 'var(--text-disabled-default)' } },
                  { name: 'text/inverse/default', cssVar: '--text-inverse-default', hex: 'rgba(255,255,255,0.95)', sample: 'Inverse high contrast', style: { color: 'var(--text-inverse-default)' }, bg: 'bg-surface-accent-1-tertiary' },
                  { name: 'text/inverse/secondary', cssVar: '--text-inverse-secondary', hex: 'rgba(255,255,255,0.85)', sample: 'Inverse medium contrast', style: { color: 'var(--text-inverse-secondary)' }, bg: 'bg-surface-accent-1-tertiary' },
                  { name: 'text/inverse/tertiary', cssVar: '--text-inverse-tertiary', hex: 'rgba(255,255,255,0.70)', sample: 'Inverse subtle text', style: { color: 'var(--text-inverse-tertiary)' }, bg: 'bg-surface-accent-1-tertiary' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`p-4 rounded-2xl border border-border-neutral-subtle flex flex-col justify-between space-y-3 ${
                      item.bg || 'bg-surface-base'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className={`text-xs font-semibold ${item.bg ? 'text-white/90' : 'text-text-neutral'}`}>
                        {item.name}
                      </span>
                      <span className={`text-[10px] font-mono ${item.bg ? 'text-white/70' : 'text-text-neutral-secondary'}`}>
                        {item.hex}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-black/5 dark:border-white/10">
                      <p className="text-sm font-semibold tracking-tight" style={item.style}>
                        {item.sample}
                      </p>
                      <span className={`text-[10px] font-mono block mt-1 ${item.bg ? 'text-white/60' : 'text-text-neutral-secondary'}`}>
                        var({item.cssVar})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. BORDER COLORS */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-4">
                <div>
                  <h3 className="text-h3 text-text-neutral">3. Border Colors</h3>
                  <p className="text-body-p3 text-text-neutral-secondary">
                    Outline and divider tokens for containers, cards, inputs, and chips (<code className="text-xs font-mono bg-surface-base px-1.5 py-0.5 rounded">--border-*</code>)
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-base text-text-neutral-secondary">
                  18 Tokens
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: 'border/neutral/default', cssVar: '--border-neutral-default', hex: '#BDB7C2', style: { borderColor: 'var(--border-neutral-default)' } },
                  { name: 'border/neutral/strong', cssVar: '--border-neutral-strong', hex: '#83788C', style: { borderColor: 'var(--border-neutral-strong)' } },
                  { name: 'border/neutral/subtle', cssVar: '--border-neutral-subtle', hex: '#DDD9E0', style: { borderColor: 'var(--border-neutral-subtle)' } },
                  { name: 'border/brand/default', cssVar: '--border-brand-default', hex: '#B6D119', style: { borderColor: 'var(--border-brand-default)' } },
                  { name: 'border/accent-1/default', cssVar: '--border-accent-1-default', hex: '#9551C7', style: { borderColor: 'var(--border-accent-1-default)' } },
                  { name: 'border/accent-1/on-accent-1-default', cssVar: '--border-accent-1-on-accent-1-default', hex: '#B37DDB', style: { borderColor: 'var(--border-accent-1-on-accent-1-default)' } },
                  { name: 'border/accent-2/default', cssVar: '--border-accent-2-default', hex: '#0EA5E9', style: { borderColor: 'var(--border-accent-2-default)' } },
                  { name: 'border/accent-2/on-accent-2-default', cssVar: '--border-accent-2-on-accent-2-default', hex: '#64C3F4', style: { borderColor: 'var(--border-accent-2-on-accent-2-default)' } },
                  { name: 'border/danger/default', cssVar: '--border-danger-default', hex: '#E34878', style: { borderColor: 'var(--border-danger-default)' } },
                  { name: 'border/danger/on-danger-secondary', cssVar: '--border-danger-on-danger-secondary', hex: '#EC5E89', style: { borderColor: 'var(--border-danger-on-danger-secondary)' } },
                  { name: 'border/warning/default', cssVar: '--border-warning-default', hex: '#FBBF24', style: { borderColor: 'var(--border-warning-default)' } },
                  { name: 'border/warning/on-warning-secondary', cssVar: '--border-warning-on-warning-secondary', hex: '#FCD34D', style: { borderColor: 'var(--border-warning-on-warning-secondary)' } },
                  { name: 'border/positive/default', cssVar: '--border-positive-default', hex: '#4ADE80', style: { borderColor: 'var(--border-positive-default)' } },
                  { name: 'border/positive/on-positive-secondary', cssVar: '--border-positive-on-positive-secondary', hex: '#86EFAC', style: { borderColor: 'var(--border-positive-on-positive-secondary)' } },
                  { name: 'border/disabled/default', cssVar: '--border-disabled-default', hex: '#E4E4E7', style: { borderColor: 'var(--border-disabled-default)' } },
                  { name: 'border/disabled/secondary', cssVar: '--border-disabled-secondary', hex: '#F4F4F5', style: { borderColor: 'var(--border-disabled-secondary)' } },
                  { name: 'border/inverse/default', cssVar: '--border-inverse-default', hex: 'rgba(255,255,255,0.20)', style: { borderColor: 'var(--border-inverse-default)' }, bg: 'bg-surface-accent-1-tertiary' },
                  { name: 'border/inverse/strong', cssVar: '--border-inverse-strong', hex: 'rgba(255,255,255,0.12)', style: { borderColor: 'var(--border-inverse-strong)' }, bg: 'bg-surface-accent-1-tertiary' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`p-4 rounded-2xl border-2 flex flex-col justify-between h-24 ${
                      item.bg || 'bg-surface-base'
                    }`}
                    style={item.style}
                  >
                    <span className={`text-xs font-semibold leading-tight ${item.bg ? 'text-white' : 'text-text-neutral'}`}>
                      {item.name}
                    </span>
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono ${item.bg ? 'text-white/70' : 'text-text-neutral-secondary'}`}>
                        {item.hex}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. ICON COLORS */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-4">
                <div>
                  <h3 className="text-h3 text-text-neutral">4. Icon Colors</h3>
                  <p className="text-body-p3 text-text-neutral-secondary">
                    Color tokens for vector icons and pictograms across all semantic states (<code className="text-xs font-mono bg-surface-base px-1.5 py-0.5 rounded">--icon-*</code>)
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-base text-text-neutral-secondary">
                  21 Tokens
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {[
                  { name: 'icon/neutral/default', cssVar: '--icon-neutral-default', hex: '#371850', style: { color: 'var(--icon-neutral-default)' } },
                  { name: 'icon/neutral/secondary', cssVar: '--icon-neutral-secondary', hex: '#6E6178', style: { color: 'var(--icon-neutral-secondary)' } },
                  { name: 'icon/neutral/tertiary', cssVar: '--icon-neutral-tertiary', hex: '#9E96A6', style: { color: 'var(--icon-neutral-tertiary)' } },
                  { name: 'icon/brand/default', cssVar: '--icon-brand-default', hex: '#B6D119', style: { color: 'var(--icon-brand-default)' } },
                  { name: 'icon/brand/on-brand-default', cssVar: '--icon-brand-on-brand-default', hex: '#371850', style: { color: 'var(--icon-brand-on-brand-default)' }, bg: 'bg-surface-brand' },
                  { name: 'icon/brand/on-brand-alternative', cssVar: '--icon-brand-on-brand-alternative', hex: '#5C5E17', style: { color: 'var(--icon-brand-on-brand-alternative)' }, bg: 'bg-surface-brand' },
                  { name: 'icon/accent-1/default', cssVar: '--icon-accent-1-default', hex: '#9551C7', style: { color: 'var(--icon-accent-1-default)' } },
                  { name: 'icon/accent-1/on-accent-1-default', cssVar: '--icon-accent-1-on-accent-1-default', hex: '#7935AB', style: { color: 'var(--icon-accent-1-on-accent-1-default)' } },
                  { name: 'icon/accent-1/on-accent-1-secondary', cssVar: '--icon-accent-1-on-accent-1-secondary', hex: '#D6EF5E', style: { color: 'var(--icon-accent-1-on-accent-1-secondary)' }, bg: 'bg-surface-accent-1-tertiary' },
                  { name: 'icon/accent-1/on-accent-1-tertiary', cssVar: '--icon-accent-1-on-accent-1-tertiary', hex: '#E6F699', style: { color: 'var(--icon-accent-1-on-accent-1-tertiary)' }, bg: 'bg-surface-accent-1-tertiary' },
                  { name: 'icon/accent-2/default', cssVar: '--icon-accent-2-default', hex: '#0EA5E9', style: { color: 'var(--icon-accent-2-default)' } },
                  { name: 'icon/accent-2/on-accent-2-default', cssVar: '--icon-accent-2-on-accent-2-default', hex: '#0284C7', style: { color: 'var(--icon-accent-2-on-accent-2-default)' } },
                  { name: 'icon/danger/default', cssVar: '--icon-danger-default', hex: '#B52E58', style: { color: 'var(--icon-danger-default)' } },
                  { name: 'icon/danger/on-danger-secondary', cssVar: '--icon-danger-on-danger-secondary', hex: '#912044', style: { color: 'var(--icon-danger-on-danger-secondary)' }, bg: 'bg-surface-danger-secondary' },
                  { name: 'icon/warning/default', cssVar: '--icon-warning-default', hex: '#D97706', style: { color: 'var(--icon-warning-default)' } },
                  { name: 'icon/warning/on-warning-secondary', cssVar: '--icon-warning-on-warning-secondary', hex: '#92400E', style: { color: 'var(--icon-warning-on-warning-secondary)' }, bg: 'bg-surface-warning-secondary' },
                  { name: 'icon/positive/default', cssVar: '--icon-positive-default', hex: '#009951', style: { color: 'var(--icon-positive-default)' } },
                  { name: 'icon/positive/on-positive-secondary', cssVar: '--icon-positive-on-positive-secondary', hex: '#065F32', style: { color: 'var(--icon-positive-on-positive-secondary)' }, bg: 'bg-surface-positive-secondary' },
                  { name: 'icon/disabled/default', cssVar: '--icon-disabled-default', hex: '#A1A1AA', style: { color: 'var(--icon-disabled-default)' } },
                  { name: 'icon/inverse/default', cssVar: '--icon-inverse-default', hex: 'rgba(255,255,255,0.95)', style: { color: 'var(--icon-inverse-default)' }, bg: 'bg-surface-accent-1-tertiary' },
                  { name: 'icon/inverse/secondary', cssVar: '--icon-inverse-secondary', hex: 'rgba(255,255,255,0.85)', style: { color: 'var(--icon-inverse-secondary)' }, bg: 'bg-surface-accent-1-tertiary' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`p-3.5 rounded-2xl border border-border-neutral-subtle flex flex-col justify-between h-28 shadow-xs ${
                      item.bg || 'bg-surface-base'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Sparkles className="size-5" style={item.style} />
                      <span className={`text-[10px] font-mono ${item.bg ? 'text-white/70' : 'text-text-neutral-secondary'}`}>
                        {item.hex}
                      </span>
                    </div>
                    <div>
                      <span className={`text-xs font-semibold leading-tight block truncate ${item.bg ? 'text-white' : 'text-text-neutral'}`}>
                        {item.name}
                      </span>
                      <span className={`text-[10px] font-mono block truncate ${item.bg ? 'text-white/60' : 'text-text-neutral-secondary'}`}>
                        {item.cssVar}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: TYPOGRAPHY */}
        {activeTab === 'typography' && (
          <section className="space-y-12">
            <div>
              <h2 className="text-h2 text-text-neutral">Design Tokens: Typography System</h2>
              <p className="text-body-p2 text-text-neutral-secondary mt-1">
                Full typographic hierarchy paired with local fonts: <strong className="font-heading">Rubik</strong> (Display, Headings, Titles) and <strong className="font-body">Montserrat</strong> (Body Copy & Captions).
              </p>
            </div>

            {/* FONT FAMILIES OVERVIEW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-neutral p-6 rounded-card border border-border-neutral-subtle space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-brand-subtle text-text-brand uppercase tracking-wider">
                    Heading Font
                  </span>
                  <span className="text-xs font-mono text-text-neutral-secondary">Rubik (400, 500, 600, 700)</span>
                </div>
                <h3 className="font-heading font-semibold text-3xl text-text-neutral">
                  Rubik SemiBold & Bold
                </h3>
                <p className="font-heading text-sm text-text-neutral-secondary">
                  АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ abcdefghijklmnopqrstuvwxyz 1234567890
                </p>
              </div>

              <div className="bg-surface-neutral p-6 rounded-card border border-border-neutral-subtle space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-accent-1 text-text-neutral uppercase tracking-wider">
                    Body Font
                  </span>
                  <span className="text-xs font-mono text-text-neutral-secondary">Montserrat (400, 500, 600, 700)</span>
                </div>
                <h3 className="font-body font-semibold text-3xl text-text-neutral">
                  Montserrat Regular & Medium
                </h3>
                <p className="font-body text-sm text-text-neutral-secondary">
                  АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ abcdefghijklmnopqrstuvwxyz 1234567890
                </p>
              </div>
            </div>

            {/* 1. DISPLAY & HEADINGS */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-4">
                <div>
                  <h3 className="text-h3 text-text-neutral">1. Display & Headings</h3>
                  <p className="text-body-p3 text-text-neutral-secondary">
                    Hero statements, marketing headlines, and section dividers in <strong className="font-heading">Rubik SemiBold (600)</strong>
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-base text-text-neutral-secondary">
                  6 Styles
                </span>
              </div>

              <div className="space-y-6">
                {/* Display Giant */}
                <div className="pb-6 border-b border-border-neutral-subtle space-y-2">
                  <div className="flex items-center justify-between text-xs text-text-neutral-secondary font-mono">
                    <span>Display / Giant • <code className="bg-surface-base px-1.5 py-0.5 rounded">.text-display-giant</code></span>
                    <span>90px / 98px • SemiBold 600</span>
                  </div>
                  <p className="text-display-giant text-text-neutral break-words">
                    Umaigra
                  </p>
                </div>

                {/* Display Hero */}
                <div className="pb-6 border-b border-border-neutral-subtle space-y-2">
                  <div className="flex items-center justify-between text-xs text-text-neutral-secondary font-mono">
                    <span>Display / Hero • <code className="bg-surface-base px-1.5 py-0.5 rounded">.text-display-hero</code></span>
                    <span>68px / 80px • SemiBold 600</span>
                  </div>
                  <p className="text-display-hero text-text-neutral">
                    Преврати урок в игру!
                  </p>
                </div>

                {/* Heading H1 */}
                <div className="pb-6 border-b border-border-neutral-subtle space-y-2">
                  <div className="flex items-center justify-between text-xs text-text-neutral-secondary font-mono">
                    <span>Heading / H1 • <code className="bg-surface-base px-1.5 py-0.5 rounded">.text-h1</code></span>
                    <span>48px / 60px • SemiBold 600</span>
                  </div>
                  <p className="text-h1 text-text-neutral">
                    Ключевые возможности платформы
                  </p>
                </div>

                {/* Heading H2 */}
                <div className="pb-6 border-b border-border-neutral-subtle space-y-2">
                  <div className="flex items-center justify-between text-xs text-text-neutral-secondary font-mono">
                    <span>Heading / H2 • <code className="bg-surface-base px-1.5 py-0.5 rounded">.text-h2</code></span>
                    <span>38px / 48px • SemiBold 600</span>
                  </div>
                  <p className="text-h2 text-text-neutral">
                    Для учителей, учеников и целых школ
                  </p>
                </div>

                {/* Heading H3 */}
                <div className="pb-6 border-b border-border-neutral-subtle space-y-2">
                  <div className="flex items-center justify-between text-xs text-text-neutral-secondary font-mono">
                    <span>Heading / H3 • <code className="bg-surface-base px-1.5 py-0.5 rounded">.text-h3</code></span>
                    <span>28px / 36px • SemiBold 600</span>
                  </div>
                  <p className="text-h3 text-text-neutral">
                    Интерактивные шаблоны викторин и карточек
                  </p>
                </div>

                {/* Heading H4 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-text-neutral-secondary font-mono">
                    <span>Heading / H4 • <code className="bg-surface-base px-1.5 py-0.5 rounded">.text-h4</code></span>
                    <span>20px / 28px • SemiBold 600</span>
                  </div>
                  <p className="text-h4 text-text-neutral">
                    Живые турниры, рейтинги и детальная аналитика прогресса
                  </p>
                </div>
              </div>
            </div>

            {/* 2. TITLE STYLES */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-4">
                <div>
                  <h3 className="text-h3 text-text-neutral">2. Title Styles</h3>
                  <p className="text-body-p3 text-text-neutral-secondary">
                    Card titles, buttons, tabs, input headers, and badges in <strong className="font-heading">Rubik</strong> across Base, Small, and Extra Small subcategories.
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-base text-text-neutral-secondary">
                  6 Styles
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Title / Base - SemiBold',
                    cssClass: '.text-title-base',
                    spec: '16px / 24px • SemiBold 600',
                    element: <p className="text-title-base text-text-neutral">Создать интерактивную игру (Base SemiBold)</p>,
                  },
                  {
                    name: 'Title / Base - Regular',
                    cssClass: '.text-title-base-regular',
                    spec: '16px / 24px • Regular 400',
                    element: <p className="text-title-base-regular text-text-neutral">Создать интерактивную игру (Base Regular)</p>,
                  },
                  {
                    name: 'Title / Small - SemiBold',
                    cssClass: '.text-title-sm',
                    spec: '12px / 18px • SemiBold 600',
                    element: <p className="text-title-sm text-text-neutral">Начать сессию с классом (Small SemiBold)</p>,
                  },
                  {
                    name: 'Title / Small - Regular',
                    cssClass: '.text-title-sm-regular',
                    spec: '12px / 18px • Regular 400',
                    element: <p className="text-title-sm-regular text-text-neutral">Начать сессию с классом (Small Regular)</p>,
                  },
                  {
                    name: 'Title / Extra Small - Bold',
                    cssClass: '.text-title-xs-bold',
                    spec: '10px / 16px • Bold 700',
                    element: <p className="text-title-xs-bold text-text-neutral">БЫСТРЫЙ СТАРТ • НОВЫЙ ШАБЛОН</p>,
                  },
                  {
                    name: 'Title / Extra Small - Regular',
                    cssClass: '.text-title-xs-regular',
                    spec: '10px / 16px • Regular 400',
                    element: <p className="text-title-xs-regular text-text-neutral">Быстрый старт • Новый шаблон</p>,
                  },
                ].map((item) => (
                  <div key={item.name} className="p-4 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-2 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[11px] text-text-neutral-secondary font-mono">
                      <span>{item.name}</span>
                      <span>{item.spec}</span>
                    </div>
                    <div className="pt-2 border-t border-black/5 dark:border-white/5">
                      {item.element}
                      <span className="text-[10px] font-mono text-text-neutral-secondary block mt-1">
                        {item.cssClass}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. BODY STYLES */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-4">
                <div>
                  <h3 className="text-h3 text-text-neutral">3. Body Styles</h3>
                  <p className="text-body-p3 text-text-neutral-secondary">
                    Paragraph copy, descriptions, captions, and tooltips in <strong className="font-body">Montserrat</strong> across P1, P2, P3, and P4 subcategories.
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-base text-text-neutral-secondary">
                  12 Styles (P1–P4 × Regular, Medium, SemiBold)
                </span>
              </div>

              <div className="space-y-6">
                {[
                  {
                    subcat: 'Body / P1 (Large — 20px / 28px)',
                    styles: [
                      {
                        weight: 'Regular 400',
                        css: 'font-body font-normal text-lg leading-7',
                        text: 'Большие вводные абзацы и акцентные описания уроков для интерактивных досок.',
                      },
                      {
                        weight: 'Medium 500',
                        css: 'font-body font-medium text-lg leading-7',
                        text: 'Большие вводные абзацы и акцентные описания уроков для интерактивных досок.',
                      },
                      {
                        weight: 'SemiBold 600',
                        css: 'font-body font-semibold text-lg leading-7',
                        text: 'Большие вводные абзацы и акцентные описания уроков для интерактивных досок.',
                      },
                    ],
                  },
                  {
                    subcat: 'Body / P2 (Base — 16px / 24px)',
                    styles: [
                      {
                        weight: 'Regular 400 (.text-body-p2)',
                        css: 'text-body-p2',
                        text: 'Основной текст интерфейса, карточек и статей. Читабелен на смартфонах, планшетах и мониторах.',
                      },
                      {
                        weight: 'Medium 500',
                        css: 'font-body font-medium text-base leading-6',
                        text: 'Основной текст интерфейса, карточек и статей. Читабелен на смартфонах, планшетах и мониторах.',
                      },
                      {
                        weight: 'SemiBold 600',
                        css: 'font-body font-semibold text-base leading-6',
                        text: 'Основной текст интерфейса, карточек и статей. Читабелен на смартфонах, планшетах и мониторах.',
                      },
                    ],
                  },
                  {
                    subcat: 'Body / P3 (Small — 12px / 18px)',
                    styles: [
                      {
                        weight: 'Regular 400 (.text-body-p3)',
                        css: 'text-body-p3',
                        text: 'Вспомогательные подписи, метаданные, даты публикаций и сноски в карточках заданий.',
                      },
                      {
                        weight: 'Medium 500',
                        css: 'font-body font-medium text-xs leading-[18px]',
                        text: 'Вспомогательные подписи, метаданные, даты публикаций и сноски в карточках заданий.',
                      },
                      {
                        weight: 'SemiBold 600',
                        css: 'font-body font-semibold text-xs leading-[18px]',
                        text: 'Вспомогательные подписи, метаданные, даты публикаций и сноски в карточках заданий.',
                      },
                    ],
                  },
                  {
                    subcat: 'Body / P4 (Extra Small / Caption — 10px / 16px)',
                    styles: [
                      {
                        weight: 'Regular 400 (.text-body-p4)',
                        css: 'text-body-p4',
                        text: 'Копирайты, юридическая информация, мини-метки и теги статусов.',
                      },
                      {
                        weight: 'Medium 500',
                        css: 'font-body font-medium text-[10px] leading-4',
                        text: 'Копирайты, юридическая информация, мини-метки и теги статусов.',
                      },
                      {
                        weight: 'SemiBold 600',
                        css: 'font-body font-semibold text-[10px] leading-4',
                        text: 'Копирайты, юридическая информация, мини-метки и теги статусов.',
                      },
                    ],
                  },
                ].map((group) => (
                  <div key={group.subcat} className="space-y-3">
                    <span className="text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider block">
                      {group.subcat}
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {group.styles.map((style) => (
                        <div key={style.weight} className="p-4 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-2 flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[11px] text-text-neutral-secondary font-mono">
                            <span>{style.weight}</span>
                          </div>
                          <p className={`${style.css} text-text-neutral pt-2 border-t border-black/5 dark:border-white/5`}>
                            {style.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: BUTTONS SHOWCASE */}
        {activeTab === 'buttons' && (
          <section className="space-y-12">
            <div>
              <h2 className="text-h2 text-text-neutral">Button Component (`Button.tsx`)</h2>
              <p className="text-body-p2 text-text-neutral-secondary mt-1">
                Built with CVA (<code className="text-xs bg-surface-neutral px-1.5 py-0.5 rounded font-mono">class-variance-authority</code>), semantic tokens, and slotted Lucide icons.
              </p>
            </div>

            {/* Matrix 1: All Variants x All Sizes */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">Variant × Size Matrix</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Live buttons with interactive hover/active states.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border-neutral-subtle text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider">
                      <th className="py-3 px-4">Variant</th>
                      <th className="py-3 px-4">Size: LG (56px)</th>
                      <th className="py-3 px-4">Size: MD (48px)</th>
                      <th className="py-3 px-4">Size: SM (36px)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-neutral-subtle text-sm">
                    {/* Primary */}
                    <tr>
                      <td className="py-4 px-4 font-semibold text-text-neutral">
                        Primary
                        <span className="block text-[11px] font-normal text-text-neutral-secondary">
                          bg-surface-brand
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="primary" size="lg">Button</Button>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="primary" size="md">Button</Button>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="primary" size="sm">Button</Button>
                      </td>
                    </tr>

                    {/* Neutral */}
                    <tr>
                      <td className="py-4 px-4 font-semibold text-text-neutral">
                        Neutral
                        <span className="block text-[11px] font-normal text-text-neutral-secondary">
                          bg-surface-accent-1-tertiary
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="neutral" size="lg">Button</Button>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="neutral" size="md">Button</Button>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="neutral" size="sm">Button</Button>
                      </td>
                    </tr>

                    {/* Subtle */}
                    <tr>
                      <td className="py-4 px-4 font-semibold text-text-neutral">
                        Subtle
                        <span className="block text-[11px] font-normal text-text-neutral-secondary">
                          border-border-neutral-strong
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="subtle" size="lg">Button</Button>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="subtle" size="md">Button</Button>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="subtle" size="sm">Button</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Matrix 2: Icon Slot Configurations */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">Icon Slot Variations</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Supporting <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">leadingIcon</code> and <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">trailingIcon</code> typed via Lucide icons.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Leading Icon */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <span className="text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider block">
                    Leading Icon
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="primary" size="lg" leadingIcon={Sparkles}>Создать игру</Button>
                    <Button variant="neutral" size="md" leadingIcon={Play}>Играть</Button>
                    <Button variant="subtle" size="sm" leadingIcon={Plus}>Добавить</Button>
                  </div>
                </div>

                {/* Trailing Icon */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <span className="text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider block">
                    Trailing Icon
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="primary" size="lg" trailingIcon={ArrowRight}>Далее</Button>
                    <Button variant="neutral" size="md" trailingIcon={ArrowRight}>Каталог</Button>
                    <Button variant="subtle" size="sm" trailingIcon={ArrowRight}>Подробнее</Button>
                  </div>
                </div>

                {/* Both Icons */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <span className="text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider block">
                    Both Icons
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="primary" size="lg" leadingIcon={Sparkles} trailingIcon={ArrowRight}>
                      Старт
                    </Button>
                    <Button variant="neutral" size="md" leadingIcon={Check} trailingIcon={ArrowRight}>
                      Готово
                    </Button>
                    <Button variant="subtle" size="sm" leadingIcon={Plus} trailingIcon={ArrowRight}>
                      Создать
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Matrix 3: States (Default vs Disabled) */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">Interactive States</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Comparison between Default, Interactive Hover, and Disabled states.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                  <span className="text-xs font-semibold text-text-neutral">Primary (Default & Disabled)</span>
                  <div className="flex flex-col gap-3">
                    <Button variant="primary" size="md" leadingIcon={Sparkles}>Active Primary</Button>
                    <Button variant="primary" size="md" leadingIcon={Sparkles} disabled>Disabled Primary</Button>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                  <span className="text-xs font-semibold text-text-neutral">Neutral (Default & Disabled)</span>
                  <div className="flex flex-col gap-3">
                    <Button variant="neutral" size="md" leadingIcon={Play}>Active Neutral</Button>
                    <Button variant="neutral" size="md" leadingIcon={Play} disabled>Disabled Neutral</Button>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                  <span className="text-xs font-semibold text-text-neutral">Subtle (Default & Disabled)</span>
                  <div className="flex flex-col gap-3">
                    <Button variant="subtle" size="md" leadingIcon={Plus}>Active Subtle</Button>
                    <Button variant="subtle" size="md" leadingIcon={Plus} disabled>Disabled Subtle</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* DIVIDER BETWEEN BUTTON AND ICONBUTTON */}
            <div className="pt-8 border-t border-border-neutral-subtle">
              <h2 className="text-h2 text-text-neutral">IconButton Component (`IconButton.tsx`)</h2>
              <p className="text-body-p2 text-text-neutral-secondary mt-1">
                Strict 1:1 circular action buttons built with CVA, accessibility attributes (<code className="text-xs bg-surface-neutral px-1.5 py-0.5 rounded font-mono">aria-label</code>), and typed Lucide icons.
              </p>
            </div>

            {/* IconButton Matrix 1: All Variants x All Sizes */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">IconButton: Variant × Size Matrix</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  1:1 circular aspect ratio across LG (56px), MD (48px), and SM (36px).
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border-neutral-subtle text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider">
                      <th className="py-3 px-4">Variant</th>
                      <th className="py-3 px-4">Size: LG (56px)</th>
                      <th className="py-3 px-4">Size: MD (48px)</th>
                      <th className="py-3 px-4">Size: SM (36px)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-neutral-subtle text-sm">
                    {/* Primary */}
                    <tr>
                      <td className="py-4 px-4 font-semibold text-text-neutral">
                        Primary
                        <span className="block text-[11px] font-normal text-text-neutral-secondary">
                          bg-surface-brand
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <IconButton variant="primary" size="lg" icon={Plus} aria-label="Add item" />
                          <IconButton variant="primary" size="lg" icon={Sparkles} aria-label="Sparkle action" />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <IconButton variant="primary" size="md" icon={Plus} aria-label="Add item" />
                          <IconButton variant="primary" size="md" icon={ArrowRight} aria-label="Next action" />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <IconButton variant="primary" size="sm" icon={Plus} aria-label="Add item" />
                          <IconButton variant="primary" size="sm" icon={Check} aria-label="Confirm action" />
                        </div>
                      </td>
                    </tr>

                    {/* Neutral */}
                    <tr>
                      <td className="py-4 px-4 font-semibold text-text-neutral">
                        Neutral
                        <span className="block text-[11px] font-normal text-text-neutral-secondary">
                          bg-surface-accent-1-tertiary
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <IconButton variant="neutral" size="lg" icon={Plus} aria-label="Add item" />
                          <IconButton variant="neutral" size="lg" icon={Settings} aria-label="Settings" />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <IconButton variant="neutral" size="md" icon={Plus} aria-label="Add item" />
                          <IconButton variant="neutral" size="md" icon={Play} aria-label="Play video" />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <IconButton variant="neutral" size="sm" icon={Plus} aria-label="Add item" />
                          <IconButton variant="neutral" size="sm" icon={Search} aria-label="Search" />
                        </div>
                      </td>
                    </tr>

                    {/* Subtle */}
                    <tr>
                      <td className="py-4 px-4 font-semibold text-text-neutral">
                        Subtle
                        <span className="block text-[11px] font-normal text-text-neutral-secondary">
                          bg-transparent
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <IconButton variant="subtle" size="lg" icon={Plus} aria-label="Add item" />
                          <IconButton variant="subtle" size="lg" icon={X} aria-label="Close modal" />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <IconButton variant="subtle" size="md" icon={Plus} aria-label="Add item" />
                          <IconButton variant="subtle" size="md" icon={Heart} aria-label="Favorite item" />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <IconButton variant="subtle" size="sm" icon={Plus} aria-label="Add item" />
                          <IconButton variant="subtle" size="sm" icon={Share2} aria-label="Share page" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* IconButton Matrix 2: Interactive & Disabled States */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">IconButton: Interactive & Disabled States</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Visual comparison between Active Default and Disabled states across variants.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Primary States */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <span className="text-xs font-semibold text-text-neutral">Primary Variant</span>
                  <div className="flex items-center justify-around p-3 bg-surface-neutral rounded-xl">
                    <div className="text-center space-y-1">
                      <IconButton variant="primary" size="md" icon={Plus} aria-label="Add item" />
                      <span className="text-[10px] text-text-neutral-secondary block font-mono">Default</span>
                    </div>
                    <div className="text-center space-y-1">
                      <IconButton variant="primary" size="md" icon={Plus} disabled aria-label="Add item disabled" />
                      <span className="text-[10px] text-text-neutral-secondary block font-mono">Disabled</span>
                    </div>
                  </div>
                </div>

                {/* Neutral States */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <span className="text-xs font-semibold text-text-neutral">Neutral Variant</span>
                  <div className="flex items-center justify-around p-3 bg-surface-neutral rounded-xl">
                    <div className="text-center space-y-1">
                      <IconButton variant="neutral" size="md" icon={Settings} aria-label="Settings" />
                      <span className="text-[10px] text-text-neutral-secondary block font-mono">Default</span>
                    </div>
                    <div className="text-center space-y-1">
                      <IconButton variant="neutral" size="md" icon={Settings} disabled aria-label="Settings disabled" />
                      <span className="text-[10px] text-text-neutral-secondary block font-mono">Disabled</span>
                    </div>
                  </div>
                </div>

                {/* Subtle States */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <span className="text-xs font-semibold text-text-neutral">Subtle Variant</span>
                  <div className="flex items-center justify-around p-3 bg-surface-neutral rounded-xl">
                    <div className="text-center space-y-1">
                      <IconButton variant="subtle" size="md" icon={X} aria-label="Close" />
                      <span className="text-[10px] text-text-neutral-secondary block font-mono">Default</span>
                    </div>
                    <div className="text-center space-y-1">
                      <IconButton variant="subtle" size="md" icon={X} disabled aria-label="Close disabled" />
                      <span className="text-[10px] text-text-neutral-secondary block font-mono">Disabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB: NAVIGATION SHOWCASE */}
        {activeTab === 'navigation' && (
          <section className="space-y-12">
            <div>
              <h2 className="text-h2 text-text-neutral">NavItem & Navigation (`NavItem.tsx`)</h2>
              <p className="text-body-p2 text-text-neutral-secondary mt-1">
                Semantic anchor links built with CVA, hover states, active route highlights, disabled states, and slotted Lucide icons.
              </p>
            </div>

            {/* Matrix 1: States */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">1. Navigation States</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Comparison between Default, Interactive Hover, Active Route, and Disabled states.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* Default */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-text-neutral block">Default</span>
                    <span className="text-[10px] font-mono text-text-neutral-secondary">isActive=false</span>
                  </div>
                  <div className="flex items-center justify-center p-3 bg-surface-neutral rounded-xl">
                    <NavItem href="#features">Возможности</NavItem>
                  </div>
                </div>

                {/* Hover */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-text-neutral block">Hover State</span>
                    <span className="text-[10px] font-mono text-text-neutral-secondary">hover:bg-black/5</span>
                  </div>
                  <div className="flex items-center justify-center p-3 bg-surface-neutral rounded-xl">
                    <NavItem href="#templates" className="bg-black/5">Шаблоны</NavItem>
                  </div>
                </div>

                {/* Active */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-text-neutral block">Active Route</span>
                    <span className="text-[10px] font-mono text-text-neutral-secondary">isActive=true</span>
                  </div>
                  <div className="flex items-center justify-center p-3 bg-surface-neutral rounded-xl">
                    <NavItem href="#pricing" isActive>Тарифы</NavItem>
                  </div>
                </div>

                {/* Disabled */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-text-neutral block">Disabled</span>
                    <span className="text-[10px] font-mono text-text-neutral-secondary">disabled=true</span>
                  </div>
                  <div className="flex items-center justify-center p-3 bg-surface-neutral rounded-xl">
                    <NavItem href="#soon" disabled>Скоро</NavItem>
                  </div>
                </div>
              </div>
            </div>

            {/* Matrix 2: Icon Slot Variations */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">2. Icon Slot Configurations</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Supporting leading icons, trailing icons, and text-only navigation labels.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Leading Icon */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <span className="text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider block">
                    Leading Icon
                  </span>
                  <div className="flex flex-col gap-2">
                    <NavItem href="#" leadingIcon={Sparkles}>О платформе</NavItem>
                    <NavItem href="#" leadingIcon={BookOpen}>Библиотека игр</NavItem>
                    <NavItem href="#" leadingIcon={Zap} isActive>Турниры</NavItem>
                  </div>
                </div>

                {/* Trailing Icon */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <span className="text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider block">
                    Trailing Icon
                  </span>
                  <div className="flex flex-col gap-2">
                    <NavItem href="#" trailingIcon={ArrowRight}>Все шаблоны</NavItem>
                    <NavItem href="#" trailingIcon={ArrowRight}>Документация</NavItem>
                    <NavItem href="#" trailingIcon={ArrowRight} disabled>API Справка</NavItem>
                  </div>
                </div>

                {/* Text Only */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <span className="text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider block">
                    Text Only
                  </span>
                  <div className="flex flex-col gap-2">
                    <NavItem href="#">Главная</NavItem>
                    <NavItem href="#" isActive>Учителям</NavItem>
                    <NavItem href="#">Ученикам</NavItem>
                  </div>
                </div>
              </div>
            </div>

            {/* Matrix 3: Context Variants */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">3. Styling Contexts</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Adaptable across light navigation, dark theme bars (<code className="text-xs font-mono bg-surface-base px-1.5 py-0.5 rounded">variant="inverse"</code>), and muted footer links (<code className="text-xs font-mono bg-surface-base px-1.5 py-0.5 rounded">variant="muted"</code>).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Default Light */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                  <span className="text-xs font-semibold text-text-neutral">Default (Light Bar)</span>
                  <div className="flex flex-wrap gap-2 p-3 bg-surface-neutral rounded-xl border border-border-neutral-subtle">
                    <NavItem variant="default" href="#" isActive>Главная</NavItem>
                    <NavItem variant="default" href="#">Каталог</NavItem>
                    <NavItem variant="default" href="#" disabled>Блог</NavItem>
                  </div>
                </div>

                {/* Dark Inverse */}
                <div className="p-5 rounded-2xl bg-surface-accent-1-tertiary border border-border-neutral-subtle space-y-3 text-white">
                  <span className="text-xs font-semibold text-white">Inverse (Dark Bar)</span>
                  <div className="flex flex-wrap gap-2 p-3 bg-black/20 rounded-xl border border-white/10">
                    <NavItem variant="inverse" href="#" isActive>Главная</NavItem>
                    <NavItem variant="inverse" href="#">Каталог</NavItem>
                    <NavItem variant="inverse" href="#" disabled>Блог</NavItem>
                  </div>
                </div>

                {/* Muted Footer */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                  <span className="text-xs font-semibold text-text-neutral">Muted (Footer / Secondary)</span>
                  <div className="flex flex-wrap gap-2 p-3 bg-surface-neutral rounded-xl border border-border-neutral-subtle">
                    <NavItem variant="muted" href="#">Политика</NavItem>
                    <NavItem variant="muted" href="#">Поддержка</NavItem>
                    <NavItem variant="muted" href="#">Контакты</NavItem>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Figma Component Set: Tab */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-h3 text-text-neutral">4. Tab (`Tab.tsx`)</h3>
                    <span className="bg-surface-brand-subtle text-text-brand px-2 py-0.5 rounded-full text-xs font-semibold">
                      Figma Component Set
                    </span>
                  </div>
                  <p className="text-body-p3 text-text-neutral-secondary mt-1">
                    Atomic pill tab component built with CVA, semantic <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">role="tab"</code>, active selected state (<strong className="font-heading">Lime Uma</strong>), hover states, disabled states, and slotted icons.
                  </p>
                </div>
              </div>

              {/* Matrix 1: Figma States × Sizes Matrix */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-h4 text-text-neutral">1. Visual States Matrix across Sizes</h4>
                  <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                    Comparison across Medium (48px / <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">size="md"</code>) and Small (36px / <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">size="sm"</code>).
                  </p>
                </div>

                {/* Medium Size (48px) */}
                <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                      Size: MD (48px Height • 24px Icon • px-6 py-3)
                    </span>
                    <span className="text-[10px] font-mono text-text-neutral-secondary">size="md"</span>
                  </div>
                  <div className="flex items-center gap-4 flex-wrap p-4 bg-surface-neutral/60 rounded-xl border border-border-neutral-subtle">
                    <div className="flex flex-col items-center gap-1.5">
                      <Tab size="md" leadingIcon={Plus}>Tab</Tab>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">Unselected</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <Tab size="md" leadingIcon={Plus} className="bg-surface-neutral-hover">Tab</Tab>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">Hover</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <Tab size="md" isSelected leadingIcon={Plus}>Tab</Tab>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">Selected</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <Tab size="md" disabled leadingIcon={Plus}>Tab</Tab>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">Disabled</span>
                    </div>
                  </div>
                </div>

                {/* Small Size (36px) */}
                <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                      Size: SM (36px Height • 20px Icon • px-3 py-1.5)
                    </span>
                    <span className="text-[10px] font-mono text-text-neutral-secondary">size="sm"</span>
                  </div>
                  <div className="flex items-center gap-4 flex-wrap p-4 bg-surface-neutral/60 rounded-xl border border-border-neutral-subtle">
                    <div className="flex flex-col items-center gap-1.5">
                      <Tab size="sm" leadingIcon={Plus}>Tab</Tab>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">Unselected</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <Tab size="sm" leadingIcon={Plus} className="bg-surface-neutral-hover">Tab</Tab>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">Hover</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <Tab size="sm" isSelected leadingIcon={Plus}>Tab</Tab>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">Selected</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <Tab size="sm" disabled leadingIcon={Plus}>Tab</Tab>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">Disabled</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Matrix 2: Icon Slot Options */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-h4 text-text-neutral">2. Icon Slot Variations</h4>
                  <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                    Leading icons, trailing icons, and text-only labels.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-surface-base border border-border-neutral-subtle flex flex-col items-center gap-3 text-center">
                    <span className="text-xs font-semibold text-text-neutral-secondary">Leading Icon</span>
                    <div className="flex gap-2">
                      <Tab size="sm" leadingIcon={Plus} isSelected>Добавить</Tab>
                      <Tab size="sm" leadingIcon={Sparkles}>Магия</Tab>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-surface-base border border-border-neutral-subtle flex flex-col items-center gap-3 text-center">
                    <span className="text-xs font-semibold text-text-neutral-secondary">Trailing Icon</span>
                    <div className="flex gap-2">
                      <Tab size="sm" trailingIcon={ArrowRight} isSelected>Далее</Tab>
                      <Tab size="sm" trailingIcon={ArrowRight}>Обзор</Tab>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-surface-base border border-border-neutral-subtle flex flex-col items-center gap-3 text-center">
                    <span className="text-xs font-semibold text-text-neutral-secondary">Text Only</span>
                    <div className="flex gap-2">
                      <Tab size="sm" isSelected>Все</Tab>
                      <Tab size="sm">Популярные</Tab>
                    </div>
                  </div>
                </div>
              </div>

              {/* Showcase 3: Interactive Tab Bar Filter */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-h4 text-text-neutral">3. Interactive Tab Bar Group</h4>
                    <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                      Direct collection of tabs spaced 12px (<code className="text-xs font-mono bg-surface-base px-1.5 py-0.5 rounded">gap-3</code> / <code className="text-xs font-mono bg-surface-base px-1.5 py-0.5 rounded">space-300</code>).
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface-base text-text-neutral-secondary">
                    Active: {selectedDemoTab}
                  </span>
                </div>

                <div role="tablist" aria-label="Game categories" className="flex items-center gap-3 flex-wrap">
                  <Tab
                    size="md"
                    isSelected={selectedDemoTab === 'all'}
                    onClick={() => setSelectedDemoTab('all')}
                    leadingIcon={Compass}
                  >
                    Все игры
                  </Tab>
                  <Tab
                    size="md"
                    isSelected={selectedDemoTab === 'quizzes'}
                    onClick={() => setSelectedDemoTab('quizzes')}
                    leadingIcon={Sparkles}
                  >
                    Викторины
                  </Tab>
                  <Tab
                    size="md"
                    isSelected={selectedDemoTab === 'flashcards'}
                    onClick={() => setSelectedDemoTab('flashcards')}
                    leadingIcon={BookOpen}
                  >
                    Карточки
                  </Tab>
                  <Tab
                    size="md"
                    isSelected={selectedDemoTab === 'games'}
                    onClick={() => setSelectedDemoTab('games')}
                    leadingIcon={Zap}
                  >
                    Турниры
                  </Tab>
                </div>
              </div>
            </div>

            {/* 5. Figma Component Set: HeaderMenu */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-h3 text-text-neutral">5. HeaderMenu (`HeaderMenu.tsx`)</h3>
                    <span className="bg-surface-brand-subtle text-text-brand px-2 py-0.5 rounded-full text-xs font-semibold">
                      Figma Component Set
                    </span>
                  </div>
                  <p className="text-body-p3 text-text-neutral-secondary mt-1">
                    Responsive top navigation menu with <strong className="font-heading">Logo</strong>, dynamic <strong className="font-heading">NavItem</strong> links, language selector pill (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">RU ⌵</code>), CTA action button, and mobile hamburger drawer.
                  </p>
                </div>
              </div>

              {/* Showcase 1: Fully Responsive Live Menu */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                    1. Live Responsive Header (Resize Browser to Test)
                  </span>
                  <span className="text-[10px] font-mono text-text-neutral-secondary">
                    breakpoint="auto" • sticky=false
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border-neutral-subtle shadow-xs bg-surface-base/50">
                  <HeaderMenu
                    items={[
                      { label: 'Игротека', href: '#games', isActive: true },
                      { label: 'Шаблоны', href: '#templates' },
                      { label: 'Тарифные планы', href: '#pricing' },
                      { label: 'Помощь', href: '#help' },
                    ]}
                    ctaLabel="Button"
                    onCtaClick={() => alert('CTA Button Clicked!')}
                  />
                </div>
              </div>

              {/* Showcase 2: Figma Desktop Breakpoint (1288px) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                    2. Figma Desktop Breakpoint View
                  </span>
                  <span className="text-[10px] font-mono text-text-neutral-secondary">
                    breakpoint="Desktop" • px-12 py-6
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border-neutral-subtle shadow-xs bg-surface-base/50">
                  <HeaderMenu
                    breakpoint="Desktop"
                    items={[
                      { label: 'Игротека', href: '#games' },
                      { label: 'Шаблоны', href: '#templates', isActive: true },
                      { label: 'Тарифные планы', href: '#pricing' },
                      { label: 'Помощь', href: '#help' },
                    ]}
                    ctaLabel="Button"
                  />
                </div>
              </div>

              {/* Showcase 3: Figma Tablet Breakpoint (768px) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                    3. Figma Tablet Breakpoint View (768px Width Container)
                  </span>
                  <span className="text-[10px] font-mono text-text-neutral-secondary">
                    breakpoint="Tablet" • px-6 py-4
                  </span>
                </div>
                <div className="max-w-[768px] mx-auto rounded-2xl overflow-hidden border border-border-neutral-subtle shadow-xs bg-surface-base/50">
                  <HeaderMenu
                    breakpoint="Tablet"
                    items={[
                      { label: 'Игротека', href: '#games' },
                      { label: 'Шаблоны', href: '#templates' },
                      { label: 'Тарифные планы', href: '#pricing' },
                      { label: 'Помощь', href: '#help' },
                    ]}
                    ctaLabel="Button"
                  />
                </div>
              </div>

              {/* Showcase 4: Figma Mobile Breakpoint (390px) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                    4. Figma Mobile Breakpoint View (390px Width Phone Simulation)
                  </span>
                  <span className="text-[10px] font-mono text-text-neutral-secondary">
                    breakpoint="Mobile" • px-4 py-3 • Toggle hamburger to test drawer
                  </span>
                </div>
                <div className="max-w-[390px] mx-auto rounded-3xl overflow-hidden border-2 border-border-neutral-strong shadow-md bg-surface-base/50">
                  <HeaderMenu
                    breakpoint="Mobile"
                    items={[
                      { label: 'Игротека', href: '#games' },
                      { label: 'Шаблоны', href: '#templates' },
                      { label: 'Тарифные планы', href: '#pricing' },
                      { label: 'Помощь', href: '#help' },
                    ]}
                    ctaLabel="Button"
                  />
                </div>
              </div>

              {/* Showcase 5: Dynamic Navigation & Custom Handlers */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                    5. Dynamic Navigation Props with Slotted Icons & Custom Labels
                  </span>
                  <span className="text-[10px] font-mono text-text-neutral-secondary">
                    Custom items[] + ctaLabel="Войти"
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border-neutral-subtle shadow-xs bg-surface-base/50">
                  <HeaderMenu
                    items={[
                      { label: 'Каталог игр', href: '#catalog', leadingIcon: Sparkles, isActive: true },
                      { label: 'Конструктор', href: '#builder', leadingIcon: Zap },
                      { label: 'Школам', href: '#schools' },
                      { label: 'База знаний', href: '#docs', trailingIcon: ArrowRight },
                    ]}
                    ctaLabel="Войти"
                    currentLang="RU"
                    languages={['RU', 'EN', 'KZ', 'UZ']}
                  />
                </div>
              </div>
            </div>

            {/* 5. Figma Component Set: Footer */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-h3 text-text-neutral">5. Footer (`Footer.tsx`)</h3>
                    <span className="bg-surface-brand-subtle text-text-brand px-2 py-0.5 rounded-full text-xs font-semibold">
                      Figma Component Set
                    </span>
                  </div>
                  <p className="text-body-p3 text-text-neutral-secondary mt-1">
                    Bottom footer navigation bar with Secondary <strong className="font-heading">Logo</strong>, copyright notice, dynamic <strong className="font-heading">NavItem</strong> links, and social action <strong className="font-heading">IconButton</strong> controls.
                  </p>
                </div>
              </div>

              {/* Showcase 1: Responsive Live Footer */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                    1. Live Responsive Footer (Resize Browser to Test)
                  </span>
                  <span className="text-[10px] font-mono text-text-neutral-secondary">
                    breakpoint="auto" • Desktop 3-col / Tablet 2-row / Mobile stacked
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border-neutral-subtle shadow-xs">
                  <Footer />
                </div>
              </div>

              {/* Showcase 2: Figma Desktop Breakpoint (1288px) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                    2. Figma Desktop Breakpoint View (1288px Full Width)
                  </span>
                  <span className="text-[10px] font-mono text-text-neutral-secondary">
                    breakpoint="Desktop" • p-12 • Inline 3-Column
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border-neutral-subtle shadow-xs">
                  <Footer breakpoint="Desktop" />
                </div>
              </div>

              {/* Showcase 3: Figma Tablet Breakpoint (768px) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                    3. Figma Tablet Breakpoint View (768px Width Container)
                  </span>
                  <span className="text-[10px] font-mono text-text-neutral-secondary">
                    breakpoint="Tablet" • Top links row + bottom brand/socials row
                  </span>
                </div>
                <div className="max-w-[768px] mx-auto rounded-2xl overflow-hidden border border-border-neutral-subtle shadow-xs">
                  <Footer breakpoint="Tablet" />
                </div>
              </div>

              {/* Showcase 4: Figma Mobile Breakpoint (390px) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                    4. Figma Mobile Breakpoint View (390px Width Phone Simulation)
                  </span>
                  <span className="text-[10px] font-mono text-text-neutral-secondary">
                    breakpoint="Mobile" • Vertical stack
                  </span>
                </div>
                <div className="max-w-[390px] mx-auto rounded-3xl overflow-hidden border-2 border-border-neutral-strong shadow-md">
                  <Footer breakpoint="Mobile" />
                </div>
              </div>

              {/* Showcase 5: Custom Dynamic Links & Channels */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                    5. Dynamic Content & Social Channels Customization
                  </span>
                  <span className="text-[10px] font-mono text-text-neutral-secondary">
                    Custom links[], socialLinks[], & custom copyright
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border-neutral-subtle shadow-xs">
                  <Footer
                    links={[
                      { label: 'О платформе', href: '#about' },
                      { label: 'Учителям и школам', href: '#teachers' },
                      { label: 'Партнёрская программа', href: '#partners' },
                      { label: 'Служба заботы', href: '#support' },
                    ]}
                    socialLinks={[
                      { icon: SendHorizontal, label: 'Telegram Канал', href: 'https://t.me/umaigra' },
                      { icon: YoutubeIcon, label: 'YouTube Канал', href: 'https://youtube.com/@umaigra' },
                      { icon: Share2, label: 'Поделиться', onClick: () => alert('Поделиться!') },
                    ]}
                    copyright="©2026 Umaigra EdTech. Создано для интерактивного образования."
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 4: CARDS & LAYOUT */}
        {activeTab === 'cards' && (
          <section className="space-y-16">
            {/* PART 1: VERTICAL USP CARD (UspCard.tsx) */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-h2 text-text-neutral">Vertical USP Card (`UspCard.tsx`)</h2>
                  <span className="bg-surface-brand-subtle text-text-brand px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    Figma Component: UspCard
                  </span>
                </div>
                <p className="text-body-p2 text-text-neutral-secondary mt-1">
                  Vertical benefit card with top circular <strong className="font-heading">Tile</strong> indicator, <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">rounded-card-sm</code> (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">rounded-[24px]</code>), <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">p-8</code> (32px padding), 16px gap, and exact typography hierarchy (<strong className="font-heading">Rubik SemiBold 16/24</strong> title & <strong className="font-body">Montserrat Regular 16/24</strong> description).
                </p>
              </div>

              {/* 1.1 Single Card & Variants (Fill vs Outline) */}
              <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
                <div>
                  <h3 className="text-h4 text-text-neutral">1. Single Card & Style Variants (Fill vs Outline)</h3>
                  <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                    Comparison between plain <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">variant="fill"</code> (solid surface) and <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">variant="outline"</code> (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">bordered=true</code>).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Fill Variant */}
                  <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                        Fill Variant (variant="fill" • Default)
                      </span>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">bg-surface-neutral • rounded-[24px]</span>
                    </div>
                    <div className="max-w-[370px]">
                      <UspCard
                        title="Выберите шаблон"
                        description="Найди нужную игровую механику в библиотеке под свою учебную задачу"
                        icon={Apple}
                        tileVariant="brand"
                      />
                    </div>
                  </div>

                  {/* Outline Variant */}
                  <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                        Outline Variant (variant="outline" / bordered)
                      </span>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">border-border-neutral • rounded-[24px]</span>
                    </div>
                    <div className="max-w-[370px]">
                      <UspCard
                        variant="outline"
                        title="Выберите шаблон"
                        description="Найди нужную игровую механику в библиотеке под свою учебную задачу"
                        icon={Apple}
                        tileVariant="brand"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 1.2 Multi-Card Responsive Row / Grid Layout Preview */}
              <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
                <div>
                  <h3 className="text-h4 text-text-neutral">2. Layout Showcase: Responsive 3-Column & 4-Column Grid Rows</h3>
                  <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                    Demonstration of how vertical USP cards align side-by-side in landing page feature sections across desktop, tablet, and mobile.
                  </p>
                </div>

                {/* 3-Column Grid on Base Canvas */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider block">
                    3-Column Benefit Grid (Fill Variant on Canvas)
                  </span>
                  <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <UspCard
                        title="1. Выберите шаблон"
                        description="Найди нужную игровую механику в библиотеке под свою учебную задачу"
                        icon={Apple}
                        tileVariant="brand"
                      />
                      <UspCard
                        title="2. Наполните контентом"
                        description="Добавьте свои вопросы, варианты ответов и мультимедиа за пару минут"
                        icon={Sparkles}
                        tileVariant="accent1"
                      />
                      <UspCard
                        title="3. Проведите игру"
                        description="Запустите турнир в классе или отправьте ученикам как домашнее задание"
                        icon={Zap}
                        tileVariant="accent2"
                      />
                    </div>
                  </div>
                </div>

                {/* 4-Column Feature Grid */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider block">
                    4-Column Feature Grid (Outline & Color Variations)
                  </span>
                  <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <UspCard
                        variant="outline"
                        title="Геймификация"
                        description="Баллы, бейджи и рейтинги для вовлечения учеников с первой секунды"
                        icon={Award}
                        tileVariant="brand"
                      />
                      <UspCard
                        variant="outline"
                        title="Умная аналитика"
                        description="Детальные отчеты по каждому ученику и проблемным темам программы"
                        icon={Target}
                        tileVariant="accent1"
                      />
                      <UspCard
                        variant="outline"
                        title="Готовая база"
                        description="10,000+ проверенных шаблонов от ведущих учителей и методистов"
                        icon={BookOpen}
                        tileVariant="accent2"
                      />
                      <UspCard
                        variant="outline"
                        title="Безопасность"
                        description="Полное соответствие требованиям защиты данных и стандартам ФГОС"
                        icon={ShieldCheck}
                        tileVariant="positive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PART 2: HORIZONTAL USP PILL (UspPill.tsx) */}
            <div className="space-y-12 pt-8 border-t border-border-neutral-subtle">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-h2 text-text-neutral">Horizontal USP Pill (`UspPill.tsx`)</h2>
                  <span className="bg-surface-brand-subtle text-text-brand px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    Figma Component: Suppositery
                  </span>
                </div>
                <p className="text-body-p2 text-text-neutral-secondary mt-1">
                  Concise horizontal USP & feature benefit pill container matching Figma's <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">Suppositery</code> specification. Features pill geometry (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">rounded-[64px]</code> / <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">rounded-pill-lg</code>), integrated <strong className="font-heading">Tile</strong> circular icon indicator, auto-layout padding (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">p-4</code>), 16px gap, and both plain <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">fill</code> and <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">outline</code> style variants.
                </p>
              </div>

              {/* Pill Style Variants */}
              <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
                <div>
                  <h3 className="text-h4 text-text-neutral">1. Style Variants (Plain Fill vs Outline)</h3>
                  <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                    Comparison between plain <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">variant="fill"</code> and <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">variant="outline"</code>.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Fill Variant */}
                  <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                        Plain Fill Variant (variant="fill" • Default)
                      </span>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">bg-surface-neutral • shadow-none</span>
                    </div>
                    <div className="space-y-3">
                      <UspPill
                        title="Захватывающий геймплей"
                        subtitle="Вовлекает учеников с первых минут урока"
                        icon={Sparkles}
                        tileVariant="brand"
                        className="w-full"
                      />
                      <UspPill
                        title="Умная статистика"
                        subtitle="Отслеживайте прогресс каждого ученика"
                        icon={Target}
                        tileVariant="accent1"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Outline Variant */}
                  <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                        Outline Variant (variant="outline" / bordered)
                      </span>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">border-border-neutral • bg-transparent</span>
                    </div>
                    <div className="space-y-3">
                      <UspPill
                        variant="outline"
                        title="Захватывающий геймплей"
                        subtitle="Вовлекает учеников с первых минут урока"
                        icon={Sparkles}
                        tileVariant="brand"
                        className="w-full"
                      />
                      <UspPill
                        variant="outline"
                        title="Умная статистика"
                        subtitle="Отслеживайте прогресс каждого ученика"
                        icon={Target}
                        tileVariant="accent1"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-Pill Layouts */}
              <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
                <div>
                  <h3 className="text-h4 text-text-neutral">2. Layout Showcase: Responsive Rows & Grids</h3>
                  <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                    Demonstration of horizontal USP pills in responsive rows and grids.
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider block">
                    Horizontal 3-Pill Row (Plain Fill Variant on Canvas)
                  </span>
                  <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <UspPill
                        title="1. Выберите шаблон"
                        subtitle="Викторины, карточки, поиск пар"
                        icon={Flame}
                        tileVariant="brand"
                      />
                      <UspPill
                        title="2. Добавьте вопросы"
                        subtitle="Свои или из базы Umaigra"
                        icon={Plus}
                        tileVariant="accent1"
                      />
                      <UspPill
                        title="3. Запустите игру"
                        subtitle="Ученики подключаются по PIN"
                        icon={Play}
                        tileVariant="accent2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PART 3: AUTO-ADVANCING FEATURE LIST (AutoAdvancingFeatureList.tsx) */}
            <div className="space-y-12 pt-8 border-t border-border-neutral-subtle">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-h2 text-text-neutral">Auto-Advancing Feature List (`AutoAdvancingFeatureList.tsx`)</h2>
                  <span className="bg-surface-brand-subtle text-text-brand px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    Figma Component: AutoAdvancingFeatureList
                  </span>
                </div>
                <p className="text-body-p2 text-text-neutral-secondary mt-1">
                  Interactive multi-step feature showcase component. Left column features stacked step triggers with smooth expand/collapse and an auto-advancing progress bar (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">5000ms</code> loop with pause-on-hover). Right column contains a framed browser mockup window (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">rounded-card-sm</code>, macOS 3-dot window controls, URL bar) with crossfading media assets.
                </p>
              </div>

              <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-4 border-b border-border-neutral-subtle pb-4">
                  <div>
                    <h3 className="text-h4 text-text-neutral">Interactive Live Demo</h3>
                    <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                      Hover over the card to pause auto-advancing; click any inactive step to jump immediately.
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-brand-subtle text-text-brand">
                    Auto-advancing 5.0s loop
                  </span>
                </div>

                <div className="p-4 sm:p-8 rounded-2xl bg-surface-base border border-border-neutral-subtle">
                  <AutoAdvancingFeatureList
                    duration={5000}
                    items={[
                      {
                        step: '01',
                        title: 'Выберите шаблон',
                        description: 'Найди нужную игровую механику в библиотеке под свою учебную задачу: викторины, карточки, поиск пар или турниры.',
                        url: 'www.umaigra.com/templates',
                      },
                      {
                        step: '02',
                        title: 'Наполните контентом',
                        description: 'Добавьте свои вопросы, варианты ответов, иллюстрации и подсказки за пару кликов или выберите готовый набор из базы.',
                        url: 'www.umaigra.com/editor',
                      },
                      {
                        step: '03',
                        title: 'Запустите интерактивную игру',
                        description: 'Ученики мгновенно подключаются со смартфонов или компьютеров по простому PIN-коду без долгой регистрации.',
                        url: 'www.umaigra.com/play/live',
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* PART 4: FEATURE CONTAINER (FeatureContainer.tsx) */}
            <div className="space-y-12 pt-8 border-t border-border-neutral-subtle">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-h2 text-text-neutral">Feature Container (`FeatureContainer.tsx`)</h2>
                  <span className="bg-surface-brand-subtle text-text-brand px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    Figma Component: FeatureContainer
                  </span>
                </div>
                <p className="text-body-p2 text-text-neutral-secondary mt-1">
                  Full-width section feature container with vibrant brand surface background (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">bg-surface-brand</code>), <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">rounded-card</code> (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">rounded-[36px]</code>), <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">p-6 sm:p-10 lg:p-16</code> padding, two-column responsive layout, stacked <strong className="font-heading">UspPill</strong> items on the left, and a framed media container on the right.
                </p>
              </div>

              {/* 4.1 Primary Brand FeatureContainer */}
              <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
                <div>
                  <h3 className="text-h4 text-text-neutral">1. Primary Brand Container (`variant="brand"`)</h3>
                  <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                    Demonstration of teacher-centric feature section with lime brand canvas, Rubik H1 heading, 3 stacked white USP pills, and framed media preview.
                  </p>
                </div>

                <div className="p-4 sm:p-8 rounded-2xl bg-surface-base border border-border-neutral-subtle">
                  <FeatureContainer
                    variant="brand"
                    title="Для учителей"
                    description="Создавайте увлекательные уроки за считанные минуты и вовлекайте весь класс в интерактивное обучение с готовыми игровыми шаблонами."
                    pills={[
                      {
                        icon: Clock,
                        title: 'Экономия времени',
                        description: 'Готовые шаблоны и автопроверка экономят до 5 часов в неделю',
                        tileVariant: 'brand',
                      },
                      {
                        icon: Sparkles,
                        title: '100% вовлечение',
                        description: 'Интерактивный формат удерживает внимание учеников на протяжении всего урока',
                        tileVariant: 'brand',
                      },
                      {
                        icon: GraduationCap,
                        title: 'Наглядная аналитика',
                        description: 'Мгновенные отчеты по успеваемости и пробелам в знаниях',
                        tileVariant: 'brand',
                      },
                    ]}
                    image={{
                      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
                      alt: 'Учитель и интерактивный урок',
                    }}
                  />
                </div>
              </div>

              {/* 4.2 Accent & Neutral Variants */}
              <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
                <div>
                  <h3 className="text-h4 text-text-neutral">2. Palette Variants (`variant="accent1"` & `variant="neutral"`)</h3>
                  <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                    Flexible colorways for varied landing page sections (e.g. For Parents, For Schools).
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Accent 1 */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider block">
                      Accent 1 Variant (Sky / Light Blue)
                    </span>
                    <div className="p-4 sm:p-8 rounded-2xl bg-surface-base border border-border-neutral-subtle">
                      <FeatureContainer
                        variant="accent1"
                        title="Для родителей"
                        description="Следите за прогрессом ребенка, поддерживайте интерес к учебе и превращайте домашние задания в полезную игру."
                        pills={[
                          {
                            icon: ShieldCheck,
                            title: 'Безопасная среда',
                            description: 'Без рекламы и нежелательного контента',
                            tileVariant: 'brand',
                          },
                          {
                            icon: Award,
                            title: 'Мотивация и награды',
                            description: 'Ребенок учится с удовольствием и зарабатывает достижения',
                            tileVariant: 'brand',
                          },
                        ]}
                        image={{
                          src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
                          alt: 'Обучение дома',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 5: ACCORDIONS */}
        {activeTab === 'accordions' && (
          <section className="space-y-12">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-h2 text-text-neutral">Accordion (`Accordion.tsx`)</h2>
                <span className="bg-surface-brand-subtle text-text-brand px-2.5 py-0.5 rounded-full text-xs font-semibold">
                  Figma Component: Accordion_Fat
                </span>
              </div>
              <p className="text-body-p2 text-text-neutral-secondary mt-1">
                Pill card collapsible container matching Figma's <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">Accordion_Fat</code> specifications with <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">rounded-[36px]</code> (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">rounded-card</code>), accessible trigger button, animated Lucide <strong className="font-heading">ChevronDown</strong> (180° rotation), and smooth grid expand/collapse transition.
              </p>
            </div>

            {/* Matrix 1: Figma Variant Comparison (Borderless vs Bordered × Closed vs Open) */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-8 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">1. Figma Exact Style Variants (Borderless vs Bordered)</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Side-by-side verification of <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">variant="borderless"</code> (Default) and <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">variant="bordered"</code> (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">bordered=true</code> / Figma 'Outine' style) across Closed and Open states.
                </p>
              </div>

              {/* 1.1 Borderless Variant */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-2">
                  <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                    Borderless Variant (variant="borderless" • Default)
                  </span>
                  <span className="text-[10px] font-mono text-text-neutral-secondary">shadow-xs • border-0</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Closed */}
                  <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-text-neutral">Closed State</span>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">isOpen=false</span>
                    </div>
                    <div className="max-w-[595px]">
                      <Accordion
                        variant="borderless"
                        title="Выберите шаблон"
                        isOpen={false}
                      >
                        Найди нужную игровую механику в библиотеке под свою учебную задачу
                      </Accordion>
                    </div>
                  </div>

                  {/* Open */}
                  <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-text-neutral">Open / Expanded State</span>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">isOpen=true</span>
                    </div>
                    <div className="max-w-[595px]">
                      <Accordion
                        variant="borderless"
                        title="Выберите шаблон"
                        isOpen={true}
                      >
                        Найди нужную игровую механику в библиотеке под свою учебную задачу
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1.2 Bordered Variant */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-2">
                  <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                    Bordered Variant (variant="bordered" / bordered=true • Figma 'Outine')
                  </span>
                  <span className="text-[10px] font-mono text-text-neutral-secondary">border-border-neutral (#BDB7C2)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Closed */}
                  <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-text-neutral">Closed State</span>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">isOpen=false • bordered=true</span>
                    </div>
                    <div className="max-w-[595px]">
                      <Accordion
                        bordered
                        title="Выберите шаблон"
                        isOpen={false}
                      >
                        Найди нужную игровую механику в библиотеке под свою учебную задачу
                      </Accordion>
                    </div>
                  </div>

                  {/* Open */}
                  <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-text-neutral">Open / Expanded State</span>
                      <span className="text-[10px] font-mono text-text-neutral-secondary">isOpen=true • bordered=true</span>
                    </div>
                    <div className="max-w-[595px]">
                      <Accordion
                        bordered
                        title="Выберите шаблон"
                        isOpen={true}
                      >
                        Найди нужную игровую механику в библиотеке под свою учебную задачу
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Matrix 2: Interactive Accordions & FAQ Group */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-neutral-subtle pb-4">
                <div>
                  <h3 className="text-h4 text-text-neutral">2. Interactive Click-to-Expand Accordion Group</h3>
                  <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                    Click any accordion row below to test smooth expanding/collapsing animations, keyboard navigation (<kbd className="text-xs font-mono bg-surface-base px-1.5 py-0.5 rounded">Enter</kbd> / <kbd className="text-xs font-mono bg-surface-base px-1.5 py-0.5 rounded">Space</kbd>), and ARIA accessibility.
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-brand-subtle text-text-brand">
                  Live Interactive
                </span>
              </div>

              <div className="max-w-[720px] space-y-4">
                <Accordion
                  defaultOpen={true}
                  title="1. Как создать свою первую игру на платформе Umaigra?"
                  leadingIcon={Sparkles}
                >
                  Выберите один из готовых шаблонов в каталоге (викторина, карточки, сопоставление), загрузите свои вопросы или сгенерируйте их с помощью ИИ, и нажмите кнопку запуска. Ученики могут подключиться по QR-коду или короткому пин-коду с любого смартфона или планшета.
                </Accordion>

                <Accordion
                  title="2. Нужна ли ученикам регистрация для участия в турнирах?"
                  leadingIcon={BookOpen}
                >
                  Нет, ученикам не нужно создавать аккаунт. Достаточно ввести имя или никнейм на стартовом экране после сканирования кода, чтобы сразу включиться в интерактивную сессию.
                </Accordion>

                <Accordion
                  title="3. Поддерживается ли экспорт результатов и аналитики успеваемости?"
                  leadingIcon={Zap}
                >
                  Да, учитель получает полную сводную аналитику по каждому вопросу в реальном времени, а также может выгрузить детальные отчёты в форматах Excel и PDF для журнала.
                </Accordion>

                <Accordion
                  title="4. Интеграция с электронными дневниками и LMS (Скоро)"
                  leadingIcon={Award}
                  disabled={true}
                >
                  Прямая синхронизация оценок и расписания уроков станет доступна в следующем обновлении платформы.
                </Accordion>
              </div>
            </div>
          </section>
        )}

        {/* TAB 6: PROGRESS SHOWCASE */}
        {activeTab === 'progress' && (
          <section className="space-y-12">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-h2 text-text-neutral">Progress Bar (`ProgressDeterminate.tsx`)</h2>
                <span className="bg-surface-brand-subtle text-text-brand px-2.5 py-0.5 rounded-full text-xs font-semibold">
                  Figma Component: ProgressDeterminate
                </span>
              </div>
              <p className="text-body-p2 text-text-neutral-secondary mt-1">
                Accessible determinate progress bar with semantic <code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">role="progressbar"</code>, ARIA state bindings, track background (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">bg-surface-neutral-tertiary</code>), active fill (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">bg-surface-accent-1-tertiary</code>), and smooth CSS width transitions (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">transition-all duration-300 ease-out</code>).
              </p>
            </div>

            {/* 1. Figma Exact Step Intervals (0%, 20%, 40%, 60%, 80%, 100%) */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">1. Figma Component Set Step Intervals</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Direct parity with the Figma component variants across the standard 20% step ladder on both hairline (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">1px</code>) and standard (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">4px</code>) tracks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Hairline (1px) */}
                <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                      Hairline (1px — Figma Exact Spec)
                    </span>
                    <span className="text-[10px] font-mono text-text-neutral-secondary">size="hairline" (h-px)</span>
                  </div>

                  <div className="space-y-4">
                    {[0, 20, 40, 60, 80, 100].map((val) => (
                      <div key={val} className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-mono text-text-neutral-secondary">
                          <span>progress = "{val}"</span>
                          <span>{val}%</span>
                        </div>
                        <ProgressDeterminate value={val} size="hairline" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standard (4px) */}
                <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-text-neutral uppercase tracking-wider">
                      Standard Rounded Track (4px)
                    </span>
                    <span className="text-[10px] font-mono text-text-neutral-secondary">size="sm" (h-1)</span>
                  </div>

                  <div className="space-y-4">
                    {[0, 20, 40, 60, 80, 100].map((val) => (
                      <div key={val} className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-mono text-text-neutral-secondary">
                          <span>progress = "{val}"</span>
                          <span>{val}%</span>
                        </div>
                        <ProgressDeterminate value={val} size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Interactive Live Progress Controller */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">2. Interactive Live Progress Controller</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Test smooth animated transitions in real-time by scrubbing the range slider or clicking preset interval buttons.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-sm font-semibold text-text-neutral block">
                      Live Value: <span className="text-text-brand font-bold">{demoProgress}%</span>
                    </span>
                    <span className="text-xs text-text-neutral-secondary">
                      Smooth CSS width transition (<code className="font-mono text-[10px]">duration-300 ease-out</code>)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Button
                      size="sm"
                      variant="neutral"
                      onClick={() => setDemoProgress((prev) => Math.max(0, prev - 10))}
                    >
                      -10%
                    </Button>
                    <Button
                      size="sm"
                      variant="neutral"
                      onClick={() => setDemoProgress((prev) => Math.min(100, prev + 10))}
                    >
                      +10%
                    </Button>
                    <div className="h-4 w-px bg-border-neutral-subtle" />
                    {[0, 25, 50, 75, 100].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setDemoProgress(pct)}
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold font-heading transition-all ${
                          demoProgress === pct
                            ? 'bg-surface-accent-1-tertiary text-white shadow-xs'
                            : 'bg-surface-neutral text-text-neutral-secondary hover:text-text-neutral hover:bg-surface-neutral-secondary border border-border-neutral-subtle'
                        }`}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scrubber slider */}
                <div className="space-y-2">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={demoProgress}
                    onChange={(e) => setDemoProgress(Number(e.target.value))}
                    className="w-full accent-surface-accent-1-tertiary cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-text-neutral-secondary">
                    <span>0% (Empty)</span>
                    <span>50% (Half)</span>
                    <span>100% (Complete)</span>
                  </div>
                </div>

                {/* Live rendered component */}
                <div className="p-6 rounded-xl bg-surface-neutral border border-border-neutral-subtle space-y-4">
                  <ProgressDeterminate
                    value={demoProgress}
                    size="md"
                    showLabel={true}
                  />
                </div>
              </div>
            </div>

            {/* 3. Track Size Scales & Theme Color Variations */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-8 shadow-xs">
              {/* Sizing Scales */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-h4 text-text-neutral">3. Sizing Scales (Hairline to Large)</h3>
                  <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                    Configurable track thickness options for diverse UI placements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Hairline (1px)', size: 'hairline' as const, value: 70 },
                    { label: 'Small (4px — Default)', size: 'sm' as const, value: 70 },
                    { label: 'Medium (6px)', size: 'md' as const, value: 70 },
                    { label: 'Large (8px)', size: 'lg' as const, value: 70 },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-text-neutral">
                        <span>{item.label}</span>
                        <span className="text-[10px] font-mono text-text-neutral-secondary">size="{item.size}"</span>
                      </div>
                      <ProgressDeterminate value={item.value} size={item.size} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Semantic Theme Colorways */}
              <div className="space-y-4 pt-6 border-t border-border-neutral-subtle">
                <div>
                  <h4 className="text-h4 text-text-neutral">4. Semantic Theme Color Variations</h4>
                  <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                    Available active fill variants mapped to the Umaigra semantic token palette.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Default (Dark Violet)', variant: 'default' as const, value: 85 },
                    { name: 'Brand (Lime Uma)', variant: 'brand' as const, value: 75 },
                    { name: 'Accent 1 (Violet)', variant: 'accent1' as const, value: 65 },
                    { name: 'Accent 2 (Sky)', variant: 'accent2' as const, value: 55 },
                    { name: 'Positive (Green)', variant: 'positive' as const, value: 95 },
                    { name: 'Danger (Berry)', variant: 'danger' as const, value: 35 },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="p-4 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-text-neutral">
                        <span>{item.name}</span>
                        <span className="text-[10px] font-mono text-text-neutral-secondary">variant="{item.variant}"</span>
                      </div>
                      <ProgressDeterminate value={item.value} size="md" variant={item.variant} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 7: MEDIA & LOGO SHOWCASE */}
        {activeTab === 'media' && (
          <section className="space-y-12">
            <div>
              <h2 className="text-h2 text-text-neutral">Logo & Branding (`Logo.tsx`)</h2>
              <p className="text-body-p2 text-text-neutral-secondary mt-1">
                Pure scalable vector SVG component with intrinsic aspect ratios, full brand wordmark vs mark-only variants, and styleguide colorways.
              </p>
            </div>

            {/* Matrix 1: Variants × Presentation Heights */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">1. Layout Variants & Height Scales</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Comparison between Full Wordmark (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">variant="full"</code>) and Pictogram Symbol (<code className="text-xs bg-surface-base px-1.5 py-0.5 rounded font-mono">variant="mark"</code>).
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { label: 'Large Display (h-16 / 64px)', heightClass: 'h-16' },
                  { label: 'Standard Hero / Header (h-10 / 40px - Default)', heightClass: 'h-10' },
                  { label: 'Compact Navigation (h-8 / 32px)', heightClass: 'h-8' },
                  { label: 'Small Badge / Footer (h-6 / 24px)', heightClass: 'h-6' },
                ].map((scale) => (
                  <div key={scale.label} className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <span className="text-xs font-semibold text-text-neutral block">
                        {scale.label}
                      </span>
                      <span className="text-[11px] font-mono text-text-neutral-secondary">
                        className="{scale.heightClass}"
                      </span>
                    </div>

                    <div className="flex items-center gap-8 flex-wrap">
                      <div className="flex flex-col items-center gap-2">
                        <Logo variant="full" className={scale.heightClass} />
                        <span className="text-[10px] font-mono text-text-neutral-secondary">Full Logo</span>
                      </div>
                      <div className="h-10 w-px bg-border-neutral-subtle hidden sm:block" />
                      <div className="flex flex-col items-center gap-2">
                        <Logo variant="mark" className={scale.heightClass} />
                        <span className="text-[10px] font-mono text-text-neutral-secondary">Mark Only</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Matrix 2: Colorways & Surface Contrasts */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">2. Styleguide Colorways</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Extracted directly from Figma: Default brand palette, Monochromatic White (for dark themes), Gray, and Secondary.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Default */}
                <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-text-neutral">Default (Brand Colors)</span>
                    <span className="text-[10px] font-mono text-text-neutral-secondary">color="default"</span>
                  </div>
                  <div className="flex items-center justify-center py-6 gap-6 bg-surface-neutral rounded-xl border border-border-neutral-subtle">
                    <Logo variant="full" color="default" className="h-10" />
                    <Logo variant="mark" color="default" className="h-10" />
                  </div>
                </div>

                {/* White (Inverse on Dark) */}
                <div className="p-6 rounded-2xl bg-surface-accent-1-tertiary text-white border border-border-neutral-subtle space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">White (Dark Surface Contrast)</span>
                    <span className="text-[10px] font-mono text-white/70">color="white"</span>
                  </div>
                  <div className="flex items-center justify-center py-6 gap-6 bg-black/20 rounded-xl border border-white/10">
                    <Logo variant="full" color="white" className="h-10" />
                    <Logo variant="mark" color="white" className="h-10" />
                  </div>
                </div>

                {/* Gray */}
                <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-text-neutral">Gray (Monochrome)</span>
                    <span className="text-[10px] font-mono text-text-neutral-secondary">color="gray"</span>
                  </div>
                  <div className="flex items-center justify-center py-6 gap-6 bg-surface-neutral rounded-xl border border-border-neutral-subtle">
                    <Logo variant="full" color="gray" className="h-10" />
                    <Logo variant="mark" color="gray" className="h-10" />
                  </div>
                </div>

                {/* Secondary */}
                <div className="p-6 rounded-2xl bg-surface-base border border-border-neutral-subtle space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-text-neutral">Secondary (Slate-Purple Tint)</span>
                    <span className="text-[10px] font-mono text-text-neutral-secondary">color="secondary"</span>
                  </div>
                  <div className="flex items-center justify-center py-6 gap-6 bg-surface-neutral rounded-xl border border-border-neutral-subtle">
                    <Logo variant="full" color="secondary" className="h-10" />
                    <Logo variant="mark" color="secondary" className="h-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Real World Header Mockup */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">3. Real-World Navbar Integration</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Previewing how the logo pairs inside header navigation bars with action buttons.
                </p>
              </div>

              {/* Light Bar */}
              <div className="p-4 rounded-2xl bg-surface-base border border-border-neutral-subtle flex items-center justify-between">
                <Logo variant="full" className="h-9" />
                <div className="flex items-center gap-3">
                  <Button variant="subtle" size="sm">Войти</Button>
                  <Button variant="primary" size="sm" leadingIcon={Sparkles}>Начать игру</Button>
                </div>
              </div>

              {/* Dark Bar */}
              <div className="p-4 rounded-2xl bg-surface-accent-1-tertiary border border-border-neutral-subtle flex items-center justify-between">
                <Logo variant="full" color="white" className="h-9" />
                <div className="flex items-center gap-3">
                  <Button variant="subtle" size="sm" className="text-white border-white/20 hover:bg-white/10">Войти</Button>
                  <Button variant="primary" size="sm" leadingIcon={Sparkles}>Начать игру</Button>
                </div>
              </div>
            </div>

            {/* DIVIDER: TILE COMPONENT SHOWCASE */}
            <div className="pt-8 border-t border-border-neutral-subtle">
              <h2 className="text-h2 text-text-neutral">Tile Component (`Tile.tsx`)</h2>
              <p className="text-body-p2 text-text-neutral-secondary mt-1">
                Circular icon badge containers built with CVA, sized for illustrations, feature cards, and milestone badges.
              </p>
            </div>

            {/* Tile Matrix 1: Figma Sizes */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">1. Tile Sizes (from Figma)</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Figma specification mapping container diameter and inner icon dimensions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Size LG */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-text-neutral block">Size: LG (56px)</span>
                    <span className="text-[11px] font-mono text-text-neutral-secondary">32px icon • p-3</span>
                  </div>
                  <Tile size="lg" variant="brand" icon={Apple} />
                </div>

                {/* Size MD */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-text-neutral block">Size: MD (48px - Default)</span>
                    <span className="text-[11px] font-mono text-text-neutral-secondary">24px icon • p-3</span>
                  </div>
                  <Tile size="md" variant="brand" icon={Apple} />
                </div>

                {/* Size SM */}
                <div className="p-5 rounded-2xl bg-surface-base border border-border-neutral-subtle flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-text-neutral block">Size: SM (36px)</span>
                    <span className="text-[11px] font-mono text-text-neutral-secondary">20px icon • p-2</span>
                  </div>
                  <Tile size="sm" variant="brand" icon={Apple} />
                </div>
              </div>
            </div>

            {/* Tile Matrix 2: Color Themes & Variants */}
            <div className="bg-surface-neutral p-6 md:p-8 rounded-card border border-border-neutral-subtle space-y-6 shadow-xs">
              <div>
                <h3 className="text-h4 text-text-neutral">2. Color Theme Variants</h3>
                <p className="text-body-p3 text-text-neutral-secondary mt-0.5">
                  Mapped to semantic token surfaces and contextual icon colors.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                {[
                  { name: 'Brand (Figma)', variant: 'brand' as const, icon: Apple },
                  { name: 'Accent 1 (Violet)', variant: 'accent1' as const, icon: Sparkles },
                  { name: 'Accent 2 (Sky)', variant: 'accent2' as const, icon: Compass },
                  { name: 'Neutral', variant: 'neutral' as const, icon: Award },
                  { name: 'Subtle', variant: 'subtle' as const, icon: BookOpen },
                  { name: 'Positive', variant: 'positive' as const, icon: Zap },
                  { name: 'Warning', variant: 'warning' as const, icon: Target },
                  { name: 'Danger', variant: 'danger' as const, icon: Heart },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-2xl bg-surface-base border border-border-neutral-subtle flex flex-col items-center justify-between gap-3 text-center"
                  >
                    <Tile size="md" variant={item.variant} icon={item.icon} />
                    <span className="text-[11px] font-medium text-text-neutral leading-tight">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DIVIDER: INTERACTIVE LANDING FEATURE GRAPHICS */}
            <div className="pt-8 border-t border-border-neutral-subtle space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-h2 text-text-neutral">Interactive Landing Feature Graphics</h2>
                  <p className="text-body-p2 text-text-neutral-secondary mt-1">
                    Dynamic vector and CSS timeline animations designed for the 4 landing feature tabs ("Ключевые возможности").
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface-brand-subtle text-text-brand border border-border-brand-default/30">
                  11 Components
                </span>
              </div>
            </div>

            {/* Graphics Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  id: 'find-game-01',
                  name: 'FindGame01',
                  badge: 'Найти игру • Шаг 1',
                  purpose: 'Выбор предмета / Фильтрация каталога игр',
                  component: (props: { animate: boolean }) => <FindGame01 {...props} className="w-full h-full" />,
                },
                {
                  id: 'find-game-02',
                  name: 'FindGame02',
                  badge: 'Найти игру • Шаг 2',
                  purpose: 'Сетка карточек игр с интерактивным курсором и выбором механики',
                  component: (props: { animate: boolean }) => <FindGame02 {...props} className="w-full h-full" />,
                },
                {
                  id: 'find-game-03',
                  name: 'FindGame03',
                  badge: 'Найти игру • Шаг 3',
                  purpose: 'Футбольный игровой экран с интерактивным модальным окном Share',
                  component: (props: { animate: boolean }) => <FindGame03 {...props} className="w-full h-full" />,
                },
                {
                  id: 'create-game-01',
                  name: 'CreateGame01',
                  badge: 'Создать игру • Шаг 1',
                  purpose: 'Выбор механики (Викторина, Карточки, Сопоставление)',
                  component: (props: { animate: boolean }) => <CreateGame01 {...props} className="w-full h-full" />,
                },
                {
                  id: 'create-game-02',
                  name: 'CreateGame02',
                  badge: 'Создать игру • Шаг 2',
                  purpose: 'Заполнение контента игры, изображения и вопроса',
                  component: (props: { animate: boolean }) => <CreateGame02 {...props} className="w-full h-full" />,
                },
                {
                  id: 'create-game-03',
                  name: 'CreateGame03',
                  badge: 'Создать игру • Шаг 3',
                  purpose: 'Публикация готовой игры и появление модального окна со ссылкой',
                  component: (props: { animate: boolean }) => <CreateGame03 {...props} className="w-full h-full" />,
                },
                {
                  id: 'generate-game-01',
                  name: 'GenerateGame01',
                  badge: 'Контент с ИИ • Шаг 1',
                  purpose: 'Выбор механики и параметров для генерации игры с ИИ',
                  component: (props: { animate: boolean }) => <GenerateGame01 {...props} className="w-full h-full" />,
                },
                {
                  id: 'generate-game-02',
                  name: 'GenerateGame02',
                  badge: 'Контент с ИИ • Шаг 2',
                  purpose: 'Генерация игры с помощью ИИ по клику на волшебную палочку',
                  component: (props: { animate: boolean }) => <GenerateGame02 {...props} className="w-full h-full" />,
                },
                {
                  id: 'generate-game-03',
                  name: 'GenerateGame03',
                  badge: 'Контент с ИИ • Шаг 3',
                  purpose: 'Публикация сгенерированной ИИ игры и окно ссылки для учеников',
                  component: (props: { animate: boolean }) => <GenerateGame03 {...props} className="w-full h-full" />,
                },
                {
                  id: 'sell-game-01',
                  name: 'SellGame01',
                  badge: 'Монетизация • Шаг 1',
                  purpose: 'Наполнение и подготовка авторского игрового контента к продаже',
                  component: (props: { animate: boolean }) => <SellGame01 {...props} className="w-full h-full" />,
                },
                {
                  id: 'sell-game-02',
                  name: 'SellGame02',
                  badge: 'Монетизация • Шаг 2',
                  purpose: 'Каталог платных игр и карточка футбольной игры',
                  component: (props: { animate: boolean }) => <SellGame02 {...props} className="w-full h-full" />,
                },
                {
                  id: 'sell-game-03',
                  name: 'SellGame03',
                  badge: 'Монетизация • Шаг 3',
                  purpose: 'Модальное окно кода доступа и кнопка покупки с анимацией блика',
                  component: (props: { animate: boolean }) => <SellGame03 {...props} className="w-full h-full" />,
                },
              ].map((item) => (
                <GraphicCardWrapper
                  key={item.id}
                  name={item.name}
                  badge={item.badge}
                  purpose={item.purpose}
                  renderGraphic={item.component}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

interface GraphicCardWrapperProps {
  name: string;
  badge: string;
  purpose: string;
  renderGraphic: (props: { animate: boolean }) => React.ReactNode;
}

const GraphicCardWrapper: React.FC<GraphicCardWrapperProps> = ({
  name,
  badge,
  purpose,
  renderGraphic,
}) => {
  const [animate, setAnimate] = useState(true);
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey((k) => k + 1);
  };

  const handleToggleAnimate = () => {
    setAnimate((prev) => !prev);
  };

  return (
    <div className="bg-surface-neutral p-6 rounded-card border border-border-neutral-subtle shadow-xs space-y-4 flex flex-col justify-between">
      {/* Header Info & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border-neutral-subtle">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-heading font-semibold text-text-neutral text-base">
              &lt;{name} /&gt;
            </span>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-surface-accent-1 text-text-neutral">
              {badge}
            </span>
          </div>
          <p className="text-body-p3 text-text-neutral-secondary">
            {purpose}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleToggleAnimate}
            title={animate ? 'Приостановить анимацию' : 'Возобновить анимацию'}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-heading font-medium transition-colors border ${
              animate
                ? 'bg-surface-base text-text-neutral border-border-neutral-subtle hover:bg-surface-base-hover'
                : 'bg-surface-warning text-text-neutral border-border-warning-default'
            }`}
          >
            {animate ? <Pause className="size-3" /> : <Play className="size-3" />}
            <span>{animate ? 'Анимация вкл' : 'Пауза'}</span>
          </button>

          <button
            type="button"
            onClick={handleReplay}
            title="Перезапустить анимацию"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-heading font-medium bg-surface-brand text-text-neutral hover:bg-surface-brand-hover transition-colors shadow-xs"
          >
            <RotateCcw className="size-3" />
            <span>Replay</span>
          </button>
        </div>
      </div>

      {/* Responsive Preview Container */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-[720px] aspect-[16/10] rounded-card border border-border-neutral-subtle overflow-hidden bg-surface-base shadow-sm flex items-center justify-center relative">
          <div key={replayKey} className="w-full h-full">
            {renderGraphic({ animate })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenSink;
