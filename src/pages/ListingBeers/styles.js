import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

export const BeerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 28rem;
`;

export const BeerImage = styled.img`
  height: 24rem;
`;

export const BeerName = styled.h2`
  margin: 1.6rem 0;
`;
export const BeerDescription = styled.p``;

export const FormContainer = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .fields {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    margin-top: 1.6rem;
  }

  .input-box {
    position: relative;

    input {
      background: none;
      border: none;
      outline: none;
      border-bottom: 1px solid var(--primary);
      color: var(--primary);
      width: 100%;

      &::placeholder {
        color: transparent;
      }

      &:focus ~ label,
      &:valid ~ label,
      &:not(:placeholder-shown) ~ label {
        top: -16px;
        font-size: 12px;
        color: var(--primary);
      }
    }

    label {
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      color: var(--primary);

      transition: 0.5s;
    }
  }
`;
