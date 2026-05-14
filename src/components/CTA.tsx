import { contacts } from "../data/siteData";
import EmailLink from "./EmailLink";
import Icon from "./icons";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="section-pad final-cta">
      <Reveal className="final-cta-inner" id="contacts">
        <p className="eyebrow">Контакты</p>
        <h2>Хотите перестать терять заявки из-за медленной обработки?</h2>
        <p>
          Запросите демо LeadOps Box и посмотрите, как система может работать под
          ваш бизнес.
        </p>
        <div className="hero-cta">
          <a className="button button-primary" href={contacts.telegramUrl}>
            <Icon name="Send" size={18} />
            Написать в Telegram
          </a>
          <EmailLink className="button button-secondary">
            <Icon name="Mail" size={18} />
            Отправить email
          </EmailLink>
        </div>
      </Reveal>
    </section>
  );
}
