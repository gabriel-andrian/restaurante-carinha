import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation, useHistory, useParams } from 'react-router-dom';
import { CardToOrder, Drawer, CategoryCard, ProductRegistration } from '../components';
import Map from '../components/map';
import { requestMenu } from '../redux/actions/get-menu';

const Routes = () => {
  const location = useLocation();
  const { category } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.categories.categoriesData);
  const products = useSelector((state) => state.products.productsData);
  const items = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestMenu());
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <Switch>
      <Route path="/product-registration">
        <ProductRegistration />
      </Route>
      <Route path="/login">Login</Route>
      <Route path="/register">Register</Route>
      <Route path="/menu/:category">
        {console.log(`Category: ${category}`)}
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
      </Route>
      <Route path="/menu">
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            alignContent: 'flex-start',
            alignItems: 'center',
          }}>
          {categories &&
            categories.map(({ category, img }, key) => (
              <div key={key}>
                <CategoryCard
                  name={category}
                  img={img}
                  category={category
                    .toLowerCase()
                    .replace(' ', '-')
                    .replace(/[ÀÁÃÄ]+/gi, 'a')
                    .replace(/[ÉÈÊẼ]+/gi, 'e')
                    .replace(/[ÍÌĨÎ]+/gi, 'i')
                    .replace(/[ÓÒÔÕ]+/gi, 'o')
                    .replace(/[ÚÙÛŨ]+/gi, 'u')
                    .replace(/[Ç]/, 'c')}
                />
              </div>
            ))}
        </div>
      </Route>
      <Route path="/sub-menu-items">Sub Menu Items</Route>
      <Route path="/order" />
      <Route path="/history">History</Route>
      <Route path="/map">
        <Map data={'category'} />
      </Route>
      <Route path="/" />
    </Switch>
  );
};

export default Routes;
