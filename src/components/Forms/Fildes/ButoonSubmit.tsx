import styled from "@emotion/styled";

interface ButtonProps {
  borderColor?: string;
  textColor?: string;
  bgColor?: string;
  shadow?: boolean;
}

type Props = { text: string } & ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>; // Aceita qualquer evento de button

const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${props => props.bgColor || "transparent"};
  color: var(${(props) => props.borderColor || "--color-light"});
  border: 2px solid var(${(props) => props.borderColor || "--color-gray-light"});
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 1.5rem;
  height: 54px;
  width: 180px;
  box-sizing: border-box;
  box-shadow: ${props => (props.shadow ? "var(--shadow-default)" : "none")};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonSubmit = ({text, bgColor, borderColor, shadow, textColor, ...rest}: Props) => {
  return (
    <ButtonStyled
      type="submit"
      borderColor={borderColor}
      textColor={textColor}
      shadow={shadow}
      bgColor={bgColor}
      {...rest}  // Passa todos os eventos, incluindo onClick, onFocus, onBlur, etc.
    >
      {text}
    </ButtonStyled>
  );
};
