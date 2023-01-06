import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    margin-bottom: 4rem;
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 80%;

    @media screen and (max-width: 1080px){
        margin: 0;
        width: 100%;
    }

`

export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding-bottom: 5rem;
    column-gap: 5rem;

    @media screen and (max-width: 1080px){
        justify-content: center;
        flex-direction: column;
        row-gap: 20px;
        column-gap: 0 !important;
    }
`;

export const SFlex = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding-bottom: 5rem;
    column-gap: 5rem;

    @media screen and (max-width: 1080px){
        justify-content: center;
        flex-direction: column;
        row-gap: 20px;
        column-gap: 0 !important;
    }
`;


export const Item1 = styled.div`
    @media screen and (max-width: 900px) {
        
    }
`;

export const Item2 = styled.div`
    max-width: 50%;
    @media screen and (max-width: 1080px){
        max-width: 100%;
        z-index: 9999;
    }
`;

export const Image = styled.img`
    width: 75%;

    @media screen and (max-width: 1080px){
        width: 100%;
        padding: 20px;
        z-index: -999999;
    }
`
export const Left = styled.div`
    max-width: 50%;
    @media screen and (max-width: 1080px){
        max-width: 100%;
        z-index: 9999;
    }
`;

export const Right = styled.img`
    width: 75%;

    @media screen and (max-width: 1080px){
        width: 100%;
        padding: 20px;
        z-index: -999999;
    }
`

export const Content = styled.div`
    padding: 2rem;

    @media screen and (max-width: 1080px){
        padding: 20px !important;
    }

`

export const Bold = styled.h1`
    font-size: clamp(2rem, 4vw, 3rem);
    font-family: Plus Jakarta Sans, sans-serif;
    font-weight: 700;
    color:  #151531;
    margin-bottom: 1rem;
`

export const Light = styled.p`
    font-size: 1rem;
    font-family: Inter, sans-serif;
    font-weight: 500;
    color:   rgba(21, 21, 49, 0.8);
`
export const Logo = styled.img`
    width: 25px;
`

export const ColFlex = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;

export const RowFlex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
`