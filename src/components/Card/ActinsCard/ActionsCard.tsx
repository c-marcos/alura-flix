import styled from "@emotion/styled";
import delit from "../../../assets/images/delet.svg";
import edite from "../../../assets/images/edite.png";
import { useVideosData } from "../../../contexts/ContexVideos";
import { TechnologyType, TypeVieo } from "../../../Types/TypeVideo";
import { useUpdateVideo } from "../../../contexts/ContexUpdate";

type Props = {
   type: TechnologyType;
   video: TypeVieo;
}

const ActionsCardStyled = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color-black);
  height: 59px;
  gap: 70px;
  border-radius: 0 0 11px 11px;
`;

const Button = styled.button`
  display: flex;
  background-color: transparent;
  color: var(--color-light);
  align-items: center;
  gap: 20px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const ActionsCard = ({video, type}: Props) => {
   const data = useVideosData();
   const update = useUpdateVideo();

   const handleDelete = () => {
      data?.dispatch({type: 'DELETE_ITEM', payload: {id: video.id, category: video.category}});
   }

   const handleUpdate = () => {
      update.toogleUpdate();
      update.handleUpdateVideo(video, type);
   }

   return (
      <ActionsCardStyled>
         <Button
            onClick={handleDelete}
         ><img src={delit} alt="" />deletar</Button>
         <Button
            onClick={handleUpdate}
         ><img src={edite} alt="" />editar</Button>
      </ActionsCardStyled>
   );
};

