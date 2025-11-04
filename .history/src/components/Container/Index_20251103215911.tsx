import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string; // 👈 permite receber classes externas
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`container ${className || ""}`}>{children}</div>;
};

export default Container;
