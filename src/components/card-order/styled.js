import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Title = styled.div`
  padding-right: 8px;
  white-space: nowrap;
  text-align: center;
  font-weight: 400;
`;
export const Description = styled.div`
  margin: 10px 5px;
  height: fit-content;
  min-height: 30px;
  text-align: left;
  font-size: 14px;
  color: #a0a0a0;
`;
