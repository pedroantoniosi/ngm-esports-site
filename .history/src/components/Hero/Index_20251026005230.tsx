import React from "react";

interface NewsProps {
  title?: string;
  subtitle?: string;
  date?: number;
  children?: React.ReactNode;
}

const Hero = ({ title = "Welcome", subtitle, children }: NewsProps) => {
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
