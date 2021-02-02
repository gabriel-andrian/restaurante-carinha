import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestMenu } from './redux/actions/get-menu';

import './App.css';
import 'antd/dist/antd.css';

import Authenticator from './routes/authenticator';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestMenu());
  }, [dispatch]);

  return <Authenticator />;
}

export default App;
