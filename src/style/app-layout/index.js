import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-content: center;
  align-content: center;
`;

export const Header = styled.div`
  font-size: calc(10px + 1vw);
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100px;
  border: 1px solid black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;
  background-color: blue;
`;

export const Content = styled.div`
  margin: 125px 0;
  height: 150vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  overflow: auto;
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 100px;
  border: 1px solid black;
  z-index: 2;
  background-color: red;
`;
