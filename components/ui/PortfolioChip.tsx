import { Chip } from "@heroui/react";
import { ChipRootProps } from "@heroui/react";
import clsx from "clsx";
import { ReactNode } from "react";

export type IPortfolioChip = {
  classNames?: string;
  color?: ChipRootProps["color"];
  size?: ChipRootProps["size"];
  text: ReactNode;
  variant?: ChipRootProps["variant"];
};

export default function PortfolioChip({
  classNames,
  color,
  size,
  text,
  variant,
}: IPortfolioChip) {
  const portfolioChipClassNames = classNames ?? "";

  const portfolioChipVariant = variant ?? "tertiary";
  const portfolioChipSize = size ?? "lg";
  const portfolioChipColor = color ?? "accent";

  return (
    <Chip
      className={clsx(
        "font-family-mono p-0 flex flex-row gap-1.5",
        portfolioChipClassNames,
      )}
      color={portfolioChipColor}
      size={portfolioChipSize}
      variant={portfolioChipVariant}
    >
      {text}
    </Chip>
  );
}
