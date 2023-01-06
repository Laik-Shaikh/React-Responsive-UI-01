import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    
`

export const Banner = styled.div`
    padding: 5rem 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1080px) {
        padding: 3rem 1rem;
    }
`

export const Title = styled.div`
    padding: 1px 2.5rem;

    h1 {
        font-size: clamp(2rem, 4vw, 3rem);
        font-family: Plus Jakarta Sans, sans-serif;
        font-weight: 700;
        margin-bottom: 10px;
        text-align: center;
    }

    p{ 
        padding: 0rem 4rem;
        font-family: Inter, sans-serif;
        font-size: 1rem;
        text-align: center;
        font-weight: 500;
        margin-bottom: 2rem;

        @media screen and (max-width: 900px){
            padding: 0 1rem;
        }
    }

    @media screen and (max-width: 900px){
            padding: 0 0.1rem;
        }
`

export const ImageContainer = styled.div`
    width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Image = styled.img`
    height: auto;
    overflow-x: scroll;
    width: 100%;

    @media screen and (max-width: 1080px) {
        width: auto;
        padding: 3rem 1rem;
    }
`