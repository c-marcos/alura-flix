import styled from "@emotion/styled";
import { Video } from "../Video";
import { useShowVideo } from "../../contexts/ContexShowVideo";
import { FaTimes } from "react-icons/fa";

interface CloseType{
  color: string;
}

const ContainerVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Ajuste para cobrir todo o banner */
  background-color: rgba(0, 0, 0, 0.7); /* Transparência preta */
  z-index: 500;
`;
const CloseVideo = styled.div<CloseType>`
  color: var(--color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  width: 70px;
  height: 70px;
  position: absolute;
  top: 30px;
  right: 50px;
  cursor: pointer;
  border-radius: 50%;
  transition: box-shadow .5s ease;
  &:hover{
    box-shadow: inset 4px 4px 12px var(--color-${props => props.color}),inset -4px -4px 12px var(--color-${props => props.color});

  }
`;

export const ModalVideo = () => {
  const show = useShowVideo();

  const handleClose = () => {
    show.toogleOverlay();
  };

  return (
    <ContainerVideo>
      <CloseVideo onClick={handleClose} color={show.video ? show.video?.category : ""}>
        <FaTimes />
      </CloseVideo>
      <Video
        category={show.video ? show.video?.category : ""}
        link={show.video ? show.video?.linkVideo : ""}
      />
    </ContainerVideo>
  );
};
