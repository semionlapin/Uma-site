import * as React from 'react';
import { SendHorizontal, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo, type LogoColor } from '../media/Logo';
import { IconButton } from '../buttons/IconButton';
import { NavItem } from './NavItem';

export interface FooterNavLink {
  label: React.ReactNode;
  href?: string;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
  className?: string;
}

export interface FooterSocialLink {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const YoutubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={cn('size-5', className)}
    {...props}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const DEFAULT_FOOTER_NAV_LINKS: FooterNavLink[] = [
  { label: 'Конфиденциальность', href: '#privacy' },
  { label: 'Условия использования', href: '#terms' },
  { label: 'Тарифные планы', href: '#pricing' },
  { label: 'Помощь', href: '#help' },
];

export const DEFAULT_FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  { icon: SendHorizontal, label: 'Telegram', href: 'https://t.me/umaigra' },
  { icon: YoutubeIcon, label: 'YouTube', href: 'https://youtube.com/@umaigra' },
];

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * List of navigation links rendered in footer.
   * Defaults to Figma styleguide items.
   */
  links?: FooterNavLink[];
  /**
   * List of social media icon buttons.
   * Defaults to Telegram and YouTube.
   */
  socialLinks?: FooterSocialLink[];
  /**
   * Copyright and rights disclaimer text.
   * @default '©2026 Umaigra Все права защищены'
   */
  copyright?: React.ReactNode;
  /**
   * Target URL for logo.
   * @default '#'
   */
  logoHref?: string;
  /**
   * Logo colorway.
   * @default 'secondary'
   */
  logoColor?: LogoColor;
  /**
   * Optional breakpoint simulation for testing in KitchenSink:
   * 'auto': fully responsive via CSS media queries.
   * 'Desktop': forces desktop 3-column inline row.
   * 'Tablet': forces tablet 2-row layout.
   * 'Mobile': forces mobile vertical stack.
   * @default 'auto'
   */
  breakpoint?: 'auto' | 'Desktop' | 'Tablet' | 'Mobile';
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      links = DEFAULT_FOOTER_NAV_LINKS,
      socialLinks = DEFAULT_FOOTER_SOCIAL_LINKS,
      copyright = '©2026 Umaigra Все права защищены',
      logoHref = '#',
      logoColor = 'secondary',
      breakpoint = 'auto',
      className,
      ...props
    },
    ref
  ) => {
    const isForcedDesktop = breakpoint === 'Desktop';
    const isForcedTablet = breakpoint === 'Tablet';
    const isForcedMobile = breakpoint === 'Mobile';
    const isForcedCompact = isForcedTablet || isForcedMobile;

    // Outer container padding matching standard gutters
    const containerPadding = isForcedMobile
      ? 'p-8 sm:p-12'
      : isForcedTablet
      ? 'p-12'
      : isForcedDesktop
      ? 'p-12'
      : 'px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-12';

    return (
      <footer
        ref={ref}
        className={cn('w-full bg-surface-base text-text-neutral', className)}
        {...props}
      >
        <div className={cn('max-w-[1440px] mx-auto', containerPadding)}>
          {/* FORCED DESKTOP LAYOUT */}
          {isForcedDesktop && (
            <div className="flex items-center justify-between gap-8">
              {/* Left Brand Block */}
              <div className="flex flex-1 flex-col gap-2 items-start">
                <a
                  href={logoHref}
                  className="outline-none focus-visible:ring-2 focus-visible:ring-surface-accent-1-tertiary rounded-md transition-opacity hover:opacity-90"
                  aria-label="Umaigra Home"
                >
                  <Logo
                    variant="full"
                    color={logoColor}
                    className="h-[39.737px] w-[134.535px] shrink-0 select-none"
                  />
                </a>
                <p className="text-title-xs-regular text-text-neutral-secondary">
                  {copyright}
                </p>
              </div>

              {/* Center Navigation Links */}
              <nav className="flex items-center gap-3 shrink-0" aria-label="Footer Navigation">
                {links.map((link, idx) => (
                  <NavItem
                    key={idx}
                    href={link.href}
                    isActive={link.isActive}
                    disabled={link.disabled}
                    target={link.target}
                    rel={link.rel}
                    onClick={link.onClick}
                    className={link.className}
                  >
                    {link.label}
                  </NavItem>
                ))}
              </nav>

              {/* Right Social Action Buttons */}
              <div className="flex flex-1 items-center justify-end gap-2 shrink-0">
                {socialLinks.map((social, idx) => (
                  <IconButton
                    key={idx}
                    variant="neutral"
                    size="sm"
                    icon={social.icon}
                    aria-label={social.label}
                    onClick={(e) => {
                      if (social.href) {
                        window.open(social.href, '_blank', 'noopener,noreferrer');
                      }
                      social.onClick?.(e);
                    }}
                    className="size-9 bg-surface-accent-1-tertiary text-text-inverse hover:bg-surface-accent-1-tertiary-hover transition-colors"
                  />
                ))}
              </div>
            </div>
          )}

          {/* FORCED TABLET LAYOUT */}
          {isForcedTablet && (
            <div className="flex flex-col gap-8 w-full">
              {/* Top Row: Links */}
              <nav className="flex flex-col gap-3 w-full" aria-label="Footer Navigation">
                {links.map((link, idx) => (
                  <NavItem
                    key={idx}
                    href={link.href}
                    isActive={link.isActive}
                    disabled={link.disabled}
                    target={link.target}
                    rel={link.rel}
                    onClick={link.onClick}
                    className="w-full justify-start text-left px-3 py-1.5"
                  >
                    {link.label}
                  </NavItem>
                ))}
              </nav>

              {/* Bottom Row: Brand Left + Social Right */}
              <div className="flex items-center justify-between w-full pt-4 border-t border-border-neutral-subtle/50">
                <div className="flex flex-col gap-2 items-start">
                  <a
                    href={logoHref}
                    className="outline-none focus-visible:ring-2 focus-visible:ring-surface-accent-1-tertiary rounded-md transition-opacity hover:opacity-90"
                    aria-label="Umaigra Home"
                  >
                    <Logo
                      variant="full"
                      color={logoColor}
                      className="h-[39.737px] w-[134.535px] shrink-0 select-none"
                    />
                  </a>
                  <p className="text-title-xs-regular text-text-neutral-secondary">
                    {copyright}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {socialLinks.map((social, idx) => (
                    <IconButton
                      key={idx}
                      variant="neutral"
                      size="sm"
                      icon={social.icon}
                      aria-label={social.label}
                      onClick={(e) => {
                        if (social.href) {
                          window.open(social.href, '_blank', 'noopener,noreferrer');
                        }
                        social.onClick?.(e);
                      }}
                      className="size-9 bg-surface-accent-1-tertiary text-text-inverse hover:bg-surface-accent-1-tertiary-hover transition-colors"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* FORCED MOBILE LAYOUT */}
          {isForcedMobile && (
            <div className="flex flex-col gap-8 w-full items-start">
              {/* Top: Links */}
              <nav className="flex flex-col gap-3 w-full" aria-label="Footer Navigation">
                {links.map((link, idx) => (
                  <NavItem
                    key={idx}
                    href={link.href}
                    isActive={link.isActive}
                    disabled={link.disabled}
                    target={link.target}
                    rel={link.rel}
                    onClick={link.onClick}
                    className="w-full justify-start text-left px-3 py-1.5"
                  >
                    {link.label}
                  </NavItem>
                ))}
              </nav>

              {/* Middle: Social Icons */}
              <div className="flex items-center gap-2 w-full">
                {socialLinks.map((social, idx) => (
                  <IconButton
                    key={idx}
                    variant="neutral"
                    size="sm"
                    icon={social.icon}
                    aria-label={social.label}
                    onClick={(e) => {
                      if (social.href) {
                        window.open(social.href, '_blank', 'noopener,noreferrer');
                      }
                      social.onClick?.(e);
                    }}
                    className="size-9 bg-surface-accent-1-tertiary text-text-inverse hover:bg-surface-accent-1-tertiary-hover transition-colors"
                  />
                ))}
              </div>

              {/* Bottom: Brand & Copyright */}
              <div className="flex flex-col gap-2 items-start w-full pt-4 border-t border-border-neutral-subtle/50">
                <a
                  href={logoHref}
                  className="outline-none focus-visible:ring-2 focus-visible:ring-surface-accent-1-tertiary rounded-md transition-opacity hover:opacity-90"
                  aria-label="Umaigra Home"
                >
                  <Logo
                    variant="full"
                    color={logoColor}
                    className="h-[39.737px] w-[134.535px] shrink-0 select-none"
                  />
                </a>
                <p className="text-title-xs-regular text-text-neutral-secondary">
                  {copyright}
                </p>
              </div>
            </div>
          )}

          {/* RESPONSIVE AUTO LAYOUT (Standard CSS Media Queries) */}
          {!isForcedCompact && !isForcedDesktop && (
            <div className="w-full">
              {/* Desktop view (lg and above) */}
              <div className="hidden lg:flex items-center justify-between gap-8">
                {/* Left Brand Block */}
                <div className="flex flex-1 flex-col gap-2 items-start">
                  <a
                    href={logoHref}
                    className="outline-none focus-visible:ring-2 focus-visible:ring-surface-accent-1-tertiary rounded-md transition-opacity hover:opacity-90"
                    aria-label="Umaigra Home"
                  >
                    <Logo
                      variant="full"
                      color={logoColor}
                      className="h-[39.737px] w-[134.535px] shrink-0 select-none"
                    />
                  </a>
                  <p className="text-title-xs-regular text-text-neutral-secondary">
                    {copyright}
                  </p>
                </div>

                {/* Center Navigation Links */}
                <nav className="flex items-center gap-3 shrink-0" aria-label="Footer Navigation">
                  {links.map((link, idx) => (
                    <NavItem
                      key={idx}
                      href={link.href}
                      isActive={link.isActive}
                      disabled={link.disabled}
                      target={link.target}
                      rel={link.rel}
                      onClick={link.onClick}
                      className={link.className}
                    >
                      {link.label}
                    </NavItem>
                  ))}
                </nav>

                {/* Right Social Action Buttons */}
                <div className="flex flex-1 items-center justify-end gap-2 shrink-0">
                  {socialLinks.map((social, idx) => (
                    <IconButton
                      key={idx}
                      variant="neutral"
                      size="sm"
                      icon={social.icon}
                      aria-label={social.label}
                      onClick={(e) => {
                        if (social.href) {
                          window.open(social.href, '_blank', 'noopener,noreferrer');
                        }
                        social.onClick?.(e);
                      }}
                      className="size-9 bg-surface-accent-1-tertiary text-text-inverse hover:bg-surface-accent-1-tertiary-hover transition-colors"
                    />
                  ))}
                </div>
              </div>

              {/* Tablet view (sm to lg) */}
              <div className="hidden sm:flex lg:hidden flex-col gap-8 w-full">
                <nav className="flex flex-col gap-3 w-full" aria-label="Footer Navigation">
                  {links.map((link, idx) => (
                    <NavItem
                      key={idx}
                      href={link.href}
                      isActive={link.isActive}
                      disabled={link.disabled}
                      target={link.target}
                      rel={link.rel}
                      onClick={link.onClick}
                      className="w-full justify-start text-left px-3 py-1.5"
                    >
                      {link.label}
                    </NavItem>
                  ))}
                </nav>

                <div className="flex items-center justify-between w-full pt-4 border-t border-border-neutral-subtle/50">
                  <div className="flex flex-col gap-2 items-start">
                    <a
                      href={logoHref}
                      aria-label="Umaigra Home"
                    >
                      <Logo
                        variant="full"
                        color={logoColor}
                        className="h-[39.737px] w-[134.535px] shrink-0 select-none"
                      />
                    </a>
                    <p className="text-title-xs-regular text-text-neutral-secondary">
                      {copyright}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {socialLinks.map((social, idx) => (
                      <IconButton
                        key={idx}
                        variant="neutral"
                        size="sm"
                        icon={social.icon}
                        aria-label={social.label}
                        onClick={(e) => {
                          if (social.href) {
                            window.open(social.href, '_blank', 'noopener,noreferrer');
                          }
                          social.onClick?.(e);
                        }}
                        className="size-9 bg-surface-accent-1-tertiary text-text-inverse hover:bg-surface-accent-1-tertiary-hover transition-colors"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile view (< sm) */}
              <div className="flex sm:hidden flex-col gap-8 w-full items-start">
                <nav className="flex flex-col gap-3 w-full" aria-label="Footer Navigation">
                  {links.map((link, idx) => (
                    <NavItem
                      key={idx}
                      href={link.href}
                      isActive={link.isActive}
                      disabled={link.disabled}
                      target={link.target}
                      rel={link.rel}
                      onClick={link.onClick}
                      className="w-full justify-start text-left px-3 py-1.5"
                    >
                      {link.label}
                    </NavItem>
                  ))}
                </nav>

                <div className="flex items-center gap-2 w-full">
                  {socialLinks.map((social, idx) => (
                    <IconButton
                      key={idx}
                      variant="neutral"
                      size="sm"
                      icon={social.icon}
                      aria-label={social.label}
                      onClick={(e) => {
                        if (social.href) {
                          window.open(social.href, '_blank', 'noopener,noreferrer');
                        }
                        social.onClick?.(e);
                      }}
                      className="size-9 bg-surface-accent-1-tertiary text-text-inverse hover:bg-surface-accent-1-tertiary-hover transition-colors"
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-2 items-start w-full pt-4 border-t border-border-neutral-subtle/50">
                  <a
                    href={logoHref}
                    aria-label="Umaigra Home"
                  >
                    <Logo
                      variant="full"
                      color={logoColor}
                      className="h-[39.737px] w-[134.535px] shrink-0 select-none"
                    />
                  </a>
                  <p className="text-title-xs-regular text-text-neutral-secondary">
                    {copyright}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';
