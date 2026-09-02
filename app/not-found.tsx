import { useTranslations } from "next-intl";

import PortfolioButton from "@/components/ui/PortfolioButton";
import PortfolioChip from "@/components/ui/PortfolioChip";
import PortfolioLink from "@/components/ui/PortfolioLink";
import HeadingTitle from "@/components/ui/titles/HeadingTitle";
import { siteSettings } from "@/utils/config/siteSettings";

import MaintenanceLayout from "./(pages)/maintenance/layout";

export default function NotFound() {
  const t = useTranslations("Pages.NotFound");

  return (
    <MaintenanceLayout>
      <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
        <div className="flex max-w-md flex-col gap-6 items-center text-center">
          <div className="flex max-w-md items-center flex-col gap-3">
            {/* #region Chip */}
            <PortfolioChip
              color="danger"
              size="lg"
              text={t("chip")}
              variant="tertiary"
            />
            {/* #endregion */}

            {/* #region Title */}
            <HeadingTitle text={t("title")} />
            {/* #endregion */}
          </div>

          {/* #region Body */}
          <label className="text-muted">{t("description")}</label>
          {/* #endregion */}

          {/* #region Buttons */}
          <div className="mt-8 flex gap-3">
            <PortfolioLink
              content={
                <PortfolioButton content={t("Buttons.home")} size="lg" />
              }
              noUnderline
              disableAnimation
            />
          </div>
          {/* #endregion */}
        </div>
      </main>
    </MaintenanceLayout>
  );
}
