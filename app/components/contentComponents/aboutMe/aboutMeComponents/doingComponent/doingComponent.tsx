"use client";

// Styles
import styles from "./doingComponent.module.css";

// Interfaces
interface IDoingComponent {
  title: string;
  description: string;
  icon: string;
}

export default function DoingComponent({
  title,
  description,
  icon,
}: IDoingComponent) {
  return (
    <div className={styles.doing_component_container}>
      <div className={styles.doing_component_icon}>
        <span
          className={`material-symbols-outlined ${styles.doing_component_icon_overwrite}`}
        >
          {icon}
        </span>
      </div>
      <div className={styles.doing_component_text}>
        <h4 className={styles.doing_component_title}>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
