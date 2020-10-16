import styled from 'styled-components';

export const Item = styled.div`
  width: 65%;
  padding: 10px;
  text-align: left;
  font-size: 21px;
  font-weight: 300;
  color: #555;
  flex: 1 1 65%;
`;

export const Quantity = styled(Item)`
  width: 30%;
  text-align: center;
  flex: 1 1 30%;
  text-align: center;
`;

export const OrderNotes = styled(Item)`
  flex: 1 1 65%;
  text-align: center;
  margin-bottom: 7px;
  border-bottom: 1px solid #ccc;
`;

export const OrderNotesTitle = styled(OrderNotes)`
  width: 30%;
  flex: 1 1 30%;
  font-weight: bold;
`;
