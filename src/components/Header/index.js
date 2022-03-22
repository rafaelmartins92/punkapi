import React from "react";

import { Container, HeaderContainer, ImageLogo, Link } from "./styles";

import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <>
      <Container>
        <HeaderContainer>
          <a
            href="https://rafaelmartins92.github.io/portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            <ImageLogo
              src={logo}
              alt="Logo de Rafael Martins, letra R na cor branca e letra M na cor amarela"
            />
          </a>
          <nav>
            <Link to="/">Todas cervejas</Link>
            <Link to="/cadastrar-cerveja">Cadastrar cerveja</Link>
          </nav>
        </HeaderContainer>
      </Container>
    </>
  );
}

export default Header;
