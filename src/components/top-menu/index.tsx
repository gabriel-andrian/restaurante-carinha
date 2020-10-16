import React, { useState } from 'react';
import { ContainerTopMenu } from './styled';
import { Drawer } from '../index';
import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const TopMenu = () => {
  const [drawerVisible, setVisibleDrawer] = useState(false);

  return (
    <ContainerTopMenu>
      <Drawer
        actions={[
          <Link to="/register" onClick={() => setVisibleDrawer(false)}>
            Cadastro
          </Link>,
          <Link to="/" onClick={() => setVisibleDrawer(false)}>
            Login
          </Link>,
          <Link to="/login-restaurante" onClick={() => setVisibleDrawer(false)}>
            Login admin
          </Link>,
        ]}
        visible={drawerVisible}
        setVisibleDrawer={setVisibleDrawer}
      />
      <Link to="/">
        <img src="https://i.ibb.co/JmW5bnW/CARINHA.png"></img>
      </Link>
      <button
        style={{
          backgroundColor: 'transparent',
          color: 'white',
          border: 'none',
          fontSize: '30px',
          outline: 'none',
          marginRight: '25px',
        }}
        onClick={() => setVisibleDrawer(!drawerVisible)}>
        <HiOutlineMenu />
      </button>
    </ContainerTopMenu>
  );
};

export default TopMenu;
