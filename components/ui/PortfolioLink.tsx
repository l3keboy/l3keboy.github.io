import { Link } from "@heroui/react";
import { LinkRootProps } from "@heroui/react";
import clsx from "clsx";
import { ReactNode } from "react";

export type IPortfolioLink = {
  ariaLabel?: string;
  classNames?: string;
  content: ReactNode;
  disableAnimation?: boolean;
  href?: LinkRootProps["href"];
  linkIsExternal?: boolean;
  noUnderline?: boolean;
};

export default function PortfolioLink({
  ariaLabel,
  classNames,
  content,
  disableAnimation,
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

  const portfolioLinkDisableAnimation = disableAnimation ?? false;

  return (
    <Link
      aria-label={portfolioLinkAriaLabel?.toString()}
      className={clsx(
        !portfolioLinkDisableAnimation
          ? "no-underline hovered:no-underline focused:no-underline transition duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          : "",
        portfolioLinkNoUnderline,
        portfolioLinkClassNames,
      )}
      href={portfolioLinkHref}
      rel={portfolioLinkRel}
      target={portfolioLinkTarget}
    >
      {content}
    </Link>
  );
}
