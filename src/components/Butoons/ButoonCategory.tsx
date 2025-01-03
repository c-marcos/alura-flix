import styled from "@emotion/styled";

interface ButoonProps{
   w?: string;
   h?: string;
   fontS?: string;
   bgColor?: string;
}

type Props = ButoonProps & {text: string}

const ButoonStyled = styled.button<ButoonProps>`
   width: ${(props) => props.w || '432px'};
   height: ${(props) => props.h || '70px'};
   background: ${(props) => props.bgColor ? `var(${props.bgColor})` : 'var(--color-frontend)'};
   font-size: ${(props) => props.fontS || '32px'};
   color: var(--color-light);
   text-transform: uppercase;
   font-weight: 900;
   border-radius: 15px;
   cursor: pointer;
`

export const ButoonCategory = ({text, h, w, bgColor, fontS, ...rest}:Props) => {

   return(
      <ButoonStyled {...rest} w={w} h={h} bgColor={bgColor} fontS={fontS}>
         {text}
      </ButoonStyled>
   )
}