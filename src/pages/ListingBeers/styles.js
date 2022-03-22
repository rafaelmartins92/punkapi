import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 124.8rem;
  padding: 0 1.6rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 975px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 975px) {
    width: 100%;
    margin-bottom: 2.4rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 5.2rem;
  color: var(--black);

  @media (max-width: 475px) {
    font-size: 4rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 2.4rem;
  color: var(--black-light);
  margin: 2.4rem 0;

  @media (max-width: 475px) {
    font-size: 1.6rem;
    margin: 1.6rem 0;
  }
`;

export const HeroImage = styled.img`
  height: 60rem;

  @media (max-width: 475px) {
    height: auto;
    margin-top: 3.2rem;
  }
`;

export const BeerListContainer = styled.div`
  width: 100%;
  max-width: 124.8rem;
  padding: 0 1.6rem 3.2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 3.2rem;

  @media (max-width: 975px) {
    padding-bottom: 3.2rem;
  }
`;

export const BeerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 28rem;
  width: 28rem;
  background-color: var(--white-light);
  padding: 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
`;

export const BeerImage = styled.img`
  height: 24rem;
`;

export const BeerName = styled.h3`
  margin: 1.6rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: var(--black);
  font-size: 2rem;
  font-weight: 700;
`;
export const BeerDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 6.8rem;
  color: var(--black-light);
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1.6rem;
`;
