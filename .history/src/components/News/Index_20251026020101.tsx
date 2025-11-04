import React from "react";

interface NewsProps {
  img?: string;
  title?: string;
  subtitle?: string;
  date?: number;
  children?: React.ReactNode;
}

const News = () => {
  return <section className="news-container"></section>;
};

export default News;
