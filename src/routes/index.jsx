import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login">Login</Route>
      <Route path="/register">Register</Route>
      <Route path="/menu">
        <div style={{ height: '1000px' }}>
          <div>Oi</div>
          <div>Simples assim!</div>
        </div>
      </Route>
      <Route path="/sub-menu-items">Sub Menu Items</Route>
      <Route path="/sub-menu">Sub Menu</Route>
      <Route path="/order">Order</Route>
      <Route path="/history">History</Route>
      <Route path="/" />
    </Switch>
  );
};

export default Routes;
