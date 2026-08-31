"use client";
// ! Languages are only relevant on the client side, therefore use client

import { Dropdown } from "@heroui/react";
import { useTranslations } from "next-intl";

import { useLocaleContext } from "@/contexts/LocaleContext";
import { siteSettings } from "@/utils/config/siteSettings";

import { IconGlobe } from "../icons/Globe";
import PortfolioButton from "../ui/PortfolioButton";

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
                id={lang}
                key={lang}
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
