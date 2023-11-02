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

    #root {
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
    }

    header {
        background-color: #fff;
        border-bottom: 1px solid var(--gray-clr);
        position: sticky;
        top: 0;
        z-index: 5;
        display: flex;
        align-items: center;
    }

    nav {
        height: 64px;
        max-width: var(--max-width);
        width: 100%;
        padding-inline: 10px;
        margin-inline: auto;
    }

    .brand-logo {
        color: var(--primary-clr);

        & h1 {
            margin: 0;
            font-size: 2em;
        }
    }

    main {
        max-width: var(--max-width);
        width: 100%;
        margin-inline: auto;
        padding: 20px 10px;
    }

    footer {
        margin-top: auto;
        text-align: center;
        padding: 15px 10px;
        border-top: 1px solid var(--gray-clr);

        & .copyright-text {
            font-size: 0.8em;
        }
    }
`;

export default GlobalStyle;
