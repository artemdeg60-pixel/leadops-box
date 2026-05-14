import { motion } from "framer-motion";
import { contacts, heroData } from "../data/siteData";
import EmailLink from "./EmailLink";
import Icon from "./icons";

const rows = [
  ["Имя", "Мария П.", "Новый"],
  ["Запрос", "2-комн. квартира", "AI"],
  ["Бюджет", "до 18 млн ₽", "Hot"],
  ["Статус", "не обработан 14 мин", "Напомнить"],
];

export default function Hero() {
  return (
    <section className="hero section-pad" id="home">
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {heroData.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          {heroData.title}
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
        >
          {heroData.subtitle}
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
        >
          <a className="button button-primary" href={contacts.telegramUrl}>
            <Icon name="Send" size={18} />
            {heroData.primaryCta}
          </a>
          <EmailLink className="button button-secondary">
            <Icon name="Mail" size={18} />
            {heroData.secondaryCta}
          </EmailLink>
        </motion.div>
        <motion.div
          className="signal-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          {heroData.signals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </motion.div>
        <motion.div
          className="hero-badges"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.44 }}
        >
          {heroData.badges.map((badge) => (
            <span className="hero-badge" key={badge}>
              <Icon name="Check" size={15} />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Визуальный mockup LeadOps Box"
      >
        <div className="mock-card telegram-card">
          <div className="mock-card-top">
            <span className="dot" />
            <span>LeadOps / Telegram</span>
          </div>
          <h3>Новый лид: подбор объекта</h3>
          <p>Клиент ищет квартиру для семьи, готов к просмотрам на этой неделе.</p>
          <div className="mock-tags">
            <span>Бюджет: 18 млн ₽</span>
            <span>Срочно</span>
          </div>
        </div>

        <div className="mock-card sheet-card">
          <div className="sheet-header">
            <span>Google Sheets</span>
            <span>sync</span>
          </div>
          <div className="sheet-table">
            {rows.map((row) => (
              <div className="sheet-row" key={row.join("-")}>
                {row.map((cell) => (
                  <span key={cell}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="floating-badge ai-badge">
          <Icon name="Sparkles" size={18} />
          AI-summary готов
        </div>
        <div className="floating-badge reminder-badge">
          <Icon name="AlarmClockCheck" size={18} />
          Напоминание через 15 мин
        </div>
      </motion.div>
    </section>
  );
}
