import type { FC } from "react";
import { LogoMemeMixerBase } from "./logo-mememixer-base";

export const LogoMemeMixerGlow: FC = () => (
  <>
    <style>{`
.logo-mememixer-glow__intense-glow {
  box-shadow:
    0 0 8px rgba(32, 217, 245, 1),
    0 0 15px rgba(32, 217, 245, 0.9),
    0 0 25px rgba(68, 173, 248, 0.8),
    0 0 35px rgba(88, 151, 249, 0.7),
    0 0 45px rgba(105, 129, 250, 0.6),
    0 0 55px rgba(105, 129, 250, 0.5),
    0 0 70px rgba(105, 129, 250, 0.4),
    0 0 90px rgba(105, 129, 250, 0.3);
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
