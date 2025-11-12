import type { VariantProps } from "class-variance-authority";
import type * as React from "react";
import type { buttonVariants } from "./variants";

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
