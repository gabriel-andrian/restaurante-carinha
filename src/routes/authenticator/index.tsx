import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IReducer } from '../../redux/reducers';
import PrivatesRoutes from '../privates-routes';
import RestaurantRoutes from '../restaurant-routes';
import PublicRoutes from '../public-routes';

const Authenticator = () => {
  const { token, email } = useSelector((state: IReducer) => state.session);
  const location = useLocation();

  if (token && email !== 'admin@kenzie.com') {
    if (location.pathname === '/') return <Redirect to="/menu" />;
    return <PrivatesRoutes />;
  }
  if (token && email === 'admin@kenzie.com') {
    if (location.pathname === '/') return <Redirect to="/kitchen" />;
    return <RestaurantRoutes />;
  }

  return <PublicRoutes />;
};

export default Authenticator;
