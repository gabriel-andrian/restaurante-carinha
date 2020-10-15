import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { IReducer } from '../../redux/reducers';
import { clean_orders } from '../../redux/actions/order';
import { add_finished_order } from '../../redux/actions/history';
import { useHistory } from 'react-router-dom';
import { Map, TotalPrice } from '../../components';
import { Container, ContainerEmpty, ContainerButtom, Buttom } from './styled';
import { Empty } from 'antd';

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
    api.post('kitchen', dataOrder).then(() => {
      dispatch(add_finished_order(orders));
      dispatch(clean_orders());
    });
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
      <TotalPrice />
      <Buttom onClick={handleSubmit}>Finalizar Pedido</Buttom>
    </Container>
  );
};

export default OrderPage;
