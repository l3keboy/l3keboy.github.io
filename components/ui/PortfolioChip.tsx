import { type IPortfolioChip } from "@/types/ui/PortfolioChip";
import { Chip } from "@heroui/react";
import clsx from "clsx";

export default function PortfolioChip({
  text,
  classNames,
  variant,
  size,
  color,
}: IPortfolioChip) {
  const portfolioChipClassNames = classNames ?? "";

  const portfolioChipVariant = variant ?? "tertiary";
  const portfolioChipSize = size ?? "lg";
  const portfolioChipColor = color ?? "accent";

  return (
    <Chip
      variant={portfolioChipVariant}
      color={portfolioChipColor}
      size={portfolioChipSize}
      className={clsx(
        "font-family-mono p-0 flex flex-row gap-1.5",
        portfolioChipClassNames,
      )}
    >
      {text}
    </Chip>
  );
}
