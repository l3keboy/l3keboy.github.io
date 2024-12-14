"use client";
import { config } from "../../../config";

// Import components
import Base from "../base/base";
import ProjectContainer from "./myProjectsComponents/projectContainer/projectContainer";
import MainDevider from "../../dividers/mainDivider/mainDivider";

// Styles
import styles from "./myProjects.module.css";

export default function MyProjects() {
  return (
    <Base
      title="My projects"
      subtitle="Make sure to check my&nbsp;"
      link={{ displayName: "GitHub!", url: config.myGitHub }}
    >
      {config.myProjects.length === 0 ? (
        <div>No projects just jet!</div>
      ) : (
        <div className={styles.my_projects}>
          {config.myProjects.map((project) => (
            <div key={project.title}>
              <ProjectContainer project={project} />
              <MainDevider />
            </div>
          ))}
        </div>
      )}
    </Base>
  );
}
