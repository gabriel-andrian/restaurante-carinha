import React, { useEffect } from 'react';
import axios from 'axios';
import CategoryCard from '../../components/category-card';

const CategoryPage = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <CategoryCard name={'teste'} img={'https'} />
    </div>
  );
};

export default CategoryPage;
