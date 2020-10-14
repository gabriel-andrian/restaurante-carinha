import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import Map from '../../components/map';


const TablePage = () =>{
    const state= useSelector((state) => state);
    console.log(state)
    return(
        <Container>
            <p>Mesa {state.session.table}</p>
            <div>
                <Map type='orders' list={state.order_list}/>
            </div>
            <button >Encerrar mesa</button>
        </Container>
    )
};

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    height:100%;
    width:100%;
`

export default TablePage;