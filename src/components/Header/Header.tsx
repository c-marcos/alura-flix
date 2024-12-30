import styled from '@emotion/styled';
import logo from '../../assets/images/logo.svg';
import { ContainerStyled } from '../Containers/ContainerHeader';
import { MenuBar } from './MenuBar';

interface HeaderProps {
  bgColor?: string
}


const HeaderStyle = styled.header<HeaderProps>`
  background-color: ${(props) => props.bgColor || 'var(--color-dark-gray)'};
  color: white;
  border-bottom: 4px solid var(--primary-color);
  box-shadow: 5px 0 29px 0 rgba(34, 113, 209, 0.7);
`;

export const Header = ({bgColor}: HeaderProps) => {
  return (
    <HeaderStyle bgColor={bgColor}>
      <ContainerStyled>
        <div>
          <img src={logo} alt="Logotipo Alura Flix" />
        </div>
        <MenuBar />
      </ContainerStyled>
    </HeaderStyle>
  );
}



