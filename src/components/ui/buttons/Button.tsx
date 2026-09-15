import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-heading font-semibold whitespace-nowrap transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-surface-accent-1-tertiary select-none disabled:pointer-events-none disabled:cursor-not-allowed cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-surface-brand text-text-brand-on-brand hover:bg-surface-brand-hover active:bg-surface-brand-hover active:scale-[0.99] disabled:bg-surface-disabled disabled:text-text-disabled',
        neutral:
          'bg-surface-accent-1-tertiary text-text-inverse hover:bg-surface-accent-1-tertiary-hover active:bg-surface-accent-1-tertiary-hover active:scale-[0.99] disabled:bg-surface-disabled disabled:text-text-disabled',
        subtle:
          'bg-transparent border border-border-neutral-strong text-text-neutral hover:bg-surface-hover active:bg-black/10 active:scale-[0.99] disabled:border-border-disabled disabled:text-text-disabled disabled:bg-transparent',
      },
      size: {
        lg: 'h-14 px-6 py-4 text-base leading-6 gap-3',
        md: 'h-12 px-6 py-3 text-base leading-6 gap-3',
        sm: 'h-9 px-3 py-1.5 text-sm leading-5 gap-1.5',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
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
          'bg-transparent border border-border-neutral text-text-inverse hover:bg-surface-hover-inverse active:bg-white/10 disabled:border-border-inverse disabled:text-text-disabled disabled:bg-transparent',
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
      fullWidth: false,
      negative: false,
    },
  }
);

const iconSizes: Record<'sm' | 'md' | 'lg', string> = {
  lg: 'size-6 shrink-0',
  md: 'size-6 shrink-0',
  sm: 'size-4.5 shrink-0',
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leadingIcon?: LucideIcon | React.ComponentType<{ className?: string }>;
  trailingIcon?: LucideIcon | React.ComponentType<{ className?: string }>;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'lg',
      fullWidth,
      negative = false,
      type = 'button',
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const iconClass = iconSizes[size || 'lg'];

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(buttonVariants({ variant, size, fullWidth, negative }), className)}
        {...props}
      >
        {LeadingIcon && <LeadingIcon className={iconClass} aria-hidden="true" />}
        {children && <span>{children}</span>}
        {TrailingIcon && <TrailingIcon className={iconClass} aria-hidden="true" />}
      </button>
    );
  }
);

Button.displayName = 'Button';
