interface CardProps {
  img?: string;
  src?: string; // ← aqui
  title?: string;
  subtitle?: string;
  thumb?: string;
  children?: React.ReactNode;
}

const Card = ({ img, src, title, subtitle, thumb, children }: CardProps) => {
  return (
    <div className="card col" aria-label="Card">
      <div className="col">
        {src ? (
          <video
            className="background-video"
            src={sec}
            poster={thumb} // ← thumb como capa
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <figure className="background-img">
            <img src={img} alt={title || "Imagem"} />
          </figure>
        )}
      </div>

      <div className="card-caption">
        {title && <h2 className="title">{title}</h2>}
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>

      {children}
    </div>
  );
};

export default Card;
