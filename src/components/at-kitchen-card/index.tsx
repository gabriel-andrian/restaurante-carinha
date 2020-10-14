import React from 'react';
import { Quantity, Item, OrderNotesTitle, OrderNotes } from './styled';

export interface IKitchenCardProps {
  amount: number;
  itemId: number;
  note?: string;
}

const AtKitchenCard = ({ amount, itemId, note }: IKitchenCardProps) => {
  return (
    <>
      <Quantity>{amount}</Quantity>
      <Item>{itemId}</Item>
      <OrderNotesTitle>Obs.:</OrderNotesTitle>
      {note ? <OrderNotes>{note}</OrderNotes> : <OrderNotes> - </OrderNotes>}
    </>
  );
};

export default AtKitchenCard;
