import { Header } from "../common/navigation/Header";
import { Footer } from "../common/navigation/Footer";
import { type PortfolioLayout } from "@/types/components/layouts/PortfolioLayout";
import clsx from "clsx";

export default function BaseLayout({ children }: PortfolioLayout) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        className={clsx(
          // Flex
          "flex-1",
          // Margins and paddings
          "m-0 p-0 py-6",
          // Heights and Widths
          "max-w-270",
          // Flex
          "flex flex-col w-full mx-auto",
        )}
        role="main"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
