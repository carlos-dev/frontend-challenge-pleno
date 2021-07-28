import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .container {
    max-width: 1140px;
    width: 100%;
    margin: auto;
  }
`;

export default GlobalStyles;