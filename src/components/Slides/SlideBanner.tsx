/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import data from '../../mock/destaques.json';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { BannerItem } from "../../pages/Home/Banner/BannerItem";

const style = css` 
  width: 100%; height:100%;
  .mySwiper{
    height: 100%
  }

  .swiper-pagination-bullet {
    width: 12px; /* Largura personalizada */
    height: 12px; /* Altura personalizada */
    background-color: var(--color-light);
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--primary-color);
    transform: scale(1.3); /* Aumenta o tamanho do bullet ativo */
  }
`;

export const SlideBanner = () => {
  return (
    <div css={style}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true} // Ativa o loop contínuo
        autoplay={{
          delay: 5000, // Tempo em milissegundos para trocar de slide (3 segundos)
          disableOnInteraction: false, // Continua o autoplay mesmo após interação
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        { data.map( item => (
          <SwiperSlide key={item.id}>
            <BannerItem props={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
