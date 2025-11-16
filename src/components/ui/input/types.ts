import type * as React from "react";
import type { InputSize, InputVariant } from "./constants";

export type InputProps = React.ComponentProps<"input"> & {
  variant?: InputVariant;
  size?: InputSize;
};
