import styled from '@emotion/styled';
import logo from '../../assets/images/logo.png';
import { ContainerStyled } from '../Containers/ContainerHeader';
import { MenuBar } from './MenuBar';


const HeaderStyle = styled.header`
  background-color: var(--color-dark-gray);
  color: white;
  border-bottom: 4px solid var(--primary-color);
  box-shadow: 5px 0 29px 0 rgba(34, 113, 209, 0.7);
`;

export const Header = () => {
  return (
    <HeaderStyle>
      <ContainerStyled>
        <div>
          <img src={logo} alt="Logotipo Alura Flix" />
        </div>
        <MenuBar />
      </ContainerStyled>
    </HeaderStyle>
  );
}



