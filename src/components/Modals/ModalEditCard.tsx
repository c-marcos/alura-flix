import styled from "@emotion/styled";
import { EditeForm } from "../Forms/EditeForm";
import { useUpdateVideo } from "../../contexts/ContexUpdate";
import { useState } from "react";
import { AlertaDefault } from "../Alerta/AlertaDefault";

interface Props {
  togScroll: () => void;
}

const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(3, 18, 47, 0.76);
  z-index: 100;
`;

export const ModalEditCard = ({ togScroll }: Props) => {
  const [menssage, setMenssage] = useState<string | null>(null);
  const update = useUpdateVideo();

  const handleClose = () => {
    const msg = menssage ? null : "Dados atualizados com sucesso!";
    togScroll();
    setMenssage(msg);
  };

  return (
    <ContainerModal>
      {menssage ? (
        <AlertaDefault msg={menssage} type="success" close={handleClose} />
      ) : (
        <EditeForm data={update.video} setScrol={handleClose} />
      )}
    </ContainerModal>
  );
};
