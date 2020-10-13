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

interface Props {
  table: string;
  quantity: number;
  itemName: string;
  note: string;
}

const AtKitchenCard = ({ table, quantity, itemName, note }: Props) => {
  return (
    <Wrapper>
      <Title>{table}</Title>
      <OrderContent>
        <QuantityTitle>Qtd.</QuantityTitle>
        <ItemTitle>Item</ItemTitle>
        <Quantity>{quantity}</Quantity>
        <Item>{itemName}</Item>
        <OrderNotesTitle>Obs.:</OrderNotesTitle>
        {note && <OrderNotes>{note}</OrderNotes>}
      </OrderContent>
    </Wrapper>
  );
};

export default AtKitchenCard;
