import * as React from 'react';
import { LogIn, Menu, X, ChevronDown, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../buttons/Button';
import { IconButton } from '../buttons/IconButton';
import { Logo, type LogoColor } from '../media/Logo';
import { NavItem } from './NavItem';

export interface NavItemType {
  label: React.ReactNode;
  href?: string;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  leadingIcon?: LucideIcon | React.ComponentType<{ className?: string }>;
  trailingIcon?: LucideIcon | React.ComponentType<{ className?: string }>;
  target?: string;
  rel?: string;
  className?: string;
}

export const DEFAULT_HEADER_NAV_ITEMS: NavItemType[] = [
  { label: 'Игротека', href: '#games' },
  { label: 'Шаблоны', href: '#templates' },
  { label: 'Тарифные планы', href: '#pricing' },
  { label: 'Помощь', href: '#help' },
];

export interface HeaderMenuProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Navigation links to display in the center row / mobile drawer.
   * Defaults to Figma sample navigation items.
   */
  items?: NavItemType[];
  /**
   * Call-to-action button label.
   * @default 'Button'
   */
  ctaLabel?: string;
  /**
   * Click handler for the CTA button.
   */
  onCtaClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Optional leading icon for the CTA button.
   */
  ctaLeadingIcon?: LucideIcon | React.ComponentType<{ className?: string }>;
  /**
   * Trailing icon for the CTA button.
   * @default LogIn
   */
  ctaTrailingIcon?: LucideIcon | React.ComponentType<{ className?: string }>;
  /**
   * Current active language code.
   * @default 'RU'
   */
  currentLang?: string;
  /**
   * Click handler for the language selector pill.
   */
  onLangClick?: () => void;
  /**
   * Available languages for selection dropdown.
   */
  languages?: string[];
  /**
   * Language change callback.
   */
  onLangSelect?: (lang: string) => void;
  /**
   * Target URL for the logo link.
   * @default '#'
   */
  logoHref?: string;
  /**
   * Logo colorway.
   * @default 'default'
   */
  logoColor?: LogoColor;
  /**
   * Optional breakpoint simulation for testing in KitchenSink:
   * 'auto': fully responsive via CSS media queries.
   * 'Desktop': forces full desktop layout.
   * 'Tablet': forces tablet layout.
   * 'Mobile': forces mobile layout.
   * @default 'auto'
   */
  breakpoint?: 'auto' | 'Desktop' | 'Tablet' | 'Mobile';
  /**
   * Controlled open state for the mobile drawer.
   */
  isOpen?: boolean;
  /**
   * Default open state for uncontrolled mobile drawer.
   */
  defaultOpen?: boolean;
  /**
   * Callback fired when mobile drawer open state changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Whether to wrap inside fixed/sticky container or standard block.
   * @default false
   */
  sticky?: boolean;
}

