import React from 'react';
import Routes from './routes';
import './App.css';

import { Container, Header, Content, Footer } from './style/app-layout';
import { FooterMenu, TopMenu, FooterButton } from './components/';

import { BsFillBellFill, BsClockHistory } from 'react-icons/bs';
import { MdRestaurantMenu } from 'react-icons/md';

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
        <FooterMenu
          actions={[
          <FooterButton link='order' title='Order' icon={<BsFillBellFill/>}/>,
          <FooterButton link='menu' title='Menu' icon={<MdRestaurantMenu/>}/>,
          <FooterButton link='history' title='History' icon={<BsClockHistory/>}/>
        ]}
        />
      </Footer>
    </Container>
  );
}

export default App;
