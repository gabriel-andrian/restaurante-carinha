import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Map from '../../components/map';
import { IReducer } from '../../redux/reducers';
import axios from 'axios';
import { logout } from '../../redux/actions/login';
import { clean_orders } from '../../redux/actions/order';
import { clean_history } from '../../redux/actions/history';
import { useHistory } from 'react-router-dom';

const TablePage = () => {
  const hookHistory = useHistory();
  const dispatch = useDispatch();
  const history: any = useSelector((state: IReducer) => state.history);
  const session: any = useSelector((state: IReducer) => state.session);

  const handleClick = () => {
    const axiosPath = axios.create({
      baseURL: `https://json-server-order-here.herokuapp.com/`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.token}`,
      },
    });

    axiosPath.patch(`/tables/${session.table}`, { avaliable: true }).then(() => {
      dispatch(logout());
      dispatch(clean_history());
      dispatch(clean_orders());
      localStorage.clear();
      hookHistory.push('/');
    });
  };

  return (
    <Container>
      <div style={{
        padding:'2px', 
        margin: '10px', 
        backgroundColor: '#eee',
        fontSize: '20px',
        placeContent: 'end center',
        width: '46vw',
        display: 'flex',
        }}>Mesa {session.table}</div>
      <div>
        <Map type="history" list={history} />
      </div>
      <button onClick={() => handleClick()} 
      style={{
        marginBottom: '10px',
        width: '80%',
        maxWidth: '400px',
        lineHeight: '3em',
        margin: '1em 2em',
        color: '#af4c51',
        fontSize: '20px',
      }}>Pedir a conta</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export default TablePage;
