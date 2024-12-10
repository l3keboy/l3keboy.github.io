"use client";
import { config } from "./config";

// Import components
import InMaintenance from "./components/inMaintenance/inMaintenance";

// Styles
import styles from "./page.module.css";

export default function Root() {
  return (
    <div className={styles.root}>
      {config.isInMaintenance ? (
        <InMaintenance />
      ) : (
        <div>Not in maintenance</div>
      )}
    </div>
  );
}
