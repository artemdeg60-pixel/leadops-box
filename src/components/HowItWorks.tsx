import { howItWorks } from "../data/siteData";
import Icon, { IconName } from "./icons";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section className="section section-pad work-section" id="how-it-works">
      <Reveal className="section-heading compact">
        <p className="eyebrow">Как работает</p>
        <h2>От формы до напоминания без ручного контроля</h2>
      </Reveal>

      <div className="timeline-grid">
        {howItWorks.map((step, index) => (
          <Reveal className="timeline-step" key={step.title} delay={index * 0.07}>
            <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="icon-chip">
              <Icon name={step.icon as IconName} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
