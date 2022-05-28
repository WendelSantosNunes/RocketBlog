import styled from "styled-components";

export const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;   

    padding-bottom: 64px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ul{
        display: flex;
        align-items: center;
        gap: 2rem;
       
        list-style: none;

        a{
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            font-family: Roboto;
        }

        li.selected{
            border-left: 0.1875rem solid var(--green);
            padding-left: 0.1875rem;
        }

    }
    
    form{
        display: flex;
        align-items: center;

        input {
            background-color: var(--dark-bg);
            color: var(--light-purple);
            border: 0;

            padding:0.875rem 0 0.875rem 1.5625rem;
        }
        
        button{
            background-color: var(--button-bg);
            border: 0;
            padding: 0.5rem 0;

            display: flex;
            align-items: center;
            justify-content: center;

            width: 70px;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.8)
            }
        }
    }
`

