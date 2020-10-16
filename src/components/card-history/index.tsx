import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Order, remove_item_from_order } from '../../redux/actions/order';
import { Card } from '../styled-common';
import { Container, Title, Description, styledGeneryCard } from './styled';
import { IReducer } from '../../redux/reducers';

const CardHistory = ({ amount, itemId, note }: Order) => {
  const { name, price }: any = useSelector(
    (state: IReducer) => state.products.productsData.filter(({ id }: any) => id === itemId)[0]
  );
  const dispatch = useDispatch();
  const xPrice = (amount * price).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Card style={styledGeneryCard}>
      <Container>
        <Title>
          {amount} x {name}
        </Title>
        <Title>{xPrice}</Title>
      </Container>
      <Description>{note}</Description>
    </Card>
  );
};

export default CardHistory;
