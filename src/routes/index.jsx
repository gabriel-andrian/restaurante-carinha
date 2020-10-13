import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProductRegistration, UserLoginForm, UserRegForm, AtKitchenCard } from '../components';
import { CategoryPage, SubCategoryPage, ItemPage, OrderPage } from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/kitchen">
        <AtKitchenCard />
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
      <Route path="/" />
    </Switch>
  );
};

export default Routes;
