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

/*
Onde e no que o Henrique mexeu:

1. import do Link;
2. inseri um <Link> </Link> ao redor do container (estou em dúvida se não era o caso de colocar em volta de todo o Card);
3. Nas routes eu removi o onClick que tinha lá, este: onClick={() => history.push(`/sub-menu/${category}`)}
*/
