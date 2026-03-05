import styles from "./index.module.css";

type buttonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  className,
  variant = "default",
  onClick,
}: buttonProps) {
  return (
    <button
      className={`${className ?? ""} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
