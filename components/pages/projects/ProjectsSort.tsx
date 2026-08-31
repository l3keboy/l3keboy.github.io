"use client";
// ! Filtering state is kept client side

import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { ListBox, Select } from "@heroui/react";
import { SourceType } from "@/utils/enums/SourceType";
import { Technologies } from "@/utils/enums/Technologies";

export default function ProjectsSort() {
  const t = useTranslations("Pages.Projects.ProjectsSort");

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
      <div className="flex flex-row gap-3 mb-6 flex-wrap">
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

        {/* #region Type filter */}
        <Select
          className="w-fit"
          placeholder={`${t("Settings.sourceType")}: ${searchParams.get("type") ?? t("Values.all")}`}
          onChange={(key) => updateSearch("type", key?.toString())}
          value={searchParams.get("type") ?? t("Values.all")}
        >
          <Select.Trigger>
            <Select.Value>
              {({ state }) => {
                const selectedItem = state.selectedItems[0]?.key;
                console.log(selectedItem);
                if (selectedItem === "all" || selectedItem === undefined)
                  return `${t("Settings.sourceType")}: ${t("Values.all")}`;

                return `${t("Settings.sourceType")}: ${selectedItem}`;
              }}
            </Select.Value>
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item
                id={SourceType.OPEN_SOURCE}
                textValue={SourceType.OPEN_SOURCE}
              >
                {SourceType.OPEN_SOURCE}
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                id={SourceType.CLOSED_SOURCE}
                textValue={SourceType.CLOSED_SOURCE}
              >
                {SourceType.CLOSED_SOURCE}
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

        {/* #region Technologies filter */}
        <Select
          className="w-fit"
          placeholder={`${t("Settings.technologies")}: ${searchParams.get("technology") ?? t("Values.all")}`}
          onChange={(key) => updateSearch("technology", key.join(","))}
          value={
            searchParams.get("technology")?.split(",") ?? [t("Values.all")]
          }
          selectionMode="multiple"
        >
          <Select.Trigger>
            <Select.Value>
              {({ state }) => {
                if (state.selectedItems.length <= 0)
                  return `${t("Settings.technologies")}: ${t("Values.all")}`;

                return `${t("Settings.technologies")}: ${state.selectedItems.flatMap((x) => x.key).join(", ")}`;
              }}
            </Select.Value>
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {Object.values(Technologies).map((technology) => (
                <ListBox.Item
                  key={technology}
                  id={technology}
                  textValue={technology}
                >
                  {technology}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
        {/* #endregion */}
      </div>
    </ContentContainer>
  );
}
