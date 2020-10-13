import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px;
  width: 350px;
  height: fit-content;
  min-height: 450px;
  display: flex;
  flex-flow: column nowrap;
  place-content: center flex-start;
  place-items: center;
  border-radius: 5px;
  box-shadow: 3px 0 5px rgb(242, 242, 242), -3px 0 5px rgb(242, 242, 242),
    0 3px 5px rgb(242, 242, 242), 0 -3px 5px rgb(242, 242, 242);
  overflow: hidden;
`;

export const Title = styled.div`
  align-self: center;
  width: 100%;
  height: 75px;
  background: #000;
  color: #eee;
  text-align: center;
  font-size: 45px;
  font-variant: small-caps;
  font-weight: 500;
`;

export const OrderContent = styled.div`
  padding: 10px 15px;
  width: 100%;
  height: fit-content;
  min-height: 275px;
  display: flex;
  flex-flow: row wrap;
  place-content: flex-start center;
  place-items: flex-start;
`;

export const ItemTitle = styled.div`
  width: 65%;
  padding: 10px;
  text-align: left;
  font-size: 21px;
  color: #555;
  font-weight: bold;
  border-bottom: 2px solid #aaa;
`;

export const QuantityTitle = styled(ItemTitle)`
  width: 30%;
  font-weight: bold;
  border-bottom: 2px solid #aaa;
`;
