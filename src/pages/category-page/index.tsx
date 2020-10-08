import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Map from '../../components/map';
import { ContainerPages } from '../../components/styled-common';
import { requestMenu } from '../../redux/actions/get-menu';
import { IReducer } from '../../redux/reducers';

const CategoryPage = () => {
  const categories: any[] = useSelector((state: IReducer) => state.categories.categoriesData);

  return (
    <ContainerPages>
      <Map type="category" list={categories} />
    </ContainerPages>
  );
};

export default CategoryPage;
