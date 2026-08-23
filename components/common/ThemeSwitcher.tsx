"use client";
// ! Themes are only relevant on the client side, therefore use client

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconMoon } from "../icons/Moon";
import { IconSun } from "../icons/Sun";
import { useTranslations } from "next-intl";

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
    <Button
      aria-label={t("ariaLabel")}
      variant="outline"
      size="md"
      onPress={() => {
        switch (activeTheme) {
          case "light":
            setTheme("dark");
            break;
          case "dark":
            setTheme("light");
            break;
        }
      }}
    >
      {activeTheme === "light" ? <IconMoon /> : <IconSun />}
    </Button>
  );
}
