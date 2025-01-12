import * as Yup from "yup";
import { TypeVieo } from "../Types/TypeVideo";

export const validationSchema = Yup.object({
  id: Yup.string(),
  titulo: Yup.string()
    .required("O título é obrigatório")
    .min(2, "O título deve ter pelo menos 2 caracteres"),
  categoria: Yup.string()
    .required("Categoria é obrigatória")
    .oneOf(["FRONT END", "BACK END", "MOBILE"], "Categoria deve ser 'FRONT END', 'BACK END' ou 'MOBILE'"),
  imagem: Yup.string()
    .required("O link da imagem é obrigatório"),
  video: Yup.string()
    .required("O link do vídeo é obrigatório"),
  descricao: Yup.string()
    .required("A descrição é obrigatória"),
});



export const inicialData = {
   id: "",
   titulo: "",
   categoria: "",
   imagem: "",
   video: "",
   descricao: ""
}

export const clearData = {
   id: "",
   titulo: "",
   categoria: "",
   imagem: "",
   video: "",
   descricao: ""
}

export const setInicialData = (data: TypeVieo) => {
   return {
      id: data.id,
      titulo: data.title,
      categoria: data.category,
      imagem: data.linkImg,
      video: data.linkVideo,
      descricao: data.description
   }
}


export type FormEditeType = typeof inicialData;