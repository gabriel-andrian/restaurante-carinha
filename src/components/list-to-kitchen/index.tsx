import React from 'react';
import { IKitchenCardProps } from '../at-kitchen-card';
import { AtKitchenCard } from '../';
import { Wrapper, Title, OrderContent, QuantityTitle, ItemTitle } from './styled';

export interface IListToKitchenProps {
  list: IKitchenCardProps[];
  table: number | string;
}

const ListToKitchen = ({ table, list }: IListToKitchenProps) => {
  return (
    <Wrapper>
      <Title>Mesa {table}</Title>
      <OrderContent>
        <QuantityTitle>Qtd.</QuantityTitle>
        <ItemTitle>Item</ItemTitle>
        {list.map(({ amount, itemId, note }, key) => {
          return <AtKitchenCard amount={amount} itemId={itemId} note={note} key={key} />;
        })}
      </OrderContent>
    </Wrapper>
  );
};

export default ListToKitchen;
