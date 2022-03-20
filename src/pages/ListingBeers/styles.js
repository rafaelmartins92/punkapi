import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  font-size: 5.2rem;
  color: var(--black);
`;

export const HeroSubtitle = styled.p`
  font-size: 2.4rem;
  color: var(--black-light);
  margin: 2.4rem 0;
`;

export const HeroImage = styled.img`
  height: 60rem;
  transform: translateX(24px);
`;

export const BeerListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin: 3.2rem auto;
`;

export const BeerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 280px;
  width: 280px;
`;

export const BeerImage = styled.img`
  height: 24rem;
`;

export const BeerName = styled.h2`
  margin: 1.6rem 0;
`;
export const BeerDescription = styled.p``;
