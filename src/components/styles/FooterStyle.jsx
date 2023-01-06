import styled from "styled-components";
import { BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';


export const FooterContainer = styled.footer`
    width: 100%;
    margin-top: 5rem;
    background: #151531;
    color: #fff;
`

export const FooterCont = styled.div`
    padding: 4rem;
    display: grid;
    grid-template-columns: 1.3fr 1fr;

    @media screen and (max-width: 870px) {
        grid-template-columns: 1fr;
        padding: 2rem;
    }
`

export const Second = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 2rem;
    gap: 2.5rem; 

    @media screen and (max-width: 870px) {
        margin-top: 2rem;
        gap: 2.5rem; 
        padding-right: 2rem;
    }

    
`

export const Item1 = styled.div`
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.3rem;
    padding-left: 2rem;

    @media screen and (max-width: 870px) {
        max-width: 80%;
        padding: 0.6rem;
        gap: 1.4rem;
    }
`;

export const Item2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
`

export const RowFlex = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 10px;
`;

export const ColFlex = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const Bold = styled.p`
    color: #FFFAFF;
    font-family: Plus Jakarta Sans, sans-serif;
    font-weight: 600;
    font-size: clamp(1rem, 4vw, 1.3rem);
`;

export const Light = styled.p`
    color: rgba(255, 250, 255, 0.8);
    font-family: Inter, sans-serif;
    font-weight: ${({ Weight }) => Weight};
    font-size: clamp(0.7rem, 4vw, 1rem);
`

export const LinkedIn = styled(FaLinkedinIn)`
    color: #fff;
    font-size: 1.5rem;
`

export const Twitter = styled(BsTwitter)`
    color: #fff;
    font-size: 1.5rem;
`

export const Mail = styled(MdEmail)`
    color: #fff;
    font-size: 1.5rem;
`

export const BottonContent = styled.div`
    padding: 2rem 4rem 4rem 4rem;

    @media screen and (max-width: 870px) {
        padding: 1.5rem 1.5rem 4rem 1.5rem;
        
    }
`

export const P = styled.p`
    color:  #FFFAFF;
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: clamp(1rem, 4vw, 1rem);
    padding-left: 2rem;
`

export const Span = styled.span`
    color: ${({ Color }) => Color};
`