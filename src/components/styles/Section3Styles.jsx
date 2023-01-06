import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    margin-top: 5rem;
`;

export const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    padding: 1rem;

    @media screen and (max-width: 1000px) {
        width: 100% !important;
        padding: 1rem 0.5rem;
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 3rem;
    align-items: center;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Content = styled.div`
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    max-width: 430px;
    justify-content: center;
    align-items: flex-start;
    row-gap: 20px;

    @media screen and (max-width: 1000px) {
        max-width: auto;
    }
`;

export const Bold = styled.h1`
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-family: Plus Jakarta Sans, sans-serif;
    font-weight: 700;
    color:  #151531;
    margin-bottom: 1rem;
`

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
        padding: 1rem;
    }
`

export const First = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`

export const ItemCont = styled.div`
    background: #FFFFFF;
    box-shadow: 1px 1px 80px rgba(21, 21, 49, 0.05);
    border-radius: 2rem;
`

export const Item = styled.div`
    padding: 2rem;
`

export const Icon = styled.img`
    width: 18%;
`

export const BoldText = styled.p`
    margin-top: 0.7rem;
    font-family: Plus Jakarta Sans, sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.6rem;
` 

export const LightText = styled.p`
    margin-top: 0.7rem;
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.2rem;
`
