import React from 'react';
import { ListToKitchen } from '../../components';
import useSWR from 'swr';
import axios from 'axios';

// essa consta abaixo DEVE ser apagada porque apenas simula o retorno da API.

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
    refreshInterval: 5000,
  });

  return data ? (
    data.map(({ table, orders }: any, key: number) => (
      <ListToKitchen table={table} list={orders} key={key} />
    ))
  ) : (
    <div>Loading</div>
  );
};

export default KitchenPage;
