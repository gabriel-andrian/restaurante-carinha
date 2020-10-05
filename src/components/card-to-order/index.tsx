import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add_item_to_order } from '../../redux/actions/order';
import { TitleDrawerContent } from '../drawer/styled.js';
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
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(add_item_to_order(title));
  };

  return (
    <Card>
      <Wrapper>
        <CardImage image={img} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Price>R$ {price}</Price>
          <button onClick={handleClick}>Adicionar ao pedido</button>
        </Content>
      </Wrapper>
    </Card>
  );
};

export default CardToOrder;
