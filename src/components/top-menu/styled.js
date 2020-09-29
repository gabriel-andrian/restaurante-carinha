import styled from 'styled-components';

export const ContainerTopMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  background: rgb(204, 80, 42);
  background: linear-gradient(
    90deg,
    rgba(204, 80, 42, 1) 0%,
    rgba(221, 167, 75, 1) 90%,
    rgba(238, 187, 97, 1) 100%
  );
`;

export const LogoStyled = styled.img`
  height: 80%;
  width: auto;
  max-width: calc(10px + 25vw);
  margin: 0 30px;
`;
