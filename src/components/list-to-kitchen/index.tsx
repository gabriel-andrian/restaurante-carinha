import React from 'react';
import { IKitchenCardProps } from '../at-kitchen-card';
import { AtKitchenCard } from '../';
import {
  Wrapper,
  Title,
  OrderContent,
  QuantityTitle,
  ItemTitle,
  Position,
  ToRemoveCardIcon,
  FirstTitle,
} from './styled';
import { IoIosRocket } from 'react-icons/io';

export interface IListToKitchenProps {
  list: IKitchenCardProps[];
  table: number | string;
  position: number;
}

const ListToKitchen = ({ table, list, position }: IListToKitchenProps) => {
  return (
    <Wrapper>
      <FirstTitle>
        <Position>#{position}</Position>
        <ToRemoveCardIcon>
          <IoIosRocket />
        </ToRemoveCardIcon>
      </FirstTitle>
      <Title>Mesa {table}</Title>
      <OrderContent>
        <QuantityTitle>Qtd.</QuantityTitle>
        <ItemTitle>Item</ItemTitle>
        {list.map(({ amount, name, note }, key) => {
          return <AtKitchenCard amount={amount} name={name} note={note} key={key} />;
        })}
      </OrderContent>
    </Wrapper>
  );
};

export default ListToKitchen;
