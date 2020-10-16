import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { add_item_to_order } from '../../redux/actions/order';
import { useParams, useHistory } from 'react-router-dom';

interface Props {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
}
interface IUseParams {
  itemId: string;
}

const CardItem = ({
  title = 'Titulo',
  description = `description`,
  price = 109.2,
  image = 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/3e7c211c-4c71-4ced-aeac-ef8d3ed55898/202001291041_EP5L_c.jpg',
}: Props) => {
  const [amount, setAmount] = useState(1);
  const [note, setNote] = useState('');
  const { itemId }: IUseParams = useParams();
  const history = useHistory();

  const handleClick = () => {
    dispatch(add_item_to_order({ amount, itemId: parseInt(itemId), note, name: title, price }));
    history.push('/menu');
  };

  const dispatch = useDispatch();
  return (
    <Container>
      <img style={{ width: '100%' }} src={image} alt="" />

      <div>
        <h3>{title}</h3>
        <div style={{ padding: '15px' }}>{description}</div>
      </div>

      <input onChange={(e) => setNote(e.target.value)} placeholder="Observações" />

      <div
        style={{
          display: 'flex',
          height: '100%',
          flexFlow: 'row',
          width: '90%',
          justifyContent: 'space-around',
        }}>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'space-between',
            width: '48%',
          }}>
          <AmountButton onClick={() => amount > 1 && setAmount(amount - 1)}>-</AmountButton>
          <div style={{ alignSelf: 'center' }}>{amount}</div>
          <AmountButton onClick={() => setAmount(amount + 1)}>+</AmountButton>
        </div>
        <div style={{ width: '48%', display: 'flex', justifyContent: 'flex-end' }}>
          <AddButton onClick={() => handleClick()}>
            Add{' '}
            {(amount * price).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL',
            })}
          </AddButton>
        </div>
      </div>
    </Container>
  );
};
const Button = styled.button`
  outline: none;
  border: none;
  font-size: calc(7px + 2vmin);
`;
const AddButton = styled(Button)`
  padding: 5px;
  width: 90%;
  height: 100%;
  background-color: #af4c51;
  color: white;
  box-shadow: 0 6px #999;
  border-radius: 10px;
  &:hover {
    background-color: #8a3b3f;
  }
  &:active {
    background-color: #af4c51;
    box-shadow: 0 3px #666;
    transform: translateY(4px);
  }
`;
const AmountButton = styled(Button)`
  width: 30%;
  height: 100%;
  background-color: #b6b6b6;
  box-shadow: 0 6px #999;
  border-radius: 10px;
  &:active {
    box-shadow: 0 3px #666;
    transform: translateY(4px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  height: fit-content;
  font-size: calc(7px + 2vmin);
  background-color: #eee;
  & > div {
    padding: 30px;
  }
  & > input {
    width: 50%;
  }
  @media (min-width: 450px) {
    width: 50%;
  }
`;

export default CardItem;
