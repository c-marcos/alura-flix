/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

interface LayoutDefaultProps { 
   children: React.ReactNode;
 }

const layoutStyles = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;;
  box-sizing: border-box;
`;
export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <div css={layoutStyles}>
      <Header/>
      <main css={css`flex: 1; width:'100%'`}>
        {children}
      </main>
      <Footer/>
    </div>
  );
}