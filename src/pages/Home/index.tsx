import { GalleryVideos } from "../../components/Gallery";
import { LayoutDefault } from "../../layouts/LayoutDefault";
import styled from "@emotion/styled";
import { Banner } from "./Banner";
import { useShowVideo } from "../../contexts/ContexShowVideo";
import { useVideosData } from "../../contexts/ContexVideos";
import { useEffect, useState } from "react";
import { ModalShowVideo } from "../../components/Modals/ModalShowVideo";
import { ModalEditCard } from "../../components/Modals/ModalEditCard";
import { DataState } from "../../contexts/reducers/ReducerVideos";
import { useUpdateVideo } from "../../contexts/ContexUpdate";

type Props = {
  overlay?: boolean;
};
const MainContainer = styled.div`
  max-width: 1411.34px;
  width: 100%;
  margin: 32px auto 128px auto;
  flex: 1;
`;
const ContainerOverlay = styled.div<Props>`
  position: relative;
  max-height: ${(props) => (props.overlay ? "100vh" : "100%")};
  overflow: ${(props) => (props.overlay ? "hidden" : "")};
`;

export const Home = () => {
  const [scroll, setScroll] = useState(false);
  const show = useShowVideo();
  const data = useVideosData();
  const update = useUpdateVideo();

  const toggleScroll = () => {
    setScroll(!scroll);
  };

  useEffect(() => {
    fetch("https://api.allorigins.win/raw?url=https://my-json-server.typicode.com/c-marcos/videos-api/videos")
      .then((resp) => resp.json())
      .then((videos) => {
        if (data?.state.length === 0) {
          data?.dispatch({
            type: "SET_INITIAL_DATA",
            payload: videos as DataState,
          });
        }
      });
  }, []);

  return (
    <ContainerOverlay overlay={show.overlay || scroll}>
      <LayoutDefault>
        <Banner />
        <MainContainer>
          <GalleryVideos />
        </MainContainer>
      </LayoutDefault>
      {show.overlay && <ModalShowVideo />}
      {update.update && <ModalEditCard togScroll={toggleScroll} />}
    </ContainerOverlay>
  );
};
