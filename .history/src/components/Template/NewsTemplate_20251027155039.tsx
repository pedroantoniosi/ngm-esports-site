import { useEffect, useState } from "react";
import Card from "../Card";
import { newsData } from "../../api/newsApi";

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
    </section>
  );
};

export default News;
