/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ContainerStyled } from "../../../components/Containers/ContainerHeader";
import { ButoonCategory } from "../../../components/Butoons/ButoonCategory";
import { OverlayStyle } from "../../../components/Overlay/Overlay";

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
   background-position: center -60px;
   background-repeat: no-repeat;
   background-size: cover;
`;

export const BannerItem = ({props}: BannerItemProps) => {
   return (
      <div css={css`position: relative;`}>
         <OverlayStyle>
            <ContainerStyled>
               <div css={css` margin-top: 600px; display: flex; gap: 50px; align-items: center; justify-content: center; color: var(--color-gray-light);`} >
                  <div css={css`display: flex; flex-direction: column;`}>
                     <ButoonCategory text={props.category} w="297px" h="92px" fontS="48px"/>
                     <h1 css={css`font-size: 46px; margin: 48px 0 16px 0;`}>{props.title}</h1>
                     <p css={css`max-width: 662.84px; font-size: 18px; font-weight: 300;`}>{props.description}</p>
                  </div>
                  <div css={css`width: 646px; height: 333.58px;`} >
                     <img css={css`width: 100%; height: 100%;`}  src={props.url} alt={props.alt} />
                  </div>
               </div>
            </ContainerStyled>
         </OverlayStyle>
         <BannerStyled url={props.url}/>
      </div>
   );
};


