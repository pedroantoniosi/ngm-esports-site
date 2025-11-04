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
    <section className="news-container">
      <Container>
        <div className="news-content">
          {news.map((item, index) => (
            <Card
              key={index}
              src={item.src}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default News;
