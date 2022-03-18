import React, { useState, useEffect } from "react";

import { GetBeers } from "../../services/beers";

import {
  Container,
  BeerContainer,
  BeerImage,
  BeerName,
  BeerDescription,
} from "./styles";

function ListingBeers() {
  const [beersList, setBeersList] = useState();

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = async () => {
    const response = await GetBeers();
    setBeersList(response);
  };
  return (
    <>
      {console.log("beersList", beersList)}
      <Container>
        {beersList &&
          beersList.map((beer) => (
            <BeerContainer>
              <BeerImage src={beer.image_url} alt="" />
              <BeerName>{beer.name}</BeerName>
              <BeerDescription>{beer.description}</BeerDescription>
            </BeerContainer>
          ))}
      </Container>
    </>
  );
}

export default ListingBeers;
