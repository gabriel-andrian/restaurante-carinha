import React from 'react';
import { ContainerTopMenu, LogoStyled } from './styled';

// O componente abaixo foi criado para teste, necessita ser ou refeito, ou adaptado para corresponder ao protótipo do figma;

const TopMenu = () => {
  return (
    <ContainerTopMenu>
      <h1>Bienvenue!</h1>
      <LogoStyled
        src="https://lh3.googleusercontent.com/proxy/KwFyvin113kYy6hf14asae99eyjMhA5HFd8lo-iHRmNwxHh2fFc83aTuMJyEPPOCSlDFS3lK3n5zrnYlLXAgewHNa-4-dJH7osRw5MeOAZxqfpDpFTC5JJMHKqaauQ87tomTw7JQ-mk9ow"
        alt=""
      />
    </ContainerTopMenu>
  );
};

export default TopMenu;
