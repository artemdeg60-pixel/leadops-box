import {
  readyForDemoItems,
  readyForDemoSection,
} from "../data/siteData";
import Icon, { IconName } from "./icons";
import Reveal from "./Reveal";

export default function ReadyForDemo() {
  return (
    <section className="section section-pad ready-section">
      <Reveal className="section-heading">
        <p className="eyebrow">{readyForDemoSection.eyebrow}</p>
        <h2>{readyForDemoSection.title}</h2>
        <p>{readyForDemoSection.subtitle}</p>
      </Reveal>

      <div className="ready-grid">
        {readyForDemoItems.map((item, index) => (
          <Reveal
            as="article"
            className="ready-card"
            key={item.title}
            delay={index * 0.05}
          >
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
