import clsx from "clsx";

import { type IPortfolioLayout } from "@/types/components/layouts/PortfolioLayout";

export default function BaseLayout({ children }: IPortfolioLayout) {
  return (
    <div className="flex min-h-screen flex-col">
      <main
        className={clsx(
          // Flex
          "flex-1",
          // Margins and paddings
          "m-0 p-0",
        )}
        role="main"
      >
        {children}
      </main>
    </div>
  );
}
