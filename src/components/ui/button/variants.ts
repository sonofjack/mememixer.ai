import { tv } from "tailwind-variants";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "./constants";

export const buttonVariants = tv({
  slots: {
    root: [
      "relative inline-flex flex-shrink-0 items-center justify-center border-solid border !cursor-pointer",
      "box-border whitespace-nowrap transition-all font-medium text-sm",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      "focus-visible:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "disabled:pointer-events-none disabled:opacity-50",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    ],
  },
  variants: {
    variant: {
      [BUTTON_VARIANTS.DEFAULT]: {
        root: [
          "relative overflow-hidden rounded-xl border-0",
          "bg-gradient-to-b from-cyan-500 to-blue-600",
          "text-white font-semibold",
          "shadow-lg shadow-cyan-500/25",
          "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/30 before:via-white/15 before:to-transparent before:pointer-events-none",
          "hover:from-cyan-400 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/30 hover:before:from-white/40",
          "active:from-cyan-600 active:to-blue-700 active:shadow-md",
          "transition-all duration-200",
        ],
      },
      [BUTTON_VARIANTS.SECONDARY]: {
        root: ["bg-secondary text-secondary-foreground hover:bg-secondary/80"],
      },
      [BUTTON_VARIANTS.DESTRUCTIVE]: {
        root: [
          "bg-destructive text-white hover:bg-destructive/90",
          "focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
          "dark:bg-destructive/60",
        ],
      },
      [BUTTON_VARIANTS.OUTLINE]: {
        root: [
          // "border bg-background",
          // "border-input bg-[#111118]",
          "border-input bg-background shadow-xs",
          // "hover:bg-accent hover:text-accent-foreground",
          // "dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
          // "dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        ],
      },
      [BUTTON_VARIANTS.GHOST]: {
        root: ["hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"],
      },
      [BUTTON_VARIANTS.LINK]: {
        root: ["text-primary underline-offset-4 hover:underline"],
      },
    },
    size: {
      [BUTTON_SIZES.DEFAULT]: {
        root: "h-9 px-4 py-2 has-[>svg]:px-3",
      },
      [BUTTON_SIZES.SM]: {
        root: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      },
      [BUTTON_SIZES.LG]: {
        root: "h-10 rounded-md px-6 has-[>svg]:px-4",
      },
      [BUTTON_SIZES.ICON]: {
        root: "size-9",
      },
      [BUTTON_SIZES.ICON_SM]: {
        root: "size-8",
      },
      [BUTTON_SIZES.ICON_LG]: {
        root: "size-10",
      },
    },
  },
  defaultVariants: {
    variant: BUTTON_VARIANTS.DEFAULT,
    size: BUTTON_SIZES.DEFAULT,
  },
});
