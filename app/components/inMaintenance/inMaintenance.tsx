"use client";

// Styles
import styles from "./inMaintenance.module.css";

export default function InMaintenance() {
  return (
    <div className={styles.in_maintenance}>
      <div className={styles.in_maintenance_text_container}>
        <h1 className={styles.in_maintenance_text_title}>
          Building something <span>new</span>.
        </h1>
        <h2 className={styles.in_maintenance_text_subtitle}>
          Sorry for the inconvenience.
        </h2>
        <p className={styles.in_maintenance_text_paragraph}>
          I am currently improving the user experience. Please stay tuned for
          the changes in the upcoming weeks.
        </p>
      </div>
      <div className={styles.in_maintenance_icon_container}>
        <span
          className={
            "material-symbols-outlined " + styles.in_maintenance_icon_style
          }
        >
          construction
        </span>
      </div>
    </div>
  );
}
