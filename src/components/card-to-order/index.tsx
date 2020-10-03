import React from 'react';

import { Card } from '../styled-common';
import { Content, CardImage, Wrapper, Title, Description, Price } from './styled';

interface Props {
  onClick?: () => void;
  title?: string;
  description?: string;
  img: string;
  price?: number;
}

const CardToOrder = ({ onClick, title, description, img, price }: Props) => {
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
