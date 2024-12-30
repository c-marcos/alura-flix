import styled from "@emotion/styled";
import banner from '../../../assets/images/banner.png'


const BannerStyled = styled.section`
   height: 700px;
   width: 100%;
   background-image: url(${banner});
   background-position: center -60px;
`

export const Banner = () =>{

   return(
      <BannerStyled>
      </BannerStyled>
   )
}
