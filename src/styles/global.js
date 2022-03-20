import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --primary: #FFCB74;
  --white: #F6F6F6;
  --black: #111111;
  --black-light: #2F2F2F;
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
  background-color: var(--white);
}

html {
  font-size: 62.5%;
}

.container {
  width: 100%;
  max-width: 124.8rem;
  padding: 0 1.6rem;
  margin: 0 auto;
}
`;

export default GlobalStyle;
