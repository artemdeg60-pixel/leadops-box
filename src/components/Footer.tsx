import { contacts } from "../data/siteData";
import EmailLink from "./EmailLink";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="wordmark footer-wordmark" href="#home" aria-label="LeadOps Box">
          <span>LeadOps</span>
          <strong>Box</strong>
        </a>
        <p>AI-система для обработки заявок и напоминаний.</p>
      </div>
      <div className="footer-links">
        <a href={contacts.telegramUrl}>Telegram: {contacts.telegram}</a>
        <EmailLink>Email: {contacts.email}</EmailLink>
      </div>
    </footer>
  );
}
