import React from 'react';
import { Container, Header, Content, Footer } from '../../style/app-layout';
import { TopMenu, FooterMenu } from '../../components';
import Routes from './routes';

const PrivatesRoutes = () => {
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
};

export default PrivatesRoutes;
