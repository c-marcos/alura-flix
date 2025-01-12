import { Formik, Form } from "formik";
import { v4 as uuidv4 } from 'uuid';
import {
  inicialData,
  validationSchema,
  clearData,
} from "../../../models/SchemaEditeForm";
import styled from "@emotion/styled";
import { Input } from "../../../components/Forms/Fildes/Input";
import { Select } from "../../../components/Forms/Fildes/Select";
import { Textarea } from "../../../components/Forms/Fildes/TextArea";
import { ButtonSubmit } from "../../../components/Forms/Fildes/ButoonSubmit";
import { useVideosData } from "../../../contexts/ContexVideos";
import { convertData } from "../../../utils/convertData";
import { TechnologyType } from "../../../Types/TypeVideo";

interface Props {
  handleMensagem: (type: "success" | "error") => void
}

export const NewVideoForm = ({handleMensagem}: Props) => {
  const crudVidios = useVideosData();

  return (
    <Formik
      initialValues={inicialData}
      validationSchema={validationSchema}
      onSubmit={(values, {resetForm}) => {
        
        try {
          crudVidios?.dispatch({
            type: "ADD_ITEM",
            payload: {
              type: values.categoria as TechnologyType,
              data: convertData({ ...values, id: uuidv4() }),
            },
          });
          handleMensagem('success');
          resetForm();
        } catch (error) {
          handleMensagem('error');
        }
      }}
    >
      {({ resetForm }) => (
        <Form className="form">
          <Fildeset>
            <Row>
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
              />
            </Row>

            <Row>
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
            </Row>

            <Textarea name="descricao" placeholder="Digite a descrição" />

            <ContainerButoons>
              <ButtonSubmit text="guardar" borderColor="--primary-color" />
              <ButtonSubmit
                text="limpar"
                onClick={() => {
                  resetForm({ values: clearData });
                }}
                type="button"
              />
            </ContainerButoons>
          </Fildeset>
        </Form>
      )}
    </Formik>
  );
};

const options = [
  { value: "", label: "Selecione uma opção", disabled: false },
  { value: "BACK END", label: "BACK END", disabled: false },
  { value: "FRONT END", label: "FRONT END", disabled: false },
  { value: "MOBILE", label: "MOBILE", disabled: false },
];

const ContainerButoons = styled.div`
  display: flex;
  gap: 30px;
`;

const Fildeset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 60px;
  input,
  select {
    height: 64px !important;
  }
  .textarea {
    height: 220px !important;
    width: 573px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;
