"use client";
import { Button } from "@nextui-org/button";

// Import types
import IMainButton from "../../../shared/interfaces/IMainButton";

// Styles
import styles from "./mainButton.module.css";

export default function MainButton({
  text,
  type,
  onButtonClick,
  customClass,
}: IMainButton) {
  switch (type) {
    case 1:
      return (
        <Button
          onPress={onButtonClick}
          className={`${styles.main_button_overwrite} ${styles.primary} ${
            customClass === undefined ? "" : customClass
          }`}
        >
          {text}
        </Button>
      );
    case 2:
      return (
        <Button
          onPress={onButtonClick}
          className={`${styles.main_button_overwrite} ${styles.secondary} ${
            customClass === undefined ? "" : customClass
          }`}
          variant="bordered"
        >
          {text}
        </Button>
      );
  }
  return;
}
