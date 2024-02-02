import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: fit-content;
  button {
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  span {
    margin: 0 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
