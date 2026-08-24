import clsx from "clsx";
import * as React from "react";

import { type ITitle } from "@/types/ui/Title";

export default function DisplayTitle({ classNames, text, titleAs }: ITitle) {
  const HeadingAs: React.ElementType = titleAs ?? "h1";

  return (
    <HeadingAs
      className={clsx(
        // Font family
        "font-family-primary",
        // Font sizes and weight
        "text-display",
        // Font color
        "text-text",
        classNames,
      )}
    >
      {text}
    </HeadingAs>
  );
}
