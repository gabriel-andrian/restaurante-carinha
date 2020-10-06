import React from 'react';
import { useSelector } from 'react-redux';

import Map from '../../components/map';
import { ContainerPages } from '../../components/styled-common';

const SubCategoryPage = () => {
  const products = useSelector((state) => state.products.productsData);

  return (
    <ContainerPages>
      <Map type={'items'} list={products} />
    </ContainerPages>
  );
};

export default SubCategoryPage;
