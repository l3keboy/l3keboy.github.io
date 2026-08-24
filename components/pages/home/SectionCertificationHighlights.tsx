"use client";
import { useMessages, useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";

export default function SectionCertificationHighlights() {
  const t = useTranslations("Pages.Home.CertificationHighlights");
  const tCertifications = useTranslations("SiteSettings.Certifications");
  const messages = useMessages();

  return (
    <ContentContainer>
      <></>
    </ContentContainer>
  );
}
