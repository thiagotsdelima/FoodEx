import React from 'react';
import { Container, SeasoningTag } from './styles';

export function Seasoning({ seasonings, ...rest }) {
  return (
    <Container {...rest}>
      {seasonings.map((seasoning, index) => (
        <SeasoningTag key={index}>{seasoning.name}</SeasoningTag>
      ))}
    </Container>
  );
}
