import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;
  background-color: blue;
`;

export const Content = styled.div`
  /* height: 150vh; */
  margin: 100px 0;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  overflow: auto;
  border: 1px solid red;
`;

export const Footer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  border: 1px solid black;
  z-index: 2;
  background-color: red;
`;
