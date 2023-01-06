import styled from "styled-components";

export const First = styled.div`
    max-width: 700px;
    margin-bottom: 3rem;
    padding: 0 3rem;
`; 

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    overflow: scroll;
    
    margin-top: 3rem;
    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 900px) {
        display: flex;
        width: 100% !important;
    }
`;


export const Content = styled.div`
    background: #FFFFFF;
    box-shadow: 1px 1px 80px rgba(21, 21, 49, 0.05);
    border-radius: 2rem;
    padding: 2rem;

    @media screen and (max-width: 1000px) {
     width: 100% !important;
     flex: 0 0 50%;
    }

    @media screen and (max-width: 780px) {
     width: 100% !important;
     flex: 0 0 100%;
    }
`

export const LightBold = styled.p`
    font-family: Plus Jakarta Sans, sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;
`

export const StarFlex = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    column-gap: 3px;
    margin-bottom: 1rem;
`

export const Author = styled.p`
    font-family: Plus Jakarta Sans, sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.6rem;
`

export const Small = styled.p`
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    margin-top: 10px;
`