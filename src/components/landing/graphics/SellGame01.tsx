import * as React from 'react';
import { Plus, Flower2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SellGame01Props extends React.HTMLAttributes<HTMLDivElement> {
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

export const SellGame01: React.FC<SellGame01Props> = ({
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
        {/* Browser Top Header Bar */}
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

        {/* Browser Content Stage: 2-Panel Game Editor Layout */}
        <div className="p-3.5 sm:p-4 relative flex-1 w-full overflow-hidden flex items-stretch gap-2.5 sm:gap-3 bg-white">
          {/* Left Sidebar Panel */}
          <div className="w-[110px] sm:w-[124px] flex flex-col justify-between shrink-0 h-full py-0.5">
            {/* Top Level List Controls */}
            <div className="flex flex-col gap-2">
              {/* Level 1 Button */}
              <div className="h-9 px-3 bg-[#F8F8F8] border border-border-neutral-subtle/30 rounded-[8px] flex items-center justify-center">
                <span className="text-[12px] font-heading font-normal text-text-neutral/70">
                  Level 1
                </span>
              </div>

              {/* Add Level Button */}
              <div className="h-9 bg-[#F8F8F8] hover:bg-[#F2F2F2] border border-border-neutral-subtle/30 rounded-[8px] flex items-center justify-center transition-colors">
                <Plus className="size-4 text-text-neutral/50" />
              </div>
            </div>

            {/* Bottom Publish Button */}
            <div className="w-full">
              <div className="h-9 bg-[#F8F8F8] border border-border-neutral-subtle/30 rounded-[8px] flex items-center justify-center">
                <span className="text-[12px] font-heading font-normal text-text-neutral/70">
                  Publish
                </span>
              </div>
            </div>
          </div>

          {/* Right Editor Canvas Area */}
          <div className="flex-1 h-full bg-[#F8F8F8] rounded-[8px] p-3 sm:p-4 flex flex-col items-center justify-center gap-3 relative overflow-hidden border border-border-neutral-subtle/40">
            {/* TOP: Schematic Image Placeholder Card (Starts empty gray, populates on click) */}
            <div
              className={cn(
                'w-[110px] h-[98px] rounded-[8px] flex items-center justify-center relative transition-all duration-300',
                animate
                  ? 'sellgame01-media-container'
                  : 'bg-[#F2F2F2] border border-[#CDE83E]'
              )}
            >
              {/* Populated Schematic Image Vector */}
              <div
                className={cn(
                  'size-14 rounded-full bg-[#DCF652]/25 border border-[#CDE83E]/50 flex items-center justify-center transition-all duration-300',
                  animate ? 'sellgame01-media-populated' : 'opacity-100 scale-100'
                )}
              >
                <Flower2 className="size-7 text-[#576501]" />
              </div>
            </div>

            {/* BOTTOM: Schematic Text Content Area (Starts empty gray, populates on click) */}
            <div
              className={cn(
                'w-[240px] h-[115px] p-2.5 rounded-[8px] flex flex-col justify-start relative transition-all duration-300 overflow-hidden',
                animate
                  ? 'sellgame01-text-container'
                  : 'bg-[#F2F2F2] border border-[#CDE83E]'
              )}
            >
              <p
                className={cn(
                  'text-[9px] sm:text-[10px] font-body leading-relaxed text-[#576501] transition-all duration-300',
                  animate ? 'sellgame01-text-populated' : 'opacity-100'
                )}
              >
                Drag colorful spider webs to connect Italian words on the left with their correct English image translations on the right before time runs out.
              </p>
            </div>
          </div>

          {/* Animated Cursor Vector Pointer */}
          <div
            className={cn(
              'absolute top-[55px] left-[70px] pointer-events-none z-20',
              animate && 'sellgame01-cursor-path'
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

      {/* Embedded Pure CSS GPU Keyframes (Exact 4.5s Sequence) */}
      <style>{`
        /* STEP 1: Cursor travels to image placeholder -> clicks -> travels to text area -> clicks -> resets */
        @keyframes kf_sellgame01_cursor {
          0% {
            /* Start resting offset on the left */
            transform: translate(0px, 0px) scale(1);
          }
          3% {
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
            transform: translate(0px, 0px) scale(1);
          }
          22% {
            /* Arrives over top schematic image placeholder */
            transform: translate(185px, 20px) scale(1);
          }
          26% {
            /* Click press down */
            animation-timing-function: cubic-bezier(0.45, 1.45, 0.8, 1);
            transform: translate(185px, 20px) scale(0.85);
          }
          30% {
            /* Click release */
            transform: translate(185px, 20px) scale(1);
          }
          48% {
            /* Arrives over bottom content area */
            transform: translate(195px, 125px) scale(1);
          }
          52% {
            /* Click press down */
            animation-timing-function: cubic-bezier(0.45, 1.45, 0.8, 1);
            transform: translate(195px, 125px) scale(0.85);
          }
          56% {
            /* Click release */
            transform: translate(195px, 125px) scale(1);
          }
          72% {
            /* Glides aside during confirmed view */
            transform: translate(250px, 150px) scale(1);
          }
          85% {
            transform: translate(250px, 150px) scale(1);
          }
          100% {
            /* Returns to initial position */
            transform: translate(0px, 0px) scale(1);
          }
        }

        /* STEP 2: Top Image Placeholder container styling on click */
        @keyframes kf_sellgame01_media_box {
          0%, 25.9% {
            background-color: #F2F2F2;
            border: 1px solid transparent;
            box-shadow: 0 0 0 0 rgba(205, 232, 62, 0);
          }
          26%, 85% {
            background-color: #F2F2F2;
            border: 1px solid #CDE83E;
            box-shadow: 0 0 0 2px rgba(205, 232, 62, 0.35);
          }
          92%, 100% {
            background-color: #F2F2F2;
            border: 1px solid transparent;
            box-shadow: 0 0 0 0 rgba(205, 232, 62, 0);
          }
        }

        /* STEP 2: Top Image populates instantly on click at 26% */
        @keyframes kf_sellgame01_media_pop {
          0%, 25.9% {
            opacity: 0;
            transform: scale(0.5);
          }
          28% {
            opacity: 1;
            transform: scale(1.1);
          }
          32%, 85% {
            opacity: 1;
            transform: scale(1);
          }
          90%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }

        /* STEP 3: Bottom Content Area container styling on click */
        @keyframes kf_sellgame01_text_box {
          0%, 51.9% {
            background-color: #F2F2F2;
            border: 1px solid transparent;
            box-shadow: 0 0 0 0 rgba(205, 232, 62, 0);
          }
          52%, 85% {
            background-color: #F2F2F2;
            border: 1px solid #CDE83E;
            box-shadow: 0 0 0 2px rgba(205, 232, 62, 0.35);
          }
          92%, 100% {
            background-color: #F2F2F2;
            border: 1px solid transparent;
            box-shadow: 0 0 0 0 rgba(205, 232, 62, 0);
          }
        }

        /* STEP 3: Bottom Text populates instantly on click at 52% */
        @keyframes kf_sellgame01_text_pop {
          0%, 51.9% {
            opacity: 0;
            transform: translateY(4px);
          }
          55%, 85% {
            opacity: 1;
            transform: translateY(0px);
          }
          90%, 100% {
            opacity: 0;
            transform: translateY(4px);
          }
        }

        .sellgame01-cursor-path {
          animation: kf_sellgame01_cursor 4.5s infinite;
          will-change: transform;
        }

        .sellgame01-media-container {
          animation: kf_sellgame01_media_box 4.5s infinite;
          will-change: border-color, box-shadow;
        }

        .sellgame01-media-populated {
          animation: kf_sellgame01_media_pop 4.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
          will-change: transform, opacity;
        }

        .sellgame01-text-container {
          animation: kf_sellgame01_text_box 4.5s infinite;
          will-change: border-color, box-shadow;
        }

        .sellgame01-text-populated {
          animation: kf_sellgame01_text_pop 4.5s ease-out infinite;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .sellgame01-cursor-path,
          .sellgame01-media-container,
          .sellgame01-media-populated,
          .sellgame01-text-container,
          .sellgame01-text-populated {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SellGame01;
