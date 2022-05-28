import styled from "styled-components";

export const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;
`

export const Sections = styled.section`
   margin: 4rem 0;

   display: flex;
   justify-content: space-between;

   .featuredPublication{
        max-width: 36.1875rem;
        font-family: roboto, arial;

        
        img, h2  {
            margin-bottom: 1rem;
        }

        h2{
            font-size: 1.5rem;
            font-weight: bold;
        }

        span, p {
            display: block;
            margin-bottom: 1rem;

            font-size: 1rem;
        }
    }

   aside{
        max-width: 29.5rem;

        h2 {
            display: block;
            margin-bottom: 0.5rem;

            font-size: 1.5rem;
            font-weight: bold;
        }

        span, p {
            display: block;
            margin-bottom: 0.5rem;

            font-size: 1rem;
        }

        .separation {
            margin-bottom: 3.0625rem;
        }
   }

`