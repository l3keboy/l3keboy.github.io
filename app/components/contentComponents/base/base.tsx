"use client";

// Import components
import HeaderDivider from "../../dividers/headerDivider/headerDivider";

// Import types
import ILink from "../../../shared/interfaces/ILink";

// Styles
import styles from "./base.module.css";

// Interfaces
interface IBaseContentComponent {
  children: React.ReactNode;
  title: string;
  subtitle?: string | undefined;
  link?: ILink | undefined;
}

export default function Base({
  children,
  title,
  subtitle,
  link,
}: IBaseContentComponent) {
  return (
    <div className={styles.content_base}>
      <div className={styles.content_base_header}>
        <h1>{title}</h1>
        <p className={styles.content_base_subtitle}>
          {subtitle}
          {link !== undefined ? (
            <a href={link.url} target="_blank">
              {link.displayName}
            </a>
          ) : (
            <></>
          )}
        </p>
        <HeaderDivider />
      </div>
      <div>{children}</div>
    </div>
  );
}
