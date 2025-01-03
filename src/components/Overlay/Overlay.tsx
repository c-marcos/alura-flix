import styled from "@emotion/styled";

export const OverlayStyle = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%; /* Ajuste para cobrir todo o banner */
   background-color: rgba(0, 0, 0, 0.7); /* Transparência preta */
   z-index: 10; /* Fica acima do banner */
`