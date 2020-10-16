import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../styled-common';
import { Container, Image, Title } from './styled';

interface CategoryProps {
  name: string;
  img: string;
  onClick?: () => void;
  category: string;
}

const CategoryCard = ({ name, img, onClick, category }: CategoryProps) => {
  return (
    <Card>
      <Link to={`/menu/${category}`}>
        <Container>
          <Image image={img} />
          <Title>{name}</Title>
        </Container>
      </Link>
    </Card>
  );
};

export default CategoryCard;