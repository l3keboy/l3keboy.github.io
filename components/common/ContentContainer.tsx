import { type IContentContainer } from "@/types/components/common/ContentContainer";
import { Separator } from "@heroui/react";
import clsx from "clsx";

export default function ContentContainer({
  children,
  classNames,
  showDivider,
}: IContentContainer) {
  const contentContainerClassNames = classNames ?? "";
  const contentContainerShowDivider = showDivider ?? false;
  return (
    <>
      <div
        className={clsx(
          "max-w-270 m-auto w-full py-6 flex flex-col justify-between",
          contentContainerClassNames,
        )}
      >
        {children}
      </div>
      {contentContainerShowDivider && <Separator variant="default" />}
    </>
  );
}
