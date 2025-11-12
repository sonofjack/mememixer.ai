import { cva } from "class-variance-authority";
import {
  BUTTON_BASE_CLASSES,
  BUTTON_SIZE_CLASSES,
  BUTTON_VARIANT_CLASSES,
  DEFAULT_SIZE,
  DEFAULT_VARIANT,
} from "./constants";

export const buttonVariants = cva(BUTTON_BASE_CLASSES, {
  variants: {
    variant: BUTTON_VARIANT_CLASSES,
    size: BUTTON_SIZE_CLASSES,
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
    size: DEFAULT_SIZE,
  },
});
