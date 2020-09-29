import React from 'react';
import Routes from './routes';
import './App.css';

import { Container, Header, Content, Footer } from './style/layout';

function App() {
  return (
    <Container>
      <Header></Header>
      <Content>
        <Routes />
      </Content>
      <Footer>FOOTER</Footer>
    </Container>
  );
}

export default App;
