import { type Title } from "@/types/ui/Title";
import clsx from "clsx";
import * as React from "react";

export default function HeadingTitle({ classNames, text, titleAs }: Title) {
  const HeadingAs: React.ElementType = titleAs ?? "h2";

  return (
    <HeadingAs
      className={clsx(
        // Font family
        "font-family-primary",
        // Font sizes and weight
        "text-heading",
        // Font color
        "text-accent",
        classNames,
      )}
    >
      {text}
    </HeadingAs>
  );
}
