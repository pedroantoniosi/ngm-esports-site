import React from "react";

interface NewsProps {
  img?: string;
  title?: string;
  subtitle?: string;
  date?: number;
  children?: React.ReactNode;
}

const Hero = ({ img, title, subtitle, children }: NewsProps) => {
  return <section className="card" aria-label="Card"></section>;
};

export default Hero;
