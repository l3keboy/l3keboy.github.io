import { Avatar, Drawer, Link } from "@heroui/react";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";

import PortfolioLink from "@/components/ui/PortfolioLink";
import { type NavigationLink } from "@/types/components/navigation/NavigationLink";
import { siteSettings } from "@/utils/config/siteSettings";

import ContentContainer from "../ContentContainer";
import { ThemeSwitcher } from "../ThemeSwitcher";
import PortfolioButton from "@/components/ui/PortfolioButton";
import { IconMenu } from "@/components/icons/Menu";

export function Header() {
  const t = useTranslations("Components.Navigation.Header");

  // #region Get header links
  const messages = useMessages();
  const keys = Object.keys(messages.Components.Navigation.Header.Links);

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
    <header
      className="w-full py-6 border-b border-solid border-border"
      role="navigation"
    >
      <ContentContainer classNames="!flex-row !py-0">
        {/* #region Avatar */}
        <div className="flex flex-row gap-1.5">
          <Avatar className="bg-transparent">
            <Avatar.Image
              asChild
              className="bg-transparent"
              height={40}
              src="/assets/memoji.png"
              width={40}
            >
              <Image
                alt={siteSettings.title}
                className="bg-transparent"
                loading="eager"
                src="/assets/memoji.png"
              />
            </Avatar.Image>
          </Avatar>
          <PortfolioLink
            classNames="font-family-primary font-semibold my-auto"
            content={siteSettings.title}
          />
        </div>
        {/* #endregion */}

        {/* TODO Translations switcher */}
        {/* #region Navigation links */}
        <nav className="flex-row gap-3 text-center m-auto hidden md:flex">
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

        {/* #region Dark mode toggle */}
        <div className="my-auto hidden md:flex">
          <ThemeSwitcher />
        </div>
        {/* #endregion */}

        {/* #region Hamburger menu */}
        <div className="flex md:hidden">
          <Drawer>
            <PortfolioButton content={<IconMenu />} variant="ghost" />
            <Drawer.Backdrop variant="opaque">
              <Drawer.Content placement="right">
                <Drawer.Dialog aria-label="Mobile menu">
                  <Drawer.Body>
                    <div className="flex flex-col gap-6">
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
                    </div>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <div className="">
                      <ThemeSwitcher />
                    </div>
                  </Drawer.Footer>
                </Drawer.Dialog>
              </Drawer.Content>
            </Drawer.Backdrop>
          </Drawer>
        </div>
        {/* #endregion */}
      </ContentContainer>
    </header>
  );
}
