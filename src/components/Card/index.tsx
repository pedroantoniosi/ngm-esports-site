import styles from "./index.module.css";

type CardTemplateProps = {
  title: string;
  text?: string;
  date?: string;
  className?: string;
  children?: React.ReactNode;
  img?: string;
  variant?: "default" | "slider" | "news" | "aside";
};

const CardTemplate = ({
  title,
  text,
  date,
  className,
  img = "",
  variant = "default",
}: CardTemplateProps) => {
  return (
    <div
      className={`${styles.card} ${styles[variant]} ${className ?? ""}`.trim()}
    >
      <div className={styles.cardImg}>
        {img && <img src={img} alt={title} />}
      </div>

      <div className={styles.caption}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {text && <p className={styles.text}>{text}</p>}
        {date && <span className={styles.date}>{date}</span>}
      </div>
    </div>
  );
};

export default CardTemplate;
