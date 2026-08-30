import { Chip } from "@heroui/react";
import { ChipRootProps } from "@heroui/react";
import clsx from "clsx";
import { ReactNode } from "react";

export type IPortfolioChip = {
  classNames?: string;
  color?: ChipRootProps["color"];
  size?: ChipRootProps["size"];
  text: ReactNode;
  variant?: "neutral" | ChipRootProps["variant"];
};

export default function PortfolioChip({
  classNames,
  color,
  size,
  text,
  variant,
}: IPortfolioChip) {
  const portfolioChipClassNames = classNames ?? "";

  const portfolioChipVariant =
    variant !== "neutral" ? (variant ?? "tertiary") : "primary";
  const portfolioChipSize = size ?? "lg";
  const portfolioChipColor = color ?? "accent";

  return (
    <Chip
      className={clsx(
        "font-family-mono p-0 flex flex-row gap-1.5 rounded-lg font-normal",
        variant === "neutral"
          ? "border border-solid border-border bg-transparent p-2 hover:border-accent"
          : "",
        portfolioChipClassNames,
      )}
      color={portfolioChipColor}
      size={portfolioChipSize}
      variant={portfolioChipVariant}
    >
      <Chip.Label className={clsx(variant === "neutral" ? "text-portfolio-text!" : "")}>
        {text}
      </Chip.Label>
    </Chip>
  );
}
