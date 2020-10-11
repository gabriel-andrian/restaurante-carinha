import React from 'react';
import { useSelector } from 'react-redux';
import { IReducer } from '../../redux/reducers';
import { TotalPriceDiv } from './styled';

const TotalPrice = () => {
  const orders: any[] = useSelector((state: IReducer) => state.order_list);
  // TODO: forEach amount * price / +
  return <TotalPriceDiv>Total: </TotalPriceDiv>;
};

export default TotalPrice;
