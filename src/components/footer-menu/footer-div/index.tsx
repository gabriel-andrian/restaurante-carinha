import React from 'react';
import { ContainerFooterMenu } from './styled.js';

// O componente abaixo foi criado para teste, necessita ser ou refeito, ou adaptado para corresponder ao protótipo do figma;
interface Props{
  actions?: Array<React.ReactNode>
}

const FooterDiv = ({ actions = [] }:Props) => {
  console.log(actions)
  return (
    <ContainerFooterMenu>
      {actions.map((item, index) => (
        <span key={index}>
          {item}
        </span>
      ))}
    </ContainerFooterMenu>
  );
};

export default FooterDiv;
