import Card from "@/components/Card";
import Container from "@/components/Container";
import MainTemplate from "@/components/MainTemplate";
import styles from "./index.module.css";
import SectionTemplate from "@/components/SectionTemplate";
import products from "@/api/ProductsApi";
import news from "@/api/NewsApi";
import SwiperNav from "@/components/SliderNavigation";
import { SwiperSlide } from "swiper/react";
import Standings from "@/components/Standings";

function Home() {
  return (
    <>
      <MainTemplate>
        <section className={styles.heroContainer}>
          <Container className={styles.heroContent}>
            <Card
              img="/src/assets/img/news1.png"
              title="Data para os testes da pré-temporada"
              text="Acompanhe agora mesmo!"
              variant="news"
              className={styles.mainBanner}
            />
            <Standings className={"p-2"} />
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
            <SectionTemplate sectionTitle="Em breve teremos produtos com preços super acessiveis">
              <SwiperNav
                sliderNumber={4}
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
