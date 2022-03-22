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

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 57rem;
  margin: auto;
`;

export const FormTitle = styled.h2`
  font-size: 4rem;
  color: var(--black);

  @media (max-width: 475px) {
    font-size: 3.2rem;
  }
`;

export const FormSubtitle = styled.p`
  font-size: 2.4rem;
  color: var(--black-light);
  margin: 1.6rem 0;

  @media (max-width: 475px) {
    font-size: 1.6rem;
  }
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  margin-top: 2.4rem;
  width: 100%;
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  background: none;
  border-radius: 0;
  outline: none;
  border-bottom: 1px solid var(--black);
  color: var(--black-light);
  width: 100%;
  font-size: 1.4rem;

  &::placeholder {
    color: transparent;
  }

  &:focus ~ label,
  &:valid ~ label,
  &:not(:placeholder-shown) ~ label {
    top: -16px;
    color: var(--black);
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  color: var(--black);
  font-size: 1.2rem;

  transition: 0.5s;
`;

export const Buttons = styled.div`
  > :not(:first-child) {
    margin-left: 1.6rem;
  }

  @media (max-width: 475px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    > :not(:first-child) {
      margin-left: 0;
    }

    > :first-child {
      margin-top: 1.6rem;
    }
  }
`;

export const FormButton = styled.button`
  background: var(--black);
  color: var(--primary);
  padding: 1.6rem 2.4rem;
  border-radius: 24px;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  transition: ease-in 0.3s;

  :hover {
    opacity: 0.8;
  }
`;
