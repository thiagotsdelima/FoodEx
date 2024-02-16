import React from 'react';
import { Container, SeasoningBox } from './styles';

export function Seasoning({ seasonings }) {
  return (
    <Container>
      {seasonings.map((seasoning, index) => (
        <SeasoningBox key={index}>{seasoning.name}</SeasoningBox>
      ))}
    </Container>
  );
}