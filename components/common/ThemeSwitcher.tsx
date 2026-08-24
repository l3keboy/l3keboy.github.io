"use client";
// ! Themes are only relevant on the client side, therefore use client

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { IconMoon } from "../icons/Moon";
import { IconSun } from "../icons/Sun";
import PortfolioButton from "../ui/PortfolioButton";

export function ThemeSwitcher() {
  const t = useTranslations("Components.ThemeSwitcher");

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme, theme } = useTheme();

  useEffect(() => {
    const run = async () => {
      setMounted(true);
    };
    run();
  }, []);

  if (!mounted) return null;

  const activeTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <PortfolioButton
      ariaLabel={t("ariaLabel")}
      content={activeTheme === "light" ? <IconMoon /> : <IconSun />}
      onPress={() => {
        switch (activeTheme) {
          case "dark":
            setTheme("light");
            break;
          case "light":
            setTheme("dark");
            break;
        }
      }}
      size="sm"
      variant="outline"
    />
  );
}
