import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CategoryPage, SubCategoryPage, ItemPage, OrderPage, TablePage } from '../../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/menu/:category/:itemId">
        <ItemPage />
      </Route>
      <Route path="/menu/:category">
        <SubCategoryPage />
      </Route>
      <Route path="/menu">
        <CategoryPage />
      </Route>
      <Route path="/pedido">
        <OrderPage />
      </Route>
      <Route path="/mesa">
        <TablePage />
      </Route>
    </Switch>
  );
};

export default Routes;
