"use client";

import { Button } from "@nextui-org/button";

// Styles
import styles from "./mainButton.module.css";

interface IMainButton {
  text: string;
  type: 1 | 2;
  onButtonClick: void;
}

export default function MainButton({ text, type, onButtonClick }: IMainButton) {
  switch (type) {
    case 1:
      return (
        <Button
          onClick={onButtonClick}
          className={(styles.main_button_overwrite, styles.primary)}
        >
          {text}
        </Button>
      );
    case 2:
      return (
        <Button
          onClick={onButtonClick}
          className={(styles.main_button_overwrite, styles.secondary)}
          variant="bordered"
        >
          {text}
        </Button>
      );
  }
  return;
}
