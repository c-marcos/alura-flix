/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ActionsCard } from "./ActinsCard/ActionsCard";
import { useShowVideo } from "../../contexts/ContexShowVideo";
import { TechnologyType, TypeVieo } from "../../Types/TypeVideo";

interface PropsCard {
   category: string;
}
interface PropsImg {
   category: string;
   img: string;
}

type Props = {
   type: TechnologyType
   data: TypeVieo
}

const Cardtyled = styled.div<PropsCard>`
   display: flex;
   flex-direction: column;
   height: 319.92px;
   border: 4px solid var(--color-${props => props.category});
   border-radius: 5px 5px 15px 15px;
   transition: box-shadow 0.3s ease;
`;

const ImageContainer = styled.div<PropsImg>`
   flex: 1;
   position: relative; /* Torna o contêiner relativo para permitir sombra */
   background-image: url(${props => props.img}); /* Usando a imagem como fundo */
   background-size: cover;
   background-position: center;
   border-bottom: 4px solid var(--color-${props => props.category});
   transition: box-shadow 0.3s ease;
   &:hover{
      box-shadow: inset 4px 4px 12px var(--color-${props => props.category}),inset -4px -4px 12px var(--color-${props => props.category});
   }
`;

export const Card = ({data, type}: Props) => {
   const show = useShowVideo();
   const handleShowVideo = () => {
      show.toogleOverlay();
      show.handleShowVideo(data);
   }
   return (
      <Cardtyled category={data.category}>
         <ImageContainer onClick={handleShowVideo} img={data.linkImg} category={data.category}>
         </ImageContainer>
         <ActionsCard video={data} type={type}/>
      </Cardtyled>
   );
}
