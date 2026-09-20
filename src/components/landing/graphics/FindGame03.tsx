import * as React from 'react';
import { cn } from '@/lib/utils';

export interface FindGame03Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional custom browser address bar URL
   * @default 'www.umaigra.com/Football'
   */
  url?: string;
  /**
   * Whether to run the timeline animation
   * @default true
   */
  animate?: boolean;
}

export const FindGame03: React.FC<FindGame03Props> = ({
  className,
  url = 'www.umaigra.com/Football',
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
        {/* Browser Top Address Bar */}
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
        <div className="p-3 sm:p-3.5 relative flex-1 w-full overflow-hidden bg-white flex flex-col justify-center items-center">
          {/* VIEW 1: Initial Game Screen (Header with Grayscale Logo + Share Button & Football Field Image) */}
          <div
            className={cn(
              'w-full h-full flex flex-col justify-between gap-2 transition-all duration-300',
              animate && 'findgame03-initial-view'
            )}
          >
            {/* Header: Grayscale Logo + Football Title + Share Button */}
            <div className="flex items-center justify-between px-1 shrink-0 h-9">
              <div className="flex items-center gap-2">
                {/* Grayscale Umaigra Mark Logo */}
                <svg
                  className="size-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M15.2905 18.7186C18.6309 16.7372 19.6041 12.266 17.4641 8.73177L5.36752 15.907C7.50747 19.4412 11.9502 20.7 15.2905 18.7186Z"
                    fill="#C4C4C4"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M15.4385 6.54394C15.9446 8.05292 15.119 9.68228 13.5944 10.1832C12.0698 10.6841 10.4236 9.86694 9.91748 8.35795C9.41137 6.84897 10.237 5.21961 11.7616 4.71868C13.2862 4.21776 14.9324 5.03495 15.4385 6.54394ZM11.0335 7.99125C11.335 8.89016 12.3157 9.37697 13.2239 9.07857C14.1321 8.78016 14.624 7.80955 14.3225 6.91064C14.021 6.01173 13.0403 5.52492 12.1321 5.82332C11.2239 6.12173 10.7321 7.09234 11.0335 7.99125Z"
                    fill="#AAAEAF"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M9.92995 9.72461L8.5306 15.1715L3.02734 13.7865L4.4267 8.33958L9.92995 9.72461Z"
                    fill="#898989"
                    fillOpacity="0.5"
                  />
                </svg>
                <span className="font-heading font-medium text-xs sm:text-sm text-text-neutral/70">
                  Football
                </span>
              </div>

              {/* Share Button (Neutral Base, Animated Focus & Click) */}
              <div
                className={cn(
                  'h-8 px-4 rounded-full border border-transparent bg-[#F2F2F2] flex items-center justify-center transition-all',
                  animate && 'findgame03-share-button'
                )}
              >
                <span className="font-heading font-normal text-xs text-text-neutral/70">
                  Share
                </span>
              </div>
            </div>

            {/* Stadium Scene Viewport */}
            <div className="relative flex-1 w-full rounded-[10px] overflow-hidden bg-[#ECECEC] flex items-center justify-center border border-border-neutral-subtle/40">
              <img
                src="/images/graphics/football-game-scene.svg"
                alt="Football Game Field"
                className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* VIEW 2: Link Input Pill with Animated Checkmark (Replaces View 1 upon Share click) */}
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center p-4 transition-all duration-300',
              animate ? 'findgame03-link-input-view' : 'hidden'
            )}
          >
            <div className="w-full max-w-[390px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full border border-[#E5E5E5] bg-white shadow-md flex items-center gap-3">
              {/* Checkmark Circle Badge */}
              <div
                className={cn(
                  'size-9 sm:size-10 rounded-full flex items-center justify-center shrink-0 border transition-colors',
                  animate
                    ? 'findgame03-checkmark-badge'
                    : 'bg-[#DCF652]/30 border-[#9EBF00]'
                )}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12.5L9.5 17L19 7.5"
                    stroke="#576501"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn(animate && 'findgame03-checkmark-path')}
                  />
                </svg>
              </div>

              {/* Game Share Link */}
              <span className="font-heading font-normal text-xs sm:text-sm text-text-neutral/80 truncate flex-1">
                www.umaigra.com/mygame
              </span>
            </div>
          </div>

          {/* Animated Cursor Vector Pointer (Anchored to Share button with centered resting offset) */}
          <div
            className={cn(
              'absolute top-[20px] right-[40px] pointer-events-none z-20',
              animate && 'findgame03-cursor-sequence'
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

      {/* Embedded Pure CSS GPU Keyframes (5.0s Motion Sequence with Extended Opening Showcase) */}
      <style>{`
        /* Cursor movement from center stage to Share button, click impact, hold pause, and fade */
        @keyframes kf_findgame03_cursor {
          0%, 30% {
            transform: translate(-215px, 78px) scale(1);
            opacity: 1;
          }
          44% {
            transform: translate(0px, 0px) scale(1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
          }
          47% {
            /* Click compression */
            transform: translate(0px, 0px) scale(0.72);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
          }
          50%, 57% {
            /* Release and hold pause */
            transform: translate(0px, 0px) scale(1);
            opacity: 1;
          }
          58%, 92% {
            transform: translate(0px, 0px) scale(1);
            opacity: 0;
          }
          100% {
            transform: translate(-215px, 78px) scale(1);
            opacity: 1;
          }
        }

        /* Share button hover, focus, click compression, and extended hold pause */
        @keyframes kf_findgame03_share_btn {
          0%, 38% {
            transform: scale(1);
            background-color: #F2F2F2;
            border-color: transparent;
          }
          42% {
            /* Hover / Focus state */
            transform: scale(1);
            background-color: rgba(220, 246, 82, 0.2);
            border-color: #9EBF00;
          }
          47% {
            /* Click impact */
            transform: scale(0.97);
            background-color: rgba(220, 246, 82, 0.35);
            border-color: #9EBF00;
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          50%, 57% {
            /* Hold highlighted clicked state */
            transform: scale(1);
            background-color: rgba(220, 246, 82, 0.32);
            border-color: #9EBF00;
          }
          58%, 100% {
            transform: scale(1);
            background-color: #F2F2F2;
            border-color: transparent;
          }
        }

        /* Initial game screen smooth fade, extended hold, and transition out */
        @keyframes kf_findgame03_initial_view {
          0% {
            opacity: 0;
            transform: scale(0.98);
            pointer-events: none;
          }
          10%, 57% {
            opacity: 1;
            transform: scale(1);
            pointer-events: auto;
          }
          60%, 92% {
            opacity: 0;
            transform: scale(0.98);
            pointer-events: none;
          }
          100% {
            opacity: 0;
            transform: scale(0.98);
            pointer-events: none;
          }
        }

        /* Link input modal fades and scales in cleanly after View 1 hold */
        @keyframes kf_findgame03_link_input {
          0%, 57% {
            opacity: 0;
            transform: scale(0.96);
            pointer-events: none;
          }
          60%, 92% {
            opacity: 1;
            transform: scale(1);
            pointer-events: auto;
          }
          96%, 100% {
            opacity: 0;
            transform: scale(0.96);
            pointer-events: none;
          }
        }

        /* Checkmark circle badge pop-and-settle into lime active state */
        @keyframes kf_findgame03_checkmark_badge {
          0%, 57% {
            opacity: 0;
            transform: scale(0);
            background-color: #F2F2F2;
            border-color: transparent;
          }
          61% {
            opacity: 1;
            transform: scale(1.15);
            background-color: rgba(220, 246, 82, 0.32);
            border-color: #9EBF00;
          }
          65%, 92% {
            opacity: 1;
            transform: scale(1);
            background-color: rgba(220, 246, 82, 0.32);
            border-color: #9EBF00;
          }
          96%, 100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        /* Checkmark SVG stroke draw animation */
        @keyframes kf_findgame03_checkmark_path {
          0%, 58% {
            stroke-dashoffset: 24;
          }
          68%, 92% {
            stroke-dashoffset: 0;
          }
          96%, 100% {
            stroke-dashoffset: 24;
          }
        }

        .findgame03-cursor-sequence {
          animation: kf_findgame03_cursor 5.0s infinite;
          will-change: transform, opacity;
        }

        .findgame03-share-button {
          animation: kf_findgame03_share_btn 5.0s infinite;
          will-change: transform, background-color, border-color;
        }

        .findgame03-initial-view {
          animation: kf_findgame03_initial_view 5.0s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .findgame03-link-input-view {
          animation: kf_findgame03_link_input 5.0s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          will-change: transform, opacity;
        }

        .findgame03-checkmark-badge {
          animation: kf_findgame03_checkmark_badge 5.0s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
          will-change: transform, opacity, background-color, border-color;
        }

        .findgame03-checkmark-path {
          stroke-dasharray: 24;
          stroke-dashoffset: 24;
          animation: kf_findgame03_checkmark_path 5.0s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: stroke-dashoffset;
        }

        @media (prefers-reduced-motion: reduce) {
          .findgame03-cursor-sequence,
          .findgame03-share-button,
          .findgame03-initial-view,
          .findgame03-link-input-view,
          .findgame03-checkmark-badge,
          .findgame03-checkmark-path {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FindGame03;
