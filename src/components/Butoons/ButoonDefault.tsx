import styled from "@emotion/styled";

interface ButtonProps {
  borderColor?: string | boolean;
  textColor?: string | boolean;
  shadow?: boolean;
  w?: string;
  bgColor?: string;
}
type Props = {
  text: string;
  active?: boolean;
  w?: string;
  bgColor?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || "var(--bg-color-black)"};
  color: ${(props) => props.textColor || "var(--color-light)"};
  border: 2px solid ${(props) => props.borderColor || "var(--color-light)"};
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 1.5rem;
  height: 54px;
  width: ${(props) => props.w || "180px"};
  box-sizing: border-box;
  ${(props) => props.shadow && "box-shadow: var(--shadow-default)"};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonDefault = ({ active, text, w, bgColor, ...rest }: Props) => {
  const borderColor = active && "var(--primary-color)";
  const textColor = active && "var(--primary-color)";
  const shadow = active;
  return (
    <ButtonStyled
      borderColor={borderColor}
      w={w}
      bgColor={bgColor}
      textColor={textColor}
      shadow={shadow}
      {...rest}
    >
      {text}
    </ButtonStyled>
  );
};
