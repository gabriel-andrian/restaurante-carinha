import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation, useHistory, useParams } from 'react-router-dom';

import { CardToOrder, Drawer, CategoryCard, ProductRegistration } from '../components';
import { Card } from '../components/styled-common';
import { requestMenu } from '../redux/actions/get-menu';

const Routes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const categories = useSelector((state) => state.categories.categoriesData);
  const products = useSelector((state) => state.products.productsData);

  useEffect(() => {
    location.pathname.endsWith('menu') && dispatch(requestMenu());
  }, [location]);

  useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <div>
      <Switch>
        <Route path="/product-registration">
          <ProductRegistration />
        </Route>
        <Route path="/login">Login</Route>
        <Route path="/register">Register</Route>
        <Route path="/menu">
          <div>
            {location.pathname.endsWith('menu') && (
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
                {categories &&
                  categories.map(({ category, img }, key) => (
                    <div key={key}>
                      <CategoryCard
                        name={category}
                        img={img}
                        onClick={() => history.push(`/sub-menu/${category}`)}
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </Route>
        <Route path="/sub-menu-items">Sub Menu Items</Route>
        <Route path="/sub-menu/:categories">
          {location.pathname.includes('sub-menu') && (
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexFlow: 'row wrap',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {products &&
                products.map(({ name, img, description, price, category }, key) => (
                  <CardToOrder
                    title={name}
                    img={img}
                    description={description}
                    price={price}
                    key={key}
                  />
                ))}
            </div>
          )}
        </Route>
        <Route path="/order" />
        <Route path="/history">History</Route>
        <Route path="/" />
      </Switch>
    </div>
  );
};

export default Routes;
