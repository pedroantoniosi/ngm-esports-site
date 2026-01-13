import type React from "react";
import styles from "./index.module.css";

type sectionTemplateProps = {
  sectionTitle: string;
  className?: string;
  children?: React.ReactNode;
};

const SectionTemplate = ({ children, sectionTitle }: sectionTemplateProps) => {
  return (
    <>
      <div className={styles.sectionTemplate}>
        <h2 className="py-1 text-uppercase">{sectionTitle}</h2>
        <div className={styles.sectionContent}>{children}</div>
      </div>
    </>
  );
};

export default SectionTemplate;
