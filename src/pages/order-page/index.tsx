import React from 'react';
import { useSelector } from 'react-redux';
import { IReducer } from '../../redux/reducers';
import { useHistory } from 'react-router-dom';
import { Map } from '../../components';
import { Container, ContainerEmpty, ContainerButtom, TotalPrice, Buttom } from './styled';
import { Empty } from 'antd';

const OrderPage = () => {
  const history = useHistory();
  const orders: any[] = useSelector((state: IReducer) => state.order_list);

  const handleSubmit = () => {
    console.log('Pedido enviado com sucesso!');
    // dispatch no order com o default e dispatch para a API
  };
  return orders.length === 0 ? (
    <ContainerEmpty>
      <Empty />
    </ContainerEmpty>
  ) : (
    <Container>
      <Map type={'orders'} list={orders} />
      <ContainerButtom>
        <button onClick={() => history.push('/menu')}>Adicionar novo item</button>
      </ContainerButtom>
      <TotalPrice>Total: 230,00</TotalPrice>
      <Buttom onClick={handleSubmit}>Finalizar Pedido</Buttom>
    </Container>
  );
};

export default OrderPage;
