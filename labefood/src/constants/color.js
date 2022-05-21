import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: #0000;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;        
    }

    h3, span{
        margin: 0;
        padding: 0;
    }

    :root {
        //colors
        --green: #5CB646;
        --black: #000000;
        --white: white;
        --blue: blue;
        --grey: grey;
        --black-25: rgba(0, 0, 0, 0.25);
        --greyish: #b8b8b8;
        --red: #E8222E;
        --lipstick: #e8222e;


        //fontes
        --font-roboto: Roboto;
        --font-size: 16px;

    }
`