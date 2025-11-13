import type { FC } from "react";
import { LogoMemeMixerBase } from "./logo-mememixer-base";

export const LogoMemeMixerGlow: FC = () => (
  <>
    <style>{`
      .logo-mememixer-glow__intense-glow {
        box-shadow:
          0 0 10px rgba(32, 217, 245, 0.8),
          0 0 20px rgba(32, 217, 245, 0.6),
          0 0 30px rgba(105, 129, 250, 0.4),
          0 0 40px rgba(105, 129, 250, 0.2);
      }
    `}</style>
    <div className="relative">
      <LogoMemeMixerBase
        dotFill="#6aaebf"
        className="relative h-auto max-w-25 text-[#cfcfd4]"
      />
      <div className="logo-mememixer-glow__intense-glow absolute top-[4px] left-[4px] size-[24px] rounded-full" />
    </div>
  </>
);
