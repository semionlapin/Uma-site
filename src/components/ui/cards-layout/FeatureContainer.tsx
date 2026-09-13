import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UspPill } from './UspPill';
import type { tileVariants } from '../media/Tile';

export const featureContainerVariants = cva(
  'w-full rounded-card overflow-hidden p-6 sm:p-10 lg:p-12 xl:p-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16 transition-colors select-none',
  {
    variants: {
      variant: {
        brand: 'bg-surface-brand text-text-neutral',
        accent1: 'bg-surface-accent-1 text-text-neutral',
        accent2: 'bg-surface-accent-2 text-text-neutral',
        neutral: 'bg-surface-neutral text-text-neutral border border-border-neutral-subtle shadow-xs',
      },
    },
    defaultVariants: {
      variant: 'brand',
    },
  }
);

export interface FeaturePillItem {
  /**
   * Optional icon rendered inside the pill's circular Tile
   */
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  /**
   * Title of the USP pill
   */
  title: React.ReactNode;
  /**
   * Subtitle / description of the USP pill
   */
  description?: React.ReactNode;
  /**
   * Optional Tile colorway override
   */
  tileVariant?: VariantProps<typeof tileVariants>['variant'];
}

export interface FeatureContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof featureContainerVariants> {
  /**
   * Main section heading / title (e.g. "Для учителей")
   */
  title: React.ReactNode;
  /**
   * Main section description / subtitle
   */
  description?: React.ReactNode;
  /**
   * Up to 3 stacked horizontal USP pill items
   */
  pills?: FeaturePillItem[];
  /**
   * Image source or image config object for the right-side framed media window
   */
  image?: string | { src: string; alt?: string; className?: string };
  /**
   * Optional custom React media slot (e.g. Video player or interactive component)
   */
  media?: React.ReactNode;
}

export const FeatureContainer = React.forwardRef<HTMLDivElement, FeatureContainerProps>(
  (
    {
      className,
      variant = 'brand',
      title,
      description,
      pills,
      image,
      media,
      children,
      ...props
    },
    ref
  ) => {
    const imageConfig = typeof image === 'string' ? { src: image, alt: 'Feature image' } : image;

    return (
      <div
        ref={ref}
        className={cn(featureContainerVariants({ variant }), className)}
        {...props}
      >
        {/* Left Column: Title, Description, and Stacked USP Pills */}
        <div className="min-w-0 w-full flex flex-col gap-6 sm:gap-8 items-stretch">
          {/* Header text block */}
          <div className="flex flex-col gap-2 md:gap-3 w-full">
            <h2 className="font-heading font-semibold text-h2 md:text-h1 text-text-neutral leading-tight">
              {title}
            </h2>
            {description && (
              <p className="font-body font-normal text-body-p2 text-text-neutral leading-6">
                {description}
              </p>
            )}
          </div>

          {/* Stacked Horizontal USP Pills */}
          {pills && pills.length > 0 && (
            <div className="flex flex-col gap-3 w-full items-stretch">
              {pills.map((pill, idx) => (
                <UspPill
                  key={idx}
                  icon={pill.icon}
                  title={pill.title}
                  subtitle={pill.description}
                  tileVariant={pill.tileVariant || 'brand'}
                  className="w-full"
                />
              ))}
            </div>
          )}

          {children}
        </div>

        {/* Right Column: Framed Image / Media Asset Container */}
        <div className="min-w-0 relative w-full h-[300px] sm:h-[380px] lg:h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[480px] rounded-card overflow-hidden shadow-xs bg-surface-neutral/30">
          {media ? (
            media
          ) : imageConfig ? (
            <img
              src={imageConfig.src}
              alt={imageConfig.alt || 'Feature media'}
              className={cn(
                'w-full h-full object-cover object-center rounded-[inherit]',
                imageConfig.className
              )}
            />
          ) : null}
        </div>
      </div>
    );
  }
);

FeatureContainer.displayName = 'FeatureContainer';
