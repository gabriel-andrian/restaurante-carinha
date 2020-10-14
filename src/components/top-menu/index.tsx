import React, { useState } from 'react';
import { ContainerTopMenu, LogoStyled } from './styled';
import { Drawer } from '../index';
import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

// O componente abaixo foi criado para teste, necessita ser ou refeito, ou adaptado para corresponder ao protótipo do figma;

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
        ]}
        visible={drawerVisible}
        setVisibleDrawer={setVisibleDrawer}
      />
      <h1>Bienvenue!</h1>
      <button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '30px',
          outline: 'none',
        }}
        onClick={() => setVisibleDrawer(!drawerVisible)}>
        <HiOutlineMenu />
      </button>
      <LogoStyled
        src="https://lh3.googleusercontent.com/proxy/KwFyvin113kYy6hf14asae99eyjMhA5HFd8lo-iHRmNwxHh2fFc83aTuMJyEPPOCSlDFS3lK3n5zrnYlLXAgewHNa-4-dJH7osRw5MeOAZxqfpDpFTC5JJMHKqaauQ87tomTw7JQ-mk9ow"
        alt=""
      />
    </ContainerTopMenu>
  );
};

export default TopMenu;
