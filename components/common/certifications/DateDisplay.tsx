"use client";
// ! Locales are client side, therefore use client

import { useLocaleContext } from "@/contexts/LocaleContext";
import { useTranslations } from "next-intl";

// Interfaces
export interface IDateDisplay {
  grantDate: Date;
  expiryDate?: Date;
}
export function DateDisplay({ grantDate, expiryDate }: IDateDisplay) {
  const { resolveSupportedLocale } = useLocaleContext();
  const t = useTranslations("Components.CertificationContainer");

  return (
    <>
      <span>
        {t("granted")}{" "}
        {new Intl.DateTimeFormat(resolveSupportedLocale(), {
          year: "numeric",
          month: "long",
        }).format(grantDate)}
      </span>

      {expiryDate && (
        <>
          {" - "}
          <span>
            {t("expires")}{" "}
            {new Intl.DateTimeFormat(resolveSupportedLocale(), {
              year: "numeric",
              month: "long",
            }).format(expiryDate)}
          </span>
        </>
      )}
    </>
  );
}
