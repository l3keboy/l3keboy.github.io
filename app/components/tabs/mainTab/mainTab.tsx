"use client";
import { Tabs, Tab } from "@nextui-org/react";

// Styles
import styles from "./mainTab.module.css";

// Interfaces
interface ITabs {
  tabKey: string;
  tabTitle: string;
}
interface IMainTab {
  tabSelectionChanged: (key: React.Key) => any;
  tabs?: ITabs[] | undefined;
}

export default function MainTab({ tabSelectionChanged, tabs }: IMainTab) {
  return tabs !== undefined && tabs.length >= 0 ? (
    <>
      <Tabs
        onSelectionChange={tabSelectionChanged}
        classNames={{
          base: styles.tabs_base_overwrite,
          tabList: styles.tabs_list_overwrite,
          tab: styles.tabs_tab_overwrite,
          tabContent: styles.tabs_tabcontent_overwrite,
          cursor: styles.tabs_cursor_overwrite,
          panel: styles.tabs_panel_overwrite,
        }}
      >
        {tabs.map((tabInfo) => (
          <Tab key={tabInfo.tabKey} title={tabInfo.tabTitle} />
        ))}
      </Tabs>
    </>
  ) : (
    <></>
  );
}
