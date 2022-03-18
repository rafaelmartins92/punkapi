import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --white: #F2F2F2;
    --black: #1a1a1a;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

button {
  background: transparent;
  cursor: pointer;
}

html,
body {
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
  overflow: hidden;
  background-color: var(--white);
}

html {
  font-size: 62.5%;
}
`;

export default GlobalStyle;
