import { createGlobalStyle } from 'styled-components';

export const MainStyles = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        height: 100%;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        line-height: 1;
        color: #23282f;
    }

    #squares-game {
        display: flex;
        flex-flow: column nowrap;
        height: 100%;
    }
`;