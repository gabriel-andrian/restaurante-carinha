import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';

import { CardToOrder, Drawer, CategoryCard, ProductRegistration } from '../components';
import { Card } from '../components/styled-common';
import { requestCategories } from '../redux/actions/get-categories';

const Routes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesData);

  location.pathname === '/menu' && dispatch(requestCategories());

  return (
    <Switch>
      <Route path="/product-registration">
        <ProductRegistration />
      </Route>
      <Route path="/drawer">
        <Drawer />
      </Route>
      <Route path="/login">Login</Route>
      <Route path="/register">Register</Route>
      <Route path="/menu">
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
          }}>
          {/* <CategoryCard
            name="Pizzas"
            img="https://www.tribunapr.com.br/wp-content/uploads/2020/01/20151654/Conteudo_01_658408219-1-970x550.jpg"
          />
          <CategoryCard
            name="Hambúrgueres"
            img="https://uploads.metropoles.com/wp-content/uploads/2020/07/01185056/dois-deliciosos-hamburguer-caseiro-de-dar-agua-na-boca_152625-8.jpg"
          />
          <CategoryCard
            name="Sobremesas"
            img="https://www.mavalerio.com.br/wp-content/uploads/2018/12/170914_receitas-032-low-500x340.jpg"
          />
          <CategoryCard
            name="Drinks"
            img="https://lh3.googleusercontent.com/proxy/vUKrIEFadc8hCWI_xGOm-FkFUtldxaDrTirzOzzNbTErtgSC-1PoSS6NRNW7C9IdZcRGfAsFd-JulxVMhxZqyiSKKEEo8hLH3X6_SryAv6RZrREN3SwSBifjuEpKBc9wgAiwCECtq2lhiss4nAYNOvKu"
          /> */}
          {categories &&
            categories.map(({ category, img }, key) => (
              <div key={key}>
                <CategoryCard name={category} img={img} />
              </div>
            ))}
        </div>
      </Route>
      <Route path="/sub-menu-items">Sub Menu Items</Route>
      <Route path="/sub-menu">
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'row wrap',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CardToOrder />
          <CardToOrder />
          <CardToOrder />
          <CardToOrder />
          <CardToOrder />
          <CardToOrder />
          <CardToOrder />
        </div>
      </Route>
      <Route path="/order" />
      <Route path="/history">History</Route>
      <Route path="/" />
    </Switch>
  );
};

export default Routes;
