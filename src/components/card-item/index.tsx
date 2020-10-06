import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
}

const CardItem = ({
  title = 'Titulo',
  description = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  Modi expedita provident nemo quae vel aut similique!
  Laudantium illum autem labore quia eaque iure maxime deserunt qui itaque! 
  Possimus, aut impedit?
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  Modi expedita provident nemo quae vel aut similique! 
  Laudantium illum autem labore quia eaque iure maxime deserunt qui itaque! 
  Possimus, aut impedit?
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  Modi expedita provident nemo quae vel aut similique! 
  Laudantium illum autem labore quia eaque iure maxime deserunt qui itaque! 
  Possimus, aut impedit?
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  Modi expedita provident nemo quae vel aut similique! 
  Laudantium illum autem labore quia eaque iure maxime deserunt qui itaque! 
  Possimus, aut impedit?
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  Modi expedita provident nemo quae vel aut similique! 
  Laudantium illum autem labore quia eaque iure maxime deserunt qui itaque! 
  Possimus, aut impedit?`,
  price = 109.2,
  image = 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/3e7c211c-4c71-4ced-aeac-ef8d3ed55898/202001291041_EP5L_c.jpg',
}: Props) => {
  const [amount, setAmount] = useState(1);
  const [note, setNote] = useState('');
  const handleClick = () => {};
  console.log(note);
  return (
    <Container>
      <img style={{ width: '100%' }} src={image} />
      <div>
        <h3>{title}</h3>
        <div style={{ padding: '15px' }}>{description}</div>
      </div>

      <input onChange={(e) => setNote(e.target.value)} placeholder="Observações" />

      <div
        style={{
          display: 'flex',
          height: '50px',
          flexFlow: 'row',
          width: '80%',
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
          <AddButton onClick={() => ''}>
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
  width: 70%;
  height: 100%;
  background-color: green;
  color: white;
`;
const AmountButton = styled(Button)`
  width: 30%;
  height: 100%;
  background-color: grey;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  height: fit-content;
  font-size: calc(7px + 2vmin);
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
