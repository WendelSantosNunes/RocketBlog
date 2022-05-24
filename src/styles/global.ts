import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --purple-bg: #290742;
        --dark-bg: #170027;
        --button-bg: #9e6dc2;
        --white: #fff;
        --light-purple: #fbf6ff;
        --green: #4fff4b;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        // Isso é para deixar mais fácil a utilização do site em dispositivo pequenos
        // Pq utilizar porcentagem ? É necessário para evitar fixa um tamanho
        @media(max-width: 1008px){
            font-size: 93.75%;// 15px
        }

        @media(max-width: 720px){
            font-size:87.5%;// 14px
        }
    }

    body{
        background-color: var(--background-main);
        -webkit-font-smoothing: antialiased; // Isso é para fontes ficarem mais vivas
    }

    button {
        cursor: pointer;
    }
`