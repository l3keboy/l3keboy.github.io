import clsx from "clsx";

import { type ITitle } from "@/types/ui/Title";

export default function DisplayTitle({ classNames, text }: ITitle) {
  return (
    <h1
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
    </h1>
  );
}
