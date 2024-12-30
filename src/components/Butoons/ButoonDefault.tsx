import styled from "@emotion/styled";

interface ButtonProps {
  borderColor?: string; 
  textColor?: string;  
  shadow?: boolean;
}
type Props = ButtonProps & { text: string}

const ButtonStyled = styled.button<ButtonProps>`
  background-color: #000000;
  color: ${(props) => props.textColor || "var(--primary-color)"};
  border: 2px solid ${(props) => props.borderColor || "var(--primary-color)"};
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 1.5rem;
  height: 54px;
  width: 180px;
 ${(props) => props.shadow && 'box-shadow: inset 4px 4px 12px var(--primary-color), inset -4px -4px 12px var(--primary-color)'};
  cursor: pointer;
`;

export const ButtonDefault = ({borderColor, textColor, shadow, text}: Props) => {
  return (
    <ButtonStyled borderColor={borderColor} textColor={textColor} shadow = {shadow} >
      {text}
    </ButtonStyled>
  );
};
