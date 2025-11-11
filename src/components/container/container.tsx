import type { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const containerVariants = tv({
  base: "mx-auto w-full",
  variants: {
    size: {
      sm: "max-w-screen-sm", // 640px
      md: "max-w-screen-md", // 768px
      lg: "max-w-screen-lg", // 1024px
      xl: "max-w-screen-xl", // 1280px
      "2xl": "max-w-screen-2xl", // 1536px
      full: "max-w-full",
    },
    padding: {
      none: "px-0",
      sm: "px-4 sm:px-6",
      md: "px-4 sm:px-6 lg:px-8",
      lg: "px-6 sm:px-8 lg:px-12",
      xl: "px-8 sm:px-12 lg:px-16",
    },
  },
  defaultVariants: {
    size: "xl",
    padding: "md",
  },
});

export interface ContainerProps extends VariantProps<typeof containerVariants> {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "nav";
}

export function Container({
  children,
  className,
  size,
  padding,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={containerVariants({ size, padding, className })}>
      {children}
    </Component>
  );
}

