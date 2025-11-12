import { cn } from "~/lib/utils";
import type { InputProps } from "./types";
import { inputClasses } from "./variants";

export function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(...inputClasses, className)}
      {...props}
    />
  );
}
