import React from 'react';
import { FooterDiv, FooterButton } from './helper';

import { BsFillBellFill, BsClockHistory } from 'react-icons/bs';
import { MdRestaurantMenu } from 'react-icons/md';
import { Badge } from 'antd';
import { useSelector } from 'react-redux';
import { IReducer } from '../../redux/reducers';

const FooterMenu = () => {
  const badgeCount = useSelector((state: IReducer) => state.order_list);
  return (
    <FooterDiv
      actions={[
        <Badge count={badgeCount.length}>
          <FooterButton link="order" title="Order" icon={<BsFillBellFill />} />
        </Badge>,
        <FooterButton link="menu" title="Menu" icon={<MdRestaurantMenu />} />,
        <FooterButton link="history" title="History" icon={<BsClockHistory />} />,
      ]}
    />
  );
};

export default FooterMenu;
