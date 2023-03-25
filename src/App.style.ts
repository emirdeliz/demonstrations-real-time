import { createGlobalStyle } from 'styled-components';

const BODY_MIN_WIDTH = '300px';

export const Global = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;600;800&display=swap");

  * {
    font-family: Poppins,sans-serif !important;
  }

  html, body, body > div, main {
    margin: 0;
    padding: 0;
		width: 100%;
		height: 100%;
  }

  body {
    min-width: ${BODY_MIN_WIDTH};
  }
`;
