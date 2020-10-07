import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation, useHistory, useParams } from 'react-router-dom';
import { ProductRegistration } from '../components';
import Map from '../components/map';
import { requestMenu } from '../redux/actions/get-menu';
import UserLoginForm from '../components/user-forms/login-form';
import UserRegForm from '../components/user-forms/registration-form';

const Routes = () => {
  return (
    <Switch>
      <Route path='/card'><CardItem/></Route>
      <Route path="/product-registration">
        <ProductRegistration />
      </Route>
      <Route path="/login"><UserLoginForm /></Route>
      <Route path="/register"><UserRegForm /></Route>
      <Route path="/menu/:category/:item">Sub Menu Items</Route>
      <Route path="/menu/:category">{products && <Map type={'items'} list={products} />}</Route>
      <Route path="/menu">{categories && <Map type={'category'} list={categories} />}</Route>
      <Route path="/order" />
      <Route path="/history">History</Route>
      <Route path="/" />
    </Switch>
  );
};

export default Routes;
