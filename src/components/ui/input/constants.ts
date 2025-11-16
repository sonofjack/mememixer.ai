export const INPUT_VARIANTS = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error",
} as const;

export const INPUT_SIZES = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

export type InputVariant = (typeof INPUT_VARIANTS)[keyof typeof INPUT_VARIANTS];
export type InputSize = (typeof INPUT_SIZES)[keyof typeof INPUT_SIZES];
