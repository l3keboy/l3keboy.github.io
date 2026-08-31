"use client";
// ! Filtering state is kept client side

import { ListBox, Select } from "@heroui/react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import ContentContainer from "@/components/common/ContentContainer";
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
          aria-label={t("ariaLabel", { type: t("Settings.highlight") })}
          className="w-fit"
          onChange={(key) => updateSearch("highlight", key?.toString())}
          placeholder={`${t("Settings.highlight")}: ${searchParams.get("highlight") ?? t("Values.all")}`}
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
              <ListBox.Item
                aria-label={t("ariaLabelValue", {
                  type: t("Values.yes"),
                })}
                id="true"
                textValue={t("Values.yes")}
              >
                {t("Values.yes")}
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                aria-label={t("ariaLabelValue", {
                  type: t("Values.no"),
                })}
                id="false"
                textValue={t("Values.no")}
              >
                {t("Values.no")}
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                aria-label={t("ariaLabelValue", {
                  type: t("Values.all"),
                })}
                id="all"
                textValue={t("Values.all")}
              >
                {t("Values.all")}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        {/* #endregion */}

        {/* #region Type filter */}
        <Select
          aria-label={t("ariaLabel", { type: t("Settings.sourceType") })}
          className="w-fit"
          onChange={(key) => updateSearch("type", key?.toString())}
          placeholder={`${t("Settings.sourceType")}: ${searchParams.get("type") ?? t("Values.all")}`}
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
                aria-label={t("ariaLabelValue", {
                  type: SourceType.OPEN_SOURCE,
                })}
                id={SourceType.OPEN_SOURCE}
                textValue={SourceType.OPEN_SOURCE}
              >
                {SourceType.OPEN_SOURCE}
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                aria-label={t("ariaLabelValue", {
                  type: SourceType.CLOSED_SOURCE,
                })}
                id={SourceType.CLOSED_SOURCE}
                textValue={SourceType.CLOSED_SOURCE}
              >
                {SourceType.CLOSED_SOURCE}
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                aria-label={t("ariaLabelValue", {
                  type: t("Values.all"),
                })}
                id="all"
                textValue={t("Values.all")}
              >
                {t("Values.all")}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        {/* #endregion */}

        {/* #region Technologies filter */}
        <Select
          aria-label={t("ariaLabel", { type: t("Settings.technologies") })}
          className="w-fit"
          onChange={(key) => updateSearch("technology", key.join(","))}
          placeholder={`${t("Settings.technologies")}: ${searchParams.get("technology") ?? t("Values.all")}`}
          selectionMode="multiple"
          value={
            searchParams.get("technology")?.split(",") ?? [t("Values.all")]
          }
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
                  aria-label={t("ariaLabelValue", {
                    type: technology,
                  })}
                  id={technology}
                  key={technology}
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
