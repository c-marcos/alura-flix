import styled from "@emotion/styled";
import { Video } from "../Video";
import { useShowVideo } from "../../contexts/ContexShowVideo";

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
const CloseVideo = styled.strong`
  color: var(--color-light);
  font-size: 50px;
  position: absolute;
  top: 10px;
  right: 50px;
  cursor: pointer;
`;

export const ModalVideo = () => {
  const show = useShowVideo();

  const handleClose = () => {
    show.toogleOverlay();
  };

  return (
    <ContainerVideo>
      <CloseVideo onClick={handleClose}>x</CloseVideo>
      <Video
        category={show.video ? show.video?.category : ""}
        link={show.video ? show.video?.linkVideo : ""}
      />
    </ContainerVideo>
  );
};
