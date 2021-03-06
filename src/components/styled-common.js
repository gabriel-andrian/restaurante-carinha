import styled from 'styled-components';

export const Card = styled.div`
  margin: 15px;
  width: 90%;
  height: 125px;
  min-height: fit-content;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #eee;

  @media (min-width: 450px) {
    width: 300px;
  }

  & a {
    text-decoration: none;

    &:link {
      color: inherit;
    }
    &:visited {
      color: inherit;
    }
    &:hover {
      color: inherit;
    }
    &:active {
      color: inherit;
    }
  }
`;

export const ContainerPages = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-items: center;
`;
