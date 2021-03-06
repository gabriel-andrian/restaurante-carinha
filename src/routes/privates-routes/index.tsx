import React from 'react';
import { Container, Header, Content, Footer } from '../../style/app-layout';
import { TopMenuPrivate, FooterMenu } from '../../components';
import Routes from './routes';

const PrivatesRoutes = () => {
  return (
    <Container>
      <Header>
        <TopMenuPrivate />
      </Header>
      <Content type={'client'}>
        <Routes />
      </Content>
      <Footer visibility={true}>
        <FooterMenu />
      </Footer>
    </Container>
  );
};

export default PrivatesRoutes;
