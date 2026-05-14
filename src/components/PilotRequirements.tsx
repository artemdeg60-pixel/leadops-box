import {
  pilotRequirements,
  pilotRequirementsSection,
} from "../data/siteData";
import Icon, { IconName } from "./icons";
import Reveal from "./Reveal";

export default function PilotRequirements() {
  return (
    <section className="section section-pad requirements-section">
      <Reveal className="section-heading">
        <p className="eyebrow">{pilotRequirementsSection.eyebrow}</p>
        <h2>{pilotRequirementsSection.title}</h2>
        <p>{pilotRequirementsSection.subtitle}</p>
      </Reveal>

      <div className="requirements-grid">
        {pilotRequirements.map((item, index) => (
          <Reveal
            as="article"
            className="requirement-card"
            key={item.title}
            delay={index * 0.05}
          >
            <span className="requirement-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="icon-chip">
              <Icon name={item.icon as IconName} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
