import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1.875rem;

    margin-bottom: 4.25rem;

    .content-size{
        width: 23.125rem;
    }

    img, span, h2,p{
        display: block;
        margin-bottom: 0.5rem;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
    }

    span, p {
        font-size: 1rem;
    }

`