import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMenu } from '../../redux/actions/get-menu';
import Map from '../../components/map';
import { ContainerPages } from '../../components/styled-common';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesData);

  dispatch(requestMenu());

  return (
    <ContainerPages>
      <Map type={'category'} list={categories} />
    </ContainerPages>
  );
};

export default CategoryPage;
