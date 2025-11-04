interface CardProps {
  src?: string; // ← aqui
  title?: string;
  subtitle?: string;
  thumb?: string;
  children?: React.ReactNode;
}

const Card = ({ src, title, subtitle, children }: CardProps) => {
  return (
    <div className="card col" aria-label="Card">
      <div className="col">
        <figure className="background-img">
          <img src={src} alt={title || "Imagem"} />
        </figure>
      </div>

      <div className="card-caption">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>

      {children}
    </div>
  );
};

export default Card;
