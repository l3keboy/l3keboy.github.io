import { type Title } from "@/types/ui/Title";
import clsx from "clsx";
import * as React from "react";

export default function DisplayTitle({ classNames, text, titleAs }: Title) {
  const HeadingAs: React.ElementType = titleAs ?? "h1";

  return (
    <HeadingAs
      className={clsx(
        // Font family
        "font-family-primary",
        // Font sizes and weight
        "text-display",
        // Font color
        "text-accent",
        classNames,
      )}
    >
      {text}
    </HeadingAs>
  );
}
