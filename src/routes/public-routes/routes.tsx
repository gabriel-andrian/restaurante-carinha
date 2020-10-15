import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserRegForm } from '../../components';
import { LoginPage } from '../../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/register">
        <UserRegForm />
      </Route>
      <Route path="/login-restaurante">
        <LoginPage />
      </Route>
      <Route exact path="/">
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default Routes;
