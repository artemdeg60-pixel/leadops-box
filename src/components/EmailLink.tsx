import type { AnchorHTMLAttributes } from "react";
import { contacts } from "../data/siteData";

type EmailLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function EmailLink({
  children,
  onClick,
  ...props
}: EmailLinkProps) {
  return (
    <a
      href={contacts.emailComposeUrl}
      rel="noopener noreferrer"
      target="_blank"
      title={`Написать на ${contacts.email}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
}
