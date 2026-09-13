import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const accordionVariants = cva(
  'w-full bg-surface-neutral p-6 rounded-card transition-all duration-200 text-text-neutral',
  {
    variants: {
      variant: {
        borderless: 'border-0 shadow-none',
        bordered: 'border border-border-neutral shadow-none hover:border-border-neutral-strong',
      },
    },
    defaultVariants: {
      variant: 'borderless',
    },
  }
);

export interface AccordionItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof accordionVariants> {
  /**
   * Title text or custom node rendered in the accordion trigger header.
   */
  title: React.ReactNode;
  /**
   * Expandable body content.
   */
  children?: React.ReactNode;
  /**
   * Controlled open state.
   */
  isOpen?: boolean;
  /**
   * Default open state for uncontrolled usage.
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * Callback fired when open state is toggled.
   */
  onToggle?: () => void;
  /**
   * Callback with next open state.
   */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * Whether to render with outline border style.
   * Convenience alias for `variant="bordered"`.
   * @default false
   */
  bordered?: boolean;
  /**
   * Visual style variant: 'borderless' (default in Figma) or 'bordered' ('Outine' in Figma).
   * @default 'borderless'
   */
  variant?: 'borderless' | 'bordered';
  /**
   * Whether the accordion item is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional leading icon before the title.
   */
  leadingIcon?: LucideIcon | React.ComponentType<{ className?: string }>;
}

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  (
    {
      className,
      variant: variantProp,
      bordered,
      title,
      children,
      isOpen: controlledIsOpen,
      defaultOpen = false,
      onToggle,
      onOpenChange,
      disabled = false,
      leadingIcon: LeadingIcon,
      id,
      ...props
    },
    ref
  ) => {
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = React.useState(defaultOpen);
    const isControlled = controlledIsOpen !== undefined;
    const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

    const generatedId = React.useId();
    const contentId = id ? `${id}-content` : `${generatedId}-content`;
    const triggerId = id ? `${id}-trigger` : `${generatedId}-trigger`;

    // Determine variant (bordered prop takes priority if specified)
    const effectiveVariant: 'borderless' | 'bordered' =
      bordered !== undefined
        ? bordered
          ? 'bordered'
          : 'borderless'
        : variantProp || 'borderless';

    const handleToggle = () => {
      if (disabled) return;
      const nextOpen = !isOpen;
      if (!isControlled) {
        setUncontrolledIsOpen(nextOpen);
      }
      onToggle?.();
      onOpenChange?.(nextOpen);
    };

    return (
      <div
        ref={ref}
        className={cn(
          accordionVariants({ variant: effectiveVariant }),
          disabled && 'opacity-60 pointer-events-none',
          className
        )}
        {...props}
      >
        {/* Accordion Trigger Header Button */}
        <button
          type="button"
          id={triggerId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          aria-disabled={disabled ? 'true' : undefined}
          disabled={disabled}
          onClick={handleToggle}
          className="w-full flex items-center justify-between gap-4 text-left outline-none select-none cursor-pointer group focus-visible:ring-2 focus-visible:ring-surface-accent-1-tertiary focus-visible:ring-offset-2 rounded-xl"
        >
          <div className="flex items-center gap-3 min-w-0">
            {LeadingIcon && (
              <LeadingIcon className="size-6 shrink-0 text-icon-neutral" aria-hidden="true" />
            )}
            <span className="font-heading font-semibold text-title-base text-text-neutral tracking-tight">
              {title}
            </span>
          </div>

          <div className="size-6 shrink-0 flex items-center justify-center">
            <ChevronDown
              className={cn(
                'size-6 text-icon-neutral transition-transform duration-200 ease-out',
                isOpen && 'rotate-180'
              )}
              aria-hidden="true"
            />
          </div>
        </button>

        {/* Expandable Body Container with Smooth Grid Transition */}
        <div
          id={contentId}
          role="region"
          aria-labelledby={triggerId}
          className={cn(
            'grid transition-[grid-template-rows,opacity] duration-200 ease-out',
            isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
          )}
        >
          <div className="overflow-hidden">
            <div className="font-body font-normal text-body-p2 text-text-neutral-secondary pt-1">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

// Standard alias mapping Accordion to AccordionItem
export const Accordion = AccordionItem;
export type AccordionProps = AccordionItemProps;
