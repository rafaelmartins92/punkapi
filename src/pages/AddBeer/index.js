import React, { useContext } from "react";
import { useNavigate } from "react-router";

import {
  Container,
  FormContainer,
  FormTitle,
  FormSubtitle,
  FormFields,
  InputBox,
  Input,
  InputLabel,
  Buttons,
  FormButton,
} from "./styles";

import BeersContext from "../../context";
import { Button } from "../../components/Button/styles";

function AddBeer() {
  const navigate = useNavigate();
  const { beersList, setBeersList, inputVal, setInputValue } =
    useContext(BeersContext);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputVal, [name]: value });
  }

  function addNewBeer(event) {
    event.preventDefault();
    setBeersList([
      {
        id: beersList.length + 1,
        image_url: inputVal.image_url,
        name: inputVal.name,
        description: inputVal.description,
      },
      ...beersList,
    ]);
    setInputValue("");
    navigate("/");
  }

  return (
    <>
      {console.log("Add Beer Page: beersList", beersList)}
      <BeersContext.Provider
        value={{ beersList, setBeersList, inputVal, setInputValue }}
      >
        <Container>
          <FormContainer onSubmit={addNewBeer}>
            <FormTitle>
              Conhece alguma cerveja que deveria estar na nossa lista?
            </FormTitle>
            <FormSubtitle className="">
              Ajuda os outros cervejeiros e adiciona essa delícia ai! 🍻
            </FormSubtitle>
            <FormFields>
              <InputBox className="input-box">
                <Input
                  type="text"
                  className="image_url"
                  name="image_url"
                  placeholder="URL da imagem"
                  defaultValue={inputVal.image_url}
                  onChange={handleChange}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "A gente precisa da URL da imagem da cerveja"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
                <InputLabel htmlFor="image_url">
                  URL da imagem da cerveja
                </InputLabel>
              </InputBox>
              <InputBox className="input-box">
                <Input
                  type="text"
                  className="name"
                  name="name"
                  placeholder="Nome da cerveja"
                  defaultValue={inputVal.name}
                  onChange={handleChange}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "A gente precisa do nome da cerveja"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
                <InputLabel htmlFor="name">Nome da cerveja</InputLabel>
              </InputBox>
              <InputBox className="input-box">
                <Input
                  type="text"
                  className="description"
                  name="description"
                  placeholder="Descrição da cerveja"
                  defaultValue={inputVal.description}
                  onChange={handleChange}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "A gente precisa de uma descrição pra cerveja"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
                <InputLabel htmlFor="description">
                  Descrição da cerveja
                </InputLabel>
              </InputBox>
              <Buttons className="buttons">
                <Button to="/" className="secondary">
                  Voltar para lista
                </Button>
                <FormButton type="submit" className="button">
                  Adicionar cerveja
                </FormButton>
              </Buttons>
            </FormFields>
          </FormContainer>
        </Container>
      </BeersContext.Provider>
    </>
  );
}

export default AddBeer;
