import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    body {
        background-color: #DFDFDF;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }

`;
