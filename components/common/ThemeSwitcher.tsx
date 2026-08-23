// app/components/theme-switcher.tsx
"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
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
    <div className="flex items-center gap-2">
      <Button
        variant={activeTheme === "light" ? "primary" : "secondary"}
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
        Toggle
      </Button>
    </div>
  );
}
