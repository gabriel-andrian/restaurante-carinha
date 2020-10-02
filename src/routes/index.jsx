import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ProductRegistration } from '../components/index.js';
import { Card } from '../components/styled-common';
import { CardToOrder, Drawer } from '../components';
import Map from '../components/map';

const Routes = () => {
  return (
    <Switch>
      <Route path="/product-registration">
        <ProductRegistration />
      </Route>
      <Route path="/drawer">
        <Drawer />
      </Route>
      <Route path="/login">Login</Route>
      <Route path="/register">Register</Route>
      <Route path="/menu">
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
          }}>
          <CategoryCard
            name={'Pizzas'}
            img={
              'https://www.tribunapr.com.br/wp-content/uploads/2020/01/20151654/Conteudo_01_658408219-1-970x550.jpg'
            }
          />
          <CategoryCard
            name={'Hambúrgueres'}
            img={
              'https://uploads.metropoles.com/wp-content/uploads/2020/07/01185056/dois-deliciosos-hamburguer-caseiro-de-dar-agua-na-boca_152625-8.jpg'
            }
          />
          <CategoryCard
            name={'Sobremesas'}
            img={
              'https://www.mavalerio.com.br/wp-content/uploads/2018/12/170914_receitas-032-low-500x340.jpg'
            }
          />
          <CategoryCard
            name={'Drinks'}
            img={
              'data:image/jpeg;base64,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'
            }
          />
        </div>
      </Route>
      <Route path="/sub-menu-items">Sub Menu Items</Route>
      <Route path="/sub-menu">
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'row wrap',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CardToOrder />
          <CardToOrder />
          <CardToOrder />
          <CardToOrder />
          <CardToOrder />
          <CardToOrder />
          <CardToOrder />
        </div>
      </Route>
      <Route path="/order"></Route>
      <Route path="/history">History</Route>
      <Route path="/map"><Map /></Route>
      <Route path="/" />
    </Switch>
  );
};

export default Routes;
