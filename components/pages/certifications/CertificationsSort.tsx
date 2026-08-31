"use client";
// ! Filtering state is kept client side

import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { ListBox, Select } from "@heroui/react";
import { Companies } from "@/utils/enums/Company";

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
        {/* #region Highlight filter */}
        <Select
          className="w-fit"
          placeholder={`${t("Settings.highlight")}: ${searchParams.get("highlight") ?? t("Values.all")}`}
          onChange={(key) => updateSearch("highlight", key?.toString())}
          value={searchParams.get("highlight") ?? t("Values.all")}
        >
          <Select.Trigger>
            <Select.Value>
              {({ state }) => {
                const selectedItem = state.selectedItems[0]?.key;
                if (selectedItem === "true")
                  return `${t("Settings.highlight")}: ${t("Values.yes")}`;
                if (selectedItem === "false")
                  return `${t("Settings.highlight")}: ${t("Values.no")}`;
                if (selectedItem === "all")
                  return `${t("Settings.highlight")}: ${t("Values.all")}`;
              }}
            </Select.Value>
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="true" textValue={t("Values.yes")}>
                {t("Values.yes")}
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="false" textValue={t("Values.no")}>
                {t("Values.no")}
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="all" textValue={t("Values.all")}>
                {t("Values.all")}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        {/* #endregion */}

        {/* #region Companies filter */}
        <Select
          className="w-fit"
          placeholder={`${t("Settings.companies")}: ${searchParams.get("company") ?? t("Values.all")}`}
          onChange={(key) => updateSearch("company", key.join(","))}
          value={searchParams.get("company")?.split(",") ?? [t("Values.all")]}
          selectionMode="multiple"
        >
          <Select.Trigger>
            <Select.Value>
              {({ state }) => {
                if (state.selectedItems.length <= 0)
                  return `${t("Settings.companies")}: ${t("Values.all")}`;

                return `${t("Settings.companies")}: ${state.selectedItems.flatMap((x) => x.key).join(", ")}`;
              }}
            </Select.Value>
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {Object.values(Companies).map((company) => (
                <ListBox.Item key={company} id={company} textValue={company}>
                  {company}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
        {/* #endregion */}

        {/* #region SortBy filter */}
        <Select
          className="w-fit"
          placeholder={`${t("Settings.sortDirection")}: ${searchParams.get("sortDirection") ?? t("Values.desc")}`}
          onChange={(key) => updateSearch("sortDirection", key?.toString())}
          value={searchParams.get("sortDirection")}
        >
          <Select.Trigger>
            <Select.Value>
              {({ state }) => {
                const selectedItem = state.selectedItems[0]?.key;
                if (selectedItem === "asc")
                  return `${t("Settings.sortBy")}: ${t("Values.asc")}`;
                if (selectedItem === "desc")
                  return `${t("Settings.sortBy")}: ${t("Values.desc")}`;
              }}
            </Select.Value>
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="asc" textValue={t("Values.asc")}>
                {t("Values.asc")}
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="desc" textValue={t("Values.desc")}>
                {t("Values.desc")}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        {/* #endregion */}

        {/* #region SortBy filter */}
        <Select
          className="w-fit"
          placeholder={`${t("Settings.sortBy")}: ${searchParams.get("sortBy") ?? t("Values.grantDate")}`}
          onChange={(key) => updateSearch("sortBy", key?.toString())}
          value={searchParams.get("sortBy")}
        >
          <Select.Trigger>
            <Select.Value>
              {({ state }) => {
                const selectedItem = state.selectedItems[0]?.key;
                if (selectedItem === "grantDate")
                  return `${t("Settings.sortBy")}: ${t("Values.grantDate")}`;
                if (selectedItem === "expiryDate")
                  return `${t("Settings.sortBy")}: ${t("Values.expiryDate")}`;
              }}
            </Select.Value>
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="grantDate" textValue={t("Values.grantDate")}>
                {t("Values.grantDate")}
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="expiryDate" textValue={t("Values.expiryDate")}>
                {t("Values.expiryDate")}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        {/* #endregion */}
      </div>
    </ContentContainer>
  );
}
