import React from 'react';
import { ListToKitchen } from '../../components';

// essa consta abaixo DEVE ser apagada porque apenas simula o retorno da API.

const kitchen = [
  {
    table: 10,
    orders: [
      {
        amount: 1,
        itemId: 31,
        note: 'sem cebola',
      },
      {
        amount: 2,
        itemId: 21,
        note: 'com limão e gelo',
      },
      {
        amount: 2,
        itemId: 19,
        note: '',
      },
    ],
  },
];

const KitchenPage = () => {
  return kitchen.map(({ table, orders }, key) => (
    <ListToKitchen table={table} list={orders} key={key} />
  ));
};

export default KitchenPage;
