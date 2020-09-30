import styled from 'styled-components';

export const Card = styled.div`
  margin: 15px;
  width: 90%;
  min-height: 125px;
  height: fit-content;
  border-radius: 8px;
  border: 1px dashed navy;

  @media (min-width: 450px) {
    width: 300px;
  }
`;
