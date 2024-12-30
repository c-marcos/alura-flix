/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --primary-color: #2271D1;
        --color-dark-gray: #262626;
        --background-color: #f0f0f0;
        --color-frontend: #6BD1FF;
        --color-backend: #00C86F;
        --color-mobile: #FFBA05;
        --color-gray-light: #F5F5F5;
        --color-light: #FFFFFF;
        --font-body: 'Roboto, sans-serif';
      }
    `}
  />
);

export default GlobalStyles;
