/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ContainerStyled } from "../../../components/Containers/ContainerHeader";
import { ButoonCategory } from "../../../components/Butoons/ButoonCategory";
import { OverlayStyle } from "../../../components/Overlay/Overlay";

interface PropsImg {
   category: string;
   img: string;
}

interface BannerItemProps {
   props: {
      title: string;
      description: string;
      category: string;
      alt: string;
      url: string;
   }
}

interface BannerProps {
   url: string;
}

const BannerStyled = styled.section<BannerProps>`
   height: 700px;
   width: 100%;
   background-image: url(${props => props.url});
   background-position: center -90px;
   background-repeat: no-repeat;
   background-size: cover;
`;

const ImageContainer = styled.div<PropsImg>`
   width: 646px;
   height: 333.58px;
   position: relative; /* Torna o contêiner relativo para permitir sombra */
   background-image: url(${props => props.img}); /* Usando a imagem como fundo */
   background-size: cover;
   background-position: center;
   border: 4px solid var(--color-${props => props.category});
   border-radius: 4px;
   transition: box-shadow 0.3s ease;
   box-shadow: inset 4px 4px 12px var(--color-${props => props.category}),inset -4px -4px 12px var(--color-${props => props.category});
`;

export const BannerItem = ({props}: BannerItemProps) => {
   const color = props.category.split(" ").join("").toLowerCase();
   
   return (
      <div css={css`position: relative;`}>
         <OverlayStyle>
            <ContainerStyled>
               <div css={css` margin-top: 600px; display: flex; gap: 50px; align-items: center; justify-content: center; color: var(--color-gray-light);`} >
                  <div css={css`display: flex; flex-direction: column; max-width: 665.84px;`}>
                     <ButoonCategory text={props.category} w="297px" h="92px" fontS="48px" bgColor={`--color-${color}`}/>
                     <h1 css={css`font-size: 46px; margin: 48px 0 16px 0;`}>{props.title}</h1>
                     <p css={css`max-width: 662.84px; font-size: 18px; font-weight: 300;`}>{props.description}</p>
                  </div>
                  <ImageContainer img={props.url} category={color}/>
               </div>
            </ContainerStyled>
         </OverlayStyle>
         <BannerStyled url={props.url}/>
      </div>
   );
};


