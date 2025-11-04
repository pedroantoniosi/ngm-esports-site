import React from "react";

interface NewsProps {
  img?: string;
  title?: string;
  subtitle?: string;
  date?: number;
  children?: React.ReactNode;
}

const Card = ({ img, title, subtitle, children }: NewsProps) => {
  return (
    <div>
      <div className="card" aria-label="Card"></div>;
    </div>
  );
};

export default Card;
