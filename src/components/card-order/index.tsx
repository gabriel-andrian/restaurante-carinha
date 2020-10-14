import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Order, remove_item_from_order } from '../../redux/actions/order';
import { Card } from '../styled-common';
import { Container, Title, Description, IconDiv, styledIcon, styledGeneryCard } from './styled';
import { IReducer } from '../../redux/reducers';
import { RiDeleteBin2Line } from 'react-icons/ri';

const CardOrder = ({ amount, itemId, note, key_id }: Order) => {
  const { name, price }: any = useSelector(
    (state: IReducer) => state.products.productsData.filter(({ id }: any) => id === itemId)[0]
  );
  const dispatch = useDispatch();
  const xPrice = (amount * price).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });

  const handleClick = () => {
    dispatch(remove_item_from_order(key_id));
  };

  return (
    <Card style={styledGeneryCard}>
      <Container>
        <Title>
          {amount} x {name}
        </Title>
        <Title>{xPrice}</Title>
      </Container>
      <Description>{note}</Description>
      <IconDiv>
        <RiDeleteBin2Line style={styledIcon} size={'1.8em'} onClick={handleClick} />
      </IconDiv>
    </Card>
  );
};

export default CardOrder;
