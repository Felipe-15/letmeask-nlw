import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%
    }

    body, input, button, text-area {
        font: 400 1.6rem "Roboto", sans-serif;
    }
`;

export default GlobalStyles;
