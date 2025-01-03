import styled from "@emotion/styled";
import delit from "../../../assets/images/delet.svg";
import edite from "../../../assets/images/edite.png";
import { useVideosData } from "../../../contexts/ContexVideos";
import { TechnologyType, TypeVieo } from "../../../Types/TypeVideo";

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

   const handleDelete = () => {
      data?.dispatch({type: 'DELETE_ITEM', payload: {id: video.id, category: video.category}});
   }

   const handleUpdate = () => {
      data?.dispatch({
         type: 'UPDATE_ITEM', 
         payload: {type: type, data: {...video, linkImg: newLink}}
      });
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

const newLink = "https://i.ytimg.com/vi/OYTF8jICHpA/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGFcgXihlMA8=&rs=AOn4CLAXgKPIuKv86DlHMzOekwX8XTackA"