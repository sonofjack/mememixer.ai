import { Slot } from "@radix-ui/react-slot";
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
  const styles = buttonVariants({ variant, size });

  return <Comp data-slot="button" className={styles.root({ className })} {...props} />;
}
