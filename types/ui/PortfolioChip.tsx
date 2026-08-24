import { ChipRootProps } from "@heroui/react";
import { ReactNode } from "react";

export type IPortfolioChip = {
  classNames?: string;
  text: ReactNode;
  variant?: ChipRootProps["variant"];
  size?: ChipRootProps["size"];
  color?: ChipRootProps["color"];
};
