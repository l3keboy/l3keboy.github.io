"use client";
import React, { useState } from "react";
import { config } from "./config";

// Import components
import InMaintenance from "./components/inMaintenance/inMaintenance";
import PersonalDetailsSidebar from "./components/sidebar/personalDetailsSidebar";
import MainTab from "./components/tabs/mainTab/mainTab";

// Import contentComponents
import AboutMe from "./components/contentComponents/aboutMe/aboutMe";
import MyProjects from "./components/contentComponents/myProjects/myProjects";
import MyCertificates from "./components/contentComponents/myCertificates/myCertificates";

// Styles
import styles from "./page.module.css";

export default function Root() {
  const [selectedTab, setSelectedTab] = useState<React.Key>("aboutMe");

  const tabSelectionChanged = async (key: React.Key) => {
    setSelectedTab(key);
  };
  return (
    <div className={styles.root}>
      {config.isInMaintenance ? (
        <InMaintenance />
      ) : (
        <div className={styles.root_content}>
          <PersonalDetailsSidebar />
          <div className={styles.root_main_content_container}>
            <MainTab
              tabSelectionChanged={tabSelectionChanged}
              tabs={[
                { tabKey: "aboutMe", tabTitle: "About me" },
                { tabKey: "projects", tabTitle: "My projects" },
                { tabKey: "certificates", tabTitle: "My certificates" },
              ]}
            />
            {selectedTab === "aboutMe" ? (
              <AboutMe />
            ) : selectedTab === "projects" ? (
              <MyProjects />
            ) : selectedTab === "certificates" ? (
              <MyCertificates />
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
