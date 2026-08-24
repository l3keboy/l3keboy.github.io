import { type NavigationLink } from "@/types/components/navigation/NavigationLink";
import { siteSettings } from "@/utils/config/siteSettings";
import { Button, Chip, Link, Separator } from "@heroui/react";
import { useMessages, useTranslations } from "next-intl";
import ContentContainer from "../ContentContainer";

export function Footer() {
  const t = useTranslations("Components.Navigation.Footer");

  // #region Get footer links
  const messages = useMessages();
  const keys = Object.keys(messages.Components.Navigation.Footer.Links);

  const navigationLinks: NavigationLink[] = [];
  keys.forEach((key) => {
    navigationLinks.push({
      title: t(`Links.${key}.title`),
      key: parseInt(key),
      url: t(`Links.${key}.url`),
      ariaLabel: t(`Links.${key}.ariaLabel`),
    });
  });
  // #endregion

  return (
    <div
      className="flex flex-col gap-6 py-6 justify-center w-full border-t border-solid border-border"
      role="contentinfo"
    >
      {/* #region Footer top */}
      <ContentContainer classNames="flex flex-col md:flex-row justify-between">
        {/* #region Footer top */}
        <div className="flex flex-col gap-6">
          {/* #region Footer top Text */}
          <div className="flex flex-col gap-3">
            <Chip
              variant="tertiary"
              color="accent"
              className="p-0 font-family-mono"
            >
              {t("chip")}
            </Chip>
            <h2 className="font-family-primary text-portfolio-text text-heading">
              {t("title")}
            </h2>
          </div>
          <label className="max-w-[66%] text-muted">{t("description")}</label>
          {/* #endregion */}
        </div>
        {/* #endregion */}

        {/* #region Footer top navigation buttons */}
        <div className="flex flex-row my-0 mt-3 md:my-auto gap-3">
          <Link
            href={siteSettings.linkedInUrl}
            className="no-underline"
            target="__blank"
          >
            <Button variant="primary">{t("Buttons.linkedIn")}</Button>
          </Link>
          <Link
            href={siteSettings.githubUrl}
            className="no-underline"
            target="__blank"
          >
            <Button variant="outline">{t("Buttons.gitHub")}</Button>
          </Link>
        </div>
        {/* #endregion */}
      </ContentContainer>
      {/* #endregion */}

      {/* #region Separator */}
      <Separator variant="default" />
      {/* #endregion */}

      {/* #region Footer bottom */}
      <ContentContainer classNames="flex flex-row justify-between w-full mx-auto !py-0">
        {/* #region Copyright */}
        <div>
          <label className="text-muted">
            &copy; {new Date().getFullYear()} - {siteSettings.title}
          </label>
        </div>
        {/* #endregion */}

        {/* #region Navigation */}
        <nav className="flex flex-row gap-3 text-center my-auto">
          {navigationLinks.map((link) => {
            return (
              <Link
                key={link.key}
                href={link.url}
                aria-label={link.ariaLabel}
                className="font-family-primary text-sm text-muted"
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
        {/* #endregion */}
      </ContentContainer>
      {/* #endregion */}
    </div>
  );
}
