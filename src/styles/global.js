import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F3F5F7;
    --title-grey: #2A2F33;
    --subtitle-grey: #707070;
    --grey-default-filter: brightness(0) saturate(100%) invert(64%) sepia(0%) saturate(2781%) hue-rotate(202deg) brightness(69%) contrast(74%);
    --grey-hover-filter: brightness(0) saturate(100%) invert(82%) sepia(8%) saturate(0%) hue-rotate(210deg) brightness(83%) contrast(86%);
    --green-default: #0C9439;
    --green-hover: #1E7A3D;
    --green-default-filter: brightness(0) saturate(100%) invert(28%) sepia(84%) saturate(2277%) hue-rotate(131deg) brightness(94%) contrast(91%);
    --green-hover-filter: brightness(0) saturate(100%) invert(30%) sepia(94%) saturate(422%) hue-rotate(88deg) brightness(98%) contrast(82%);
    --red-hover: #B00020;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #CCCCCC white;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: white;
}

*::-webkit-scrollbar-thumb {
  background-color: #CCCCCC;
  border-radius: 20px;
  border: 3px solid white;
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