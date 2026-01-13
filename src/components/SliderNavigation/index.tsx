import React from "react";

interface swiperProps {
  sliderNumber: number;
  sliderNumberMobile?: number;
  spaceBetween?: number;
  children?: React.ReactNode;
}

// Swiper
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

// Estilos obrigatórios
import "swiper/css";
import "swiper/css/navigation";

import styles from "./index.module.css";

const SwiperNav = ({
  sliderNumber,
  sliderNumberMobile,
  spaceBetween = 0,
  children,
}: swiperProps) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={styles.mySwiper}
      slidesPerView={sliderNumber}
      breakpoints={{
        0: {
          slidesPerView: sliderNumberMobile || sliderNumber,
          spaceBetween,
        },
        768: {
          slidesPerView: sliderNumber,
          spaceBetween,
        },
      }}
    >
      {/* Toda children deve ser renderizada dentro da tag SwiperSlide */}
      {children}
    </Swiper>
  );
};

export default SwiperNav;
