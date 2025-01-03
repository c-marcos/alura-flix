/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Cards } from "../Cards";
import videos from '../../mock/videos.json'

const GalleryStyled = styled.section`
   display: flex;
   flex-direction: column;
   gap: 93px;
`; 

export const GalleryVideos = () => {

   return(
      <GalleryStyled>
         {videos.map(video => <Cards key={video.type} data={video.data} type={video.type} />)}
      </GalleryStyled>
   )
}