import styled from "styled-components";
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

export const Nav = styled.nav`
    padding: 0rem 3rem;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;    
    overflow-y: hidden;
    height: ${({ isToggle }) => isToggle ? '28rem' : '4rem'};
    min-height: 9vh;
    transition: 1s ease-in-out;
    overflow: hidden;

    @media screen and (max-width: 1080px) {
        display: block;
        overflow-y: hidden;
    }
`
export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
    align-items: center;
    column-gap: 10px;
`

export const Title = styled.p`
    color: #151531;
    font-family: Plus Jakarta Sans, sans-serif;
    font-weight: 700;
    font-size: 2rem;
    
` 

export const Logo = styled.img`
    width: 33.33px;
    height: 33.33px;
`

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    overflow: hidden;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
        padding-top: 1rem;

    }
    
`

export const NavLinkItem = styled.li`
    padding: 1.4rem 1rem;
    font-size: 1.1rem;
    position: relative;
    font-family: Inter, sans-serif;
    transition: 0.5s ease-in;
    scroll-behavior: auto;

    a {
        &:hover{
            color: #9D0AFF;
        }
    }

    @media screen and (max-width: 1080px) {
        padding: 0rem 1rem;
    }
`

export const RightPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1080px) {
        padding-top: 1rem;
        justify-content: flex-start;
    }
` 

export const Cart = styled.a`
    margin-left: 8px;
    margin-right: 1.5rem;
    color: #9D0AFF;
    font-size: 1rem;
`

export const HamBurgerIconContainer = styled.div`
    position: absolute;
    top: 0%;
    width: 97%;
    display: none;

    @media screen and (max-width: 1080px) {
        display: flex;
        justify-content: flex-end;
    }
`

export const HamBurgerIcon = styled(GiHamburgerMenu)`
    display: ${({ isToggle }) => !isToggle ? 'initial': 'none'};
    background-color: #9D0AFF;
    padding: .5rem .6rem;
    color: #fff;
    border-radius: 12px;
    margin-top: 1.2rem;
    font-size: 3rem;   
    
`
export const Close = styled(CgClose)`
    display: ${({ isToggle }) => isToggle ? 'initial' : 'none'};
    background-color: #9D0AFF;
    padding: .5rem .6rem;
    color: #fff;
    border-radius: 12px;
    margin-top: 1.2rem;
    font-size: 3rem; 
`

