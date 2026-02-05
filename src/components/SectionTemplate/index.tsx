import React from "react";
import styles from "./index.module.css";
import Container from "../Container";

type sectionProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};
export default function SectionTemplate({
  title,
  children,
  className,
}: sectionProps) {
  return (
    <>
      <section className={styles.sectionTitle}>
        <Container>
          <h2 className={`${styles.title} py-1`}>{title}</h2>
          <div className={`${styles.sectionContent} ${className}`}>
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
