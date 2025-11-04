import { useEffect, useState } from "react";
import Card from "../Card";
import { newsData } from "../../api/newsApi";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Simula requisição de API com pequeno atraso
    const fetchNews = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setNews(newsData);
    };

    fetchNews();
  }, []);

  return (
    <>
      {news.map((item) => (
        <Card
          key={item.id}
          img={item.urlToImage}
          title={item.title}
          subtitle={item.description}
        >
          <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
        </Card>
      ))}
    </>
  );
};

export default News;
