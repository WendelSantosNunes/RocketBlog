import styled from "styled-components";

export const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;

    padding-bottom: 64px;

    div{
        h1{
            font-family: Poppins, sans-serif;
            font-size: 36px;
            font-weight: bold;
        }

        p{
            font-family: roboto, sans-serif;
            font-size: 16px;

            margin: 16px 0 24px 0;
        }

        a{
            display: flex;
            justify-content: left;
            align-items: center;

            text-decoration: none;
            color: var(--button-bg)
        }
    }
`