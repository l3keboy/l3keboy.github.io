"use client";
import { Avatar } from "@heroui/react";

// Import components
import MainButton from "../../../../buttons/mainButton/mainButton";
import DotDivider from "../../../../dividers/dotDivider/dotDivider";

// Import types
import ICertificate from "../../../../../shared/interfaces/ICertificate";

// Styles
import styles from "./certificatesContainer.module.css";

// Interfaces
interface IMyCertificatesContentComponent {
  certificate: ICertificate;
}

export default function CertificatesContainer({
  certificate,
}: IMyCertificatesContentComponent) {
  // Go to certificate credential
  const navigateToUrl = async (url: string) => {
    window.open(url);
  };

  return (
    <div className={styles.certificate_container_root}>
      <div className={styles.certificate_details_container_root}>
        <div className={styles.certificate_details_container}>
          <div className={styles.certificate_details_title_container}>
            <h3 className={styles.certificate_details_title}>
              {certificate.certificateName}
            </h3>
            <p className={styles.certificate_details_subtitle}>
              Granted on: {certificate.grantDate}
              {certificate.expiryDate === null
                ? ""
                : ` | Expires on: ${certificate.expiryDate}`}
            </p>
          </div>
          <div className={styles.certificate_details_content_container}>
            <label className={styles.certificate_details_skills_title}>
              Skills:
            </label>
            {certificate.skills.length === 0 ? (
              <label>No skills specified</label>
            ) : (
              <div className={styles.skills_list}>
                {certificate.skills.map((skill) => (
                  <div className={styles.keyed_skill} key={skill}>
                    <label>{skill}</label>
                    <DotDivider />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.certificate_details_actions_container}>
          <MainButton
            type={1}
            text="View certificate"
            onButtonClick={() => {
              navigateToUrl(certificate.certificateUrl.url);
            }}
          />
        </div>
      </div>
      <div className={styles.certificate_image}>
        {certificate.companyIcon !== "" ? (
          <Avatar
            src={certificate.companyIcon}
            radius="lg"
            className={styles.certificate_image_overwrite}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
