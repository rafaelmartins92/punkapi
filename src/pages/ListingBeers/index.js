import React, { useContext, useEffect } from "react";

import {
  HeroContainer,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroImage,
  BeerListContainer,
  BeerContainer,
  BeerImage,
  BeerName,
  BeerDescription,
} from "./styles";

import BeersContext from "../../context";
import { GetBeers } from "../../services/beers";
import { Button, SeeMore } from "../../components/Button/styles";

import hero from "../../assets/images/hero.png";

import AOS from "aos";
import "aos/dist/aos.css";

function ListingBeers() {
  const { beersList, setBeersList } = useContext(BeersContext);

  useEffect(() => {
    loadPage();
    AOS.init();
    AOS.refresh();
  });

  async function loadPage() {
    const responseGetBeers = await GetBeers();

    !beersList && setBeersList(responseGetBeers);
  }

  return (
    <>
      <BeersContext.Provider value={{ beersList, setBeersList }}>
        <HeroContainer id="hero_container">
          <HeroText data-aos="fade-right" data-aos-duration="2000">
            <HeroTitle>Cansado de não saber qual gelada escolher?</HeroTitle>
            <HeroSubtitle>
              Relaxa, a gente preparou uma listinha com as melhores pra você!
            </HeroSubtitle>
            <Button to="/cadastrar-cerveja" id="btn-go_to_add_beer">
              Cadastrar cerveja
            </Button>
          </HeroText>
          <HeroImage
            src={hero}
            alt="Desenho 3D de um homem feliz com uma mão na cintura e a outra apontando para o texto principal da pagina"
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </HeroContainer>
        <BeerListContainer>
          {beersList &&
            beersList.map((beer) => (
              <BeerContainer
                key={beer.id}
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <BeerImage
                  src={beer.image_url}
                  alt={"Image da cerveja " + beer.name}
                />
                <BeerName>{beer.name}</BeerName>
                <BeerDescription>{beer.description}</BeerDescription>
                <SeeMore
                  to={"/detalhes-cerveja"}
                  state={{
                    image_url: beer.image_url,
                    name: beer.name,
                    description: beer.description,
                  }}
                >
                  Ver mais
                </SeeMore>
              </BeerContainer>
            ))}
        </BeerListContainer>
      </BeersContext.Provider>
    </>
  );
}

export default ListingBeers;
