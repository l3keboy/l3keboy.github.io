import clsx from "clsx";

import { type ITitle } from "@/types/ui/Title";

export default function HeadingTitle({ classNames, text }: ITitle) {
  return (
    <h2
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
    </h2>
  );
}
