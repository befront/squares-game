import { createGlobalStyle } from 'styled-components';

export const ResetStyles = createGlobalStyle`
    body {
        margin: 0;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
    }  

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    ul[class],
    ol[class] {
        list-style: none;
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd,
    input {
        padding: 0;
        margin: 0;
    }


    img {
        max-width: 100%;
        display: block;
    }   

    input,
    button,
    textarea,
    select {
        font: inherit;
    }
`;