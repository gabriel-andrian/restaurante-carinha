import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CardItem, ProductRegistration } from '../components';
import { CategoryPage, SubCategoryPage, ItemPage, OrderPage } from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path='/card'><CardItem/></Route>
      <Route path="/product-registration">
        <ProductRegistration />
      </Route>
      <Route path="/login">Login</Route>
      <Route path="/register">Register</Route>
      <Route path="/menu/:category/:item">
        <ItemPage />
      </Route>
      <Route path="/menu/:category">
        <SubCategoryPage />
      </Route>
      <Route path="/menu">
        <CategoryPage />
      </Route>
      <Route path="/order">
        <OrderPage />
      </Route>
      <Route path="/history">history</Route>
      <Route path="/" />
    </Switch>
  );
};

export default Routes;
