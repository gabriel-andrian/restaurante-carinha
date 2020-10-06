import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation, useHistory, useParams } from 'react-router-dom';
import { ProductRegistration, CardItem } from '../components';
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
  console.log(items)
  return (
    <Switch>
      
      <Route path="/product-registration">
        <ProductRegistration />
      </Route>
      <Route path="/login"><CardItem/></Route>
      <Route path="/register">Register</Route>
      <Route path="/menu/:category/:item">Sub Menu Items</Route>
      <Route path="/menu/:category">{products && <Map type={'items'} list={products} />}</Route>
      <Route path="/menu">{categories && <Map type={'category'} list={categories} />}</Route>
      <Route path="/order" />
      <Route path="/history">History</Route>
      <Route path="/" />
    </Switch>
  );
};

export default Routes;
