import styled from "@emotion/styled";
import {SwiperSlide } from 'swiper/react';
import {ButoonCategory} from "../Butoons/ButoonCategory";
import { Card } from "../Card/";
import { SlideVideos } from "../Slides/SlideVideos";
import { TechnologyType, TypeVieo } from "../../Types/TypeVideo";

type Props = {
   type: TechnologyType;
   data: TypeVieo[]
}

const CardsStyled = styled.section`
   display: flex;
   flex-direction: column;
   gap: 10px;
`;
const ButoonContainer = styled.div`
   margin-left: 30px;
`;
export const Cards = ({data, type}: Props) => {

   const borderColor = `--color-${type.toLowerCase().split(' ').join('')}`;

   return (
      <CardsStyled>
         <ButoonContainer>
            <ButoonCategory text={type} bgColor={borderColor}/>
         </ButoonContainer>
         <SlideVideos>
            {data.map(video => (
               <SwiperSlide key={video.id}>
                  <Card key={video.id} data={video} type={type}/>
               </SwiperSlide>
            ))}
         </SlideVideos>
      </CardsStyled>
   )
}