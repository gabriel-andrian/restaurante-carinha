import React from 'react';

import Routes from './routes';
import './App.css';

import { Container, Header, Content, Footer } from './style/app-layout';
import { FooterMenu, TopMenu } from './components/';

function App() {
  return (
    <Container>
      <Header>
        <TopMenu />
      </Header>
      <Content>
        <Routes />
      </Content>
      <Footer>
        <FooterMenu />
      </Footer>
    </Container>
  );
}

export default App;
