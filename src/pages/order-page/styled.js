import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerButtom = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TotalPrice = styled.div`
  width: 95%;
  text-align: right;
  margin: 20px 0;
`;

export const Buttom = styled.button`
  width: 100%;
  height: calc(40px + 4vmin);
  font-size: calc(14px + 2vmin);
  background-color: red;
  color: white;
  outline: none;
  border: none;
`;
