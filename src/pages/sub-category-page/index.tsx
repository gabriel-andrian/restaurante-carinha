import React from 'react';
import { useSelector } from 'react-redux';
import { IReducer } from '../../redux/reducers';
import Map from '../../components/map';
import { ContainerPages } from '../../components/styled-common';

const SubCategoryPage = () => {
  const products: Array<any> = useSelector((state: IReducer) => state.products.productsData);

  return (
    <ContainerPages>
      <Map type={'items'} list={products} />
    </ContainerPages>
  );
};

export default SubCategoryPage;
