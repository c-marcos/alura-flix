import { GalleryVideos } from "../../components/Gallery";
import { LayoutDefault } from "../../layouts/LayoutDefault";
import styled from "@emotion/styled";
import { Banner } from "./Banner";
import { useShowVideo } from "../../contexts/ContexShowVideo";
import { useVideosData } from "../../contexts/ContexVideos";
import videos from '../../mock/videos.json'
import { useEffect } from "react";
import { ModalVideo } from "../../components/ModalVideo";

type Props = {
   overlay?: boolean;
}
const MainContainer = styled.div`
   max-width: 1411.34px;
   width: 100%;
   margin: 32px auto 128px auto;
   flex: 1;
`
const ContainerOverlay = styled.div<Props>`
   position: relative;
   max-height: ${props => props.overlay? '100vh' : '100%'};
   overflow: ${props => props.overlay? 'hidden' : ''};
`;

export const Home = () => {
   const show = useShowVideo();
   const data = useVideosData();

   useEffect(()=>{
         data?.dispatch({
            type: 'SET_INITIAL_DATA',
            payload: videos
         })
   }, []);

   return (
      <ContainerOverlay overlay={show.overlay}>
         <LayoutDefault>
            <Banner/>
            <MainContainer>
               <GalleryVideos/>
            </MainContainer>
         </LayoutDefault>
         {show.overlay && <ModalVideo/>}
      </ContainerOverlay>
   );
}