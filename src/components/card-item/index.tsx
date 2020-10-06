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
  const handleClick = () => {

  }
  return (
    <Container>
      <img style={{ width: '100%' }} src={image} />
      <div>
        <h3>{title}</h3>
        <div style={{ padding: '15px' }}>{description}</div>
      </div>

      <input placeholder="Observações" />

      <div
        style={{ display: 'flex', flexFlow: 'row', width: '100%', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-around' }}>
          <button onClick={() => amount > 1 && setAmount(amount - 1)}>-</button>
          <div>{amount}</div>
          <button onClick={() => setAmount(amount + 1)}>+</button>
        </div>
        <div>
          <button onClick={()=>''}>
            Add{' '}
            {(amount * price).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL',
            })}
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  height: fit-content;
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
