import * as React from 'react';
import {
  Plus,
  Flower2,
  Sparkles,
  Train,
  Rocket,
  Rabbit,
  BookOpen,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CreateGame03Props extends React.HTMLAttributes<HTMLDivElement> {
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

export const CreateGame03: React.FC<CreateGame03Props> = ({
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

        {/* Browser Content Stage Container */}
        <div className="relative flex-1 w-full overflow-hidden bg-white">
          {/* VIEW 1: Pre-Populated Editor Screen (Matching CreateGame02 End-State) */}
          <div
            className={cn(
              'absolute inset-0 p-3.5 sm:p-4 flex items-stretch gap-2.5 sm:gap-3 transition-all duration-300',
              animate && 'creategame03-view1'
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
                <div className="h-9 bg-[#F8F8F8] border border-border-neutral-subtle/30 rounded-[8px] flex items-center justify-center">
                  <Plus className="size-4 text-text-neutral/50" />
                </div>
              </div>

              {/* Bottom Target Publish Button */}
              <div className="w-full relative">
                <div
                  className={cn(
                    'h-9 bg-[#F8F8F8] border border-border-neutral-subtle/30 rounded-[8px] flex items-center justify-center transition-all',
                    animate && 'creategame03-publish-btn'
                  )}
                >
                  <span className="text-[12px] font-heading font-medium text-text-neutral/70">
                    Publish
                  </span>
                </div>

                {/* Animated Cursor Vector Pointer (Anchored directly over Publish button center) */}
                <div
                  className={cn(
                    'absolute top-1/2 left-1/2 -mt-1 -ml-1 pointer-events-none z-20',
                    animate && 'creategame03-cursor'
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

            {/* Right Editor Canvas (Fully Populated matching CreateGame02) */}
            <div className="flex-1 h-full bg-[#F8F8F8] rounded-[8px] p-3 sm:p-4 flex flex-col items-center justify-center gap-3 relative overflow-hidden border border-border-neutral-subtle/40">
              {/* TOP: Image Drop Zone (Selected Lime State) */}
              <div className="w-[110px] h-[92px] rounded-[8px] flex items-center justify-center relative bg-[#DCF652]/30 border-[1.5px] border-[#9EBF00]">
                <div className="size-14 rounded-full bg-[#DCF652]/45 flex items-center justify-center">
                  <Flower2 className="size-7 text-[#576501]" />
                </div>
              </div>

              {/* BOTTOM: Text Description Area (Selected Soft Lime State) */}
              <div className="w-full max-w-[280px] h-[95px] p-2.5 rounded-[8px] flex flex-col justify-start relative overflow-hidden bg-[#DCF652]/20 border-[1.5px] border-[#9EBF00]">
                <p className="text-[9px] sm:text-[10px] font-body leading-relaxed text-[#576501]">
                  Drag colorful spider webs to connect Italian words on the left with their correct English image translations on the right.
                </p>
              </div>
            </div>
          </div>

          {/* VIEW 2: Games Catalogue Grid (Pop-in Published Game Card) */}
          <div
            className={cn(
              'absolute inset-0 p-4 sm:p-5 flex flex-col justify-center items-center bg-white transition-all duration-300',
              animate ? 'creategame03-view2' : 'hidden'
            )}
          >
            <div className="w-full flex flex-col gap-2.5 sm:gap-3 max-w-[480px]">
              {/* Row 1: 3 cards (Card 1: Sparkles, Card 2: NEW FLOWER GAME CARD, Card 3: Train) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full">
                {/* Existing Card 1: Sparkles */}
                <div className="bg-[#F8F8F8] rounded-[10px] p-2.5 sm:p-3 flex flex-col gap-2 border border-transparent">
                  <div className="size-10 sm:size-11 rounded-[8px] bg-[#F2F2F2] flex items-center justify-center text-text-neutral-secondary/60">
                    <Sparkles className="size-4.5 sm:size-5" />
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <div className="h-2 sm:h-2.5 w-4/5 rounded-full bg-[#EAEAEA]" />
                    <div className="h-2 sm:h-2.5 w-1/2 rounded-full bg-[#EAEAEA]" />
                  </div>
                </div>

                {/* Target NEW PUBLISHED FLOWER CARD (Pops In with Spring Bounce & Lime Tokens) */}
                <div
                  className={cn(
                    'rounded-[10px] p-2.5 sm:p-3 flex flex-col gap-2 transition-all duration-300 relative bg-[#DCF652]/32 border-[1.5px] border-[#9EBF00]',
                    animate && 'creategame03-new-card'
                  )}
                >
                  <div className="size-10 sm:size-11 rounded-[8px] bg-[#DCF652]/45 flex items-center justify-center">
                    <Flower2 className="size-4.5 sm:size-5 text-[#576501]" />
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <div className="h-2 sm:h-2.5 w-4/5 rounded-full bg-[#D3EE50]" />
                    <div className="h-2 sm:h-2.5 w-1/2 rounded-full bg-[#E0F47A]" />
                  </div>
                </div>

                {/* Existing Card 3: Train */}
                <div className="bg-[#F8F8F8] rounded-[10px] p-2.5 sm:p-3 flex flex-col gap-2 border border-transparent">
                  <div className="size-10 sm:size-11 rounded-[8px] bg-[#F2F2F2] flex items-center justify-center text-text-neutral-secondary/60">
                    <Train className="size-4.5 sm:size-5" />
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <div className="h-2 sm:h-2.5 w-4/5 rounded-full bg-[#EAEAEA]" />
                    <div className="h-2 sm:h-2.5 w-1/2 rounded-full bg-[#EAEAEA]" />
                  </div>
                </div>
              </div>

              {/* Row 2: 3 cards (Rocket, BookOpen, Rabbit) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full">
                <div className="bg-[#F8F8F8] rounded-[10px] p-2.5 sm:p-3 flex flex-col gap-2 border border-transparent">
                  <div className="size-10 sm:size-11 rounded-[8px] bg-[#F2F2F2] flex items-center justify-center text-text-neutral-secondary/60">
                    <Rocket className="size-4.5 sm:size-5" />
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <div className="h-2 sm:h-2.5 w-4/5 rounded-full bg-[#EAEAEA]" />
                    <div className="h-2 sm:h-2.5 w-1/2 rounded-full bg-[#EAEAEA]" />
                  </div>
                </div>

                <div className="bg-[#F8F8F8] rounded-[10px] p-2.5 sm:p-3 flex flex-col gap-2 border border-transparent">
                  <div className="size-10 sm:size-11 rounded-[8px] bg-[#F2F2F2] flex items-center justify-center text-text-neutral-secondary/60">
                    <BookOpen className="size-4.5 sm:size-5" />
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <div className="h-2 sm:h-2.5 w-4/5 rounded-full bg-[#EAEAEA]" />
                    <div className="h-2 sm:h-2.5 w-1/2 rounded-full bg-[#EAEAEA]" />
                  </div>
                </div>

                <div className="bg-[#F8F8F8] rounded-[10px] p-2.5 sm:p-3 flex flex-col gap-2 border border-transparent">
                  <div className="size-10 sm:size-11 rounded-[8px] bg-[#F2F2F2] flex items-center justify-center text-text-neutral-secondary/60">
                    <Rabbit className="size-4.5 sm:size-5" />
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <div className="h-2 sm:h-2.5 w-4/5 rounded-full bg-[#EAEAEA]" />
                    <div className="h-2 sm:h-2.5 w-1/2 rounded-full bg-[#EAEAEA]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded GPU Keyframes (5.5s Master Choreography Timeline) */}
      <style>{`
        /* VIEW 1: Game Editor View */
        @keyframes kf_creategame03_view1 {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          10%, 42% {
            opacity: 1;
            transform: scale(1);
            pointer-events: auto;
          }
          46%, 92% {
            opacity: 0;
            transform: scale(0.98);
            pointer-events: none;
          }
          98%, 100% {
            opacity: 0;
            transform: scale(0.98);
            pointer-events: none;
          }
        }

        /* Cursor: Reading pause in text field -> glides to Publish button -> click impact -> fade out */
        @keyframes kf_creategame03_cursor {
          0%, 24% {
            /* Resting idle inside text area (offset from Publish button center) */
            transform: translate(270px, -98px) scale(1);
            opacity: 1;
          }
          35% {
            /* Glides smoothly down-left and lands dead-center on bottom Publish button */
            transform: translate(0, 0) scale(1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
          }
          37% {
            /* Click impact on Publish button */
            transform: translate(0, 0) scale(0.72);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
          }
          41% {
            /* Release bounce */
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          44%, 92% {
            /* Fades out during catalogue view */
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          98%, 100% {
            transform: translate(270px, -98px) scale(1);
            opacity: 0;
          }
        }

        /* Publish button: strictly neutral base state, hover at 35%, click impact at 37%-41% */
        @keyframes kf_creategame03_publish_btn {
          0%, 34.9% {
            background-color: #F8F8F8;
            border-color: rgba(76, 54, 89, 0.15);
            transform: scale(1);
          }
          35%, 36% {
            /* Hover state upon cursor arrival */
            background-color: rgba(220, 246, 82, 0.25);
            border-color: #9EBF00;
            transform: scale(1);
          }
          37% {
            /* Click compression */
            background-color: rgba(220, 246, 82, 0.35);
            border-color: #9EBF00;
            transform: scale(0.97);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          41% {
            /* Spring back on release */
            background-color: rgba(220, 246, 82, 0.35);
            border-color: #9EBF00;
            transform: scale(1);
          }
          46%, 100% {
            background-color: #F8F8F8;
            border-color: rgba(76, 54, 89, 0.15);
            transform: scale(1);
          }
        }

        /* VIEW 2: Games Catalogue Grid */
        @keyframes kf_creategame03_view2 {
          0%, 42% {
            opacity: 0;
            transform: scale(0.98);
            pointer-events: none;
          }
          46%, 90% {
            opacity: 1;
            transform: scale(1);
            pointer-events: auto;
          }
          96%, 100% {
            opacity: 0;
            transform: scale(0.98);
            pointer-events: none;
          }
        }

        /* New Published Flower Card Pop-in with spring bounce */
        @keyframes kf_creategame03_new_card {
          0%, 47.9% {
            opacity: 0;
            transform: scale(0);
          }
          52% {
            opacity: 1;
            transform: scale(1.08);
            animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          56%, 90% {
            opacity: 1;
            transform: scale(1);
          }
          96%, 100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        .creategame03-view1 {
          animation: kf_creategame03_view1 5.5s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .creategame03-cursor {
          animation: kf_creategame03_cursor 5.5s infinite;
          will-change: transform, opacity;
        }

        .creategame03-publish-btn {
          animation: kf_creategame03_publish_btn 5.5s infinite;
          will-change: transform, background-color, border-color;
        }

        .creategame03-view2 {
          animation: kf_creategame03_view2 5.5s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .creategame03-new-card {
          animation: kf_creategame03_new_card 5.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .creategame03-view1,
          .creategame03-cursor,
          .creategame03-publish-btn,
          .creategame03-view2,
          .creategame03-new-card {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CreateGame03;