export const HeaderMenu = React.forwardRef<HTMLElement, HeaderMenuProps>(
  (
    {
      items = DEFAULT_HEADER_NAV_ITEMS,
      ctaLabel = 'Button',
      onCtaClick,
      ctaLeadingIcon,
      ctaTrailingIcon = LogIn,
      currentLang = 'RU',
      onLangClick,
      languages = ['RU', 'EN', 'KZ'],
      onLangSelect,
      logoHref = '#',
      logoColor = 'default',
      breakpoint = 'auto',
      isOpen: controlledIsOpen,
      defaultOpen = false,
      onOpenChange,
      sticky = false,
      className,
      ...props
    },
    ref
  ) => {
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = React.useState(defaultOpen);
    const [isLangOpen, setIsLangOpen] = React.useState(false);
    const langRef = React.useRef<HTMLDivElement>(null);

    const isControlled = controlledIsOpen !== undefined;
    const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

    const setOpen = React.useCallback(
      (nextOpen: boolean) => {
        if (!isControlled) {
          setUncontrolledIsOpen(nextOpen);
        }
        onOpenChange?.(nextOpen);
      },
      [isControlled, onOpenChange]
    );

    const toggleOpen = () => setOpen(!isOpen);

    // Close language dropdown when clicking outside
    React.useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (langRef.current && !langRef.current.contains(e.target as Node)) {
          setIsLangOpen(false);
        }
      };
      if (isLangOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
      }
      return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isLangOpen]);

    const isForcedDesktop = breakpoint === 'Desktop';
    const isForcedTablet = breakpoint === 'Tablet';
    const isForcedMobile = breakpoint === 'Mobile';
    const isForcedCompact = isForcedTablet || isForcedMobile;

    // Container padding classes based on mode
    const containerPadding = isForcedMobile
      ? 'px-4 py-3'
      : isForcedTablet
      ? 'px-6 py-4'
      : isForcedDesktop
      ? 'px-8 py-6'
      : 'px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6';

    return (
      <header
        ref={ref}
        className={cn(
          'w-full backdrop-blur-[8px] bg-surface-sticky transition-all duration-200 z-40',
          sticky && 'sticky top-0',
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'max-w-[1440px] mx-auto flex items-center justify-between relative',
            containerPadding
          )}
        >
          {/* 1. BRAND LOGO */}
          <a
            href={logoHref}
            className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-surface-accent-1-tertiary rounded-md transition-opacity hover:opacity-90"
            aria-label="Umaigra Home"
          >
            <Logo
              variant="full"
              color={logoColor}
              className="h-[39.737px] w-[134.535px] shrink-0 select-none"
            />
          </a>

          {/* 2. DESKTOP CENTER NAVIGATION LINKS ROW */}
          {(!isForcedCompact && (
            <nav
              className={cn(
                'items-center gap-3',
                isForcedDesktop ? 'flex' : 'hidden lg:flex'
              )}
              aria-label="Main Navigation"
            >
              {items.map((item, idx) => (
                <NavItem
                  key={idx}
                  href={item.href}
                  isActive={item.isActive}
                  disabled={item.disabled}
                  leadingIcon={item.leadingIcon}
                  trailingIcon={item.trailingIcon}
                  target={item.target}
                  rel={item.rel}
                  onClick={item.onClick}
                  className={item.className}
                >
                  {item.label}
                </NavItem>
              ))}
            </nav>
          ))}

          {/* 3. DESKTOP RIGHT ACTIONS (CTA + Language Selector) */}
          {(!isForcedCompact && (
            <div
              className={cn(
                'items-center gap-3 shrink-0',
                isForcedDesktop ? 'flex' : 'hidden lg:flex'
              )}
            >
              {/* Primary / Neutral Action Button */}
              {ctaLabel && (
                <Button
                  variant="neutral"
                  size="sm"
                  trailingIcon={ctaTrailingIcon}
                  leadingIcon={ctaLeadingIcon}
                  onClick={onCtaClick}
                  className="font-heading font-semibold text-base"
                >
                  {ctaLabel}
                </Button>
              )}

              {/* Language Selector Pill */}
              <div ref={langRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    if (onLangClick) {
                      onLangClick();
                    } else {
                      setIsLangOpen(!isLangOpen);
                    }
                  }}
                  className="inline-flex items-center justify-center gap-0.5 h-9 px-3 py-1.5 rounded-full border border-border-neutral-strong text-title-base text-text-neutral bg-transparent hover:bg-black/5 active:bg-black/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-surface-accent-1-tertiary cursor-pointer select-none"
                  aria-haspopup="listbox"
                  aria-expanded={isLangOpen}
                  aria-label={`Select language, current: ${currentLang}`}
                >
                  <span className="font-heading font-semibold">{currentLang}</span>
                  <ChevronDown
                    className={cn(
                      'size-6 text-icon-neutral transition-transform duration-150',
                      isLangOpen && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown Menu for Languages */}
                {isLangOpen && !onLangClick && (
                  <div
                    role="listbox"
                    className="absolute right-0 mt-1.5 w-24 bg-surface-neutral rounded-2xl border border-border-neutral-subtle shadow-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        role="option"
                        aria-selected={lang === currentLang}
                        onClick={() => {
                          onLangSelect?.(lang);
                          setIsLangOpen(false);
                        }}
                        className={cn(
                          'w-full text-left px-3.5 py-1.5 text-sm font-heading font-medium transition-colors hover:bg-surface-base-hover cursor-pointer',
                          lang === currentLang
                            ? 'text-surface-accent-1-secondary font-semibold bg-surface-base'
                            : 'text-text-neutral'
                        )}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* 4. TABLET / MOBILE ACTIONS (CTA Button + Hamburger Toggle) */}
          {(!isForcedDesktop && (
            <div
              className={cn(
                'items-center gap-4 shrink-0',
                isForcedCompact ? 'flex' : 'flex lg:hidden'
              )}
            >
              {/* CTA Button on mobile/tablet */}
              {ctaLabel && (
                <Button
                  variant="neutral"
                  size="sm"
                  trailingIcon={ctaTrailingIcon}
                  leadingIcon={ctaLeadingIcon}
                  onClick={onCtaClick}
                  className="font-heading font-semibold text-base"
                >
                  {ctaLabel}
                </Button>
              )}

              {/* Hamburger / Close Trigger Button */}
              <IconButton
                variant="subtle"
                size="sm"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                onClick={toggleOpen}
                icon={isOpen ? X : Menu}
                className="size-9 text-text-neutral hover:bg-black/5 active:bg-black/10 transition-colors"
              />
            </div>
          ))}
        </div>

        {/* 5. MOBILE / TABLET COLLAPSIBLE DRAWER PANEL */}
        {isOpen && !isForcedDesktop && (
          <div
            className={cn(
              'border-t border-border-neutral-subtle/80 bg-surface-sticky/95 backdrop-blur-md transition-all duration-200 animate-in slide-in-from-top-2',
              isForcedCompact ? 'block' : 'block lg:hidden'
            )}
          >
            <div className="max-w-page mx-auto px-6 py-5 flex flex-col gap-4">
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
                {items.map((item, idx) => (
                  <NavItem
                    key={idx}
                    href={item.href}
                    isActive={item.isActive}
                    disabled={item.disabled}
                    leadingIcon={item.leadingIcon}
                    trailingIcon={item.trailingIcon}
                    target={item.target}
                    rel={item.rel}
                    onClick={(e) => {
                      item.onClick?.(e);
                      setOpen(false);
                    }}
                    className="w-full justify-start text-left px-4 py-2.5 h-auto text-base rounded-2xl"
                  >
                    {item.label}
                  </NavItem>
                ))}
              </nav>

              {/* Mobile Language Selector & Divider */}
              <div className="pt-3 border-t border-border-neutral-subtle flex items-center justify-between px-2">
                <span className="text-xs font-semibold text-text-neutral-secondary uppercase tracking-wider">
                  Язык / Language
                </span>
                <div className="flex items-center gap-1.5">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        onLangSelect?.(lang);
                        onLangClick?.();
                      }}
                      className={cn(
                        'px-2.5 py-1 rounded-full text-xs font-heading font-semibold transition-colors cursor-pointer',
                        lang === currentLang
                          ? 'bg-surface-accent-1-tertiary text-text-inverse shadow-xs'
                          : 'text-text-neutral hover:bg-black/5'
                      )}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    );
  }
);

HeaderMenu.displayName = 'HeaderMenu';
