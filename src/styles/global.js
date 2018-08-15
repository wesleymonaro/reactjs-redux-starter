import { injectGlobal } from 'styled-components';

injectGlobal`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #FFF;
    font-family: 'Montserrat', sans-serif;
    color: #000;
  }

  button {
    cursor: pointer;
  }
`
