import type { ReactNode } from "react";

interface NewsTemplateProps {
  children?: ReactNode;
}

const NewsTemplate = ({ children }: NewsTemplateProps) => {
  return (
    <>
      <div className="news-container">{children}</div>
    </>
  );
};

export default NewsTemplate;
