import Container from "../Container/Index";

type NewsProps = {
  title: string;
};

const News = ({ title }: NewsProps) => {
  return (
    <section className="default-container">
      <Container>
        <header className="default-header">
          <h2 className="default-title">{title}</h2>
        </header>
        <div className="default-content"></div>
      </Container>
    </section>
  );
};

export default News;
