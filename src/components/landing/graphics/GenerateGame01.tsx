import * as React from 'react';
import { cn } from '@/lib/utils';

export interface GenerateGame01Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional custom browser address bar URL
   * @default 'www.umaigra.com/mygame'
   */
  url?: string;
  /**
   * Whether to run the timeline animation
   * @default true
   */
  animate?: boolean;
}

interface MechanicItem {
  id: string;
  title: string;
  isTarget?: boolean;
}

const MECHANIC_ROW_1: MechanicItem[] = [
  { id: 'speed-run', title: 'Speed-run' },
  { id: 'multiple-choice', title: 'Multiple-choice' },
  { id: 'drag-drop', title: 'Drag-and-drop' },
];

const MECHANIC_ROW_2: MechanicItem[] = [
  { id: 'word-building', title: 'Word Building' },
  { id: 'matching', title: 'Matching & Association', isTarget: true },
  { id: 'search-strategy', title: 'Search & Strategy' },
];

export const GenerateGame01: React.FC<GenerateGame01Props> = ({
  className,
  url = 'www.umaigra.com/mygame',
  animate = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        'w-full h-full min-h-[420px] p-4 rounded-[24px] bg-[rgba(76,54,89,0.05)] flex flex-col items-center justify-center select-none overflow-hidden',
        className
      )}
      {...props}
    >
      {/* Outer Browser Window Mockup */}
      <div className="w-full max-w-none aspect-[16/10] bg-white rounded-[16px] shadow-sm border border-border-neutral-subtle/60 flex flex-col overflow-hidden relative">
        {/* Browser Header Bar */}
        <div className="h-9 px-3.5 bg-surface-neutral flex items-center gap-3.5 border-b border-border-neutral-subtle/50 shrink-0">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="size-2.5 rounded-full bg-[#D9D9D9]" />
            <span className="size-2.5 rounded-full bg-[#D9D9D9]" />
            <span className="size-2.5 rounded-full bg-[#D9D9D9]" />
          </div>
          {/* URL Address */}
          <span className="text-[11px] font-heading font-normal text-text-neutral-secondary/80 truncate">
            {url}
          </span>
        </div>

        {/* Browser Content Stage with 2x3 Grid Cards & Animated Cursor */}
        <div className="p-4 sm:p-5 relative flex-1 w-full overflow-hidden flex flex-col justify-center items-center bg-white">
          <div className="w-full h-full flex-1 grid grid-cols-3 grid-rows-2 gap-2.5 sm:gap-3 relative">
            {[...MECHANIC_ROW_1, ...MECHANIC_ROW_2].map((item) => {
              if (item.isTarget) {
                return (
                  <div
                    key={item.id}
                    className={cn(
                      'rounded-[10px] p-3 flex items-center justify-center text-center border transition-all relative',
                      animate
                        ? 'generategame01-target-card'
                        : 'bg-[#F6FDCF] border-[#CDE83E] ring-2 ring-[#CDE83E]/40'
                    )}
                  >
                    <span className="text-[12px] sm:text-[13px] font-heading font-normal text-text-neutral leading-snug select-none">
                      {item.title}
                    </span>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  className="bg-[#F8F8F8] rounded-[10px] p-3 flex items-center justify-center text-center border border-transparent"
                >
                  <span className="text-[12px] sm:text-[13px] font-heading font-normal text-text-neutral-secondary leading-snug select-none">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Animated Cursor Vector */}
          <div
            className={cn(
              'absolute top-[52px] left-[130px] pointer-events-none z-20',
              animate && 'generategame01-cursor-motion'
            )}
            aria-hidden="true"
          >
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-xs"
            >
              <path
                d="M0.5 0.5L8.5 21.5L13 11L23 5.5L0.5 0.5Z"
                fill="#576501"
                stroke="white"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Embedded GPU Keyframes matching exact Figma Motion Timeline (2.5s loop) */}
      <style>{`
        @keyframes kf_generategame01_cursor {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          15% {
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(100px, 130px) scale(1);
          }
          58% {
            animation-timing-function: cubic-bezier(0.45, 1.45, 0.8, 1);
            transform: translate(100px, 130px) scale(0.7);
          }
          66% {
            transform: translate(100px, 130px) scale(1);
          }
          88% {
            transform: translate(100px, 130px) scale(1);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes kf_generategame01_card_select {
          0%, 53.9% {
            background-color: #F8F8F8;
            border-color: transparent;
            box-shadow: 0 0 0 0 rgba(205, 232, 62, 0);
            transform: scale(1);
          }
          58% {
            animation-timing-function: cubic-bezier(0.45, 1.45, 0.8, 1);
            transform: scale(0.97);
          }
          66%, 88% {
            transform: scale(1);
            border-color: #CDE83E;
            box-shadow: 0 0 0 2px rgba(205, 232, 62, 0.4);
            background-color: #F6FDCF;
          }
          96%, 100% {
            transform: scale(1);
            border-color: transparent;
            box-shadow: 0 0 0 0 rgba(205, 232, 62, 0);
            background-color: #F8F8F8;
          }
        }

        .generategame01-cursor-motion {
          animation: kf_generategame01_cursor 2.5s infinite;
          will-change: transform;
        }

        .generategame01-target-card {
          animation: kf_generategame01_card_select 2.5s infinite;
          will-change: transform, border-color, box-shadow, background-color;
        }

        @media (prefers-reduced-motion: reduce) {
          .generategame01-cursor-motion,
          .generategame01-target-card {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GenerateGame01;
