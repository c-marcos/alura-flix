import styled from "@emotion/styled";

type Props = {
   color: string;
}

export const TitleForm = styled.h1<Props>`
   font-weight: 700;
   font-size: 60px;
   color: ${props => props.color};
   text-transform: uppercase;
`;