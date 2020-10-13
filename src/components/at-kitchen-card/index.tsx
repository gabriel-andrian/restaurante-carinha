import React from 'react';
import {
  Wrapper,
  Title,
  OrderContent,
  QuantityTitle,
  Quantity,
  ItemTitle,
  Item,
  OrderNotesTitle,
  OrderNotes,
} from './styled';

const AtKitchenCard = () => {
  return (
    <Wrapper>
      <Title>Mesa X</Title>
      <OrderContent>
        <QuantityTitle>Qtd.</QuantityTitle>
        <ItemTitle>Item</ItemTitle>
        <Quantity>2</Quantity>
        <Item>Porção de frango frito</Item>
        <OrderNotesTitle>Obs.:</OrderNotesTitle>
        <OrderNotes>Vamo dale</OrderNotes>
        <Quantity>2</Quantity>
        <Item>Porção de polenta frita</Item>
        <OrderNotesTitle>Obs.:</OrderNotesTitle>
        <OrderNotes>Com queijo</OrderNotes>
        <Quantity>5</Quantity>
        <Item>Espetinho de coração de galinha</Item>
        <OrderNotesTitle>Obs.:</OrderNotesTitle>
        <OrderNotes>Vamo dale</OrderNotes>
      </OrderContent>
    </Wrapper>
  );
};

export default AtKitchenCard;
