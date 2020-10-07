import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryCard from '../category-card';
import CardToOrder from '../card-to-order';

const toLink = (str: string) =>
  str
    .toLowerCase()
    .replace(' ', '-')
    .replace(/[ÀÁÃÄ]+/gi, 'a')
    .replace(/[ÉÈÊẼ]+/gi, 'e')
    .replace(/[ÍÌĨÎ]+/gi, 'i')
    .replace(/[ÓÒÔÕ]+/gi, 'o')
    .replace(/[ÚÙÛŨ]+/gi, 'u')
    .replace(/[Ç]/, 'c');

interface Props {
  type: string;
  list: Array<{
    category: string;
    img: string;
    name: string;
    description: string;
    price: number | string;
    id: number;
  }>;
}

const Map = ({ type, list }: Props) => {
  const params: { category: string } = useParams();

  if (type === 'category') {
    return (
      <>
        {list &&
          list.map(({ category, img }, index) => {
            return (
              <CategoryCard key={index} name={category} img={img} category={toLink(category)} />
            );
          })}
      </>
    );
  }

  if (type === 'items') {
    return (
      <>
        {list &&
          list
            .filter(({ category }) => category.toLowerCase() === params.category)
            .map(({ name, description, img, price, id }, index) => {
              return (
                <CardToOrder
                  key={index}
                  title={name}
                  description={description}
                  img={img}
                  price={price}
                  id={id}
                />
              );
            })}
      </>
    );
  }

  return null;
};

export default Map;
