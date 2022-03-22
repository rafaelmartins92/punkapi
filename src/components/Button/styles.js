import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: var(--black);
  color: var(--primary);
  padding: 1.6rem 2.4rem;
  max-width: fit-content;
  border-radius: 24px;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  transition: 0.3s ease-in;

  :hover {
    opacity: 0.8;
  }

  &.secondary {
    background: none;
    border: 2px solid var(--black);
    color: var(--black);

    :hover {
      background: var(--black);
      color: var(--primary);
    }
  }

  @media (max-width: 975px) {
    margin: 0 auto;
  }
`;

export const SeeMore = styled(Link)`
  border: 1px solid var(--black-light);
  color: var(--black-light);
  padding: 0.8rem 1.6rem;
  max-width: fit-content;
  border-radius: 24px;
  text-transform: uppercase;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease-in;
  transition: color 0.5s ease-in;

  :hover {
    background-color: var(--black);
    border: none;
    color: var(--primary);
  }

  @media (max-width: 975px) {
    margin: 0 auto;
  }
`;
