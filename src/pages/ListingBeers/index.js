import React, { useState, useEffect } from "react";

import { GetBeers } from "../../services/beers";

import {
  Container,
  BeerContainer,
  BeerImage,
  BeerName,
  BeerDescription,
  FormContainer,
} from "./styles";

function ListingBeers() {
  const [beersList, setBeersList] = useState();

  const [inputVal, setInputValue] = useState({
    image_url: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = async () => {
    const response = await GetBeers();
    setBeersList(response);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputVal, [name]: value });
  }

  const addNewBeer = (event) => {
    event.preventDefault();
    setBeersList([
      ...beersList,
      {
        image_url: inputVal.image_url,
        name: inputVal.name,
        description: inputVal.description,
      },
    ]);
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
      <FormContainer>
        <form className="form py-6" onSubmit={addNewBeer}>
          <h2>Conhece alguma cerveja que deveria estar nesta lista?</h2>
          <p className="py-3">
            Ajude os outros cervejeiros e cadastre essa delicia na nossa lista
          </p>
          <div className="fields">
            <div className="input-box">
              <input
                type="text"
                className="image_url"
                name="image_url"
                placeholder="Url da imagem"
                defaultValue={inputVal.image_url}
                onChange={handleChange}
                required
              />
              <label htmlFor="image_url">Url da imagem</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                className="name"
                name="name"
                placeholder="Nome"
                defaultValue={inputVal.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Nome</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                className="description"
                name="description"
                placeholder="Descrição"
                defaultValue={inputVal.description}
                onChange={handleChange}
                required
              />
              <label htmlFor="description">Descrição</label>
            </div>
            <button type="submit" className="button">
              Enviar
            </button>
          </div>
        </form>
      </FormContainer>
    </>
  );
}

export default ListingBeers;
