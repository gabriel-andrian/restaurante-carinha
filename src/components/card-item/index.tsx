import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
}

const CardItem = ({ title, description = 'Uma delícia', price = 9.2, image }: Props) => {
  const [amount, setAmount] = useState(1);
  return (
    <Container>
      <Card>
        <Header>
          <img
            style={{ maxWidth: '70%', borderRadius: '20px 20px 0 0' }}
            src="https://static-images.ifood.com.br/image/upload/t_medium/pratos/3e7c211c-4c71-4ced-aeac-ef8d3ed55898/202001291041_EP5L_c.jpg"
            alt=""
          />
        </Header>
        <Content>{description}</Content>
        <Footer>
          <div>
            <AmountButton onClick={() => amount > 1 && setAmount(amount - 1)}>-</AmountButton>
            {amount}
            <AmountButton onClick={() => setAmount(amount + 1)}>+</AmountButton>
          </div>
          <AddButton>Adicionar R$ {(amount * price).toFixed(2)}</AddButton>
        </Footer>
      </Card>
    </Container>
  );
};
const Centralized = `
    display:flex;
    justify-content:center;
    align-items:center;
`;
const ButtonDefault = `
  outline:none;
  border:none;
`;
const AmountButton = styled.button`
  ${ButtonDefault}
  margin:0 10px;
  background-color: #ccc;
  width: 40px;
  height: 35px;
`;
const AddButton = styled.button`
  ${ButtonDefault}
  width:140px;
  height: 50px;
  color: white;
  background-color: #4caf50;
`;
const Content = styled.div`
  text-align: center;
  color: gray;
  height: 40%;
  width: 100%;
`;
const Header = styled.div`
  ${Centralized};
  height: 30%;
  width: 100%;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
`;
const Footer = styled.div`
  ${Centralized};
  display: flex;
  justify-content: space-around;
  height: 20%;
  width: 100%;
  border-radius: 0 0 20px 20px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 95%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
`;
const Container = styled.div`
  ${Centralized};
  width: 100%;
  height: 100%;
`;

export default CardItem;
