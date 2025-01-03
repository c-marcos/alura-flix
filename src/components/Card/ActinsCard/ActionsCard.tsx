import styled from '@emotion/styled'
import delit from '../../../assets/images/delet.svg'
import edite from '../../../assets/images/edite.png'

const ActionsCardStyled = styled.div`
   display: flex;
   gap: 30px;
   justify-content: center;
   align-items: center;
   background-color: var(--bg-color-black);
   height: 59px;
   gap: 70px;
   border-radius: 0 0 11px 11px;
`;

const Button = styled.button`
   display: flex;
   background-color: transparent;
   color: var(--color-light);
   align-items: center;
   gap: 20px;
   text-transform: uppercase;
   font-size: 16px;
   font-weight: 900;
   cursor: pointer;
   &:hover {
      opacity: .7;
   }
`

export const ActionsCard = () => {
   return (
      <ActionsCardStyled>
         <Button>
            <img src={delit} alt="" />
            deletar
         </Button>
         <Button>
            <img src={edite} alt="" />
            editar
         </Button>
      </ActionsCardStyled>
   )
};