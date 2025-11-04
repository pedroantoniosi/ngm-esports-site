import Container from "../Container/Index";

type DefaultProps = {
  title: string;
};

const News = ({ title }: DefaultProps) => {
  return (
    <section className="default-container">
      <Container>
        <header className="default-header">
          <h2 className="default-title">{title}</h2>
        </header>
        <div className="default-content">{DefaultProps}</div>
      </Container>
    </section>
  );
};

export default News;
