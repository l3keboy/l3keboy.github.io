import clsx from "clsx";

import { type ITitle } from "@/types/ui/Title";

export default function CardTitle({ classNames, text }: ITitle) {
  return (
    <h3
      className={clsx(
        // Font family
        "font-family-primary",
        // Font sizes and weight
        "text-lg",
        // Font color
        "text-text font-bold",
        classNames,
      )}
    >
      {text}
    </h3>
  );
}
