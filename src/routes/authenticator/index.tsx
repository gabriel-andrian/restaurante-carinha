import React from 'react';
import { useSelector } from 'react-redux';
import { IReducer } from '../../redux/reducers';
import PrivatesRoutes from '../privates-routes';
import PublicRoutes from '../public-routes';

const Authenticator = () => {
  const token = useSelector((state: IReducer) => state.session.token);

  if (token) {
    return <PrivatesRoutes />;
  }

  return <PublicRoutes />;
};

export default Authenticator;
