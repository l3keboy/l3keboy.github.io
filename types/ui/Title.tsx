import { ElementType, ReactNode } from "react";

export type Title = {
  classNames?: string;
  text: ReactNode;
  titleAs?: ElementType;
};
