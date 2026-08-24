import { Link } from "@heroui/react";
import { LinkRootProps } from "@heroui/react";
import clsx from "clsx";
import { ReactNode } from "react";

export type IPortfolioLink = {
  ariaLabel?: string;
  classNames?: string;
  content: ReactNode;
  href?: LinkRootProps["href"];
  linkIsExternal?: boolean;
  noUnderline?: boolean;
};

export default function PortfolioLink({
  ariaLabel,
  classNames,
  content,
  href,
  linkIsExternal,
  noUnderline,
}: IPortfolioLink) {
  const portfolioLinkClassNames = classNames ?? "";

  const portfolioLinkAriaLabel = ariaLabel ?? content;

  const portfolioLinkHref = href ?? "/";
  const portfolioLinkTarget = linkIsExternal ? "_blank" : undefined;
  const portfolioLinkRel = linkIsExternal ? "noopener noreferrer" : undefined;
  const portfolioLinkNoUnderline = noUnderline ? "no-underline" : "";

  return (
    <Link
      aria-label={portfolioLinkAriaLabel?.toString()}
      className={clsx(portfolioLinkNoUnderline, portfolioLinkClassNames)}
      href={portfolioLinkHref}
      rel={portfolioLinkRel}
      target={portfolioLinkTarget}
    >
      {content}
    </Link>
  );
}
