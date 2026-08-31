"use client";
// ! Locales are client side, therefore use client

import { useLocale, useTranslations } from "next-intl";

// Interfaces
export interface IDateDisplay {
  expiryDate?: Date;
  grantDate: Date;
}
export function DateDisplay({ expiryDate, grantDate }: IDateDisplay) {
  const locale = useLocale();
  const t = useTranslations("Components.CertificationContainer");

  return (
    <>
      <span>
        {t("granted")}{" "}
        {new Intl.DateTimeFormat(locale, {
          month: "long",
          year: "numeric",
        }).format(grantDate)}
      </span>

      {expiryDate && (
        <>
          {" - "}
          <span>
            {t("expires")}{" "}
            {new Intl.DateTimeFormat(locale, {
              month: "long",
              year: "numeric",
            }).format(expiryDate)}
          </span>
        </>
      )}
    </>
  );
}
