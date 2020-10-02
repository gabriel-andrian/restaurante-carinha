import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../styled-common';
import { Content, CardImage, Wrapper, Title, Description, Price } from './styled';
import CardToOrder from '../card-to-roder';

const Map = (value) => {
    const [cardapio, setCardapio] = useState([]);
    const [search, setSearch] = useState("suco");

    const url = `https://json-server-order-here.herokuapp.com`;
    const api = axios.create({
        baseURL: url,
        headers: { "Content-Type": "application/json" },
    });

    const showCardapio = () => {
        api
            .get(`/products?category_like=${search}`)
            .then((res) => {
                setCardapio(res.data);
                console.log(cardapio);
            });
    }

    const setSearchValue = (e) => {
        setSearch(e.target.value)
    }

    const submitSearch = (e) => {
        e.preventDefault()
    }

    // const handleKeyPress = (event) => {
    //     if(event.key === 'Enter'){
    //         showCardapio();
    //     }
    // }

    useEffect(() => {
        console.log(cardapio);
    }, [cardapio]);

    return (
        <>
            {/* <form onSubmit={submitSearch}>
                <input onChange={(e) => setSearchValue(e)} value={search} onKeyPress={handleKeyPress}></input>
            </form> */}
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'row wrap',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {
                cardapio && cardapio.map((item, index) => (
                    <Card key={index}>
                        <Wrapper>
                            <CardImage image={item.img} />
                            <Content>
                                <Title>{item.product}</Title>
                                <Description>{item.description}</Description>
                                <Price>{item.price}</Price>
                            </Content>
                        </Wrapper>
                    </Card>
                ))
                }
            </div>
            {showCardapio()}
        </>
    )
};

export default Map;