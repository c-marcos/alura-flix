import styled from "@emotion/styled"


export const Header = () => {

   return (
      <HeaderStyled>
         <h1>
            novo vídeo
         </h1>
         <p>
            Complete o formulário para criar um novo card de vídeo.
         </p>
      </HeaderStyled>
   )
}

const HeaderStyled = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   align-items: center;
   text-transform: uppercase;
   h1 {
      font-size: 60px;
      font-weight: 800;
      color: var(--color-gray-light);
      margin-bottom: 16px;
   }
   p {
      font-size: 20px;
      color: var(--color-light);
   }
`;