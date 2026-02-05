//Componentes
import Card from "@/components/Card";
import MainTemplate from "@/components/MainTemplate";
import SectionTemplate from "@/components/SectionTemplate";
import SwiperNav from "@/components/SliderNavigation";

//Hooks
import { useNavigate } from "react-router-dom";

//API
import products from "@/api/ProductsApi";
import news from "@/api/NewsApi";
import { getDrivers } from "@/api/Drivers";

//Styles
import styles from "./index.module.css";

//Other
import { SwiperSlide } from "swiper/react";

function Home() {
  const drivers = getDrivers();

  //Filtro os  produtos retornando apenas o do tipo oficial
  const oficialeProducts = products.filter(
    (product) => product.kitType === "oficial",
  );

  // Seleciona somente os 4 primeiros produtos do array
  const newsSliced = news.slice(0, 4);

  //Executa o hook navigate
  const navigate = useNavigate();

  const ngmDrivers = [...drivers].filter(
    (driver) => driver.team === "NGM eSports",
  );

  const otherDrivers = [...drivers]
    .sort((a, b) => b.pts - a.pts)
    .filter((driver) => driver.team !== "NGM eSports")
    .slice(0, 5);

  return (
    <>
      <MainTemplate>
        <section className={styles.heroContainer}>
          <SectionTemplate
            title="Noticia do Dia"
            className={styles.heroContent}
          >
            <Card
              img="/src/assets/img/banner.png"
              title="Data para os testes da pré-temporada"
              text="Acompanhe agora mesmo!"
              variant="news"
              className={styles.mainBanner}
            />
            <div className="p-2 col gap-1">
              {ngmDrivers
                .sort((a, b) => b.pts - a.pts)
                .map((driver, index) => (
                  <tr key={driver.id}>
                    <td>{index + 1}</td>
                    <td>{driver.name}</td>
                    <td>{driver.state}</td>
                    <td>{driver.team}</td>
                    <td>{driver.pts}</td>
                  </tr>
                ))}

              {otherDrivers
                .sort((a, b) => b.pts - a.pts)
                .map((driver, index) => (
                  <tr key={driver.id}>
                    <td>{ngmDrivers.length + index + 1}</td>
                    <td>{driver.name}</td>
                    <td>{driver.state}</td>
                    <td>{driver.team}</td>
                    <td>{driver.pts}</td>
                  </tr>
                ))}

              <button
                onClick={() => navigate("/standingsPage")}
                className={styles.btnLight}
              >
                Ver Todos
              </button>
            </div>
          </SectionTemplate>
        </section>

        <section className={styles.productsContainer}>
          <SectionTemplate title="Ultimas Noticias">
            <SwiperNav
              sliderNumber={4}
              spaceBetween={16}
              sliderNumberMobile={1.1}
            >
              {newsSliced.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card img={item.img} title={item.title} text={item.text} />
                </SwiperSlide>
              ))}
            </SwiperNav>
          </SectionTemplate>
        </section>

        <SectionTemplate title="Kits">
          <div className={`${styles.kitsContainer} row-auto gap-1`}>
            <Card
              title="Kit Oficial do Time de 2026"
              img="/src/assets/img/banner2.png"
              variant="news"
            />
            <Card
              title="Wallpaper Oficiais 2025"
              img="/src/assets/img/wallpaper.png"
              variant="news"
            />
          </div>
        </SectionTemplate>

        <section
          className={`${styles.productsContainer} ${styles.shopProdutsContainer} `}
        >
          <SectionTemplate title="Em Breve - Loja Virtual">
            <SwiperNav
              sliderNumber={4}
              spaceBetween={16}
              sliderNumberMobile={1.1}
            >
              {oficialeProducts.map((product) => (
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
        </section>
      </MainTemplate>
    </>
  );
}

export default Home;
