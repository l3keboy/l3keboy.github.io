import { Chip, Separator } from "@heroui/react";
import { useMessages, useTranslations } from "next-intl";

import PortfolioButton from "@/components/ui/PortfolioButton";
import PortfolioLink from "@/components/ui/PortfolioLink";
import { type NavigationLink } from "@/types/components/navigation/NavigationLink";
import { siteSettings } from "@/utils/config/siteSettings";

import ContentContainer from "../ContentContainer";

export function Footer() {
  const t = useTranslations("Components.Navigation.Footer");
  const messages = useMessages();

  // #region Get footer links
  const keys = Object.keys(messages.Components.Navigation.Footer.Links);

  const navigationLinks: NavigationLink[] = [];
  keys.forEach((key) => {
    navigationLinks.push({
      ariaLabel: t(`Links.${key}.ariaLabel`),
      key: parseInt(key),
      title: t(`Links.${key}.title`),
      url: t(`Links.${key}.url`),
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
              className="p-0 font-family-mono"
              color="accent"
              variant="tertiary"
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
          <PortfolioLink
            content={<PortfolioButton content={t("Buttons.linkedIn")} />}
            href={siteSettings.urls.linkedInUrl}
            linkIsExternal
            noUnderline
          />
          <PortfolioLink
            content={
              <PortfolioButton
                content={t("Buttons.gitHub")}
                variant="outline"
              />
            }
            href={siteSettings.urls.githubUrl}
            linkIsExternal
            noUnderline
          />
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
              <PortfolioLink
                ariaLabel={link.ariaLabel}
                classNames="font-family-primary text-sm text-muted"
                content={link.title}
                href={link.url}
                key={link.key}
              />
            );
          })}
        </nav>
        {/* #endregion */}
      </ContentContainer>
      {/* #endregion */}
    </div>
  );
}
