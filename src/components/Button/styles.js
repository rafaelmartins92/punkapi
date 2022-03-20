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
  transition: ease-in 0.3s;

  :hover {
    opacity: 0.8;
  }

  &.secondary {
    background: none;
    border: 2px solid var(--primary);

    :hover {
      background: var(--black);
      border: none;
    }
  }

  @media (max-width: 975px) {
    margin: 0 auto;
  }
`;
