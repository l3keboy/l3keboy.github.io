import clsx from "clsx";
import * as React from "react";

import { type ITitle } from "@/types/ui/Title";

export default function HeadingTitle({ classNames, text, titleAs }: ITitle) {
  const HeadingAs: React.ElementType = titleAs ?? "h2";

  return (
    <HeadingAs
      className={clsx(
        // Font family
        "font-family-primary",
        // Font sizes and weight
        "text-heading",
        // Font color
        "text-text",
        classNames,
      )}
    >
      {text}
    </HeadingAs>
  );
}
