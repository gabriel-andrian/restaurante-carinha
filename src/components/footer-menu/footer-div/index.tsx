import React from 'react';
import { ContainerFooterMenu } from './styled.js';

interface Props{
  actions?: Array<React.ReactNode>
}

const FooterDiv = ({ actions = [] }:Props) => {
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
