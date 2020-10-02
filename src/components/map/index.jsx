import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../styled-common';
import { Content, CardImage, Wrapper, Title, Description, Price } from './styled';

const Map = (value) => {
    const [cardapio, setCardapio] = useState([]);
    const [search, setSearch] = useState("");

    const url = `https://json-server-order-here.herokuapp.com`;
    const api = axios.create({
        baseURL: url,
        headers: { "Content-Type": "application/json" },
    });

    api
            .get("/products?category_like=pizza")
            .then((res) => {
                setCardapio(res.data);

            });

    // useEffect(() => {
    //     console.log(cardapio);
    // }, [cardapio]);

    return (
        <>
            {/* <div>
                <button onClick={showCardapio}>Teste</button>
            </div> */}
            <div>
            {
                cardapio && cardapio.map((item, index) => (
                    <div>
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
                    </div>
                ))
            }
            </div>
        </>
    )
};

export default Map;

// pokeCards && pokeCards.map((card, index) => (
//     <img key={index} src={card.imageUrl} />
// ))