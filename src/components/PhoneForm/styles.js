import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1,25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%; 
  max-width: 400px; 
  margin: -1rem auto; 

  label {
    margin-bottom: 15px;
  }

  .myStylizedLink {
    margin-top: 20px;
    text-align: center;
    display: block; 
  }
`;

