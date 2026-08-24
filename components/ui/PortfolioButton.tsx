"use client";
// ! This is a client component to handle proper navigation between routes (also for when using as NextLink)

import { Button, ButtonRootProps } from "@heroui/react";
import clsx from "clsx";
import { ReactNode } from "react";

export type IPortfolioButton = {
  ariaLabel?: string;
  classNames?: string;
  content: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
  size?: ButtonRootProps["size"];
  variant?: ButtonRootProps["variant"];
};

export default function PortfolioButton({
  ariaLabel,
  classNames,
  content,
  isDisabled,
  isLoading,
  onPress,
  size,
  variant,
}: IPortfolioButton) {
  const portfolioButtonClassNames = classNames ?? "";

  const portfolioButtonVariant = variant ?? "primary";
  const portfolioButtonSize = size ?? "lg";
  const portfolioButtonOnPress = onPress ?? async function () {};

  const portfolioButtonIsPending = isLoading ?? false;
  const portfolioButtonIsDisabled =
    (isLoading ?? false) || (isDisabled ?? false);

  const portfolioButtonAriaLabel = ariaLabel ?? content;

  return (
    <Button
      aria-label={portfolioButtonAriaLabel?.toString()}
      className={clsx("rounded-lg", portfolioButtonClassNames)}
      isDisabled={portfolioButtonIsDisabled}
      isPending={portfolioButtonIsPending}
      onPress={portfolioButtonOnPress}
      size={portfolioButtonSize}
      variant={portfolioButtonVariant}
    >
      {content}
    </Button>
  );
}
