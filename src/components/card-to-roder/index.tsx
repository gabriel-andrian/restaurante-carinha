import React from 'react';
import { Card } from '../styled-common';
import { Content, CardImage, Wrapper, Title, Description, Price } from './styled';

interface Params {
  onClick?: () => void;
  title?: String;
  description?: String;
  img?: String;
  price?: Number;
}

const CardToOrder = ({ onClick, title, description, img, price }: Params) => {
  return (
    <Card>
      <Wrapper>
        <CardImage image="https://conteudo.imguol.com.br/c/entretenimento/d0/2020/04/03/spaghetti-alla-carbonara-1585940968110_v2_615x300.jpg" />
        <Content>
          <Title>Spaghetti à Carbonara</Title>
          <Description>
            Preparado com ovos, queijo parmesão, queijo pecorino romano, toucinho, pimenta preta e
            manteiga.
          </Description>
          <Price>R$ 25,00</Price>
        </Content>
      </Wrapper>
    </Card>
  );
};

export default CardToOrder;
