"use client";

// Styles
import styles from "./doingComponent.module.css";

// Interfaces
interface IDoingComponent {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function DoingComponent({
  title,
  description,
  icon,
}: IDoingComponent) {
  return (
    <div className={styles.doing_component_container}>
      <div className={styles.doing_component_icon}>
        <div className={styles.doing_component_icon_overwrite}>{icon}</div>
      </div>
      <div className={styles.doing_component_text}>
        <h4 className={styles.doing_component_title}>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
