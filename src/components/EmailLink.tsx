import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { contacts } from "../data/siteData";

type EmailLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function EmailLink({
  children,
  onClick,
  ...props
}: EmailLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    window.open(contacts.emailComposeUrl, "_blank", "noopener,noreferrer");
    window.location.href = contacts.emailUrl;
  };

  return (
    <a
      href={contacts.emailUrl}
      rel="noopener noreferrer"
      title={`Написать на ${contacts.email}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
