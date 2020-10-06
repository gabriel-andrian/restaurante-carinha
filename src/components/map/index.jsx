import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryCard from '../category-card';
import CardToOrder from '../card-to-order';

const toLink = (str) =>
  str
    .toLowerCase()
    .replace(' ', '-')
    .replace(/[ÀÁÃÄ]+/gi, 'a')
    .replace(/[ÉÈÊẼ]+/gi, 'e')
    .replace(/[ÍÌĨÎ]+/gi, 'i')
    .replace(/[ÓÒÔÕ]+/gi, 'o')
    .replace(/[ÚÙÛŨ]+/gi, 'u')
    .replace(/[Ç]/, 'c');

const Map = ({ type, list }) => {
  const params = useParams();

  if (type === 'category') {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'row wrap',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {list &&
          list.map(({ category, img }, index) => {
            return (
              <CategoryCard key={index} name={category} img={img} category={toLink(category)} />
            );
          })}
      </div>
    );
  }

  if (type === 'items') {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'row wrap',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {list &&
          list
            .filter(({ category }) => category.toLowerCase() === params.category)
            .map(({ name, description, img, price }, index) => {
              return (
                <CardToOrder
                  key={index}
                  title={name}
                  description={description}
                  img={img}
                  price={price}
                />
              );
            })}
      </div>
    );
  }

  return null;
};

export default Map;
