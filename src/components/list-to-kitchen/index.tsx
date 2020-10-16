import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { IKitchenCardProps } from '../at-kitchen-card';
import { AtKitchenCard } from '../';
import { IoIosRocket } from 'react-icons/io';
import { IReducer } from '../../redux/reducers';
import { notification } from 'antd';
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

export interface IListToKitchenProps {
  list: IKitchenCardProps[];
  table: number | string;
  position: number;
  id: number;
}

const ListToKitchen = ({ table, list, position, id }: IListToKitchenProps) => {
  const token = useSelector((state: IReducer) => state.session.token);

  const handleOnClick = async () => {
    const useAxios = axios.create({
      baseURL: `http://json-server-order-here.herokuapp.com/kitchen/`,
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    useAxios.delete(`${id}`).then(() => {
      notification.success({
        message: 'Pedido concluído',
        description: `O pedido ${position} saiu para a mesa`,
      });
    });
  };

  return (
    <Wrapper>
      <FirstTitle>
        <Position>#{position}</Position>
        <ToRemoveCardIcon onClick={handleOnClick}>
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
