import React from "react";
import "./style.css";

interface HeroProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Hero = ({ title, subtitle, children }: HeroProps) => {
  return (
    <section className="hero-container" role="banner" aria-label="Hero">
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Hero;
