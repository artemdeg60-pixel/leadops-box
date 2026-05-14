import { faqItems } from "../data/siteData";
import Icon from "./icons";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section className="section section-pad faq-section">
      <Reveal className="section-heading compact" id="faq">
        <p className="eyebrow">FAQ</p>
        <h2>Часто задаваемые вопросы</h2>
      </Reveal>

      <div className="faq-list">
        {faqItems.map((item, index) => (
          <Reveal key={item.question} delay={index * 0.04}>
            <details className="faq-item">
              <summary>
                <span>{item.question}</span>
                <Icon name="ChevronDown" size={20} />
              </summary>
              <p>{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
