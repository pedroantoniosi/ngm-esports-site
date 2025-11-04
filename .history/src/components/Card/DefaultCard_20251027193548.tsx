type DefaultProps = {
  title: string;
  children?: React.ReactNode;
};

const News = ({ title, children }: DefaultProps) => {
  return (
    <section className="default-container">
      <header className="default-header">
        <h2 className="default-title">{title}</h2>
      </header>
      <div className="default-content">{children}</div>
    </section>
  );
};

export default News;
