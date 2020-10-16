import styled from 'styled-components';

interface Props {
  image: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const Image = styled.div`
  height: 80%;
  width: 100%;
  background-image: url('${({ image }: Props) => image}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.div`
  height: 20%;
  font-size: 1.25em;
  font-weight: bold;
  padding: 0;
`;
