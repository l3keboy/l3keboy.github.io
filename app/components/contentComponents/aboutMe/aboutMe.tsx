"use client";

// Import components
import Base from "../base/base";
import DoingComponent from "./aboutMeComponents/doingComponent/doingComponent";

// Styles
import styles from "./aboutMe.module.css";

export default function AboutMe() {
  return (
    <Base title="About me" subtitle="Nice to meet you!">
      <div>
        <p>
          Hi there! I am a DevOps engineer from the Netherlands specifically for
          the Azure Platform. I have studied at&nbsp;
          <span>Fontys University of applied sciences</span> and got my bachelor
          in IT. Here I have specialized myself in Infrastructure and Cyber
          Security and have gained skills in different areas (such as
          Containerization, Monitoring and Security) and with different tools
          (such as Elastic, Docker, Python, NextJS, Kubernetes and many more).
        </p>
      </div>
      <div className={styles.what_i_am_doing_container}>
        <h2>What I am doing.</h2>
        <div className={styles.what_i_am_doing_items}>
          <DoingComponent
            icon="cloud"
            title="Azure Cloud Platform"
            description="I am currently developing myself on the Azure Cloud platform and getting multiple certifications to show my knowledge!"
          />
          <DoingComponent
            icon="construction"
            title="Development"
            description="I am currently developing different applications and learning new languages like C#."
          />
        </div>
      </div>
    </Base>
  );
}
