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
      <div className="card  col" aria-label="Card">
        <div className="col">
          <figure className="background-img">
            <img src={img} alt="" />
          </figure>
        </div>
        <div className="card-caption">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
        </div>
        {children}
      </div>
    </>
  );
};

export default Card;
