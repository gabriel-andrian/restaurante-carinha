import axios from 'axios';
import React, { useState } from 'react';

const ProductRegistration = () => {
  const [category, setCategory] = useState('');
  const [category_url, setCategory_url] = useState('');

  const handleSend1 = (endPoint) => {
    const url = `http://localhost:3001`;
    const api = axios.create({
      baseURL: url,
      headers: { 'Content-Type': 'application/json' },
    });
    api
      .post(endPoint, {
        category,
        category_url,
        products: [],
      })
      .then(() => {
        console.log('categoria cadastrada');
      });
  };

  const [product, setProduct] = useState('');
  const [product_url, setProduct_url] = useState('');
  const [price, setPrice] = useState('');

  const handleSend2 = (endPoint, category) => {
    const url = `http://localhost:3001`;
    const api = axios.create({
      baseURL: url,
      headers: { 'Content-Type': 'application/json' },
    });
    api
      .patch(endPoint, {
        'categories.category[bebidas]': {
          product,
          product_url,
          price,
        },
      })
      .then(() => {
        console.log('produto cadastrado');
      });
  };

  return (
    <div>
      <div>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Nome da categoria"
        />
        <input
          value={category_url}
          onChange={(e) => setCategory_url(e.target.value)}
          placeholder="url da imagem da categoria"
        />
        <button onClick={() => handleSend1('/categories')}>Send</button>
      </div>
      <div>
        <input
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Nome do Produto"
        />
        <input
          value={product_url}
          onChange={(e) => setProduct_url(e.target.value)}
          placeholder="url do produto"
        />
        <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="preço" />
        <button onClick={() => handleSend2('/category', 'ameixa')}>Send</button>
      </div>
    </div>
  );
};

export default ProductRegistration;
