import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import {
  Container,
  BeerContainer,
  BeerImage,
  BeerName,
  BeerDescription,
} from "./styles";

import { GetBeers } from "../../services/beers";
import BeersContext from "../../context";

function ListingBeers() {
  const navigate = useNavigate();
  const { beersList, setBeersList } = useContext(BeersContext);

  useEffect(() => {
    loadPage();
  });

  async function loadPage() {
    const responseGetBeers = await GetBeers();

    !beersList && setBeersList(responseGetBeers);
  }

  function handleClick() {
    navigate("/add-beer");
  }

  return (
    <>
      {console.log("Listing Page: beersList", beersList)}
      <BeersContext.Provider value={{ beersList, setBeersList }}>
        <button onClick={handleClick}>Add Beer Page</button>
        <Container>
          {beersList &&
            beersList.map((beer) => (
              <BeerContainer key={beer.id}>
                <BeerImage src={beer.image_url} alt="" />
                <BeerName>{beer.name}</BeerName>
                <BeerDescription>{beer.description}</BeerDescription>
              </BeerContainer>
            ))}
        </Container>
      </BeersContext.Provider>
    </>
  );
}

export default ListingBeers;
