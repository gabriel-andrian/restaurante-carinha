import React from 'react';
import styled from 'styled-components';

interface Props {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
}

const CardItem = ({ title, description, price, image }: Props) => {
  return (
    <Container>
      <Card>
        <Header><img style={{width:'100%', height:'100%', borderRadius:'20px 20px 0 0'}} src='https://www.tribunapr.com.br/wp-content/uploads/2020/01/20151654/Conteudo_01_658408219-1-970x550.jpg' alt=''/></Header>
        <Content>Content</Content>
        <Footer>
          <div>a</div>
          <button>Adicionar</button>
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
const Content = styled.div`
  ${Centralized};
  color:gray;
  height: 50%;
  width: 100%;
`;
const Header = styled.div`
  ${Centralized};
  height: 30%;
  width: 100%;
  border-radius: 20px 20px 0 0;
`;
const Footer = styled.div`
  ${Centralized};
  display:flex;
  justify-content:space-around;
  height: 20%;
  width: 100%;
  border-radius:0 0 20px 20px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 95%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 5px 5px rgba(0,0,0,.2);
`;
const Container = styled.div`
  ${Centralized};
  width: 100%;
  height: 100%;
`;

export default CardItem;
