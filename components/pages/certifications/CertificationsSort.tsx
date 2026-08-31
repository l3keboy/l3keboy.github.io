"use client";
// ! Filtering state is kept client side

import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function CertificationsSort() {
  const t = useTranslations("Pages.Certifications.CertificationsSort");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateSearch = useCallback(
    async (key: string, value?: string) => {
      const params = new URLSearchParams(searchParams);

      if (value && value.toLowerCase() !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  return (
    <ContentContainer>
      <div className="flex flex-row gap-6 mb-6 flex-wrap">
        {/* TODO Select highlight */}
        {/* TODO Select company */}
        {/* TODO Select sort by */}
        {/* TODO Select sort direction */}
      </div>
    </ContentContainer>
  );
}
