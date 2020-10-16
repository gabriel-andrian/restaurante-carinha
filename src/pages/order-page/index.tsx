import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { IReducer } from '../../redux/reducers';
import { clean_orders } from '../../redux/actions/order';
import { add_finished_order } from '../../redux/actions/history';
import { useHistory } from 'react-router-dom';
import { Map, TotalPrice } from '../../components';
import { Container, ContainerEmpty, ContainerButtom, Buttom, ContainerPedidos } from './styled';
import { Empty, message } from 'antd';

const OrderPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const orders: any[] = useSelector((state: IReducer) => state.order_list);
  const session = useSelector((state: IReducer) => state.session);
  const handleSubmit = () => {
    const dataOrder = {
      table: session.table,
      orders: orders,
    };
    const api = axios.create({
      baseURL: `https://json-server-order-here.herokuapp.com/`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.token}`,
      },
    });
    api.post('kitchen', dataOrder).then(
      () => (
        dispatch(add_finished_order(orders)),
        dispatch(clean_orders()),
        message.success({
          content: 'Seu pedido foi realizado com sucesso!',
          className: 'custom-class',
          style: {
            marginTop: '6vh',
          },
        })
      )
    );
  };

  return orders.length === 0 ? (
    <ContainerEmpty>
      <Empty description={'Sem pedidos'} />
    </ContainerEmpty>
  ) : (
    <Container>
      <ContainerPedidos>
        <Map type={'orders'} list={orders} />
      </ContainerPedidos>
      <ContainerButtom>
        <button onClick={() => history.push('/menu')}>Adicionar novo item</button>
      </ContainerButtom>
      <Buttom onClick={handleSubmit}>Finalizar Pedido</Buttom>
    </Container>
  );
};

export default OrderPage;
