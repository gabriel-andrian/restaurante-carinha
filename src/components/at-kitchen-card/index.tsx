import React from 'react';
import { Quantity, Item, OrderNotesTitle, OrderNotes } from './styled';

export interface IKitchenCardProps {
  amount: number;
  name: string;
  note?: string;
}

const AtKitchenCard = ({ amount, name, note }: IKitchenCardProps) => {
  return (
    <>
      <Quantity>{amount}</Quantity>
      <Item>{name}</Item>
      <OrderNotesTitle>Obs.:</OrderNotesTitle>
      {note ? <OrderNotes>{note}</OrderNotes> : <OrderNotes> - </OrderNotes>}
    </>
  );
};

export default AtKitchenCard;
