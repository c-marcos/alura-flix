/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SlideBanner } from "../../../components/Slides/SlideBanner";

export const Banner = () => {
   return (
      <div css={css` width: 100%; height:700px;`}>
         <SlideBanner/>
      </div>
   );
};


