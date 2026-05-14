import { audienceCards } from "../data/siteData";
import Icon, { IconName } from "./icons";
import Reveal from "./Reveal";

export default function AudienceCards() {
  return (
    <section className="section section-pad audience-section" aria-labelledby="audience-title">
      <Reveal className="section-heading">
        <p className="eyebrow">Для кого</p>
        <h2 id="audience-title">Сервисным бизнесам, где один лид стоит дорого</h2>
        <p>
          LeadOps Box помогает не терять входящие заявки там, где скорость реакции
          напрямую влияет на выручку.
        </p>
      </Reveal>

      <div className="audience-grid">
        {audienceCards.map((card, index) => (
          <Reveal
            as="article"
            className="audience-card"
            id={card.id}
            key={card.id}
            delay={index * 0.08}
          >
            <div className="icon-chip">
              <Icon name={card.icon as IconName} />
            </div>
            <h3>{card.title}</h3>
            <div className="problem-solution">
              <p>
                <span>Проблема:</span>
                {card.problem}
              </p>
              <p>
                <span>Решение:</span>
                {card.solution}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
