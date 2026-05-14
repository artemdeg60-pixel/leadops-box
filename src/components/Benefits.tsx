import { benefits } from "../data/siteData";
import Icon, { IconName } from "./icons";
import Reveal from "./Reveal";

export default function Benefits() {
  return (
    <section className="section section-pad benefits-section" id="benefits">
      <Reveal className="section-heading compact">
        <p className="eyebrow">Что получает клиент</p>
        <h2>Минимум лишнего, максимум контроля над заявками</h2>
      </Reveal>

      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <Reveal className="benefit-card" key={benefit.title} delay={index * 0.05}>
            <Icon name={benefit.icon as IconName} />
            <span>{benefit.title}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
