import * as React from 'react';
import { ShoppingCart, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SellGame03Props extends React.HTMLAttributes<HTMLDivElement> {
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

export const SellGame03: React.FC<SellGame03Props> = ({
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
        <div className="p-4 sm:p-6 relative flex-1 w-full overflow-hidden bg-white flex flex-col justify-center items-center">
          {/* Access Code Purchase Card */}
          <div className="w-full max-w-[420px] bg-[#F5F5F5] rounded-[18px] p-5 sm:p-6 flex flex-col gap-4 sm:gap-5 border border-border-neutral-subtle/40 shadow-xs">
            {/* Card Header Title */}
            <div className="px-1">
              <h3 className="text-[18px] sm:text-[22px] font-heading font-light text-text-neutral/70 leading-tight">
                Game access code
              </h3>
            </div>

            {/* Access Code Input Pill + Buy Button */}
            <div className="w-full bg-white border border-[#C4C4C4] rounded-full flex items-center justify-between pl-4 sm:pl-5 pr-1.5 py-1.5 gap-2 sm:gap-3 shadow-2xs overflow-hidden">
              {/* Promo / Pass Code Text */}
              <span className="font-heading font-bold text-[13px] sm:text-[15px] text-text-neutral/70 tracking-wide select-all truncate">
                UMA - PASS - 2026
              </span>

              {/* Action Buy Button with Slow, Frequent Left-to-Right Sheen Reflection */}
              <div
                className="h-9 sm:h-[38px] px-3.5 sm:px-4 rounded-full bg-[#CDE83E] hover:bg-[#B8D430] border border-[#B8D430] flex items-center gap-2 relative overflow-hidden shrink-0 shadow-xs cursor-pointer select-none transition-colors"
                role="button"
                tabIndex={0}
                aria-label="Buy access for $5"
              >
                <ShoppingCart className="size-4 text-black/80 shrink-0" />
                <span className="font-heading font-medium text-xs sm:text-sm text-black/80 whitespace-nowrap">
                  $5 Buy
                </span>

                {/* Shimmering Reflection Light Streak (Sweeping Left to Right) */}
                <div
                  className={cn(
                    'absolute -inset-y-4 -left-16 w-10 -rotate-25 pointer-events-none bg-gradient-to-r from-transparent via-white/80 to-transparent mix-blend-screen',
                    animate && 'sellgame03-shine-sheen'
                  )}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Bottom Security / Protection Disclaimer */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-1 text-text-neutral-secondary/80">
              <ShieldCheck className="size-4 text-text-neutral-secondary/80 shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-heading font-normal text-text-neutral-secondary/80">
                Protected access
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Pure CSS GPU Keyframes (Continuous Slow & Frequent Left-to-Right Sheen) */}
      <style>{`
        @keyframes kf_sellgame03_sheen {
          0% {
            transform: translateX(0px);
            opacity: 0;
          }
          6% {
            opacity: 1;
          }
          78% {
            transform: translateX(230px);
            opacity: 1;
          }
          84% {
            transform: translateX(230px);
            opacity: 0;
          }
          100% {
            transform: translateX(230px);
            opacity: 0;
          }
        }

        .sellgame03-shine-sheen {
          animation: kf_sellgame03_sheen 2.2s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .sellgame03-shine-sheen {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SellGame03;
