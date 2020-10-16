import React from 'react';
import { Container, Header, Content } from '../../style/app-layout';
import { TopMenu } from '../../components';
import Routes from './routes';

const PublicRoutes = () => {
  return (
    <Container>
      <Header>
        <TopMenu />
      </Header>
      <Content>
        <Routes />
      </Content>
    </Container>
  );
};

export default PublicRoutes;
