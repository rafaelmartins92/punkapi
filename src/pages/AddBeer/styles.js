import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  margin-top: 2.4rem;
  width: 100%;
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--black);
  color: var(--black);
  width: 100%;

  &::placeholder {
    color: transparent;
  }

  &:focus ~ label,
  &:valid ~ label,
  &:not(:placeholder-shown) ~ label {
    top: -16px;
    font-size: 12px;
    color: var(--black);
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  color: var(--black);

  transition: 0.5s;
`;

export const FormButton = styled.button`
  background: var(--black);
  color: var(--primary);
  padding: 1.6rem 2.4rem;
  border-radius: 24px;
  text-transform: uppercase;
  font-weight: 500;
`;
