/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Cards } from "../Cards";
import { useVideosData } from "../../contexts/ContexVideos";

const GalleryStyled = styled.section`
   display: flex;
   flex-direction: column;
   gap: 93px;
`; 

export const GalleryVideos = () => {
   const videos = useVideosData();

   return(
      <GalleryStyled>
         {videos?.state.map(video => (
            video.data.length > 0 && <Cards key={video.type} data={video.data} type={video.type} />
         ))}
      </GalleryStyled>
   )
}