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
  const { description, img, name, price }: any = useSelector(
    (state: IReducer) => state.products.productsData.filter(({ id }: any) => id == itemId)[0]
  );

  return <CardItem title={name} description={description} image={img} price={price} />;
};

export default ItemPage;
