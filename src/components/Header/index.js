import React from "react";

import { Container, HeaderContainer, ImageLogo, Link } from "./styles";

import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <>
      <Container>
        <HeaderContainer className="container">
          <a
            href="https://rafaelmartins92.github.io/portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            <ImageLogo src={logo} alt="" />
          </a>
          <nav>
            <Link to="/">Todas cervejas</Link>
            <Link to="/add-beer">Cadastrar cerveja</Link>
          </nav>
        </HeaderContainer>
      </Container>
    </>
  );
}

export default Header;
