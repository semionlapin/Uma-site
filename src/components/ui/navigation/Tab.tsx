import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const tabVariants = cva(
  'inline-flex items-center justify-center rounded-full font-heading font-semibold whitespace-nowrap transition-all duration-150 outline-none select-none cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-surface-accent-1-tertiary active:scale-[0.98] disabled:pointer-events-none disabled:cursor-not-allowed shrink-0',
  {
    variants: {
      isSelected: {
        true: 'bg-surface-brand text-text-brand-on-brand hover:bg-surface-brand-hover active:bg-surface-brand-hover shadow-xs',
        false: 'bg-surface-neutral text-text-neutral hover:bg-surface-neutral-hover active:bg-surface-neutral-secondary',
      },
      size: {
        md: 'h-12 px-6 py-3 text-title-base gap-3',
        sm: 'h-9 px-3 py-1.5 text-title-base gap-1.5',
      },
      disabled: {
        true: 'bg-surface-disabled text-text-disabled hover:bg-surface-disabled active:bg-surface-disabled shadow-none pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      isSelected: false,
      size: 'md',
      disabled: false,
    },
  }
);

const iconSizes: Record<'sm' | 'md', string> = {
  md: 'size-6 shrink-0',
  sm: 'size-5 shrink-0',
};

export interface TabProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof tabVariants> {
  /**
   * Whether the tab is currently active / selected.
   * Maps directly to `aria-selected`.
   * @default false
   */
  isSelected?: boolean;
  /**
   * Helper alias for `isSelected`.
   */
  isActive?: boolean;
  /**
   * Whether the tab is disabled.
   * @default false
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

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (
    {
      className,
      isSelected: isSelectedProp,
      isActive,
      size = 'md',
      disabled = false,
      type = 'button',
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      children,
      ...props
    },
    ref
  ) => {
    const isSelected = isSelectedProp !== undefined ? isSelectedProp : Boolean(isActive);
    const iconClass = iconSizes[size || 'md'];

    return (
      <button
        ref={ref}
        type={type}
        role="tab"
        aria-selected={isSelected}
        aria-disabled={disabled ? 'true' : undefined}
        disabled={disabled}
        className={cn(
          tabVariants({
            isSelected,
            size,
            disabled,
          }),
          className
        )}
        {...props}
      >
        {LeadingIcon && <LeadingIcon className={iconClass} aria-hidden="true" />}
        {children && <span>{children}</span>}
        {TrailingIcon && <TrailingIcon className={iconClass} aria-hidden="true" />}
      </button>
    );
  }
);

Tab.displayName = 'Tab';
