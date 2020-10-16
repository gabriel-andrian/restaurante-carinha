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
  margin: 5px 5px 0px 5px;
  height: fit-content;
  min-height: 14px;
  text-align: left;
  font-size: 14px;
  color: #a0a0a0;
`;

export const styledGeneryCard = {
  width: '95%',
  height: 'fit-content',
  minHeight: '80px',
  paddingRight: '1px',
  paddingBottom: '2px',
};
