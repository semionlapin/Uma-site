import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { ProgressDeterminate } from '../progress/ProgressDeterminate';

export interface FeatureStepItem {
  /**
   * Step index string or number, e.g. "01", "02", "03"
   */
  step?: string | number;
  /**
   * Title of the feature step
   */
  title: React.ReactNode;
  /**
   * Detailed description of the feature step
   */
  description?: React.ReactNode;
  /**
   * Optional custom browser URL display for this step
   * @default 'www.umaigra.com/mygame'
   */
  url?: string;
  /**
   * Media content rendered in the right-side framed browser window (Image URL, Video component, or custom React Node)
   */
  media?: React.ReactNode;
  /**
   * Optional image source url if media is not a custom node
   */
  imageSrc?: string;
  /**
   * Optional image alt text
   */
  imageAlt?: string;
}

export interface AutoAdvancingFeatureListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * List of feature steps to rotate through
   */
  items?: FeatureStepItem[];
  /**
   * Duration (in milliseconds) each step stays active before auto-advancing
   * @default 5000
   */
  duration?: number;
  /**
   * Whether auto-advancing is enabled
   * @default true
   */
  autoAdvance?: boolean;
  /**
   * Optional callback when active step index changes
   */
  onStepChange?: (index: number) => void;
  /**
   * Default browser address bar placeholder
   * @default 'www.umaigra.com/mygame'
   */
  defaultUrl?: string;
  /**
   * Whether to only start playing animations and timer when scrolled into viewport
   * @default true
   */
  playOnlyInView?: boolean;
}

const DEFAULT_ITEMS: FeatureStepItem[] = [
  {
    step: '01',
    title: 'Выберите шаблон',
    description: 'Найди нужную игровую механику в библиотеке под свою учебную задачу: викторины, карточки, поиск пар или турниры.',
    url: 'www.umaigra.com/templates',
  },
  {
    step: '02',
    title: 'Наполните контентом',
    description: 'Добавьте свои вопросы, варианты ответов, иллюстрации и подсказки за пару кликов или выберите готовый набор из базы.',
    url: 'www.umaigra.com/editor',
  },
  {
    step: '03',
    title: 'Запустите интерактивную игру',
    description: 'Ученики мгновенно подключаются со смартфонов или компьютеров по простому PIN-коду без долгой регистрации.',
    url: 'www.umaigra.com/play/live',
  },
];

export const AutoAdvancingFeatureList = React.forwardRef<
  HTMLDivElement,
  AutoAdvancingFeatureListProps
