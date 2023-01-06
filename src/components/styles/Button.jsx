import styled from "styled-components";

export const Button = styled.button`
    padding: 0.8rem 1.4rem;
    background-color: ${({ bg }) => bg};
    border: 1px solid ${({ borderColor }) => borderColor};
    border-radius: 1rem;
    margin-right: ${({ marginRight }) => marginRight || 0};
    cursor: pointer;
    color: ${({ color }) => color};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    transition: 0.5s ease-in;

    &:hover {
        background-color: ${({ bg }) => bg==='transparent'? '#9D0AFF' : 'transparent' };
        color: ${({ bg }) => bg==='transparent'? '#fff': '#9D0AFF'};
        transform: scale(0.98);
    }
`