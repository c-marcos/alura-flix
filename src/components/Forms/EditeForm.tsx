import { Formik, Form } from "formik";
import { v4 as uuidv4 } from 'uuid';
import {
  inicialData,
  setInicialData,
  validationSchema,
  clearData,
} from "../../models/SchemaEditeForm";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { TitleForm } from "./Fildes/TitleForm";
import { Input } from "./Fildes/Input";
import { Select } from "./Fildes/Select";
import { Textarea } from "./Fildes/TextArea";
import { ButtonSubmit } from "./Fildes/ButoonSubmit";
import { TechnologyType, TypeVieo } from "../../Types/TypeVideo";
import { useUpdateVideo } from "../../contexts/ContexUpdate";
import { convertData } from "../../utils/convertData";
import { useVideosData } from "../../contexts/ContexVideos";
import { useState } from "react";

interface EditeFormProps {
  data: TypeVieo | null;
  setScrol: () => void;
}

export const EditeForm = ({ setScrol, data }: EditeFormProps) => {
  const [type, setType] = useState<TechnologyType | null>(null);
  const initialValues = data ? setInicialData(data) : inicialData;
  const update = useUpdateVideo();
  const Cvideo = useVideosData();

  return (
    <EditeFormStyled>
      <CloseEditeCard onClick={() => update.toogleUpdate()}>
        <FaTimes size={43} />
      </CloseEditeCard>

      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (type) {
            Cvideo?.dispatch({
              type: "UPDATE_ITEM",
              payload: {
                type: { anterior: update.type, selecionado: type, newId: uuidv4() },
                data: convertData(values),
              },
            });
            setScrol();
          }
        }}
      >
        {({ resetForm, setFieldValue }) => (
          <Form className="form">
            <TitleForm color="var(--primary-color)">editar card</TitleForm>

            <Input
              name="titulo"
              type="text"
              className="input"
              placeholder="Digite o titulo do card"
            />

            <Select
              name="categoria"
              label="Categoria"
              options={options}
              onChange={(e) => {
                setFieldValue("categoria", e.target.value);
                setType(e.target.value as TechnologyType);
              }}
            />

            <Input
              name="imagem"
              type="text"
              className="input"
              placeholder="Digite o link da imagem"
            />

            <Input
              name="video"
              type="text"
              className="input"
              placeholder="Digite o link do video"
            />

            <Textarea name="descricao" placeholder="Digite a descrição" />

            <ContainerButoons>
              <ButtonSubmit
                text="guardar"
                borderColor="--primary-color"
                shadow
                bgColor="var(--bg-color-black)"
              />
              <ButtonSubmit
                text="limpar"
                onClick={() => {
                  resetForm({ values: clearData });
                }}
                type="button"
              />
            </ContainerButoons>
          </Form>
        )}
      </Formik>
    </EditeFormStyled>
  );
};

const options = [
  { value: "", label: "Selecione uma opção", disabled: false },
  { value: "BACK END", label: "BACK END", disabled: false },
  { value: "FRONT END", label: "FRONT END", disabled: false },
  { value: "MOBILE", label: "MOBILE", disabled: false },
];
const EditeFormStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 974px;
  height: 1140px;
  border: 5px solid var(--color-frontend);
  border-radius: 15px;
  background-color: #03122f;
  padding: 84px 0;
  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 575px;
    height: 100%;
  }
`;
const CloseEditeCard = styled.div`
  color: var(--color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  width: 70px;
  height: 70px;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  border-radius: 50%;
  transition: box-shadow 0.5s ease;
  &:hover {
    box-shadow: inset 4px 4px 12px var(--color-frontend),
      inset -4px -4px 12px var(--color-frontend);
  }
`;

const ContainerButoons = styled.div`
  display: flex;
  justify-content: space-between;
`;
