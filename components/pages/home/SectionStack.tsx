import { useMessages, useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";

export default function SectionStack() {
  const t = useTranslations("Pages.Home.Stack");
  const messages = useMessages();

  // TODO Add stack section

  return (
    <ContentContainer showDivider>
      <></>
    </ContentContainer>
  );
}
