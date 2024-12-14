"use client";
import { Avatar } from "@nextui-org/react";

// Import components
import MainButton from "../../../../buttons/mainButton/mainButton";

// Import types
import IProject from "../../../../../shared/interfaces/IProject";

// Styles
import styles from "./projectContainer.module.css";

// Interfaces
interface IMyProjectContentComponent {
  project: IProject;
}

export default function ProjectContainer({
  project,
}: IMyProjectContentComponent) {
  // Go to project source
  const navigateToUrl = async (url: string) => {
    window.open(url);
  };

  return (
    <div className={styles.project_container_root}>
      <div className={styles.project_details_container_root}>
        <div className={styles.project_details_container}>
          <div className={styles.project_details_title_container}>
            <h3 className={styles.project_details_title}>{project.title}</h3>
            <p className={styles.project_details_subtitle}>
              {project.subtitle}
            </p>
          </div>
          <div className={styles.project_details_content_container}>
            <p>{project.description}</p>
          </div>
          <div className={styles.project_details_languages_container}>
            <label className={styles.project_details_languages_title}>
              Language(s) and tool(s):
            </label>
            <label className={styles.project_details_languages_text}>
              {project.language_and_tools}
            </label>
          </div>
        </div>
        <div className={styles.project_details_actions_container}>
          <MainButton
            type={1}
            text="Go to source"
            onButtonClick={() => {
              navigateToUrl(project.source.url);
            }}
          />
          {project.links.length !== 0 ? (
            <>
              {project.links.map((link) => (
                <MainButton
                  key={link.displayName}
                  type={2}
                  text={link.displayName}
                  onButtonClick={() => {
                    navigateToUrl(link.url);
                  }}
                />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.project_image}>
        {project.image !== "" ? (
          <Avatar
            src={project.image}
            radius="lg"
            className={styles.project_image_overwrite}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
