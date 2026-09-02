"use client";
// ! This is a client component to handle proper navigation between routes (also for when using as NextLink)

import { Button, ButtonRootProps } from "@heroui/react";
import clsx from "clsx";
import { ReactNode } from "react";

export type IPortfolioButton = {
  ariaLabel?: string;
  classNames?: string;
  content: ReactNode;
  disableAnimation?: boolean;
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
  disableAnimation,
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

  const portfolioButtonDisableAnimation = disableAnimation ?? false;

  return (
    <Button
      aria-label={portfolioButtonAriaLabel?.toString()}
      className={clsx(
        "rounded-lg",
        !portfolioButtonDisableAnimation
          ? "transition-all duration-200 ease-[cubic-bezier(.16,1,.3,1)] data-hovered:-translate-y-0.5 data-pressed:translate-y-0 data-pressed:opacity-100 motion-reduce:transition-none motion-reduce:translate-y-0"
          : "",
        portfolioButtonClassNames,
      )}
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
