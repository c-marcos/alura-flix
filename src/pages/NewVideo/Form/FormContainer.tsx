import styled from "@emotion/styled"
import { NewVideoForm } from "./Form";

interface Props {
   handleMensagem: (type: "success" | "error") => void
}

export const FormNewVideoContainer = ({handleMensagem}: Props) => {
   return (
      <FormContainer>
         <div className="title">
            <h3>criar card</h3>
         </div>
         <NewVideoForm handleMensagem={handleMensagem}/>
      </FormContainer>
   )
}

const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 60px;
   max-width: 1172px;
   width: 100%;
   h3 {
      font-size: 36px;
      padding: 5px 0;
      color: var(--color-light);
      text-transform: capitalize;
   }
   .title{
      display: flex;
      align-items: center;
      height: 91px;
      border-top: 1px solid var(--color-light);
      border-bottom: 1px solid var(--color-light);
   }
`;