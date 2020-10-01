import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ProductRegistration } from '../components/index.js';
import { Card } from '../components/styled-common';
import { CardToOrder, Drawer } from '../components';

const Routes = () => {
  return (
    <Switch>
      <Route path="/product-registration">
        <ProductRegistration />
      </Route>
      <Route path="/drawer"><Drawer/></Route>
      <Route path="/login">Login</Route>
      <Route path="/register">Register</Route>
      <Route path="/menu">
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            alignContent: 'flex-start',
            justifyContent: 'space-around',
          }}>
          <Card>
            <div>Oi</div>
            <div>Simples assim!</div>
            <div>Oi</div>
            <div>Simples assim!</div>
            <div>Oi</div>
            <div>Simples assim!</div>
          </Card>
          <Card>
            <div>Oi</div>
            <div>Simples assim!</div>
          </Card>
          <Card>
            <div>Oi</div>
            <div>Simples assim!</div>
          </Card>
          <Card>
            <div>Oi</div>
            <div>Simples assim!</div>
          </Card>
          <Card>
            <div>Oi</div>
            <div>Simples assim!</div>
          </Card>
          <Card>
            <div>Oi</div>
            <div>Simples assim!</div>
          </Card>
          <Card>
            <div>Oi</div>
            <div>Simples assim!</div>
          </Card>
          <Card>
            <div>Oi</div>
            <div>Simples assim!</div>
          </Card>
          <Card>
            <div>Oi</div>
            <div>Simples assim!</div>
          </Card>
          <Card>
            <div>Oi</div>
            <div>Simples assim!</div>
          </Card>
          <Card>
            <div>Oi</div>
            <div>Simples assim!</div>
          </Card>
          <Card>
            <div>Oi</div>
            <div>Simples assim!</div>
          </Card>
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
      <Route path="/" />
    </Switch>
  );
};

export default Routes;
