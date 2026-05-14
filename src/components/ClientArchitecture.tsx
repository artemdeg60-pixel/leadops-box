import { architectureItems } from "../data/siteData";
import Icon from "./icons";
import Reveal from "./Reveal";

export default function ClientArchitecture() {
  return (
    <section className="section section-pad architecture-section" id="architecture">
      <Reveal className="architecture-copy">
        <p className="eyebrow">Архитектура под каждого клиента</p>
        <h2>Каждая компания получает собственный контур</h2>
        <p>
          Заявки разных компаний не смешиваются: под клиента разворачивается
          отдельная связка формы, таблицы, Telegram-чата и логики напоминаний.
        </p>
      </Reveal>

      <Reveal className="architecture-panel" delay={0.12}>
        {architectureItems.map((item) => (
          <div className="architecture-item" key={item}>
            <Icon name="Check" size={18} />
            <span>{item}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
