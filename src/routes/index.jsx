import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProductRegistration, UserLoginForm, UserRegForm } from '../components';
import {
  CategoryPage,
  SubCategoryPage,
  ItemPage,
  OrderPage,
  LoginPage,
  KitchenPage,
} from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/kitchen">
        <KitchenPage />
      </Route>
      <Route path="/product-registration">
        <ProductRegistration />
      </Route>
      <Route path="/login">
        <UserLoginForm />
      </Route>
      <Route path="/register">
        <UserRegForm />
      </Route>
      <Route path="/menu/:category/:itemId">
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
      <Route path="/history">History</Route>
      <Route path="/">
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default Routes;
