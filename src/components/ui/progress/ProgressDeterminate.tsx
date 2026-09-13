import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const progressTrackVariants = cva(
  'w-full bg-surface-neutral-tertiary overflow-hidden relative rounded-full',
  {
    variants: {
      size: {
        hairline: 'h-px',
        sm: 'h-1',
        md: 'h-1.5',
        lg: 'h-2',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export const progressIndicatorVariants = cva(
  'h-full rounded-full transition-all duration-300 ease-out',
  {
    variants: {
      variant: {
        default: 'bg-surface-accent-1-tertiary',
        brand: 'bg-surface-brand',
        accent1: 'bg-surface-accent-1',
        accent2: 'bg-surface-accent-2',
        positive: 'bg-surface-positive',
        danger: 'bg-surface-danger',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ProgressDeterminateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressTrackVariants> {
  /**
   * The current progress value.
   */
  value: number;
  /**
   * The maximum progress value.
   * @default 100
   */
  max?: number;
  /**
   * Color theme variant for the progress indicator fill.
   * @default 'default' (matching Figma surface-accent-1-tertiary #31143d)
   */
  variant?: VariantProps<typeof progressIndicatorVariants>['variant'];
  /**
   * Optional custom indicator class name.
   */
  indicatorClassName?: string;
  /**
   * Optional boolean to display a numeric readout / percentage label.
   * @default false
   */
  showLabel?: boolean;
  /**
   * Optional custom label renderer.
   */
  label?: React.ReactNode | ((percent: number, value: number, max: number) => React.ReactNode);
}

export const ProgressDeterminate = React.forwardRef<HTMLDivElement, ProgressDeterminateProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      size = 'sm',
      variant = 'default',
      indicatorClassName,
      showLabel = false,
      label,
      ...props
    },
    ref
  ) => {
    const validMax = max > 0 ? max : 100;
    const clampedValue = Math.min(Math.max(value, 0), validMax);
    const percentage = Math.round((clampedValue / validMax) * 100);

    const renderLabel = () => {
      if (typeof label === 'function') {
        return label(percentage, clampedValue, validMax);
      }
      if (label) {
        return label;
      }
      if (showLabel) {
        return (
          <span className="font-heading font-medium text-xs text-text-neutral-secondary tabular-nums">
            {percentage}%
          </span>
        );
      }
      return null;
    };

    const labelNode = renderLabel();

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {labelNode && (
          <div className="flex items-center justify-between text-xs">
            <span className="font-heading font-medium text-text-neutral-secondary">
              Прогресс
            </span>
            {labelNode}
          </div>
        )}
        <div
          ref={ref}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={validMax}
          className={cn(progressTrackVariants({ size }), className)}
          {...props}
        >
          <div
            className={cn(progressIndicatorVariants({ variant }), indicatorClassName)}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressDeterminate.displayName = 'ProgressDeterminate';

// Alias for generic progress bar import
export const ProgressBar = ProgressDeterminate;
export type ProgressBarProps = ProgressDeterminateProps;
