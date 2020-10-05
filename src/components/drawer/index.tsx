import React, { useState } from 'react';
import styled from 'styled-components';
import {
  animMask,
  animContent,
  SubDrawer,
  CancelArea,
  InnerDrawerContent,
  TitleDrawerContent,
  BottomDrawerContent,
} from './styled';

interface Props {
  setVisibleDrawer?: any;
  visible?: boolean | any;
  width?: number;
  actions?: Array<React.ReactNode>;
}

const Drawer = ({
  setVisibleDrawer,
  visible,
  width = 800,
  actions = [<div>More info</div>, <div>Report</div>],
}: Props) => {
  const DrawerContainer = styled.div`
    display: ${visible ? 'block' : 'none'};
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 3;
    top: 0;
    left: 0;
    animation: ${animMask} 0.2s linear;
  `;

  const DrawerContent = styled.div`
    display: ${visible ? 'block' : 'none'};
    width: ${width}px;
    height: 100%;
    background-color: white;
    box-shadow: 5px 5px rbga(0, 0, 0, 0.5);
    animation: ${animContent} 0.2s linear;
    z-index: 6;
  `;

  return (
    <DrawerContainer>
      <SubDrawer>
        <DrawerContent>
          <InnerDrawerContent>
            <TitleDrawerContent />
            <BottomDrawerContent>
              {actions.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </BottomDrawerContent>
          </InnerDrawerContent>
        </DrawerContent>
        <CancelArea onClick={() => setVisibleDrawer(false)} />
      </SubDrawer>
    </DrawerContainer>
  );
};

export default Drawer;
