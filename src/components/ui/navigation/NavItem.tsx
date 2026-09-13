import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const navItemVariants = cva(
  'inline-flex items-center justify-center gap-1.5 h-9 px-3 py-1.5 rounded-full text-title-base-regular transition-colors duration-150 outline-none select-none no-underline cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-surface-accent-1-tertiary',
  {
    variants: {
      variant: {
        default: 'text-text-neutral hover:bg-black/5 active:bg-black/10',
        inverse: 'text-text-inverse hover:bg-white/10 active:bg-white/15',
        muted: 'text-text-neutral-secondary hover:text-text-neutral hover:bg-black/5 active:bg-black/10',
      },
      isActive: {
        true: 'backdrop-blur-[2px] bg-black/8 text-text-neutral',
        false: '',
      },
      disabled: {
        true: 'text-text-disabled pointer-events-none cursor-not-allowed hover:bg-transparent active:bg-transparent shadow-none',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'inverse',
        isActive: true,
        className: 'backdrop-blur-[2px] bg-white/15 text-text-inverse',
      },
      {
        variant: 'inverse',
        disabled: true,
        className: 'text-white/40',
      },
    ],
    defaultVariants: {
      variant: 'default',
      isActive: false,
      disabled: false,
    },
  }
);

export interface NavItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navItemVariants> {
  /**
   * Whether the link represents the current active page/route.
   */
  isActive?: boolean;
  /**
   * Whether the navigation item is disabled.
   */
  disabled?: boolean;
  /**
   * Optional leading Lucide icon.
   */
  leadingIcon?: LucideIcon | React.ComponentType<{ className?: string }>;
  /**
   * Optional trailing Lucide icon.
   */
  trailingIcon?: LucideIcon | React.ComponentType<{ className?: string }>;
}

export const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  (
    {
      className,
      variant = 'default',
      isActive = false,
      disabled = false,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      children,
      href = '#',
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        aria-disabled={disabled ? 'true' : undefined}
        aria-current={isActive ? 'page' : undefined}
        tabIndex={disabled ? -1 : props.tabIndex}
        onClick={handleClick}
        className={cn(navItemVariants({ variant, isActive, disabled }), className)}
        {...props}
      >
        {LeadingIcon && <LeadingIcon className="size-5 shrink-0" aria-hidden="true" />}
        {children && <span>{children}</span>}
        {TrailingIcon && <TrailingIcon className="size-5 shrink-0" aria-hidden="true" />}
      </a>
    );
  }
);

NavItem.displayName = 'NavItem';
