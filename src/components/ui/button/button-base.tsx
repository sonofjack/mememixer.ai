import { Slot } from "@radix-ui/react-slot";
import { cn } from "~/lib/utils";
import type { ButtonProps } from "./types";
import { buttonVariants } from "./variants";

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
