import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }

  body {
    background-color: rgb(18, 18, 20);
    color: #ddd;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Ubuntu', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
