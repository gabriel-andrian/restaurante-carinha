import React from 'react';
import { ListToKitchen } from '../../components';
import useSWR from 'swr';
import axios from 'axios';

interface IData {
  table: number;
  orders: Array<{
    amount: number;
    itemId: number;
    note: string;
    name: string;
    price: number;
  }>;
  id: number;
}

const fetcher: (arg: string) => void = async (fetchUrl: string) => {
  const api = axios.create({
    baseURL: 'http://json-server-order-here.herokuapp.com',
    headers: { 'Content-Type': 'Application/json' },
  });

  const response = await api.get(fetchUrl);

  return response.data;
};

const KitchenPage = () => {
  const url = 'http://json-server-order-here.herokuapp.com/kitchen';
  const { data }: any = useSWR(url, fetcher, {
    refreshInterval: 1000,
  });

  return data ? (
    data.map(({ table, orders, id }: IData, key: number) => (
      <ListToKitchen table={table} list={orders} position={key + 1} key={key} id={id} />
    ))
  ) : (
    <div>Loading kitchen orders...</div>
  );
};

export default KitchenPage;
