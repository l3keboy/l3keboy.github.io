import { type NavigationLink } from "@/types/components/navigation/NavigationLink";
import { siteSettings } from "@/utils/config/siteSettings";
import { Avatar, Link } from "@heroui/react";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import { ThemeSwitcher } from "../ThemeSwitcher";

export function Header() {
  const t = useTranslations("Components.Navigation.Header");

  // #region Get header links
  const messages = useMessages();
  const keys = Object.keys(messages.Components.Navigation.Header.Links);

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
    <header
      className="w-full py-6 border-b border-solid border-border"
      role="navigation"
    >
      <div className="max-w-270 flex flex-row justify-between m-auto text-center">
        {/* #region Avatar */}
        <div className="flex flex-row gap-1.5">
          <Avatar className="bg-transparent">
            <Avatar.Image
              className="bg-transparent"
              asChild
              height={40}
              src="/assets/memoji.png"
              width={40}
            >
              <Image
                loading="eager"
                alt={siteSettings.title}
                src="/assets/memoji.png"
                className="bg-transparent"
              />
            </Avatar.Image>
          </Avatar>
          <Link href="/" className="font-family-primary font-semibold my-auto">
            {siteSettings.title}
          </Link>
        </div>
        {/* #endregion */}

        {/* #region Navigation links */}
        <nav className="flex flex-row gap-3 text-center m-auto">
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

        {/* #region Dark mode toggle */}
        <div className="my-auto">
          <ThemeSwitcher />
        </div>
        {/* #endregion */}
      </div>
    </header>
  );
}
