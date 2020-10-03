import axios from 'axios';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const requestMenu = () => (dispatch) => {
  const callAxios = (endpoint) => {
    axios({
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      url: `https://json-server-order-here.herokuapp.com/${endpoint}`,
    }).then((data) => {
      endpoint === 'categories' && dispatch(categoriesInfo(data.data));
      endpoint === 'products' && dispatch(productsInfo(data.data));
      console.log(data.data);
    });
  };

  callAxios('categories');
  callAxios('products');
};

const categoriesInfo = (categoriesData) => ({
  type: GET_CATEGORIES,
  categoriesData,
});
const productsInfo = (productsData) => ({
  type: GET_PRODUCTS,
  productsData,
});
