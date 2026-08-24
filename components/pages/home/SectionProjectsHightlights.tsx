"use client";
import { useMessages, useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";

export default function SectionProjectHighlights() {
  const t = useTranslations("Pages.Home.ProjectHighlights");
  const tCertifications = useTranslations("SiteSettings.Projects");
  const messages = useMessages();

  return (
    <ContentContainer showDivider>
      <></>
    </ContentContainer>
  );
}
