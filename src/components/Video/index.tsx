import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Loading } from "../Loading";

type Props = {
  link: string;
  category: string;
};

type PropsStaled = {
  category: string;
};

const VideoStaled = styled.iframe<PropsStaled>`
  width: 900px;
  height: 600px;
  border: 1px solid var(--color-${(props) => props.category});
  border-radius: 15px;
`;
const ContainerLoading = styled.div`
  width: 900px;
  height: 600px;
  border: 1px solid var(--color-gray-light);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Video = ({ link, category }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    }, 1000)
  }, [link]);
  return (
    <>
      {loading ? (
        <ContainerLoading>
          <Loading/>
        </ContainerLoading>
      ) : (
        <VideoStaled
          category={category}
          src={link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          rel="noopener noreferrer"
        ></VideoStaled>
      )}
    </>
  );
};
