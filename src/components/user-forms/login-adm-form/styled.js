import styled from 'styled-components';

export const ContainerTitle = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 1em 2em;
`;

export const H3Styled = styled.h3`
  text-align: center;
`;

export const H3ErrorStyled = styled(H3Styled)`
  color: red;
`;

export const InputEmail = styled.input`
  max-width: 400px;
  width: 80%;
  line-height: 3em;
  margin: 1em 2em;
  border-radius: 5px;
  border: 2px solid #f2f2f2;
  padding-left: 10px;
  font-size: 20px;
  color: black;
`;

export const InputPassword = styled(InputEmail)`
  font-family: 'sans-serif';
  outline: none;
  color: black;
`;

export const ContainerSubmit = styled.div`
  place-content: center center;
  display: flex;
`;

export const InputSubmit = styled.input`
  place-content: end center;
  height: 11vh;
  max-height: 80px;
  width: 46vw;
  max-width: 200px;
  background: darkorange;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 20px;
`;

export const DivText = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 1em 2em;
`;

export const ContainerRegister = styled.div`
  place-content: center center;
  display: flex;
  justify-content: center center;
`;

export const ContainerLinkRegister = styled.div`
  place-content: end center;
  height: 10vh;
  max-height: 50px;
  width: 40vw;
  max-width: 180px;
  background: lightgray;
  border: 1px solid #000;
  border-radius: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column nowrap;
  place-content: center center;
  color: #ddd;
`;
