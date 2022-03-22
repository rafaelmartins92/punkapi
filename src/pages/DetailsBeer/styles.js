import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 124.8rem;
  padding: 16rem 1.6rem 3.2rem;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding-top: 8rem;
  }

  @media (max-width: 475px) {
    padding: 4rem 1.6rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: var(--white-light);
  padding: 4rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
  width: fit-content;

  @media (max-width: 600px) {
    margin: 0 auto;
    flex-direction: column;
  }

  @media (max-width: 475px) {
    padding: 4rem 1.6rem;
  }
`;

export const BeerImage = styled.img`
  height: 40rem;
  margin-right: 4rem;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 3.2rem;
  }

  @media (max-width: 475px) {
    height: 32rem;
  }
`;

export const BeerText = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
`;

export const BeerName = styled.h1`
  color: var(--black);
  font-size: 4rem;

  @media (max-width: 475px) {
    font-size: 4rem;
  }
`;

export const BeerDescription = styled.p`
  color: var(--black-light);
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0.8rem 0 2.4rem;
`;
