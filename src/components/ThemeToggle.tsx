import type { Theme } from "../hooks/useTheme";
import Icon from "./icons";

type ThemeToggleProps = {
  theme: Theme;
  onToggleTheme: () => void;
  className?: string;
};

export default function ThemeToggle({
  theme,
  onToggleTheme,
  className = "",
}: ThemeToggleProps) {
  const isLight = theme === "light";

  return (
    <button
      aria-checked={isLight}
      aria-label={
        isLight ? "Переключить на тёмную тему" : "Переключить на светлую тему"
      }
      className={`theme-toggle ${isLight ? "is-light" : "is-dark"} ${className}`.trim()}
      onClick={onToggleTheme}
      role="switch"
      type="button"
    >
      <span className="theme-toggle-icon theme-toggle-icon-moon">
        <Icon name="Moon" size={13} strokeWidth={2} />
      </span>
      <span className="theme-toggle-icon theme-toggle-icon-sun">
        <Icon name="Sun" size={13} strokeWidth={2} />
      </span>
      <span className="theme-toggle-thumb">
        <Icon name={isLight ? "Moon" : "Sun"} size={14} strokeWidth={2.15} />
      </span>
    </button>
  );
}
