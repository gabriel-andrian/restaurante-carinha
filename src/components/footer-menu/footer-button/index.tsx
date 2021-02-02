import React from 'react';
import { Button } from './styled.js';
import { useHistory } from 'react-router-dom';
import { Content } from '../../../style/app-layout/index.js';

interface Props {
  icon?: React.ReactNode;
  title?: string;
  link?: string;
}

const FooterButton = ({ link = '', icon, title = '' }: Props) => {
  const history = useHistory();
  return (
    <Button onClick={() => history.push(`/${link}`)}>
      <div style={{ fontSize: '30px', height: 'fit-Content' }}>{icon}</div>
      <div>{title}</div>
    </Button>
  );
};

export default FooterButton;
