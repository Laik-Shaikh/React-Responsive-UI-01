import styled from "styled-components";


export const Container = styled.div`
    width: 70%;
    background-color: #151531;
    margin: 0 auto;
    border-radius: 2rem;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 800px) {
        width: 90%;
    }
`

export const Cont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
`

export const ItemCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 7rem; 
    max-width: 730px;
    text-align: center;

    @media screen and (max-width: 800px) {
       padding: 5rem 5rem;
    }

    @media screen and (max-width: 600px) {
       padding: 5rem 1.2rem;
    }
`

export const Bold = styled.p`
    font-weight: 700;
    color: #FFFAFF;
    font-size:  clamp(2rem, 4vw, 3rem);
    line-height: clamp(2.5rem, 4vw, 3.6rem);
    font-family: Plus Jakarta Sans, sans-serif;
`

export const Light = styled.p`
    padding: 10px 3rem;
    color: rgba(255, 250, 255, 0.8);
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: clamp(0.7rem, 4vw, 1rem);
    text-align: center;
    margin-top: 0.5rem;

    @media screen and (max-width: 600px) {
       padding: 10px;
    }
`
export const ButtonContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    gap: 25px;

    @media screen and (max-width: 780px) {
       flex-direction: column;
    }
`

export const Image1 = styled.img`
    position: absolute;
    left: -10.04px;
    top: 0.38px;
    margin: 0.3rem;
    transform: rotate(-2deg);
    width: 18%;
`

export const Image2 = styled.img`
    position: absolute;
    right: -1px;
    bottom: -6.68px;
    transform: rotate(-2deg);
    width: 18%;
`