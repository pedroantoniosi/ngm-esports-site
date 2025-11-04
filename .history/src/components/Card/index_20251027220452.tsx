interface CardProps {
  img?: string;
  video?: string;
  title?: string;
  subtitle?: string;
  date?: number;
  thumb?: string;
  children?: React.ReactNode;
}

const Card = ({ img, video, title, subtitle, children }: CardProps) => {
  return (
    <div className="card col" aria-label="Card">
      <div className="col">
        {video ? (
          <video
            className="background-video"
            src={video}
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
        <h2 className="title">{title}</h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>

      {children}
    </div>
  );
};

export default Card;
