import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const tileVariants = cva(
  'aspect-square inline-flex items-center justify-center rounded-full shrink-0 select-none overflow-hidden transition-transform',
  {
    variants: {
      variant: {
        brand: 'bg-surface-brand text-lime-uma-900',
        accent1: 'bg-violet-200 text-violet-800',
        accent2: 'bg-sky-200 text-sky-800',
        neutral: 'bg-surface-accent-1-tertiary text-text-inverse',
        subtle: 'bg-surface-neutral-tertiary text-text-neutral',
        positive: 'bg-cucumber-200 text-cucumber-900',
        warning: 'bg-amber-200 text-amber-900',
        danger: 'bg-berry-200 text-berry-900',
      },
      size: {
        lg: 'size-14 p-3',
        md: 'size-12 p-3',
        sm: 'size-9 p-2',
      },
    },
    defaultVariants: {
      variant: 'brand',
      size: 'md',
    },
  }
);

const iconSizeMap: Record<'sm' | 'md' | 'lg', string> = {
  lg: 'size-8 shrink-0',
  md: 'size-6 shrink-0',
  sm: 'size-5 shrink-0',
};

export interface TileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tileVariants> {
  /**
   * Lucide icon component or custom React SVG icon.
   */
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  /**
   * Optional custom children if not using the icon prop.
   */
  children?: React.ReactNode;
}

export const Tile = React.forwardRef<HTMLDivElement, TileProps>(
  (
    {
      className,
      variant = 'brand',
      size = 'md',
      icon: Icon,
      children,
      ...props
    },
    ref
  ) => {
    const iconClass = iconSizeMap[size || 'md'];

    return (
      <div
        ref={ref}
        className={cn(tileVariants({ variant, size }), className)}
        {...props}
      >
        {Icon ? <Icon className={iconClass} aria-hidden="true" /> : children}
      </div>
    );
  }
);

Tile.displayName = 'Tile';
