import * as React from 'react';
import { cn } from '@/lib/utils';

export interface FindGame01Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional custom browser address bar URL
   * @default 'www.umaigra.com/games'
   */
  url?: string;
  /**
   * Whether to run the timeline animation
   * @default true
   */
  animate?: boolean;
}

const SUBJECT_ITEMS = [
  { id: 'math', label: 'Pre-Algebra & Algebra' },
  { id: 'geometry', label: 'Geometry' },
  { id: 'biology', label: 'Biology' },
  { id: 'literature', label: 'Literature' },
  { id: 'geography', label: 'Geography', isTarget: true },
  { id: 'grammar', label: 'Grammar & Composition' },
  { id: 'cs', label: 'Computer Science' },
  { id: 'english', label: 'English' },
  { id: 'environmental-science', label: 'Environmental Science' },
  { id: 'foreign-languages', label: 'Foreign Languages' },
  { id: 'music', label: 'Music' },
  { id: 'pe', label: 'Physical Education' },
];

export const FindGame01: React.FC<FindGame01Props> = ({
  className,
  url = 'www.umaigra.com/games',
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

        {/* Browser Content Stage with Scrolling List & Animated Cursor */}
        <div className="p-4 sm:px-10 sm:py-5 relative flex-1 w-full overflow-hidden flex flex-col justify-start items-center bg-white">
          {/* Animated Subjects List Container */}
          <div
            className={cn(
              'w-full flex flex-col gap-2 relative',
              animate && 'findgame-list-scroll'
            )}
          >
            {SUBJECT_ITEMS.map((item) => {
              if (item.isTarget) {
                return (
                  <div
                    key={item.id}
                    className={cn(
                      'w-full px-3.5 py-2.5 rounded-full flex items-center gap-3 border transition-colors relative',
                      animate
                        ? 'findgame-target-row'
                        : 'bg-[#DCF652]/30 border-[#9EBF00]'
                    )}
                  >
                    {/* Radio Button Indicator */}
                    <div className="size-[18px] rounded-full border border-[#DCDDDD] bg-white flex items-center justify-center shrink-0 overflow-hidden relative">
                      <div
                        className={cn(
                          'size-[11px] rounded-full bg-[#9EBF00]',
                          animate
                            ? 'findgame-radio-dot'
                            : 'opacity-100 scale-100'
                        )}
                      />
                    </div>
                    {/* Subject Label */}
                    <span className="text-[12px] font-heading font-normal text-text-neutral-secondary truncate">
                      {item.label}
                    </span>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  className="w-full px-3.5 py-2.5 rounded-full bg-[#F8F8F8] border border-transparent flex items-center gap-3 shrink-0"
                >
                  <div className="size-[18px] rounded-full border border-[#DCDDDD] bg-white shrink-0" />
                  <span className="text-[12px] font-heading font-normal text-text-neutral-secondary truncate">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Animated Cursor Vector */}
          <div
            className={cn(
              'absolute top-[40px] right-[48px] pointer-events-none z-20',
              animate && 'findgame-cursor-motion'
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

      {/* Embedded GPU Keyframes matching exact Motion Timeline (4.5s loop) */}
      <style>{`
        @keyframes kf_list_scroll {
          0%, 20% {
            transform: translateY(0px);
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
          }
          45%, 92% {
            transform: translateY(-120px);
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes kf_cursor_translate {
          0%, 20% {
            transform: translate(0px, 0px) scale(1);
          }
          45% {
            transform: translate(0px, 0px) scale(1);
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
          }
          62% {
            transform: translate(-290px, 62px) scale(1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          68% {
            transform: translate(-290px, 62px) scale(0.72);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          73%, 92% {
            transform: translate(-290px, 62px) scale(1);
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes kf_row_select {
          0%, 62% {
            background-color: #F8F8F8;
            border-color: transparent;
            transform: scale(1);
          }
          68% {
            background-color: #F8F8F8;
            border-color: transparent;
            transform: scale(0.97);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          73%, 92% {
            background-color: rgba(220, 246, 82, 0.32);
            border-color: #9EBF00;
            transform: scale(1);
          }
          100% {
            background-color: #F8F8F8;
            border-color: transparent;
            transform: scale(1);
          }
        }

        @keyframes kf_radio_pop {
          0%, 68% {
            opacity: 0;
            transform: scale(0);
          }
          73%, 92% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        .findgame-list-scroll {
          animation: kf_list_scroll 4.5s infinite;
          will-change: transform;
        }

        .findgame-cursor-motion {
          animation: kf_cursor_translate 4.5s infinite;
          will-change: transform;
        }

        .findgame-target-row {
          animation: kf_row_select 4.5s infinite;
          will-change: transform, background-color, border-color;
        }

        .findgame-radio-dot {
          animation: kf_radio_pop 4.5s infinite;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .findgame-list-scroll,
          .findgame-cursor-motion,
          .findgame-target-row,
          .findgame-radio-dot {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FindGame01;
