import {
  AlarmClockCheck,
  BellRing,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Hammer,
  LucideIcon,
  Mail,
  Menu,
  Moon,
  Network,
  PanelTop,
  Send,
  Sparkles,
  Sun,
  Table2,
  X,
} from "lucide-react";

export type IconName =
  | "AlarmClockCheck"
  | "BellRing"
  | "BriefcaseBusiness"
  | "Building2"
  | "Check"
  | "ChevronDown"
  | "Hammer"
  | "Mail"
  | "Menu"
  | "Moon"
  | "Network"
  | "PanelTop"
  | "Send"
  | "Sparkles"
  | "Sun"
  | "Table2"
  | "X";

export const icons: Record<IconName, LucideIcon> = {
  AlarmClockCheck,
  BellRing,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Hammer,
  Mail,
  Menu,
  Moon,
  Network,
  PanelTop,
  Send,
  Sparkles,
  Sun,
  Table2,
  X,
};

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export default function Icon({
  name,
  size = 22,
  strokeWidth = 1.8,
  className,
}: IconProps) {
  const Component = icons[name];
  return (
    <Component
      aria-hidden="true"
      className={className}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}
