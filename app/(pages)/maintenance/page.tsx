import HeadingTitle from "@/components/ui/titles/HeadingTitle";
import { Chip } from "@heroui/react";
import { useTranslations } from "next-intl";

export default function Maintenance() {
  const t = useTranslations("Pages.Maintenance");

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="flex max-w-md flex-col gap-6 items-center text-center">
        <div className="flex max-w-md items-center flex-col gap-3">
          {/* #region Chip */}
          <Chip
            variant="soft"
            color="warning"
            size="lg"
            className="font-family-mono flex flex-row gap-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warning opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-warning" />
            </span>
            {t("chip")}
          </Chip>

          {/* #region Title */}
          <HeadingTitle titleAs="h1" text={t("title")} />
        </div>

        {/* Body */}
        <label className="text-muted">{t("description")}</label>
      </div>
    </main>
  );
}
