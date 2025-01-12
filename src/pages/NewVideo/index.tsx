import styled from "@emotion/styled";
import { LayoutDefault } from "../../layouts/LayoutDefault";
import { Header } from "./Header/Header";
import { FormNewVideoContainer } from "./Form/FormContainer";
import { useState } from "react";
import { AlertaNewVideo } from "../../components/Alerta/AlertaNewVedeo";

export const AddNewVideo = () => {
  const [open, setOpen] = useState(false);
  const [menssage, setMenssage] = useState<{
    type: "success" | "error";
    msg: string;
  }>({ type: "success", msg: "" });

  const handleMessagem = (type: "success" | "error") => {
    if (type === "success") {
      setMenssage({
        type: "success",
        msg: "Os dados foram iseridos com sucesso !",
      });
      setOpen(true);
    } else {
      setMenssage({
        type: "error",
        msg: "Nao foi possivel inserir os dados !",
      });
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Ocerflow h={open} over={open}>
      <LayoutDefault HeaderColor="var(--bg-color-black)">
        <MainContainer>
          <ConatinerNewVideo>
            <Header />
            <FormNewVideoContainer handleMensagem={handleMessagem} />
          </ConatinerNewVideo>
        </MainContainer>
        {open && (
          <ModalInsertStyled>
            <AlertaNewVideo
              msg={menssage.msg}
              type={menssage.type}
              close={handleClose}
            />
          </ModalInsertStyled>
        )}
      </LayoutDefault>
    </Ocerflow>
  );
};

type PropsOverflow = {
  over?: boolean;
  h?: boolean;
};

const MainContainer = styled.main`
  width: 100%;
  background-color: var(--color-dark-gray);
`;

const ConatinerNewVideo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
  align-items: center;
  justify-content: center;
  max-width: 1360px;
  height: 1192px;
  margin: 0 auto;
  width: 100%;
`;

const ModalInsertStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
`;

const Ocerflow = styled.div<PropsOverflow>`
  overflow: ${(props) => props.over && "hidden"};
  max-height: ${(props) => props.h && "100vh"};
`;
