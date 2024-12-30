import styled from '@emotion/styled';
import logo from '../../assets/images/logo.svg'

const FooterStyle = styled.footer`
  background-color: #000000;
  color: white;
  width: 100%;
  height: 125px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 4px solid var(--primary-color);
  box-shadow: 0 5px 29px 10px rgba(34, 113, 209, 0.7)
`;

export const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <img src={logo} alt="Logotipo do rodape" />
      </div>
    </FooterStyle>
  );
}
