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

        {/* Browser Content Stage */}
        <div className="p-3.5 sm:p-4 relative flex-1 w-full overflow-hidden flex items-stretch gap-2.5 sm:gap-3 bg-white">
          {/* Game Editor Layout Container */}
          <div
            className={cn(
              'w-full h-full flex items-stretch gap-2.5 sm:gap-3 transition-all duration-300',
              animate && 'sellgame01-editor-fade'
            )}
          >
            {/* Left Sidebar Panel */}
            <div className="w-[110px] sm:w-[124px] flex flex-col justify-between shrink-0 h-full py-0.5">
              {/* Top Level Controls */}
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

              {/* Bottom Publish Button (Neutral) */}
              <div className="w-full">
                <div className="h-9 bg-[#F8F8F8] border border-border-neutral-subtle/30 rounded-[8px] flex items-center justify-center">
                  <span className="text-[12px] font-heading font-medium text-text-neutral/70">
                    Publish
                  </span>
                </div>
              </div>
            </div>

            {/* Right Editor Canvas Area */}
            <div className="flex-1 h-full bg-[#F8F8F8] rounded-[8px] p-3 sm:p-4 flex flex-col items-center justify-center gap-3 relative overflow-hidden border border-border-neutral-subtle/40">
              {/* TOP: Image Drop Zone */}
              <div
                className={cn(
                  'w-[110px] h-[92px] rounded-[8px] flex items-center justify-center relative transition-all duration-300 border',
                  animate
                    ? 'sellgame01-dropzone'
                    : 'bg-[#DCF652]/30 border-[#9EBF00]'
                )}
              >
                {/* Docked Flower in Drop Zone (Revealed after drop at 40%) */}
                <div
                  className={cn(
                    'size-14 rounded-full bg-[#DCF652]/45 flex items-center justify-center transition-all',
                    animate
                      ? 'sellgame01-docked-flower'
                      : 'opacity-100 scale-100'
                  )}
                >
                  <Flower2 className="size-7 text-[#576501]" />
                </div>
              </div>

              {/* BOTTOM: Text Description Area */}
              <div
                className={cn(
                  'w-full max-w-[280px] h-[95px] p-2.5 rounded-[8px] flex flex-col justify-start relative transition-all duration-300 overflow-hidden border',
                  animate
                    ? 'sellgame01-textarea'
                    : 'bg-[#DCF652]/20 border-[#9EBF00]'
                )}
              >
                {/* Fast Typewriter Animated Text */}
                <p
                  className={cn(
                    'text-[9px] sm:text-[10px] font-body leading-relaxed text-[#576501] overflow-hidden',
                    animate && 'sellgame01-typewriter-text'
                  )}
                >
                  Drag colorful spider webs to connect Italian words on the left with their correct English image translations on the right.
                </p>
              </div>

              {/* Animated Cursor Vector Pointer & Attached Draggable Asset (Zero-Drift Child Hierarchy) */}
              <div
                className={cn(
                  'absolute top-1/2 left-1/2 -mt-1 -ml-1 pointer-events-none z-20',
                  animate && 'sellgame01-cursor'
                )}
                aria-hidden="true"
              >
                {/* Cursor Vector SVG */}
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-xs relative z-10"
                >
                  <path
                    d="M0.5 0.5L8.5 21.5L13 11L23 5.5L0.5 0.5Z"
                    fill="#576501"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Dragged Flower Badge (Physical Child of Cursor - Guaranteed Zero Drift) */}
                <div
                  className={cn(
                    'absolute top-1 left-2.5 size-11 rounded-full bg-[#DCF652]/30 border border-[#9EBF00] flex items-center justify-center shadow-xs',
                    animate && 'sellgame01-child-flower'
                  )}
                >
                  <Flower2 className="size-6 text-[#576501]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded GPU Keyframes (5.2s Master Choreography Timeline) */}
      <style>{`
        /* Whole Editor Canvas initial fade and smooth reset */
        @keyframes kf_sellgame01_editor_fade {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          10%, 92% {
            opacity: 1;
            transform: scale(1);
          }
          98%, 100% {
            opacity: 0;
            transform: scale(0.98);
          }
        }

        /* Cursor: Reading pause, travels down, click-picks flower, drags to dropzone, clicks text, stays idle */
        @keyframes kf_sellgame01_cursor {
          0%, 22% {
            /* Phase 1: Reading pause - sits idle in lower area */
            transform: translate(0px, 20px) scale(1);
            opacity: 1;
          }
          30% {
            /* Phase 2: Travels down to bottom border to grab asset */
            transform: translate(0px, 105px) scale(1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
          }
          32% {
            /* Click to pick up */
            transform: translate(0px, 105px) scale(0.72);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
          }
          34% {
            /* Lift and begin drag */
            transform: translate(0px, 105px) scale(1);
            opacity: 1;
          }
          46% {
            /* Phase 3: Drag up to center of top Image Drop Zone */
            transform: translate(0px, -54px) scale(1);
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
            opacity: 1;
          }
          48% {
            /* Drop release */
            transform: translate(0px, -54px) scale(1);
            opacity: 1;
          }
          54% {
            /* Phase 4: Moves down to focus text area */
            transform: translate(0px, 32px) scale(1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
          }
          55% {
            /* Focus click on text area */
            transform: translate(0px, 32px) scale(0.72);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
          }
          56%, 92% {
            /* Phase 5: STAYS IDLE inside text area through typing and holding pause */
            transform: translate(0px, 32px) scale(1);
            opacity: 1;
          }
          98%, 100% {
            /* Phase 6: Fade reset */
            transform: translate(0px, 20px) scale(1);
            opacity: 0;
          }
        }

        /* Child Dragged Flower: Hidden initially, appears on click at 32%, disappears on drop at 48% */
        @keyframes kf_sellgame01_child_flower {
          0%, 31.9% {
            opacity: 0;
            transform: scale(0.6);
          }
          32% {
            opacity: 1;
            transform: scale(1);
          }
          46% {
            opacity: 1;
            transform: scale(1);
          }
          47.9%, 100% {
            opacity: 0;
            transform: scale(0.6);
          }
        }

        /* Drop Zone container styling reaction upon drop */
        @keyframes kf_sellgame01_dropzone {
          0%, 46.9% {
            background-color: #F2F2F2;
            border-color: transparent;
          }
          47%, 92% {
            background-color: rgba(220, 246, 82, 0.32);
            border-color: #9EBF00;
          }
          92.1%, 100% {
            background-color: #F2F2F2;
            border-color: transparent;
          }
        }

        /* Docked Flower reveal in dropzone upon drop */
        @keyframes kf_sellgame01_docked_flower {
          0%, 46.9% {
            opacity: 0;
            transform: scale(0.5);
          }
          47.5% {
            opacity: 1;
            transform: scale(1.15);
          }
          50%, 92% {
            opacity: 1;
            transform: scale(1);
          }
          92.1%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }

        /* Text Area styling reaction on click */
        @keyframes kf_sellgame01_textarea {
          0%, 53.9% {
            background-color: #F2F2F2;
            border-color: transparent;
            transform: scale(1);
          }
          55% {
            background-color: #F2F2F2;
            border-color: transparent;
            transform: scale(0.97);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          56%, 92% {
            background-color: rgba(220, 246, 82, 0.2);
            border-color: #9EBF00;
            transform: scale(1);
          }
          92.1%, 100% {
            background-color: #F2F2F2;
            border-color: transparent;
            transform: scale(1);
          }
        }

        /* Fast Typewriter text reveal */
        @keyframes kf_sellgame01_typewriter {
          0%, 55.9% {
            opacity: 0;
            clip-path: inset(0 100% 0 0);
          }
          56% {
            opacity: 1;
            clip-path: inset(0 100% 0 0);
          }
          66%, 92% {
            opacity: 1;
            clip-path: inset(0 0 0 0);
          }
          92.1%, 100% {
            opacity: 0;
            clip-path: inset(0 100% 0 0);
          }
        }

        .sellgame01-editor-fade {
          animation: kf_sellgame01_editor_fade 5.2s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .sellgame01-cursor {
          animation: kf_sellgame01_cursor 5.2s infinite;
          will-change: transform, opacity;
        }

        .sellgame01-child-flower {
          animation: kf_sellgame01_child_flower 5.2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
          will-change: transform, opacity;
        }

        .sellgame01-dropzone {
          animation: kf_sellgame01_dropzone 5.2s infinite;
          will-change: background-color, border-color;
        }

        .sellgame01-docked-flower {
          animation: kf_sellgame01_docked_flower 5.2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
          will-change: transform, opacity;
        }

        .sellgame01-textarea {
          animation: kf_sellgame01_textarea 5.2s infinite;
          will-change: transform, background-color, border-color;
        }

        .sellgame01-typewriter-text {
          animation: kf_sellgame01_typewriter 5.2s steps(28, end) infinite;
          will-change: clip-path, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .sellgame01-editor-fade,
          .sellgame01-cursor,
          .sellgame01-child-flower,
          .sellgame01-dropzone,
          .sellgame01-docked-flower,
          .sellgame01-textarea,
          .sellgame01-typewriter-text {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SellGame01;
