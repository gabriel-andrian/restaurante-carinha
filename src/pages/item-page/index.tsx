import React from 'react';
import { CardItem } from '../../components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IReducer } from '../../redux/reducers';

interface IUseParams {
  itemId: string;
}

const ItemPage = () => {
  const { itemId }: IUseParams = useParams();
  let { description, img, name, price }: any = useSelector(
    (state: IReducer) => state.products.productsData.filter(({ id }: any) => id === Number(itemId))[0]
  );

  if (description){
    description = ''
  }

  return <CardItem title={name} description={description} image={img} price={price} />;
};

export default ItemPage;
