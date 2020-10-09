import React from 'react';
import { useSelector } from 'react-redux';
import { IAdd_item_to_order } from '../../redux/actions/order';
import { IReducer } from '../../redux/reducers';
import { useHistory } from 'react-router-dom';
import { CardOrder } from '../../components';
import { Container, ContainerButtom, TotalPrice, Buttom } from './styled';

interface IOrder {
  amount: number;
  note: string;
  itemId: number;
}

const OrderPage = () => {
  const history = useHistory();
  const orders = useSelector((state: IReducer) => state.order_list);
  console.log(orders);

  const handleSubmit = () => {
    console.log('Pedido enviado com sucesso!');
  };
  return (
    <Container>
      <CardOrder />
      <ContainerButtom>
        <button onClick={() => history.push('/menu')}>Adicionar novo item</button>
      </ContainerButtom>
      <TotalPrice>Total: 230,00</TotalPrice>
      <Buttom onClick={handleSubmit}>Finalizar Pedido</Buttom>
    </Container>
  );
};

export default OrderPage;
