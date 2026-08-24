import { useTranslations } from "next-intl";

import PortfolioChip from "@/components/ui/PortfolioChip";
import HeadingTitle from "@/components/ui/titles/HeadingTitle";

export default function Maintenance() {
  const t = useTranslations("Pages.Maintenance");

  return (
    <main className="flex h-dvh m-auto items-center justify-center bg-background px-6 text-foreground">
      <div className="flex max-w-md flex-col gap-6 items-center text-center">
        <div className="flex max-w-md items-center flex-col gap-3">
          {/* #region Chip */}
          <PortfolioChip
            classNames="p-1.5"
            color="warning"
            size="lg"
            text={
              <>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warning opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-warning" />
                </span>
                {t("chip")}
              </>
            }
            variant="soft"
          />
          {/* #endregion */}

          {/* #region Title */}
          <HeadingTitle text={t("title")} />
          {/* #endregion */}
        </div>

        {/* #region Body */}
        <label className="text-muted">{t("description")}</label>
        {/* #endregion */}
      </div>
    </main>
  );
}
