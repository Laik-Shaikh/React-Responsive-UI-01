import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
`

export const Container = styled.div` 
    margin: 0 auto;
    /* background-color: brown; */
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 6rem;
    margin-bottom: 6rem;

    @media screen and (max-width: 780px ){
        width: 100% !important;
        display: block;
    }
`

export const Cont = styled.div`
   display: flex;


`

export const Item = styled.div`
    display: flex;
    max-width: 60%;
    height: auto;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 780px ){
        max-width: 100% !important;
    }

`
export const Title = styled.h1`
  color: #151531;
  font-family: Plus Jakarta Sans, sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
`;

export const Para = styled.p`
padding: 1rem 5rem ;
  color: rgba(21, 21, 49, 0.8);
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: clamp(0.7rem, 4vw, 1rem);
  text-align: center;
  line-height: 1.3rem;
`;

export const GridContainer = styled.div`
    width: 100%;
    padding: 2rem;
    position: relative;
`;

export const Grid = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    /* position: relative; */

    @media screen and (max-width: 1080px ){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 780px ){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Item1 = styled.div `
    background:  #FFFFFF;
    box-shadow: 0px 8px 80px rgba(21, 21, 49, 0.05);
    border-radius: 2rem;
`;

export const Content = styled.div`
    padding: 2rem;
`;

export const Flex = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;


export const Bold = styled.p`
    font-weight: 700;
    font-family: Plus Jakarta Sans, sans-serif;
    font-size: 1.3rem;
    color: #151531;
    line-height: 2rem;
`

export const Light = styled.p`
    font-weight: 500;
    font-family: Inter, sans-serif;
    font-size: 0.8rem;
    color:  rgba(21, 21, 49, 0.8);
    line-height: 1.2rem;
`