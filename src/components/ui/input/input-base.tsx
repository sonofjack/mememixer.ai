import type { InputProps } from "./types";
import { variants } from "./variants";

export function Input({ className, type, size, variant, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={variants({ size, variant, class: className })}
      {...props}
    />
  );
}
