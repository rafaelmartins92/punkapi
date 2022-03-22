import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background: var(--black);
  color: var(--primary);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 124.8rem;
  padding: 0 1.6rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageLogo = styled.img`
  width: 4rem;
`;

export const Link = styled(NavLink)`
  color: var(--primary);
  padding: 1.6rem;
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;

  &.active {
    border-bottom: 4px solid var(--primary);
  }

  @media (max-width: 475px) {
    font-size: 1rem;
  }
`;
