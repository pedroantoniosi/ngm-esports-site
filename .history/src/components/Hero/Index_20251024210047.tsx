import React from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

const Hero = ({
  title = "Welcome",
  subtitle,
  children,
  className = "",
}: HeroProps) => {
  return (
    <section
      className={`hero ${className}`.trim()}
      role="banner"
      aria-label="Hero"
    >
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Hero;
