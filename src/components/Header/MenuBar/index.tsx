/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {ButtonDefault}  from "../../Butoons/ButoonDefault";
import { Link, useLocation } from "react-router-dom";

const linkStyle = css` transition: transform 1s ease, background-color 1s ease;`;

const MenuBarStyle = styled.nav`
   display: flex;
   gap: 16px;
`

export const MenuBar = () => {

   const location = useLocation()

   return (
      <MenuBarStyle>
         <Link to='/' css={linkStyle}>
            <ButtonDefault 
               text='home'
               active={location.pathname === '/' && true}
            />
         </Link>
         <Link to='/new-videos' css={linkStyle}>
            <ButtonDefault 
               text="novo vídeo"
               active={location.pathname === '/new-videos' && true} 
            />
         </Link>
      </MenuBarStyle>
   );
}