import styles from "./index.module.css";

interface AutoGridProps {
  mode: "auto-fill" | "auto-fit";
  minWidth: string;
  minHeight?: string;
  gap?: string;
  children?: React.ReactNode;
  className?: string;
}

const AutoGrid = ({
  mode,
  minWidth,
  minHeight,
  gap = "1rem",
  children,
  className,
}: AutoGridProps) => {
  return (
    <div
      className={`${styles.grid} ${className || ""}`}
      style={{
        gridTemplateColumns: `repeat(${mode}, minmax(${minWidth}, 1fr))`,
        gridAutoRows: `${minHeight}`,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default AutoGrid;
