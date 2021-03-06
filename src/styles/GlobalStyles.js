import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --base-size: 16px;
        --background-color-grey: #f0f0f0;
        --white: #ffffff;
        --black: #333333;
        --grey1: #808080;
        --grey2: #c3c3c3;
    }

    body {
        background-color: var(--background-color-grey);
        font-family: 'Inter', sans-serif;
        margin: 0;
    }
    
    h2, h3, p {
        margin-top: 0;
        margin-bottom: var(--base-size);
    }
    
    h2 {
        font-weight: 600;
        font-size: 6.5rem;
    }
    
    h3 {
        font-family: "Inter Medium", sans-serif;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: calc(var(--base-size) / 8);
    }
    
    p {
        font-weight: 400;
        font-size: 1.15rem;
    }

    blockquote {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.2;
        color: rgba(255, 255, 255, 0.8);
    }
`;

export default GlobalStyles;
