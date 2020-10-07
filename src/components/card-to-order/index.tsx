import React from 'react';
import { Card } from '../styled-common';
import { Content, CardImage, Wrapper, Title, Description, Price } from './styled';

interface Props {
  title?: string;
  description?: string;
  img: string;
  price?: string | number;
}

const CardToOrder = ({ title, description, img, price }: Props) => {
  return (
    <Card>
      <Wrapper>
        <CardImage image={img} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Price>R$ {price}</Price>
        </Content>
      </Wrapper>
    </Card>
  );
};

export default CardToOrder;
