/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --primary-color: #2271d1;
        --color-dark-gray: #262626;
        --background-color: #f0f0f0;
        --bg-color-black: #000000;
        --color-frontend: #6bd1ff;
        --color-backend: #00c86f;
        --color-mobile: #ffba05;
        --color-gray-light: #f5f5f5;
        --color-light: #ffffff;
        --texte-gray: #a5a5a5;
        --font-body: "Roboto, sans-serif";
        --shadow-default: inset 4px 4px 12px #2271d1,
          inset -4px -4px 12px #2271d1;
        --color-error: #ff0000;
        --color-success: #00b300;
      }
    `}
  />
);

export default GlobalStyles;
