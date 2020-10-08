import React from 'react';
import {useSelector} from 'react-redux';
import {IAdd_item_to_order} from '../../redux/actions/order'
import { IReducer } from '../../redux/reducers';

interface IOrder{
  amount: number;
  note:string;
  itemId:number;

}

const OrderPage = () => {
  const orders = useSelector((state:IReducer)=>state.order_list)
  console.log(orders)
  return <div></div>;
};

export default OrderPage;
