"use client";
import { useRouter } from "next/navigation";

// Import components
import MainButton from "./components/buttons/mainButton/mainButton";

// Import styles
import styles from "./not-found.module.css";

export default function NotFound() {
  // Get router
  const router = useRouter();

  const returnHomeButtonClicked = async () => {
    router.push("/");
  };

  return (
    <div className={styles.not_found}>
      <div className={styles.not_found_text_container}>
        <h1 className={styles.not_found_text_title}>
          Whoopsss - <span>404</span>.
        </h1>
        <h2 className={styles.not_found_text_subtitle}>
          That did not go according to plan.
        </h2>
        <p className={styles.not_found_text_paragraph}>
          The page you are looking for does not exist. To help, you can return
          home by pressing the button!
        </p>
        <div className={styles.not_found_actions}>
          <MainButton
            type={1}
            text="Return home"
            onButtonClick={returnHomeButtonClicked}
          />
        </div>
      </div>
      <div className={styles.not_found_icon_container}>
        <span
          className={"material-symbols-outlined " + styles.not_found_icon_style}
        >
          search
        </span>
      </div>
    </div>
  );
}
