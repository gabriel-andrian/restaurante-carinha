import React from 'react';
import { FooterDiv, FooterButton } from './helper';

import { BsFillBellFill, BsClockHistory } from 'react-icons/bs';
import { MdRestaurantMenu } from 'react-icons/md';

const FooterMenu = () => {
  return (
    <FooterDiv
      actions={[
        <FooterButton link="order" title="Order" icon={<BsFillBellFill />} />,
        <FooterButton link="menu" title="Menu" icon={<MdRestaurantMenu />} />,
        <FooterButton link="history" title="History" icon={<BsClockHistory />} />,
      ]}
    />
  );
};

export default FooterMenu;
