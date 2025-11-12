import type * as React from "react";
import type { VariantProps } from "tailwind-variants";
import type { buttonVariants } from "./variants";

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
