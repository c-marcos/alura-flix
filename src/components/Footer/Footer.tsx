import styled from '@emotion/styled';


const FooterStyle = styled.footer`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterStyle>
      <h1>Footer</h1>
    </FooterStyle>
  );
}
