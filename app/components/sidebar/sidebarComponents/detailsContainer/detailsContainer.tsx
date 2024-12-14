"use client";

// Styles
import styles from "./detailsContainer.module.css";

// Interfaces
interface IDetailsContainer {
  image: string;
  title: string;
  text: string;
}

export default function DetailsContainer({
  image,
  title,
  text,
}: IDetailsContainer) {
  return (
    <div className={styles.details_container}>
      <div className={styles.details_container_image}>
        <div className={styles.details_image_chip_overwrite}>
          <span
            className={
              "material-symbols-outlined " + styles.details_image_overwrite
            }
          >
            {image}
          </span>
        </div>
      </div>
      <div className={styles.details_container_item}>
        <label className={styles.details_container_item_title}>{title}</label>
        <label className={styles.details_container_item_text}>{text}</label>
      </div>
    </div>
  );
}
