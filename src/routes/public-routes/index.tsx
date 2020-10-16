import React from 'react';
import { Container, Header, Content, Footer } from '../../style/app-layout';
import { TopMenu } from '../../components';
import Routes from './routes';

const PublicRoutes = () => {
  return (
    <Container>
      <Header>
        <TopMenu />
      </Header>
      <Content type={'public'}>
        <Routes />
      </Content>
      <Footer visibility={false} />
    </Container>
  );
};

export default PublicRoutes;
