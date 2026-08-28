"use client";
// ! Languages are only relevant on the client side, therefore use client

import { useLocaleContext } from "@/contexts/LocaleContext";
import { Dropdown } from "@heroui/react";
import PortfolioButton from "../ui/PortfolioButton";
import { useTranslations } from "next-intl";
import { IconGlobe } from "../icons/Globe";
import { siteSettings } from "@/utils/config/siteSettings";

export function LanguageSwitcher() {
  const t = useTranslations("Components.LanguageSwitcher");

  const { setLocale } = useLocaleContext();

  return (
    <Dropdown>
      <PortfolioButton
        ariaLabel={t("ariaLabel")}
        content={<IconGlobe />}
        onPress={() => {}}
        size="sm"
        variant="outline"
      />
      <Dropdown.Popover className="rounded-lg">
        <Dropdown.Menu
          onAction={(key) => {
            setLocale({ userPreferredLocale: key.toString() });
          }}
        >
          {siteSettings.siteMetadata.supportedSiteLanguages.map((lang) => {
            return (
              <Dropdown.Item
                className="rounded-lg"
                key={lang}
                id={lang}
                textValue={new Intl.DisplayNames([], {
                  type: "language",
                }).of(lang)}
              >
                <label>
                  {new Intl.DisplayNames([], {
                    type: "language",
                  }).of(lang)}
                </label>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
