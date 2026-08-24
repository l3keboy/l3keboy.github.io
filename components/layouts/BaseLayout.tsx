import { Header } from "../common/navigation/Header";
import { Footer } from "../common/navigation/Footer";
import { type IPortfolioLayout } from "@/types/components/layouts/PortfolioLayout";
import clsx from "clsx";

export default function BaseLayout({ children }: IPortfolioLayout) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        className={clsx(
          // Flex
          "flex-1",
          // Margins and paddings
          "m-0 mx-auto p-0 py-12",
          // Flex
          "flex flex-col w-full",
        )}
        role="main"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
