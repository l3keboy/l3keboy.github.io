import { type PortfolioLayout } from "@/types/components/layouts/PortfolioLayout";
import clsx from "clsx";

export default function BaseLayout({ children }: PortfolioLayout) {
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
