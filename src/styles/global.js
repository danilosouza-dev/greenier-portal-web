import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F3F5F7;
    --amarelo: #FCE10F;
    --backgroundcard: #282828;
    --text-title: #FFF;
    --text-description: #a7a7a7;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }
  body {
    font-family: 'Poppins', sans-serif;
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  h1 {
    font-weight: 700;
  }
  h2 {
    font-weight: 400;
  }
  p {
    font-weight: 300;
  }
  button {
    cursor: pointer;
  }
`;