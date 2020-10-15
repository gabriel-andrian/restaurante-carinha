import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FooterMenu, TopMenu } from './components/';
import { requestMenu } from './redux/actions/get-menu';
import Routes from './routes';
import './App.css';
import 'antd/dist/antd.css';

import { Container, Header, Content, Footer } from './style/app-layout';
import Authenticator from './routes/authenticator';

function App() {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(requestMenu());
  //   }, [dispatch]);

  //   return (
  //     <Container>
  //       <Header>
  //         <TopMenu />
  //       </Header>
  //       <Content>
  //         <Routes />
  //       </Content>
  //       <Footer>
  //         <FooterMenu />
  //       </Footer>
  //     </Container>
  //   );
  // }
  return <Authenticator />;
}

export default App;
