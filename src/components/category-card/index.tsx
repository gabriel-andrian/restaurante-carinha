import React from 'react';

import { Card } from '../styled-common';
import { Container, Image, Title } from './styled';

interface CategoryProps {
  name: string;
  img: string;
  onClick?: () => void;
}

const CategoryCard = ({ name, img, onClick }: CategoryProps) => {
  return (
    <Card onClick={onClick}>
      <Container>
        <Image image={img} />
        <Title>{name}</Title>
      </Container>
    </Card>
  );
};

export default CategoryCard;
