import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../components/Button/styles";

import {
  Container,
  CardContainer,
  BeerDescription,
  BeerImage,
  BeerText,
  BeerName,
} from "./styles";

function DetailsBeer() {
  const location = useLocation();
  const beerInfo = location.state;

  return (
    <>
      <Container>
        <CardContainer data-aos="fade-up" data-aos-duration="2000">
          <BeerImage
            src={beerInfo.image_url}
            alt={"Image da cerveja " + beerInfo.name}
          />
          <BeerText>
            <BeerName>{beerInfo.name}</BeerName>
            <BeerDescription>{beerInfo.description}</BeerDescription>
            <Button to="/">Voltar para lista</Button>
          </BeerText>
        </CardContainer>
      </Container>
    </>
  );
}

export default DetailsBeer;
