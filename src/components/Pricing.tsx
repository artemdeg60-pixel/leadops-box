import { contacts, pricingPlans } from "../data/siteData";
import Icon from "./icons";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section className="section section-pad pricing-section">
      <Reveal className="section-heading" id="pricing">
        <p className="eyebrow">Тарифы / пилот</p>
        <h2>Запуск можно начать с короткого пилота</h2>
        <p>
          Формат подбирается под нишу, объём сценариев и текущую систему обработки
          заявок.
        </p>
      </Reveal>

      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <Reveal
            as="article"
            className={plan.featured ? "pricing-card featured" : "pricing-card"}
            key={plan.title}
            delay={index * 0.08}
          >
            {plan.featured && <span className="pricing-badge">оптимально</span>}
            <h3>{plan.title}</h3>
            <div className="price-stack">
              <p>
                <span>Россия</span>
                {plan.ruPrice}
              </p>
              <p>
                <span>Международно</span>
                {plan.internationalPrice}
              </p>
            </div>
            <ul>
              {plan.items.map((item) => (
                <li key={item}>
                  <Icon name="Check" size={17} />
                  {item}
                </li>
              ))}
            </ul>
            <a className="button button-secondary" href={contacts.telegramUrl}>
              Обсудить пилот
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="pricing-note" delay={0.12}>
        Для первых клиентов доступны максимально выгодные условия. Финальная
        стоимость зависит от ниши, количества форм, сценариев и интеграций.
      </Reveal>
    </section>
  );
}
