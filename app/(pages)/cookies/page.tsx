"use client";

import { useTranslations } from "next-intl";

import DisplayTitle from "@/components/ui/titles/DisplayTitle";

export default function Cookies() {
  const t = useTranslations("Pages.Cookies");

  return <DisplayTitle classNames="text-center" text={t("title")} />;
}
