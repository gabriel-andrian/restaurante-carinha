import React from 'react';
import { useSelector } from 'react-redux';
import { IReducer } from '../../redux/reducers';
import PrivatesRoutes from '../privates-routes';
import RestaurantRoutes from '../restaurant-routes';
import PublicRoutes from '../public-routes';

const Authenticator = () => {
  const { token, email } = useSelector((state: IReducer) => state.session);

  if (token && email !== 'admin@kenzie.com') {
    return <PrivatesRoutes />;
  }
  if (token && email === 'admin@kenzie.com') {
    return <RestaurantRoutes />;
  }

  return <PublicRoutes />;
};

export default Authenticator;
