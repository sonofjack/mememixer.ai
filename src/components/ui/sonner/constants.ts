import type * as React from "react";

export const TOASTER_CLASS_NAME = "toaster group";

export const TOASTER_STYLE: React.CSSProperties = {
  "--normal-bg": "var(--popover)",
  "--normal-text": "var(--popover-foreground)",
  "--normal-border": "var(--border)",
  "--border-radius": "var(--radius)",
} as React.CSSProperties;
