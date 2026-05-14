import { contacts } from "../data/siteData";
import Icon from "./icons";
import Reveal from "./Reveal";

type InlineCTAProps = {
  title?: string;
  text: string;
  button: string;
  className?: string;
};

export default function InlineCTA({
  title,
  text,
  button,
  className = "",
}: InlineCTAProps) {
  return (
    <Reveal className={`inline-cta ${className}`.trim()}>
      <div>
        {title && <h3>{title}</h3>}
        <p>{text}</p>
      </div>
      <a className="button button-primary" href={contacts.telegramUrl}>
        <Icon name="Send" size={18} />
        {button}
      </a>
    </Reveal>
  );
}
