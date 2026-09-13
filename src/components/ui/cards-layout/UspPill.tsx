import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tile, type TileProps, type tileVariants } from '../media/Tile';

export const uspPillVariants = cva(
  'w-full flex items-center gap-4 p-4 min-h-[64px] h-auto rounded-pill-lg transition-all duration-150 select-none',
  {
    variants: {
      variant: {
        fill: 'bg-surface-neutral text-text-neutral',
        outline: 'bg-transparent border border-border-neutral text-text-neutral',
      },
    },
    defaultVariants: {
      variant: 'fill',
    },
  }
);

export interface UspPillProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof uspPillVariants> {
  /**
   * Primary title or heading for the USP pill.
   */
  title: React.ReactNode;
  /**
   * Subtitle or descriptive benefit copy.
   */
  subtitle?: React.ReactNode;
  /**
   * Alias for subtitle.
   */
  description?: React.ReactNode;
  /**
   * Lucide icon or custom SVG component rendered inside the circular Tile.
   */
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  /**
   * Colorway / theme variant for the Tile component.
   * @default 'brand'
   */
  tileVariant?: VariantProps<typeof tileVariants>['variant'];
  /**
   * Size of the Tile.
   * @default 'md'
   */
  tileSize?: VariantProps<typeof tileVariants>['size'];
  /**
   * Optional full props pass-through for the nested Tile component.
   */
  tileProps?: Partial<TileProps>;
  /**
   * Convenience boolean alias for `variant="outline"`.
   * @default false
   */
  bordered?: boolean;
}

export const UspPill = React.forwardRef<HTMLDivElement, UspPillProps>(
  (
    {
      className,
      variant: variantProp,
      bordered,
      title,
      subtitle,
      description,
      icon,
      tileVariant = 'brand',
      tileSize = 'md',
      tileProps,
      ...props
    },
    ref
  ) => {
    const effectiveVariant: 'fill' | 'outline' =
      bordered !== undefined ? (bordered ? 'outline' : 'fill') : variantProp || 'fill';
    const sub = subtitle !== undefined ? subtitle : description;

    return (
      <div
        ref={ref}
        className={cn(uspPillVariants({ variant: effectiveVariant }), className)}
        {...props}
      >
        {/* Leading Circular Tile Icon */}
        {(icon || tileProps) && (
          <Tile
            variant={tileVariant}
            size={tileSize}
            icon={icon}
            className={cn('shrink-0', tileProps?.className)}
            {...tileProps}
          />
        )}

        {/* Text Content Container */}
        <div className="flex flex-1 flex-col justify-center min-w-0">
          <div className="font-heading font-semibold text-title-base text-text-neutral leading-6">
            {title}
          </div>
          {sub && (
            <div className="font-body font-normal text-body-p2 text-text-neutral-secondary leading-snug sm:leading-6 line-clamp-2">
              {sub}
            </div>
          )}
        </div>
      </div>
    );
  }
);

UspPill.displayName = 'UspPill';

// Figma node name alias
export const SuppositoryCard = UspPill;
