import styles from "./index.module.css";
import NewsCard from "../../components/NewsCard/index";
import Container from "../../components/Container/Index";

import MainTemplate from "../../components/MainTemplate";

function Home() {
  return (
    <>
      <MainTemplate>
        <section className={styles.heroContainer}></section>
        <section className={styles.newsContainer}>
          <Container className={styles.newsContainer}>
            <div className={styles.featureNewsContainer}>
              <h2 className={styles.newsTitle}>Destaques</h2>
              <div className={styles.featureNewsContent}>
                <NewsCard
                  mode="column"
                  src="/src/assets/img/news1.png"
                  title="Data para os testes da pré-temporada"
                  text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A dolor voluptas assumenda quod ratione!"
                  className={styles.card}
                />
                <NewsCard
                  mode="column"
                  src="/src/assets/img/news2.png"
                  title="Conheça os pilotos da próxima temporada"
                  text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A dolor voluptas assumenda quod ratione!"
                  className={styles.card}
                />
                <NewsCard
                  mode="column"
                  src="/src/assets/img/news3.png"
                  title="Faça parte agora da nossa comunidade"
                  text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A dolor voluptas assumenda quod ratione!"
                  className={styles.card}
                />
              </div>
            </div>
            <div className={styles.latestNewsContainer}>
              <h2 className={styles.newsTitle}>Ultimas Noticias</h2>
              <div className={styles.latestNewsContent}>
                <div className="col gap-1">
                  <NewsCard
                    mode="column"
                    src="/src/assets/img/news1.png"
                    title="Data para os testes da pré-temporada"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A dolor voluptas assumenda quod ratione!"
                  />
                </div>
                <div className={`col gap-1 ${styles.asideNews}`}>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <NewsCard
                      key={index}
                      mode="row"
                      src="/src/assets/img/news1.png"
                      title="Data para os testes da pré-temporada"
                      text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A dolor voluptas assumenda quod ratione!"
                      gap=".5rem"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </MainTemplate>
    </>
  );
}

export default Home;
