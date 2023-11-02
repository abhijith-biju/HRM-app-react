import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        --max-width: 1440px;
        --primary-font: 'Roboto', sans-serif;
        --primary-clr: #007af5;
        --primary-clr-accent: #0066cc;
        --gray-clr: #bdbdbd;
    }

    html,
    body,
    #root {
        height: 100%;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: var(--primary-font);
    }

    .material-symbols-rounded {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
    }

    main {
        max-width: var(--max-width);
        width: 100%;
        margin-inline: auto;
        padding: 20px 10px;
    }
`;

export default GlobalStyle;
