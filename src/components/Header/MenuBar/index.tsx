import styled from "@emotion/styled";
import {ButtonDefault}  from "../../Butoons/ButoonDefault";


const MenuBarStyle = styled.nav`
   display: flex;
   gap: 16px;
`

export const MenuBar = () => {
   return (
      <MenuBarStyle>
         <ButtonDefault text='home' shadow/>
         <ButtonDefault text="novo vídeo" textColor='var(--color-gray-light)' borderColor="var(--color-light)"/>
      </MenuBarStyle>
   );
}