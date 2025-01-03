/** @jsxImportSource @emotion/react */
import { Navigation, Mousewheel, Keyboard, EffectCoverflow} from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { css } from "@emotion/react";
import 'swiper/css/navigation';
import 'swiper/css';


interface Props {
  children: React.ReactNode;
}

const style = css` 
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 30px;

  .mySwiper {
    height: 100%;
  }

  .swiper-slide {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #00ff00;
    font-size: 18px;
    opacity: 0;
    transition: opacity 0.3s ease;
    text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000;
  }

  .swiper-button-prev:not(.swiper-button-disabled),
  .swiper-button-next:not(.swiper-button-disabled) {
    opacity: 0; /* Mostra apenas as setas ativas */
  }

  &:hover .swiper-button-prev:not(.swiper-button-disabled),
  &:hover .swiper-button-next:not(.swiper-button-disabled) {
    opacity: 1; 
    transform: scale(1.2); /* Opcional: destaca as setas ao passar o mouse */
  }
  .swiper-slide:hover {
    transform: scale(1.1);
    z-index: 9999;
    cursor: pointer;
  }
  &:hover{
    padding: 0;
  }
  &:hover .mySwiper {
    padding: 30px;
  }
`;


export const SlideVideos = ({children}:Props) => {
  return (
    <div css={style}>
      <Swiper    
        slidesPerView={3}
        navigation={true}
        spaceBetween={30}
        modules={[Navigation, Mousewheel, Keyboard,EffectCoverflow]}
        className="mySwiper"
      >       
        {children}
      </Swiper>
    </div>
  );
};
