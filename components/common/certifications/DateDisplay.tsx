"use client";
// ! Locales are client side, therefore use client

import { useTranslations } from "next-intl";

import { useLocaleContext } from "@/contexts/LocaleContext";

// Interfaces
export interface IDateDisplay {
  expiryDate?: Date;
  grantDate: Date;
}
export function DateDisplay({ expiryDate, grantDate }: IDateDisplay) {
  const { resolveSupportedLocale } = useLocaleContext();
  const t = useTranslations("Components.CertificationContainer");

  return (
    <>
      <span>
        {t("granted")}{" "}
        {new Intl.DateTimeFormat(resolveSupportedLocale(), {
          month: "long",
          year: "numeric",
        }).format(grantDate)}
      </span>

      {expiryDate && (
        <>
          {" - "}
          <span>
            {t("expires")}{" "}
            {new Intl.DateTimeFormat(resolveSupportedLocale(), {
              month: "long",
              year: "numeric",
            }).format(expiryDate)}
          </span>
        </>
      )}
    </>
  );
}
