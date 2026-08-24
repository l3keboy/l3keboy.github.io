import { useTranslations } from "next-intl";

import MaintenanceLayout from "./(pages)/maintenance/layout";
import { Button, Chip, Link } from "@heroui/react";
import HeadingTitle from "@/components/ui/titles/HeadingTitle";
import { siteSettings } from "@/utils/config/siteSettings";
import PortfolioChip from "@/components/ui/PortfolioChip";

export default function NotFound() {
  const t = useTranslations("Pages.NotFound");

  return (
    <MaintenanceLayout>
      <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
        <div className="flex max-w-md flex-col gap-6 items-center text-center">
          <div className="flex max-w-md items-center flex-col gap-3">
            {/* #region Chip */}
            <PortfolioChip
              variant="tertiary"
              color="danger"
              size="lg"
              text={t("chip")}
            />
            {/* #endregion */}

            {/* #region Title */}
            <HeadingTitle titleAs="h1" text={t("title")} />
            {/* #endregion */}
          </div>

          {/* #region Body */}
          <label className="text-muted">{t("description")}</label>
          {/* #endregion */}

          {/* #region Buttons */}
          <div className="mt-8 flex gap-3">
            <Link href="/" className="no-underline">
              <Button size="lg" variant="primary">
                {t("Buttons.home")}
              </Button>
            </Link>
            <Link
              href={siteSettings.linkedInUrl}
              className="no-underline"
              target="__blank"
            >
              <Button size="lg" variant="outline">
                {t("Buttons.linkedIn")}
              </Button>
            </Link>
          </div>
          {/* #endregion */}
        </div>
      </main>
    </MaintenanceLayout>
  );
}
