import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProductsEditing = () => {
  const categories = useSelector((state) => state.categories.categoriesData);
  return (
    <StyledItem>
      <img src="https://exame.com/wp-content/uploads/2018/04/thinkstockphotos-807218760.jpg" />
    </StyledItem>
  );
};

export default ProductsEditing;

const StyledItem = styled.div`
  border: 2px solid blue;
  border-radius: 10px;
`;
