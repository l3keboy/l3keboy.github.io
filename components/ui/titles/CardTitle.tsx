import clsx from "clsx";
import { ElementType } from "react";

import { type ITitle } from "@/types/ui/Title";

export type ICardTitle = {
  as?: ElementType;
} & ITitle;

export default function CardTitle({ as, classNames, text }: ICardTitle) {
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
