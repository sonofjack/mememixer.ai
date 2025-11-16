import { tv } from "tailwind-variants";
import { INPUT_SIZES, INPUT_VARIANTS } from "./constants";

export const variants = tv({
  base: [
    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  ],
  variants: {
    variant: {
      [INPUT_VARIANTS.DEFAULT]: "",
      [INPUT_VARIANTS.SUCCESS]: "",
      [INPUT_VARIANTS.ERROR]: "",
    },
    size: {
      [INPUT_SIZES.SM]: "h-8 px-2 py-1 text-sm",
      [INPUT_SIZES.MD]: "h-9 px-3 py-1 md:text-sm",
      [INPUT_SIZES.LG]: "h-10 px-4 py-2 text-base",
    },
  },
  defaultVariants: {
    variant: INPUT_VARIANTS.DEFAULT,
    size: INPUT_SIZES.MD,
  },
});
