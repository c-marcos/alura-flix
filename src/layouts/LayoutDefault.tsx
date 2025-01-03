/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

interface LayoutDefaultProps { 
   children: React.ReactNode;
   HeaderColor?: string
 }

const layoutStyles = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;;
  box-sizing: border-box;
`;
export const LayoutDefault = ({ children, HeaderColor }: LayoutDefaultProps) => {
  return (
    <div css={layoutStyles}>
      <Header bgColor= {HeaderColor}/>
      <main css={css`flex: 1; width:'100%'; display: flex; flex-direction: column;`}>
        {children}
      </main>
      <Footer/>
    </div>
  );
}