import * as React from 'react';
import { Plus, Wand2, Flower2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface GenerateGame02Props extends React.HTMLAttributes<HTMLDivElement> {
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

/**
 * 4-Point Magic Sparkle Star SVG
 */
const SparkleStar: React.FC<{ className?: string; size?: number; fill?: string }> = ({
  className,
  size = 20,
  fill = '#9EBF00',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z"
      fill={fill}
    />
  </svg>
);

export const GenerateGame02: React.FC<GenerateGame02Props> = ({
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

        {/* Browser Content Stage (2-Panel Layout) */}
        <div className="p-3.5 sm:p-4 relative flex-1 w-full overflow-hidden flex items-stretch gap-2.5 sm:gap-3 bg-white">
          {/* 2-Panel Layout Container with Initial Fade Animation */}
          <div
            className={cn(
              'w-full h-full flex items-stretch gap-2.5 sm:gap-3 transition-all duration-300',
              animate && 'generategame02-editor-fade'
            )}
          >
            {/* Left Sidebar Panel */}
            <div className="w-[110px] sm:w-[124px] flex flex-col justify-between shrink-0 h-full py-0.5">
              {/* Top Controls */}
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

              {/* Bottom Publish Button (Neutral) */}
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
              {/* TOP: Schematic Image Card (Populates upon AI Generation) */}
              <div
                className={cn(
                  'w-[110px] h-[98px] rounded-[8px] flex items-center justify-center relative transition-all duration-300 border',
                  animate
                    ? 'generategame02-media-box'
                    : 'bg-[#DCF652]/30 border-[#9EBF00]'
                )}
              >
                {/* Populated Nature Icon Vector */}
                <div
                  className={cn(
                    'size-14 rounded-full bg-[#DCF652]/45 flex items-center justify-center transition-all duration-300',
                    animate ? 'generategame02-media-pop' : 'opacity-100 scale-100'
                  )}
                >
                  <Flower2 className="size-7 text-[#576501]" />
                </div>

                {/* Top Star Cluster (Surrounding Image Card) */}
                <div
                  className={cn(
                    'absolute -top-2 -right-2 pointer-events-none z-10',
                    animate && 'generategame02-star-cluster-top'
                  )}
                >
                  <SparkleStar size={18} fill="#9EBF00" />
                </div>
                <div
                  className={cn(
                    'absolute top-3 -left-3 pointer-events-none z-10',
                    animate && 'generategame02-star-cluster-top-left'
                  )}
                >
                  <SparkleStar size={14} fill="#576501" />
                </div>
              </div>

              {/* BOTTOM: Schematic Text Prompt Area + Magic Wand Button */}
              <div
                className={cn(
                  'w-[240px] h-[115px] p-2.5 rounded-[8px] flex flex-col justify-start relative transition-all duration-300 overflow-hidden border',
                  animate
                    ? 'generategame02-text-box'
                    : 'bg-[#DCF652]/20 border-[#9EBF00]'
                )}
              >
                {/* Generated Text Description */}
                <p
                  className={cn(
                    'text-[8px] sm:text-[9px] font-body leading-relaxed text-[#576501] pr-7 transition-all duration-300',
                    animate ? 'generategame02-text-pop' : 'opacity-100'
                  )}
                >
                  Drag colorful spider webs to connect Italian words on the left with their correct English image translations on the right before time runs out.
                </p>

                {/* Magic Wand Action Button */}
                <div
                  className={cn(
                    'absolute right-2 bottom-2 size-[29px] rounded-full bg-[#DCF652] border border-[#9EBF00] flex items-center justify-center shadow-xs cursor-pointer z-10',
                    animate && 'generategame02-magic-btn'
                  )}
                >
                  <Wand2 className="size-4 text-[#576501]" />
                </div>

                {/* Bottom Star Cluster (Sparkling around Wand Button) */}
                <div
                  className={cn(
                    'absolute right-7 bottom-7 pointer-events-none z-10',
                    animate && 'generategame02-star-cluster-btn'
                  )}
                >
                  <SparkleStar size={20} fill="#9EBF00" />
                </div>
                <div
                  className={cn(
                    'absolute right-1 bottom-8 pointer-events-none z-10',
                    animate && 'generategame02-star-cluster-btn-sub'
                  )}
                >
                  <SparkleStar size={12} fill="#576501" />
                </div>
                <div
                  className={cn(
                    'absolute right-8 bottom-1 pointer-events-none z-10',
                    animate && 'generategame02-star-cluster-btn-low'
                  )}
                >
                  <SparkleStar size={14} fill="#9EBF00" />
                </div>
              </div>
            </div>

            {/* Animated Cursor Vector Pointer */}
            <div
              className={cn(
                'absolute top-[75px] left-[120px] pointer-events-none z-20',
                animate && 'generategame02-cursor-path'
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
      </div>

      {/* Embedded Pure CSS GPU Keyframes (5.0s Sequence with Opening Fade & Reading Pause) */}
      <style>{`
        /* Stage initial smooth fade-in and reset */
        @keyframes kf_generategame02_editor_fade {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          10%, 92% {
            opacity: 1;
            transform: scale(1);
          }
          96%, 100% {
            opacity: 0;
            transform: scale(0.98);
          }
        }

        /* Cursor: 0-22% idle reading pause -> 22-36% glides to Magic Wand -> 36-42% clicks -> 46% glides aside -> holds steady */
        @keyframes kf_generategame02_cursor {
          0%, 22% {
            /* Initial reading delay: motionless resting offset */
            transform: translate(0px, 0px) scale(1);
            opacity: 1;
          }
          36% {
            /* Arrives directly over Magic Wand button */
            transform: translate(242px, 158px) scale(1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
          }
          39% {
            /* Click impact */
            transform: translate(242px, 158px) scale(0.72);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
          }
          42% {
            /* Release bounce */
            transform: translate(242px, 158px) scale(1);
            opacity: 1;
          }
          48% {
            /* Glides comfortably aside during content reveal */
            transform: translate(255px, 175px) scale(1);
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
            opacity: 1;
          }
          92% {
            transform: translate(255px, 175px) scale(1);
            opacity: 1;
          }
          96%, 100% {
            transform: translate(0px, 0px) scale(1);
            opacity: 0;
          }
        }

        /* Magic Wand button press & sparkle ripple animation */
        @keyframes kf_generategame02_magic_btn {
          0%, 36.9% {
            transform: scale(1);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          }
          39% {
            transform: scale(0.88);
            box-shadow: 0 0 14px 3px rgba(220, 246, 82, 0.8);
          }
          42% {
            transform: scale(1.15);
            box-shadow: 0 0 18px 5px rgba(220, 246, 82, 0.6);
          }
          46%, 92% {
            transform: scale(1);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          }
          96%, 100% {
            transform: scale(1);
          }
        }

        /* Magic Stars bursting around button upon click */
        @keyframes kf_generategame02_stars_btn {
          0%, 38.9% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          42% {
            opacity: 1;
            transform: scale(1.35) rotate(45deg) translate(-4px, -4px);
          }
          48% {
            opacity: 1;
            transform: scale(1) rotate(90deg) translate(-10px, -8px);
          }
          55% {
            opacity: 0;
            transform: scale(0.3) rotate(140deg) translate(-16px, -12px);
          }
          55.1%, 100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        @keyframes kf_generategame02_stars_btn_sub {
          0%, 39.9% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          44% {
            opacity: 1;
            transform: scale(1.4) rotate(-30deg) translate(2px, -8px);
          }
          50% {
            opacity: 1;
            transform: scale(0.9) rotate(-70deg) translate(4px, -14px);
          }
          56% {
            opacity: 0;
            transform: scale(0.2) rotate(-110deg) translate(6px, -18px);
          }
          56.1%, 100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        @keyframes kf_generategame02_stars_btn_low {
          0%, 40.5% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          45% {
            opacity: 1;
            transform: scale(1.3) rotate(25deg) translate(-8px, 4px);
          }
          51% {
            opacity: 1;
            transform: scale(0.85) rotate(60deg) translate(-14px, 6px);
          }
          57% {
            opacity: 0;
            transform: scale(0.2) rotate(100deg) translate(-18px, 8px);
          }
          57.1%, 100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        /* Magic Stars bursting around top media card */
        @keyframes kf_generategame02_stars_top {
          0%, 41.5% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          45% {
            opacity: 1;
            transform: scale(1.3) rotate(35deg) translate(4px, -4px);
          }
          51% {
            opacity: 1;
            transform: scale(1) rotate(75deg) translate(8px, -8px);
          }
          58% {
            opacity: 0;
            transform: scale(0.2) rotate(120deg) translate(12px, -12px);
          }
          58.1%, 100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        @keyframes kf_generategame02_stars_top_left {
          0%, 42.5% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          46% {
            opacity: 1;
            transform: scale(1.4) rotate(-40deg) translate(-4px, -2px);
          }
          52% {
            opacity: 1;
            transform: scale(0.9) rotate(-80deg) translate(-8px, -6px);
          }
          59% {
            opacity: 0;
            transform: scale(0.2) rotate(-130deg) translate(-12px, -8px);
          }
          59.1%, 100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        /* Top Media Card selected lime container styling */
        @keyframes kf_generategame02_media_box {
          0%, 42.9% {
            background-color: #F2F2F2;
            border-color: transparent;
          }
          43%, 92% {
            background-color: rgba(220, 246, 82, 0.32);
            border-color: #9EBF00;
          }
          96%, 100% {
            background-color: #F2F2F2;
            border-color: transparent;
          }
        }

        /* Top Media populates smoothly with spring pop */
        @keyframes kf_generategame02_media_pop {
          0%, 42.9% {
            opacity: 0;
            transform: scale(0.5);
          }
          46% {
            opacity: 1;
            transform: scale(1.15);
          }
          50%, 92% {
            opacity: 1;
            transform: scale(1);
          }
          96%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }

        /* Bottom Text Container selected soft lime container styling */
        @keyframes kf_generategame02_text_box {
          0%, 44.9% {
            background-color: #F2F2F2;
            border-color: transparent;
          }
          45%, 92% {
            background-color: rgba(220, 246, 82, 0.2);
            border-color: #9EBF00;
          }
          96%, 100% {
            background-color: #F2F2F2;
            border-color: transparent;
          }
        }

        /* Bottom Text populates smoothly with typewriter effect */
        @keyframes kf_generategame02_text_pop {
          0%, 44.9% {
            opacity: 0;
            clip-path: inset(0 100% 0 0);
          }
          45% {
            opacity: 1;
            clip-path: inset(0 100% 0 0);
          }
          54%, 92% {
            opacity: 1;
            clip-path: inset(0 0 0 0);
          }
          96%, 100% {
            opacity: 0;
            clip-path: inset(0 100% 0 0);
          }
        }

        .generategame02-editor-fade {
          animation: kf_generategame02_editor_fade 5.0s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .generategame02-cursor-path {
          animation: kf_generategame02_cursor 5.0s infinite;
          will-change: transform, opacity;
        }

        .generategame02-magic-btn {
          animation: kf_generategame02_magic_btn 5.0s infinite;
          will-change: transform, box-shadow;
        }

        .generategame02-star-cluster-btn {
          animation: kf_generategame02_stars_btn 5.0s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
          will-change: transform, opacity;
        }

        .generategame02-star-cluster-btn-sub {
          animation: kf_generategame02_stars_btn_sub 5.0s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
          will-change: transform, opacity;
        }

        .generategame02-star-cluster-btn-low {
          animation: kf_generategame02_stars_btn_low 5.0s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
          will-change: transform, opacity;
        }

        .generategame02-star-cluster-top {
          animation: kf_generategame02_stars_top 5.0s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
          will-change: transform, opacity;
        }

        .generategame02-star-cluster-top-left {
          animation: kf_generategame02_stars_top_left 5.0s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
          will-change: transform, opacity;
        }

        .generategame02-media-box {
          animation: kf_generategame02_media_box 5.0s infinite;
          will-change: background-color, border-color;
        }

        .generategame02-media-pop {
          animation: kf_generategame02_media_pop 5.0s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
          will-change: transform, opacity;
        }

        .generategame02-text-box {
          animation: kf_generategame02_text_box 5.0s infinite;
          will-change: background-color, border-color;
        }

        .generategame02-text-pop {
          animation: kf_generategame02_text_pop 5.0s steps(28, end) infinite;
          will-change: clip-path, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .generategame02-editor-fade,
          .generategame02-cursor-path,
          .generategame02-magic-btn,
          .generategame02-star-cluster-btn,
          .generategame02-star-cluster-btn-sub,
          .generategame02-star-cluster-btn-low,
          .generategame02-star-cluster-top,
          .generategame02-star-cluster-top-left,
          .generategame02-media-box,
          .generategame02-media-pop,
          .generategame02-text-box,
          .generategame02-text-pop {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GenerateGame02;
