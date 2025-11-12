import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner } from "sonner";
import { useTheme } from "~/components/theme-provider";
import { TOASTER_CLASS_NAME, TOASTER_STYLE } from "./constants";
import type { SonnerToasterProps } from "./types";

const toasterIcons = {
  success: <CircleCheckIcon className="size-4" />,
  info: <InfoIcon className="size-4" />,
  warning: <TriangleAlertIcon className="size-4" />,
  error: <OctagonXIcon className="size-4" />,
  loading: <Loader2Icon className="size-4 animate-spin" />,
};

export function Toaster({ ...props }: SonnerToasterProps) {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className={TOASTER_CLASS_NAME}
      icons={toasterIcons}
      style={TOASTER_STYLE}
      {...props}
    />
  );
}
