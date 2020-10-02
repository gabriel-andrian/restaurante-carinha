import React from 'react';
import { Container, Image, Title } from './styled';
import { Card } from '../styled-common';

interface CategoryProps {
  name: string;
  img: string;
  onClick?: () => void;
}

const CategoryCard = ({ name, img, onClick }: CategoryProps) => {
  return (
    <Card>
      <Container>
        <Image image={img} />
        <Title>{name}</Title>
      </Container>
    </Card>
  );
};

export default CategoryCard;
