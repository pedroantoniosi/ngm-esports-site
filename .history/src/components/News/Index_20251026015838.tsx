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
    <>
      <div className="card" aria-label="Card">
        <div className="background-img">
          <img src={img} alt="" />
        </div>
        <div className="caption">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        {children}
      </div>
      ;
    </>
  );
};

export default Card;
