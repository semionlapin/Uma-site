import * as React from 'react';
import {
  Sparkles,
  Train,
  Flower2,
  Rocket,
  Rabbit,
  BookOpen,
  Trophy,
  Compass,
  Palette,
  Music,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FindGame02Props extends React.HTMLAttributes<HTMLDivElement> {
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

const SoccerShoeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 19 21"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M3.33333 21C2.8 21 2.2875 20.9 1.79583 20.7C1.30417 20.5 0.866667 20.2 0.483333 19.8L0.308333 19.625C0.158333 19.4917 0.0625 19.325 0.0208333 19.125C-0.0208333 18.925 0 18.7333 0.0833333 18.55L4.93333 6.175C5.06667 5.84167 5.29583 5.5875 5.62083 5.4125C5.94583 5.2375 6.28333 5.19167 6.63333 5.275L8.08333 5.55C8.36667 5.61667 8.6375 5.59583 8.89583 5.4875C9.15417 5.37917 9.375 5.23333 9.55833 5.05C9.79167 4.8 9.94583 4.5375 10.0208 4.2625C10.0958 3.9875 10.0917 3.70833 10.0083 3.425L9.88333 3.05C9.8 2.78333 9.7875 2.5125 9.84583 2.2375C9.90417 1.9625 10.0333 1.725 10.2333 1.525L11.3083 0.45C11.5917 0.15 11.9458 0 12.3708 0C12.7958 0 13.15 0.141667 13.4333 0.425L17.9583 5.025C18.325 5.40833 18.5125 5.8625 18.5208 6.3875C18.5292 6.9125 18.3583 7.36667 18.0083 7.75L18.4833 8.225C18.5833 8.34167 18.6708 8.4625 18.7458 8.5875C18.8208 8.7125 18.8583 8.84167 18.8583 8.975C18.8583 9.09167 18.8333 9.20833 18.7833 9.325C18.7333 9.44167 18.6417 9.56667 18.5083 9.7C18.3083 9.88333 18.0708 9.97917 17.7958 9.9875C17.5208 9.99583 17.2833 9.9 17.0833 9.7L16.6333 9.225L15.9333 9.95L16.3833 10.4C16.5667 10.5833 16.6583 10.8167 16.6583 11.1C16.6583 11.3833 16.5667 11.6167 16.3833 11.8C16.1833 11.9833 15.9458 12.0792 15.6708 12.0875C15.3958 12.0958 15.1583 12 14.9583 11.8L14.5083 11.375L11.7083 14.225L12.1333 14.625C12.3333 14.825 12.4333 15.0625 12.4333 15.3375C12.4333 15.6125 12.3333 15.85 12.1333 16.05C11.9333 16.2333 11.6958 16.3292 11.4208 16.3375C11.1458 16.3458 10.9083 16.25 10.7083 16.05L10.3083 15.625L9.60833 16.35L10.0083 16.75C10.1917 16.9333 10.2833 17.1667 10.2833 17.45C10.2833 17.7333 10.1917 17.9667 10.0083 18.15C9.80833 18.3333 9.57083 18.4292 9.29583 18.4375C9.02083 18.4458 8.78333 18.35 8.58333 18.15L8.18333 17.775L7.48333 18.475L7.88333 18.85C8.06667 19.05 8.15833 19.2875 8.15833 19.5625C8.15833 19.8375 8.06667 20.075 7.88333 20.275C7.68333 20.4583 7.44583 20.5542 7.17083 20.5625C6.89583 20.5708 6.65833 20.475 6.45833 20.275L6.05833 19.875C5.675 20.2583 5.25417 20.5417 4.79583 20.725C4.3375 20.9083 3.85 21 3.33333 21ZM1.90833 13.925C1.99167 13.7417 2.05833 13.5792 2.10833 13.4375L2.18333 13.225L1.63333 14.625L1.72083 14.4125C1.77917 14.2708 1.84167 14.1083 1.90833 13.925ZM2.88333 11.425C2.96667 11.2417 3.03333 11.0792 3.08333 10.9375L3.15833 10.725L2.60833 12.125L2.69583 11.9125C2.75417 11.7708 2.81667 11.6083 2.88333 11.425ZM3.85833 8.925C3.94167 8.74167 4.00833 8.58333 4.05833 8.45L4.13333 8.25L3.58333 9.625L3.67083 9.4125C3.72917 9.27083 3.79167 9.10833 3.85833 8.925ZM3.33333 18.975C3.61667 18.975 3.87917 18.925 4.12083 18.825C4.3625 18.725 4.575 18.575 4.75833 18.375L16.5333 6.425L12.3833 2.2L11.8833 2.7C12.0833 3.36667 12.1208 4.01667 11.9958 4.65C11.8708 5.28333 11.5333 5.875 10.9833 6.425C10.55 6.85833 10.05 7.17917 9.48333 7.3875C8.91667 7.59583 8.325 7.63333 7.70833 7.5L6.68333 7.3L6.05833 8.825L6.63333 9.025C6.81667 9.10833 6.95 9.24167 7.03333 9.425C7.11667 9.60833 7.125 9.79167 7.05833 9.975C6.99167 10.175 6.86667 10.325 6.68333 10.425C6.5 10.525 6.30833 10.5333 6.10833 10.45L5.50833 10.225L5.08333 11.325L5.55833 11.5C5.74167 11.5833 5.87917 11.7167 5.97083 11.9C6.0625 12.0833 6.075 12.2667 6.00833 12.45C5.94167 12.65 5.8125 12.7958 5.62083 12.8875C5.42917 12.9792 5.23333 12.9833 5.03333 12.9L4.53333 12.725L4.10833 13.825L4.50833 13.975C4.69167 14.0583 4.825 14.1875 4.90833 14.3625C4.99167 14.5375 5 14.7167 4.93333 14.9C4.86667 15.1 4.7375 15.25 4.54583 15.35C4.35417 15.45 4.15833 15.4583 3.95833 15.375L3.55833 15.225L2.20833 18.625C2.375 18.7417 2.55417 18.8292 2.74583 18.8875C2.9375 18.9458 3.13333 18.975 3.33333 18.975Z" />
  </svg>
);

interface GameCardItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  isTarget?: boolean;
}

