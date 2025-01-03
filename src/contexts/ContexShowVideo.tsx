import { TypeVieo } from "../Types/TypeVideo";
import { createContext, useContext, useState, ReactNode } from "react";

interface TypeContext {
   video: TypeVieo | null;
   handleShowVideo: (data: TypeVieo) => void;
   overlay: boolean;
   toogleOverlay: () => void;
}

interface TypeProvider {
   children: ReactNode;
}

// Criando o contexto com o tipo correto
const ContextShowVideo = createContext<TypeContext | null>(null);

export const ShowVideoProvider = ({ children }: TypeProvider) => {
   const [video, setVideo] = useState<TypeVieo | null>(null);
   const [overlay, setOverlay] = useState<boolean>(false);

   const handleShowVideo = (data: TypeVieo) => {
      if (data) setVideo(data);
   };

   const toogleOverlay = () => {
      setOverlay((over) => !over);
   };

   return (
      <ContextShowVideo.Provider value={{ video, handleShowVideo, overlay, toogleOverlay }}>
         {children}
      </ContextShowVideo.Provider>
   );
};

// Hook personalizado para acessar o contexto
export const useShowVideo = () => {
   const context = useContext(ContextShowVideo);
   if (!context) {
      throw new Error("useShowVideo deve ser usado dentro de um ShowVideoProvider");
   }
   return context;
};
