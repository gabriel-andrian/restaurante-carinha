import React, { useState } from 'react';
import { Card } from '../styled-common';
import { Container, Title, Description } from './styled';

const CardOrder = () => {
  return (
    <Card style={{ width: '95%', height: 'fit-content', minHeight: '50px' }}>
      <Container>
        <Title> 1 x Sabão de mesa</Title>
        <Title>R$ 100,00</Title>
      </Container>
      <Description>Observações: Tirar a cebola e não sei mais o que rsrsrs</Description>
    </Card>
  );
};

export default CardOrder;
