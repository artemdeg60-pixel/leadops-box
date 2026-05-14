import { useEffect, useState } from "react";
import { demoCases, inlineCtas } from "../data/siteData";
import InlineCTA from "./InlineCTA";
import Icon from "./icons";
import Reveal from "./Reveal";

type MediaImageProps = {
  src: string;
  label: string;
  caption?: string;
};

function MediaImage({ src, label }: MediaImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="media-placeholder">
        <span>{label}</span>
        <strong>Скриншот будет добавлен позже</strong>
      </div>
    );
  }

  return (
    <img src={src} alt={label} loading="lazy" onError={() => setHasError(true)} />
  );
}

export default function DemoSection() {
  const [activeCaseId, setActiveCaseId] = useState(demoCases[0].id);
  const [activeShot, setActiveShot] = useState<MediaImageProps | null>(null);
  const activeCase = demoCases.find((item) => item.id === activeCaseId) ?? demoCases[0];

  useEffect(() => {
    if (!activeShot) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveShot(null);
      }
    };

    document.body.classList.add("is-lightbox-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("is-lightbox-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeShot]);

  return (
    <section className="section section-pad demo-section">
      <Reveal className="section-heading" id="demo">
        <p className="eyebrow">Демо</p>
        <h2>Два готовых сценария для дорогих заявок</h2>
        <p>
          Можно посмотреть логику на примере недвижимости и ремонта: от формы до
          карточки в Telegram, строки в таблице и напоминания.
        </p>
      </Reveal>

      <Reveal className="demo-tabs" delay={0.1}>
        {demoCases.map((item) => (
          <button
            className={item.id === activeCaseId ? "active" : ""}
            key={item.id}
            type="button"
            onClick={() => setActiveCaseId(item.id)}
          >
            {item.label}
          </button>
        ))}
      </Reveal>

      <Reveal className="demo-layout" delay={0.18}>
        <div className="demo-copy">
          <span className="demo-label">{activeCase.label}</span>
          <h3>{activeCase.title}</h3>
          <p>{activeCase.description}</p>
        </div>

        <div className="demo-media">
          <div className="screens-grid">
            {activeCase.screenshots.map((shot) => (
              <figure className="screenshot-card" key={shot.path}>
                <button
                  className="screenshot-open"
                  type="button"
                  onClick={() => setActiveShot({ src: shot.path, label: shot.label })}
                >
                  <MediaImage src={shot.path} label={shot.label} />
                </button>
                <figcaption>
                  <strong>{shot.label}</strong>
                  <span>{shot.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>

      <InlineCTA {...inlineCtas.demo} className="demo-inline-cta" />

      {activeShot && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeShot.label}
        >
          <button
            className="lightbox-backdrop"
            type="button"
            aria-label="Закрыть просмотр"
            onClick={() => setActiveShot(null)}
          />
          <div className="lightbox-panel">
            <div className="lightbox-top">
              <span>{activeShot.label}</span>
              <button
                className="lightbox-close"
                type="button"
                aria-label="Закрыть"
                onClick={() => setActiveShot(null)}
              >
                <Icon name="X" size={22} />
              </button>
            </div>
            <div className="lightbox-image-wrap">
              <img src={activeShot.src} alt={activeShot.label} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
