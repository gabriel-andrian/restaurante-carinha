import React from 'react';
import { Container, Header, Content, Footer } from '../../style/app-layout';
import { TopMenu } from '../../components';
import Routes from './routes';

const RestaurantRoutes = () => {
  return (
    <Container>
      <Header>
        <TopMenu />
      </Header>
      <Content type={'restaurant'}>
        <Routes />
      </Content>
      <Footer visibility={false} />
    </Container>
  );
};

export default RestaurantRoutes;
