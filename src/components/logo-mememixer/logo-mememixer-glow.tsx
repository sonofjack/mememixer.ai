import type { FC } from "react";
import { LogoMemeMixerBase } from "./logo-mememixer-base";

export const LogoMemeMixerGlow: FC = () => (
  <>
    <style>{`
    .dark.logo-mememixer-glow__intense-glow {
      box-shadow:
        0 0 2.7px rgba(32, 217, 245, 1),
        0 0 5px rgba(32, 217, 245, 0.9),
        0 0 8.3px rgba(68, 173, 248, 0.8),
        0 0 11.7px rgba(88, 151, 249, 0.7),
        0 0 15px rgba(105, 129, 250, 0.6),
        0 0 18.3px rgba(105, 129, 250, 0.5),
        0 0 23.3px rgba(105, 129, 250, 0.4),
        0 0 30px rgba(105, 129, 250, 0.3);
    }
    .logo-mememixer-dot-fill {
      fill: #575791;
    }
    .dark.logo-mememixer-dot-fill {
      fill: #6aaebf;
    }
    `}</style>
    <div className="relative">
      <LogoMemeMixerBase
        dotFillClassName="logo-mememixer-dot-fill"
        className="relative h-auto max-w-28 text-[#575791] dark:text-[#cfcfd4]"
      />
      <div className="logo-mememixer-glow__intense-glow pointer-events-none absolute top-[5px] left-[5px] size-[25px] rounded-full" />
    </div>
  </>
);
