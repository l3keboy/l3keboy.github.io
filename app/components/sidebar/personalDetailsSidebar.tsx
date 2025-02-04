"use client";
import { Avatar } from "@heroui/react";
import { Chip } from "@heroui/chip";
import Image from "next/image";
import { config } from "../../config";

// Import components
import MainDivider from "../dividers/mainDivider/mainDivider";
import DetailsContainer from "./sidebarComponents/detailsContainer/detailsContainer";
import MainButton from "../buttons/mainButton/mainButton";

// Import icons
import GitHubIcon from "../../../public/assets/logos/github.svg";
import LinkedInIcon from "../../../public/assets/logos/linkedin.svg";

// Styles
import styles from "./personalDetailsSidebar.module.css";

export default function PersonalDetailsSidebar() {
  const toggleDetailsSecondaryActive = async () => {
    // Secondary element
    const elements = document.getElementsByClassName(
      styles.personal_details_secondary
    );
    const detailsSecondaryElement = elements[0];
    if (
      detailsSecondaryElement.classList.contains(
        styles.details_secondary_active
      )
    ) {
      detailsSecondaryElement.classList.remove(styles.details_secondary_active);
    } else {
      detailsSecondaryElement.classList.add(styles.details_secondary_active);
    }
  };

  return (
    <aside className={styles.personal_details_sidebar}>
      <div className={styles.personal_details_main}>
        <Avatar
          className={styles.personal_image_overwrite}
          src="/assets/memoji.png"
        />
        <div className={styles.personal_details_wrapper}>
          <h2 className={styles.personal_name}>Luke Hendriks</h2>
          <Chip variant="flat" className={styles.personal_function}>
            DevOps engineer
          </Chip>
        </div>
        <MainButton
          type={2}
          text="Details"
          customClass={styles.view_personal_details}
          onButtonClick={toggleDetailsSecondaryActive}
        />
      </div>
      <div className={styles.personal_details_secondary}>
        <MainDivider />
        <div className={styles.details_content}>
          <DetailsContainer
            image="home_pin"
            title="Location"
            text="Netherlands"
          />
          <DetailsContainer
            image="language"
            title="Languages"
            text="Dutch & English"
          />
          <DetailsContainer image="school" title="Education" text="HBO-ICT" />
        </div>
        <MainDivider />
        <div className={styles.socials_container}>
          <a
            className={styles.socials_link_overwrite}
            href={config.myGitHub}
            target="_blank"
          >
            <Image src={GitHubIcon} width={24} height={24} alt="My GitHub!" />
          </a>
          <a
            className={styles.socials_link_overwrite}
            href={config.myLinkedIn}
            target="_blank"
          >
            <Image
              src={LinkedInIcon}
              width={24}
              height={24}
              alt="My LinkedIn!"
            />
          </a>
        </div>
      </div>
    </aside>
  );
}
