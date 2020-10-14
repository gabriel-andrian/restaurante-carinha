import React from 'react';
import { ListToKitchen } from '../../components';

// essa consta abaixo DEVE ser apagada porque apenas simula o retorno da API.

const kitchen = [
  {
    table: 2,
    orders: [
      {
        amount: 3,
        name: 'Coca',
        note: 'com gelo',
      },
      {
        amount: 1,
        name: 'carne',
        note: '',
      },
    ],
    id: 2,
  },
  {
    table: 5,
    orders: [
      {
        amount: 2,
        name: 'Coca',
        note: 'limão no copo',
      },
      {
        amount: 1,
        name: 'porção de fritas',
        note: 'extra de bacon',
      },
    ],
    id: 2,
  },
  {
    table: 15,
    orders: [
      {
        amount: 8,
        name: 'Hambúrguer do futuro',
        note: 'quero no presente',
      },
      {
        amount: 1,
        name: 'Buffalo Wings',
        note: 'não tão apimentada',
      },
      {
        amount: 5,
        name: 'Coca',
        note: 'limão em 3 copos',
      },
    ],
    id: 2,
  },
  {
    table: 2,
    orders: [
      {
        amount: 3,
        name: 'Coca',
        note: 'com gelo',
      },
      {
        amount: 1,
        name: 'carne',
        note: '',
      },
    ],
    id: 2,
  },
  {
    table: 5,
    orders: [
      {
        amount: 2,
        name: 'Coca',
        note: 'limão no copo',
      },
      {
        amount: 1,
        name: 'porção de fritas',
        note: 'extra de bacon',
      },
    ],
    id: 2,
  },
  {
    table: 15,
    orders: [
      {
        amount: 8,
        name: 'Hambúrguer do futuro',
        note: 'quero no presente',
      },
      {
        amount: 1,
        name: 'Buffalo Wings',
        note: 'não tão apimentada',
      },
      {
        amount: 5,
        name: 'Coca',
        note: 'limão em 3 copos',
      },
    ],
    id: 2,
  },
  {
    table: 2,
    orders: [
      {
        amount: 3,
        name: 'Coca',
        note: 'com gelo',
      },
      {
        amount: 1,
        name: 'carne',
        note: '',
      },
      {
        amount: 3,
        name: 'Coca',
        note: 'com gelo',
      },
      {
        amount: 1,
        name: 'carne',
        note: '',
      },
      {
        amount: 3,
        name: 'Coca',
        note: 'com gelo',
      },
      {
        amount: 1,
        name: 'carne',
        note: '',
      },
    ],
    id: 2,
  },
  {
    table: 5,
    orders: [
      {
        amount: 2,
        name: 'Coca',
        note: 'limão no copo',
      },
      {
        amount: 1,
        name: 'porção de fritas',
        note: 'extra de bacon',
      },
    ],
    id: 2,
  },
  {
    table: 15,
    orders: [
      {
        amount: 8,
        name: 'Hambúrguer do futuro',
        note: 'quero no presente',
      },
      {
        amount: 1,
        name: 'Buffalo Wings',
        note: 'não tão apimentada',
      },
      {
        amount: 5,
        name: 'Coca',
        note: 'limão em 3 copos',
      },
    ],
    id: 2,
  },
];

const KitchenPage = () => {
  return kitchen.map(({ table, orders }) => <ListToKitchen table={table} list={orders} />);
};

export default KitchenPage;
