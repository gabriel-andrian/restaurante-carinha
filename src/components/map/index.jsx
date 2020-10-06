import React, { useState } from 'react';
import CategoryCard from '../category-card';
import CardToOrder from '../card-to-order';

const Map = ({ data, type }) => {
    const [cardapio, setCardapio] = useState(data);

    // const [search, setSearch] = useState("bebida");
    // const url = `https://json-server-order-here.herokuapp.com`;
    // const api = axios.create({
    //     baseURL: url,
    //     headers: { "Content-Type": "application/json" },
    // });

    // const showCardapio = () => {
    //     api
    //         .get(`/products?category_like=${search}`)
    //         .then((res) => {
    //             setCardapio(res.data);
    //         });
    // }

    // useEffect(() => {
    //     showCardapio();
    //     console.log(cardapio);
    //     console.log(data);
    // }, []);


    if (type === "category") {
        return (
            <>
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
                        cardapio && cardapio.map((index, item) => {
                            return (
                            <CategoryCard
                                key={index}
                                name={item.name}
                                img={item.img}
                            />
                        )})
                    }
                </div>
            </>
        )
    }

    else if (type === "sub-menu") {
        return (
            <>
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
                        cardapio && cardapio.map((index, item) => {
                            return (
                                <CardToOrder
                                key={index}
                                title={item.name}
                                description={item.description}
                                img={item.img}
                                price={item.price}
                            />
                        )})
                    }
                </div>
            </>
        )
    }

    // return (
    //     <>
    //         <div
    //             style={{
    //                 width: '100%',
    //                 display: 'flex',
    //                 flexFlow: 'row wrap',
    //                 alignContent: 'center',
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //             }}>
    //             {
    //                 cardapio && cardapio.map((item, index) => (
    //                     <Card key={index}>
    //                         <Wrapper>
    //                             <CardImage image={item.img} />
    //                             <Content>
    //                                 <Title>{item.name}</Title>
    //                                 <Description>{item.description}</Description>
    //                                 <Price>{item.price}</Price>
    //                             </Content>
    //                         </Wrapper>
    //                     </Card>
    //                 ))
    //             }
    //         </div>
    //     </>
    // )
};

export default Map;