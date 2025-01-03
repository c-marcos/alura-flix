/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SlideBanner } from "../../../components/Slides/SlideBanner";

const bannerStyle = css`
   width: 100%;
   height: 700px;
   border-bottom: 4px solid var(--primary-color);
`;
export const Banner = () => {
   return (
      <div css={bannerStyle}>
         <SlideBanner/>
      </div>
   );
};