const GAME_CARDS_ROW_1: GameCardItem[] = [
  { id: 'magic', icon: Sparkles },
  { id: 'train', icon: Train },
  { id: 'flower', icon: Flower2 },
];

const GAME_CARDS_ROW_2: GameCardItem[] = [
  { id: 'rocket', icon: Rocket },
  { id: 'soccer', icon: SoccerShoeIcon, isTarget: true },
  { id: 'rabbit', icon: Rabbit },
];

const GAME_CARDS_ROW_3: GameCardItem[] = [
  { id: 'book', icon: BookOpen },
  { id: 'trophy', icon: Trophy },
  { id: 'compass', icon: Compass },
];

const GAME_CARDS_ROW_4: GameCardItem[] = [
  { id: 'palette', icon: Palette },
  { id: 'music', icon: Music },
  { id: 'zap', icon: Zap },
];

export const FindGame02: React.FC<FindGame02Props> = ({
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

        {/* Browser Content Stage with Scrolling Grid & Animated Cursor */}
        <div className="p-4 sm:p-5 relative flex-1 w-full overflow-hidden flex flex-col justify-start items-center bg-white">
          {/* Scrolling Game Grid Container (Scrolls to center the soccer card) */}
          <div
            className={cn(
              'w-full flex flex-col gap-3 relative',
              animate && 'findgame02-grid-scroll'
            )}
          >
            {/* Row 1 */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full">
              {GAME_CARDS_ROW_1.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-[#F8F8F8] rounded-[10px] p-3 flex flex-col gap-2.5 border border-transparent"
                  >
                    <div className="size-11 sm:size-12 rounded-[8px] bg-[#F2F2F2] flex items-center justify-center text-text-neutral-secondary/60">
                      <IconComponent className="size-5" />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <div className="h-2.5 sm:h-3 w-4/5 rounded-full bg-[#EAEAEA]" />
                      <div className="h-2.5 sm:h-3 w-1/2 rounded-full bg-[#EAEAEA]" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Row 2 (Contains the target Soccer Card) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full">
              {GAME_CARDS_ROW_2.map((item) => {
                const IconComponent = item.icon;
                if (item.isTarget) {
                  return (
                    <div
                      key={item.id}
                      className={cn(
                        'bg-[#F8F8F8] rounded-[10px] p-3 flex flex-col gap-2.5 border border-transparent transition-all duration-300 relative',
                        animate
                          ? 'findgame02-target-card'
                          : 'bg-[#DCF652]/30 border-[#9EBF00]'
                      )}
                    >
                      <div
                        className={cn(
                          'size-11 sm:size-12 rounded-[8px] bg-[#F2F2F2] flex items-center justify-center text-text-neutral-secondary/60',
                          animate
                            ? 'findgame02-target-icon-box'
                            : 'bg-[#DCF652]/45'
                        )}
                      >
                        <IconComponent
                          className={cn(
                            'size-5 text-text-neutral-secondary/60',
                            animate
                              ? 'findgame02-target-icon'
                              : 'text-[#576501]'
                          )}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 w-full">
                        <div
                          className={cn(
                            'h-2.5 sm:h-3 w-4/5 rounded-full bg-[#EAEAEA]',
                            animate
                              ? 'findgame02-target-bar-1'
                              : 'bg-[#D3EE50]'
                          )}
                        />
                        <div
                          className={cn(
                            'h-2.5 sm:h-3 w-1/2 rounded-full bg-[#EAEAEA]',
                            animate
                              ? 'findgame02-target-bar-2'
                              : 'bg-[#E0F47A]'
                          )}
                        />
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={item.id}
                    className="bg-[#F8F8F8] rounded-[10px] p-3 flex flex-col gap-2.5 border border-transparent"
                  >
                    <div className="size-11 sm:size-12 rounded-[8px] bg-[#F2F2F2] flex items-center justify-center text-text-neutral-secondary/60">
                      <IconComponent className="size-5" />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <div className="h-2.5 sm:h-3 w-4/5 rounded-full bg-[#EAEAEA]" />
                      <div className="h-2.5 sm:h-3 w-1/2 rounded-full bg-[#EAEAEA]" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full">
              {GAME_CARDS_ROW_3.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-[#F8F8F8] rounded-[10px] p-3 flex flex-col gap-2.5 border border-transparent"
                  >
                    <div className="size-11 sm:size-12 rounded-[8px] bg-[#F2F2F2] flex items-center justify-center text-text-neutral-secondary/60">
                      <IconComponent className="size-5" />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <div className="h-2.5 sm:h-3 w-4/5 rounded-full bg-[#EAEAEA]" />
                      <div className="h-2.5 sm:h-3 w-1/2 rounded-full bg-[#EAEAEA]" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full">
              {GAME_CARDS_ROW_4.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-[#F8F8F8] rounded-[10px] p-3 flex flex-col gap-2.5 border border-transparent"
                  >
                    <div className="size-11 sm:size-12 rounded-[8px] bg-[#F2F2F2] flex items-center justify-center text-text-neutral-secondary/60">
                      <IconComponent className="size-5" />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <div className="h-2.5 sm:h-3 w-4/5 rounded-full bg-[#EAEAEA]" />
                      <div className="h-2.5 sm:h-3 w-1/2 rounded-full bg-[#EAEAEA]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Animated Cursor Vector Pointer */}
          <div
            className={cn(
              'absolute top-[48px] right-[40px] pointer-events-none z-20',
              animate && 'findgame02-cursor-motion'
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

      {/* Embedded GPU Keyframes for Search-Scroll & Selection Sequence (4.5s loop) */}
      <style>{`
        /* View scrolls to center the target soccer card */
        @keyframes kf_findgame02_grid_scroll {
          0%, 20% {
            transform: translateY(0px);
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
          }
          42%, 90% {
            transform: translateY(-70px);
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
          }
          100% {
            transform: translateY(0px);
          }
        }

        /* Cursor glides down as screen scrolls, clicks soccer card, then rests */
        @keyframes kf_findgame02_cursor {
          0%, 20% {
            transform: translate(0px, 0px) scale(1);
          }
          42% {
            transform: translate(0px, 0px) scale(1);
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
          }
          58% {
            /* Arrives directly over the centered target soccer card */
            transform: translate(-215px, 50px) scale(1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          64% {
            /* Click impact down */
            transform: translate(-215px, 50px) scale(0.72);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          70%, 90% {
            /* Click release and hold */
            transform: translate(-215px, 50px) scale(1);
            animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
          }
          100% {
            /* Returns to starting resting position */
            transform: translate(0px, 0px) scale(1);
          }
        }

        /* Target Soccer Card selection animation */
        @keyframes kf_findgame02_card_select {
          0%, 58% {
            background-color: #F8F8F8;
            border-color: transparent;
            transform: scale(1);
          }
          64% {
            background-color: #F8F8F8;
            border-color: transparent;
            transform: scale(0.97);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          70%, 90% {
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

        @keyframes kf_findgame02_icon_box {
          0%, 64% {
            background-color: #F2F2F2;
          }
          70%, 90% {
            background-color: rgba(220, 246, 82, 0.45);
          }
          100% {
            background-color: #F2F2F2;
          }
        }

        @keyframes kf_findgame02_icon {
          0%, 64% {
            color: rgba(131, 114, 139, 0.6);
          }
          70%, 90% {
            color: #576501;
          }
          100% {
            color: rgba(131, 114, 139, 0.6);
          }
        }

        @keyframes kf_findgame02_bar_1 {
          0%, 64% {
            background-color: #EAEAEA;
          }
          70%, 90% {
            background-color: #D3EE50;
          }
          100% {
            background-color: #EAEAEA;
          }
        }

        @keyframes kf_findgame02_bar_2 {
          0%, 64% {
            background-color: #EAEAEA;
          }
          70%, 90% {
            background-color: #E0F47A;
          }
          100% {
            background-color: #EAEAEA;
          }
        }

        .findgame02-grid-scroll {
          animation: kf_findgame02_grid_scroll 4.5s infinite;
          will-change: transform;
        }

        .findgame02-cursor-motion {
          animation: kf_findgame02_cursor 4.5s infinite;
          will-change: transform;
        }

        .findgame02-target-card {
          animation: kf_findgame02_card_select 4.5s infinite;
          will-change: transform, border-color, background-color;
        }

        .findgame02-target-icon-box {
          animation: kf_findgame02_icon_box 4.5s infinite;
          will-change: background-color;
        }

        .findgame02-target-icon {
          animation: kf_findgame02_icon 4.5s infinite;
          will-change: color;
        }

        .findgame02-target-bar-1 {
          animation: kf_findgame02_bar_1 4.5s infinite;
          will-change: background-color;
        }

        .findgame02-target-bar-2 {
          animation: kf_findgame02_bar_2 4.5s infinite;
          will-change: background-color;
        }

        @media (prefers-reduced-motion: reduce) {
          .findgame02-grid-scroll,
          .findgame02-cursor-motion,
          .findgame02-target-card,
          .findgame02-target-icon-box,
          .findgame02-target-icon,
          .findgame02-target-bar-1,
          .findgame02-target-bar-2 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FindGame02;
