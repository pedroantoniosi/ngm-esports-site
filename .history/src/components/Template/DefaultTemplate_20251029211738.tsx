import Container from "../Container/Index";

type DefaultProps = {
  title: string;
  children?: React.ReactNode;
  className?: "";
};

const News = ({ title, children }: DefaultProps) => {
  return (
    <section className="default-container">
      <Container>
        <header className="default-header">
          <h2 className="default-title py-1">{title}</h2>
        </header>
        <div className="default-content">{children}</div>
      </Container>
    </section>
  );
};

export default News;
