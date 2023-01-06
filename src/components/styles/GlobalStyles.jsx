import { createGlobalStyle } from "styled-components"; 

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    font-family: 'Plus Jakarta Sans';
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.body};
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
    font-family: Inter, sans-serif;
  }
`

export default GlobalStyles;