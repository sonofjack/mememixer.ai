import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "~/lib/utils";
import type { LabelProps } from "./types";
import { labelClasses } from "./variants";

export function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelClasses, className)}
      {...props}
    />
  );
}