>(
  (
    {
      className,
      items = DEFAULT_ITEMS,
      duration = 5000,
      autoAdvance = true,
      onStepChange,
      defaultUrl = 'www.umaigra.com/mygame',
      playOnlyInView = true,
      ...props
    },
    ref
  ) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [hasStarted, setHasStarted] = useState(!playOnlyInView);

    const containerRef = useRef<HTMLDivElement | null>(null);

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      },
      [ref]
    );

    // Viewport Detection: Start playback only when visible
    useEffect(() => {
      if (!playOnlyInView || hasStarted) return;

      const element = containerRef.current;
      if (!element) return;

      if (typeof IntersectionObserver === 'undefined') {
        setHasStarted(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.25 }
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
      };
    }, [playOnlyInView, hasStarted]);

    const activeIndexRef = useRef(activeIndex);
    activeIndexRef.current = activeIndex;

    const itemsCount = items.length;

    const handleSelectStep = useCallback(
      (index: number) => {
        setActiveIndex(index);
        setProgress(0);
        setIsHovered(false);
        onStepChange?.(index);
      },
      [onStepChange]
    );

    // Auto-advance timer and progress loop
    useEffect(() => {
      if (!hasStarted || !autoAdvance || isHovered || itemsCount <= 1) {
        return;
      }

      const intervalTime = 40; // update every 40ms for smooth progress
      const increment = (intervalTime / duration) * 100;

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev + increment >= 100) {
            const nextIdx = (activeIndexRef.current + 1) % itemsCount;
            setActiveIndex(nextIdx);
            onStepChange?.(nextIdx);
            return 0;
          }
          return prev + increment;
        });
      }, intervalTime);

      return () => clearInterval(timer);
    }, [hasStarted, autoAdvance, isHovered, duration, itemsCount, onStepChange]);

    return (
      <div
        ref={setRefs}
        className={cn(
          'w-full grid grid-cols-1 lg:grid-cols-12 items-stretch gap-8 lg:gap-12 xl:gap-16 select-none',
          className
        )}
        {...props}
      >
        {/* Left Column: Stacked Interactive Feature Step Items (lg:col-span-5 / ~38%) */}
        <div className="min-w-0 w-full lg:col-span-5 flex flex-col justify-center space-y-2">
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const stepNum = item.step || (index + 1 < 10 ? `0${index + 1}` : `${index + 1}`);

            return (
              <div
                key={index}
                onClick={() => handleSelectStep(index)}
                onMouseEnter={isActive ? () => setIsHovered(true) : undefined}
                onMouseLeave={isActive ? () => setIsHovered(false) : undefined}
                className="group cursor-pointer transition-all duration-200 text-left flex flex-col"
                role="button"
                tabIndex={0}
                aria-current={isActive ? 'step' : undefined}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelectStep(index);
                  }
                }}
              >
                {/* Step Index Number (Title/Base - Regular) */}
                <div className="text-title-base-regular text-text-neutral">
                  {stepNum}
                </div>

                {/* Step Title (text/neutral/default across active and inactive states) */}
                <div className="text-title-base text-text-neutral group-hover:text-text-brand transition-colors">
                  {item.title}
                </div>

                {/* Step Description (Smooth Expand/Collapse transition) */}
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isActive
                      ? 'grid-rows-[1fr] opacity-100 mt-1.5'
                      : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="font-body font-normal text-body-p2 text-text-neutral-secondary leading-6">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Progress / Divider Slot */}
                <div className="py-5 w-full">
                  {isActive ? (
                    <ProgressDeterminate
                      value={hasStarted ? progress : 0}
                      size="hairline"
                      variant="default"
                      className="w-full"
                    />
                  ) : (
                    <div className="h-px w-full bg-surface-neutral-tertiary/60 rounded-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Clean Interactive Graphic / Media Asset Container (lg:col-span-7 / ~62%) */}
        <div className="min-w-0 w-full lg:col-span-7 relative min-h-[420px] flex items-center justify-center">
          {items.map((item, idx) => {
            const isItemActive = idx === activeIndex;
            if (!isItemActive) return null;

            return (
              <div
                key={`step-${idx}-${item.step || ''}`}
                className="w-full h-full flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-100 z-10 pointer-events-auto relative animate-in fade-in-0 duration-200"
              >
                {item.media ? (
                  React.isValidElement(item.media) ? (
                    React.cloneElement(
                      item.media as React.ReactElement<{ animate?: boolean }>,
                      {
                        animate: hasStarted,
                      }
                    )
                  ) : (
                    item.media
                  )
                ) : item.imageSrc ? (
                  <div className="w-full h-full min-h-[420px] p-4 rounded-[24px] bg-[rgba(76,54,89,0.05)] flex items-center justify-center overflow-hidden">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt || `Step ${idx + 1}`}
                      className="w-full h-full max-w-none object-contain rounded-lg"
                    />
                  </div>
                ) : (
                  /* Fallback Interactive Mockup if no media supplied */
                  <div className="w-full h-full min-h-[420px] p-4 rounded-[24px] bg-[rgba(76,54,89,0.05)] flex flex-col items-center justify-center overflow-hidden">
                    <div className="w-full max-w-none aspect-[16/10] bg-white rounded-[16px] shadow-sm border border-border-neutral-subtle/60 p-4 flex flex-col justify-between">
                      <div className="grid grid-cols-3 grid-rows-2 gap-2.5 flex-1">
                        <div
                          className={cn(
                            'p-3 rounded-xl flex items-center justify-center text-center text-xs font-heading font-medium transition-all duration-200 border',
                            idx === 0
                              ? 'bg-surface-brand-subtle/40 border-surface-brand text-text-neutral shadow-xs'
                              : 'bg-surface-base border-border-neutral-subtle/40 text-text-neutral-secondary'
                          )}
                        >
                          Speed-run
                        </div>
                        <div
                          className={cn(
                            'p-3 rounded-xl flex items-center justify-center text-center text-xs font-heading font-medium transition-all duration-200 border',
                            idx === 1
                              ? 'bg-surface-accent-1/30 border-surface-accent-1 text-text-neutral shadow-xs'
                              : 'bg-surface-base border-border-neutral-subtle/40 text-text-neutral-secondary'
                          )}
                        >
                          Multiple-choice
                        </div>
                        <div
                          className={cn(
                            'p-3 rounded-xl flex items-center justify-center text-center text-xs font-heading font-medium transition-all duration-200 border',
                            idx === 2
                              ? 'bg-surface-accent-2/30 border-surface-accent-2 text-text-neutral shadow-xs'
                              : 'bg-surface-base border-border-neutral-subtle/40 text-text-neutral-secondary'
                          )}
                        >
                          Drag-and-drop
                        </div>
                        <div className="p-3 rounded-xl bg-surface-base border border-border-neutral-subtle/40 flex items-center justify-center text-center text-xs font-heading font-medium text-text-neutral-secondary">
                          Word Building
                        </div>
                        <div
                          className={cn(
                            'p-3 rounded-xl flex items-center justify-center text-center text-xs font-heading font-medium transition-all duration-200 border',
                            idx === 0
                              ? 'bg-surface-brand/20 border-surface-brand text-text-neutral font-semibold shadow-xs'
                              : 'bg-surface-base border-border-neutral-subtle/40 text-text-neutral-secondary'
                          )}
                        >
                          Matching & Association
                        </div>
                        <div className="p-3 rounded-xl bg-surface-base border border-border-neutral-subtle/40 flex items-center justify-center text-center text-xs font-heading font-medium text-text-neutral-secondary">
                          Search & Strategy
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>


    );
  }
);

AutoAdvancingFeatureList.displayName = 'AutoAdvancingFeatureList';
