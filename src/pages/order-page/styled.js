import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const ContainerEmpty = styled(Container)`
  justify-content: center;
`;

export const ContainerButtom = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Buttom = styled.button`
  width: 100%;
  height: calc(40px + 4vmin);
  font-size: calc(14px + 3vmin);
  background-color: #af4c51;
  color: white;
  outline: none;
  border: none;
`;

export const ContainerPedidos = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
