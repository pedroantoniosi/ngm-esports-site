import { useEffect, useState } from "react";
import Card from "../Card";
import { shopData } from "../../api/shopApi";
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
      setNews(shopData);
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
              img={item.img}
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
