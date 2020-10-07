import React from 'react';
import { Card } from '../styled-common';
import { Content, CardImage, Wrapper, Title, Description, Price } from './styled';
import { Link, useParams, useRouteMatch } from 'react-router-dom';

interface Props {
  title: string;
  description?: string;
  img: string;
  price: string | number;
  id: number;
}

interface IUseRouteMatch {
  url: string;
}

const CardToOrder = ({ title, description, img, price, id }: Props) => {
  const { url }: IUseRouteMatch = useRouteMatch();

  return (
    <Card>
      <Link to={`${url}/${id}`}>
        <Wrapper>
          <CardImage image={img} />
          <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Price>
              {price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL',
              })}
            </Price>
          </Content>
        </Wrapper>
      </Link>
    </Card>
  );
};

export default CardToOrder;
