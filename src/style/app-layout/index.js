import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
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
  height: 8vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;

  @media (min-width: 450px) {
    height: 100px;
  }
`;

export const Content = styled.div`
  margin: 8vh 0 100px 0;
  height: 150vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  overflow: auto;

  @media (min-width: 450px) {
    margin: 100px 0;
  }
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 100px;
  z-index: 2;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(78, 18, 71);
  background: linear-gradient(90deg, rgba(78, 18, 71, 1) 0%, rgba(125, 33, 113, 1) 100%);
`;
