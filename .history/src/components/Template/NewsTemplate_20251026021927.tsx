import { useEffect, useState } from "react";
import Card from "../Card";
import { newsData } from "../../api/newsApi";
import Container from "../../components/Container/Index";

interface NewsItem {
  img: string;
  title: string;
  subtitle: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Simula chamada de API local
    const fetchNews = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setNews(newsData);
    };

    fetchNews();
  }, []);

  return (
    <Container>
      <section className="news-container">
        {news.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </section>
    </Container>
  );
};

export default News;
