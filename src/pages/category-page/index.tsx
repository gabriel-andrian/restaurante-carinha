import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMenu } from '../../redux/actions/get-menu';
import Map from '../../components/map';
import { ContainerPages } from '../../components/styled-common';
import { IReducer } from '../../redux/reducers';
import { useLocation } from 'react-router-dom';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(requestMenu());
  }, [location]);

  const categories: Array<any> = useSelector((state: IReducer) => state.categories.categoriesData);

  return (
    <ContainerPages>
      <Map type={'category'} list={categories} />
    </ContainerPages>
  );
};

export default CategoryPage;
