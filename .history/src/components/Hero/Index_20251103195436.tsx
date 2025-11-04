import React from "react";
import styles from "./Index.module.css";

interface HeroProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Hero = ({ title, subtitle, children }: HeroProps) => {
  return (
    <section
      className={styles["hero-container"]}
      role="banner"
      aria-label="Hero"
    >
      <div className="hero-content">
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Hero;
