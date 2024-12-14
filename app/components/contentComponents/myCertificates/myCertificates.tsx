"use client";
import { config } from "../../../config";

// Import components
import Base from "../base/base";
import CertificatesContainer from "./myCertificatesComponents/certificatesContainer/certificatesContainer";
import MainDevider from "../../dividers/mainDivider/mainDivider";

// Styles
import styles from "./myCertificates.module.css";

export default function MyCertificates() {
  return (
    <Base
      title="My certificates"
      subtitle="Get the most up-to-date set on&nbsp;"
      link={{ displayName: "LinkedIn!", url: config.myLinkedIn }}
    >
      {config.myCertificates.length === 0 ? (
        <div>No certificates just jet!</div>
      ) : (
        <div className={styles.my_certificates}>
          {config.myCertificates.map((certificate) => (
            <div key={certificate.certificateName}>
              <CertificatesContainer certificate={certificate} />
              <MainDevider />
            </div>
          ))}
        </div>
      )}
    </Base>
  );
}
