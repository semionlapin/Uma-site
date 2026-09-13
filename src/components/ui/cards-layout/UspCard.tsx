import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tile, type TileProps, type tileVariants } from '../media/Tile';

export const uspCardVariants = cva(
  'flex flex-col items-start gap-4 p-8 rounded-card-sm transition-all duration-150',
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

export interface UspCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof uspCardVariants> {
  /**
   * Primary title or heading for the USP card.
   */
  title: React.ReactNode;
  /**
   * Description or benefit body copy.
   */
  description?: React.ReactNode;
  /**
   * Subtitle alias for description.
   */
  subtitle?: React.ReactNode;
  /**
   * Lucide icon or custom SVG component rendered inside the top circular Tile.
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

export const UspCard = React.forwardRef<HTMLDivElement, UspCardProps>(
  (
    {
      className,
      variant: variantProp,
      bordered,
      title,
      description,
      subtitle,
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
    const bodyContent = description !== undefined ? description : subtitle;

    return (
      <div
        ref={ref}
        className={cn(uspCardVariants({ variant: effectiveVariant }), className)}
        {...props}
      >
        {/* Top Circular Tile Indicator */}
        {(icon || tileProps) && (
          <Tile
            variant={tileVariant}
            size={tileSize}
            icon={icon}
            {...tileProps}
          />
        )}

        {/* Text Content Block */}
        <div className="flex flex-col items-start w-full">
          <h4 className="font-heading font-semibold text-title-base text-text-neutral leading-6">
            {title}
          </h4>
          {bodyContent && (
            <p className="font-body font-normal text-body-p2 text-text-neutral-secondary leading-6 mt-0">
              {bodyContent}
            </p>
          )}
        </div>
      </div>
    );
  }
);

UspCard.displayName = 'UspCard';
