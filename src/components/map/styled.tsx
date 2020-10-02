import styled from 'styled-components';

interface Props {
  image: string;
}

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

export const CardImage = styled.div`
  display: inline-block;
  height: 100%;
  width: 40%;
  background-image: url(${({ image }: Props) => image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  width: 60%;
  margin-left: 3px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

export const Title = styled.div`
  padding: 2px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: #000;
`;

export const Description = styled.div`
  padding: 2px;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
  color: #a0a0a0;
`;

export const Price = styled.div`
  margin: 10px;
  padding: 3px;
  width: 50%;
  height: fit-content;
  background: #f2b604;
  font-weight: 300;
  font-size: 12px;
  color: #de2537;
  text-align: center;
  border-radius: 5px;
`;
