import { TechnologyType, TypeVieo } from "../Types/TypeVideo";
import { createContext, useContext, useState, ReactNode } from "react";

interface TypeContext {
   video: TypeVieo | null;
   handleUpdateVideo: (data: TypeVieo, typeAnterior: TechnologyType, typeSelecionado?: TechnologyType) => void;
   update: boolean;
   toogleUpdate: () => void;
   type: TechnologyType;
}

interface TypeProvider {
   children: ReactNode;
}

// Criando o contexto com o tipo correto
const ContextUpdateVideo = createContext<TypeContext | null>(null);

export const UpdateVideoProvider = ({ children }: TypeProvider) => {
   const [video, setVideo] = useState<TypeVieo | null>(null);
   const [update, setUpdate] = useState<boolean>(false);
   const [type, setType] = useState<TechnologyType>('BACK END');

   const handleUpdateVideo = (data: TypeVieo, type: TechnologyType) => {
      if (data) {
         setVideo(data);
         setType(type);
      }
   };

   const toogleUpdate = () => {
      setUpdate((over) => !over);
   };

   return (
      <ContextUpdateVideo.Provider value={{ video, handleUpdateVideo, update, toogleUpdate, type }}>
         {children}
      </ContextUpdateVideo.Provider>
   );
};

// Hook personalizado para acessar o contexto
export const useUpdateVideo = () => {
   const context = useContext(ContextUpdateVideo);
   if (!context) {
      throw new Error("useUpdateVideo deve ser usado dentro de um UpdateVideoProvider");
   }
   return context;
};
