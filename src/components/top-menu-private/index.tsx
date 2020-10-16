import React from 'react';
import { ContainerTopMenu } from './styled';

import { Link } from 'react-router-dom';

const TopMenuPrivate = () => {
  return (
    <ContainerTopMenu>
      <Link to="/">
        <img src="https://i.ibb.co/JmW5bnW/CARINHA.png"></img>
      </Link>
    </ContainerTopMenu>
  );
};

export default TopMenuPrivate;
