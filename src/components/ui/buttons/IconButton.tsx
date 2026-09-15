import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const iconButtonVariants = cva(
  'aspect-square inline-flex items-center justify-center p-0 rounded-full font-heading font-semibold transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-surface-accent-1-tertiary select-none cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-surface-brand text-text-brand-on-brand hover:bg-surface-brand-hover active:bg-surface-brand-hover active:scale-[0.97] disabled:bg-surface-disabled disabled:text-text-disabled',
        neutral:
          'bg-surface-accent-1-tertiary text-text-inverse hover:bg-surface-accent-1-tertiary-hover active:bg-surface-accent-1-tertiary-hover active:scale-[0.97] disabled:bg-surface-disabled disabled:text-text-disabled',
        subtle:
          'bg-transparent text-text-neutral hover:bg-surface-hover active:bg-black/10 active:scale-[0.97] disabled:bg-transparent disabled:text-text-disabled',
      },
      size: {
        lg: 'size-14',
        md: 'size-12',
        sm: 'size-9',
      },
      negative: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'neutral',
        negative: true,
        className:
          'bg-surface-neutral text-text-neutral hover:bg-surface-neutral-hover active:bg-surface-neutral-hover disabled:bg-surface-disabled disabled:text-text-disabled',
      },
      {
        variant: 'subtle',
        negative: true,
        className:
          'bg-transparent text-text-inverse hover:bg-surface-hover-inverse active:bg-white/10 disabled:bg-transparent disabled:text-text-disabled',
      },
      {
        variant: 'primary',
        negative: true,
        className:
          'bg-surface-brand text-text-on-brand hover:bg-surface-brand-hover active:bg-surface-brand-hover disabled:bg-surface-disabled disabled:text-text-disabled',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
      negative: false,
    },
  }
);

const iconSizeMap: Record<'sm' | 'md' | 'lg', string> = {
  lg: 'size-6',
  md: 'size-6',
  sm: 'size-5',
};

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'>,
    VariantProps<typeof iconButtonVariants> {
  /**
   * Accessible description for assistive screen readers.
   */
  'aria-label': string;
  /**
   * Lucide icon component or standard React icon component.
   */
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  /**
   * Alternative children slot for custom icon SVG elements.
   */
  children?: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'lg',
      negative = false,
      type = 'button',
      icon: Icon,
      children,
      disabled,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const iconClass = iconSizeMap[size || 'lg'];

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
        className={cn(iconButtonVariants({ variant, size, negative }), className)}
        {...props}
      >
        {Icon ? <Icon className={iconClass} aria-hidden="true" /> : children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
