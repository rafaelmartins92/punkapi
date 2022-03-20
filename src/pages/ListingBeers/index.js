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

import { GetBeers } from "../../services/beers";
import BeersContext from "../../context";

import hero from "../../assets/images/hero.png";
import { Button } from "../../components/Button/styles";

function ListingBeers() {
  const { beersList, setBeersList } = useContext(BeersContext);

  useEffect(() => {
    loadPage();
  });

  async function loadPage() {
    const responseGetBeers = await GetBeers();

    !beersList && setBeersList(responseGetBeers);
  }

  return (
    <>
      {console.log("Listing Page: beersList", beersList)}
      <BeersContext.Provider value={{ beersList, setBeersList }}>
        <HeroContainer className="container">
          <HeroText>
            <HeroTitle>Cansado de não saber qual gelada escolher?</HeroTitle>
            <HeroSubtitle>
              Relaxa, a gente preparou uma listinha com as melhores pra você!
            </HeroSubtitle>
            <Button to="/add-beer">Cadastrar cerveja</Button>
          </HeroText>

          <HeroImage src={hero} alt="" />
        </HeroContainer>
        <BeerListContainer className="container">
          {beersList &&
            beersList.map((beer) => (
              <BeerContainer key={beer.id}>
                <BeerImage src={beer.image_url} alt="" />
                <BeerName>{beer.name}</BeerName>
                <BeerDescription>{beer.description}</BeerDescription>
              </BeerContainer>
            ))}
        </BeerListContainer>
      </BeersContext.Provider>
    </>
  );
}

export default ListingBeers;
