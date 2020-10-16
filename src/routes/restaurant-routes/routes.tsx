import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { KitchenPage } from '../../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/:kitchen">
        <KitchenPage />
      </Route>
    </Switch>
  );
};

export default Routes;
