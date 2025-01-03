import styled from "@emotion/styled";

interface ButtonProps {
  borderColor?: string | boolean; 
  textColor?: string | boolean;  
  shadow?: boolean;
}
type Props ={ text: string; active?: boolean}

const ButtonStyled = styled.button<ButtonProps>`
  background-color: #000000;
  color: ${(props) => props.textColor || "var(--color-light)"};
  border: 2px solid ${(props) => props.borderColor || "var(--color-light)"};
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 1.5rem;
  height: 54px;
  width: 180px;
  box-sizing: border-box;
  ${(props) => props.shadow && 'box-shadow: var(--shadow-default)'};
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  } 
`;

export const ButtonDefault = ({active ,text}: Props) => {
  const borderColor= active &&  'var(--primary-color)';
  const textColor= active && 'var(--primary-color)'
  const shadow = active
  return (
    <ButtonStyled borderColor={borderColor} textColor={textColor} shadow = {shadow} >
      {text}
    </ButtonStyled>
  );
};
