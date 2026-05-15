import { useState } from "react";
import { contacts, navItems } from "../data/siteData";
import type { Theme } from "../hooks/useTheme";
import EmailLink from "./EmailLink";
import Icon from "./icons";
import ThemeToggle from "./ThemeToggle";

type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="LeadOps Box">
        <span>LeadOps</span>
        <strong>Box</strong>
      </a>

      <nav className="desktop-nav" aria-label="Основная навигация">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <EmailLink className="ghost-link">
          Email
        </EmailLink>
        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
        <a className="button button-small button-primary" href={contacts.telegramUrl}>
          <Icon name="Send" size={16} />
          Telegram
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <Icon name={isOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {isOpen && (
        <nav className="mobile-nav" aria-label="Мобильная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <div className="mobile-nav-actions">
            <div className="mobile-theme-row">
              <span>Тема</span>
              <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
            </div>
            <a className="button button-primary" href={contacts.telegramUrl}>
              Написать в Telegram
            </a>
            <EmailLink className="button button-secondary">
              Отправить email
            </EmailLink>
          </div>
        </nav>
      )}
    </header>
  );
}
