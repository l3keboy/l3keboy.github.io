import clsx from "clsx";

import { type ITitle } from "@/types/ui/Title";
import { ElementType } from "react";

export type ICardTitle = ITitle & {
  as?: ElementType;
};

export default function CardTitle({ classNames, text, as }: ICardTitle) {
  const CardTitleAs: ElementType = as ?? "h3";

  return (
    <CardTitleAs
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
    </CardTitleAs>
  );
}
