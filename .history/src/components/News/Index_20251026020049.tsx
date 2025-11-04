import React from "react";

interface NewsProps {
  img?: string;
  title?: string;
  subtitle?: string;
  date?: number;
  children?: React.ReactNode;
}

const Card = ({ img, title, subtitle, children }: NewsProps) => {
  return <section className="news-container"></section>;
};

export default Card;
