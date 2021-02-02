import styled from 'styled-components';

export const ContainerForm = styled.form`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #333;
`;
export const ButtonStyle = styled.input`
  place-content: end center;
  height: 11vh;
  max-height: 80px;
  width: 46vw;
  max-width: 200px;
  background: darkorange;
  border: none;
  outline: none;
  font-size: 20px;
  color: white;
  border-radius: 8px;

  &:hover {
    background-color: #3e8e41;
  }
  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
export const InputStyle = styled.input`
  width: 80%;
  max-width: 400px;
  line-height: 3em;
  font-family: sans-serif;
  margin: 1em 2em;
  border-radius: 5px;
  border: 2px solid #f2f2f2;
  outline: none;
  padding-left: 10px;
  font-size: 20px;
`;
