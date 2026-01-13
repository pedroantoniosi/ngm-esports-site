import Card from "@/components/Card";
import Container from "@/components/Container";
import MainTemplate from "@/components/MainTemplate";
import styles from "./index.module.css";
import SectionTemplate from "@/components/SectionTemplate";
import products from "@/api/ProductsApi";
import news from "@/api/NewsApi";
import SwiperNav from "@/components/SliderNavigation";
import { SwiperSlide } from "swiper/react";

function Home() {
  return (
    <>
      <MainTemplate>
        <section className={styles.heroContainer}>
          <Container>
            <Card
              img="/src/assets/img/news1.png"
              title="Data para os testes da pré-temporada"
              text="Acompanhe agora mesmo!"
              variant="news"
              className={styles.mainBanner}
            />
          </Container>
        </section>

        <section className={styles.productsContainer}>
          <Container>
            <SectionTemplate sectionTitle="Ultimas Notícias">
              <SwiperNav
                sliderNumber={3}
                spaceBetween={16}
                sliderNumberMobile={1.1}
              >
                {news.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Card img={item.img} title={item.title} text={item.text} />
                  </SwiperSlide>
                ))}
              </SwiperNav>
            </SectionTemplate>
          </Container>
        </section>

        <section className={styles.productsContainer}>
          <Container>
            <SectionTemplate sectionTitle="Aproveita essa oportunidade de ter ótimos descontos">
              <SwiperNav
                sliderNumber={3}
                spaceBetween={16}
                sliderNumberMobile={1.1}
              >
                {products.map((product) => (
                  <SwiperSlide>
                    <Card
                      key={product.id}
                      img={product.img}
                      title={product.name}
                      text={`R$ ${product.price}`}
                      className={styles.mainBanner}
                    />
                  </SwiperSlide>
                ))}
              </SwiperNav>
            </SectionTemplate>
          </Container>
        </section>

        <section>
          <Container>
            <SectionTemplate sectionTitle="Conheça os  pilotos de 2026"></SectionTemplate>
          </Container>
        </section>
      </MainTemplate>
    </>
  );
}

export default Home;
