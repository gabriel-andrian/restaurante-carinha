import axios from 'axios';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export interface ICategoriesInfo {
  type: typeof GET_CATEGORIES;
  categoriesData: Array<Object>;
}

export interface IProductsInfo {
  type: typeof GET_PRODUCTS;
  productsData: Array<Object>;
}

export type MenuActions = ICategoriesInfo | IProductsInfo;

export const requestMenu = () => (dispatch: (arg: MenuActions) => void) => {
  const callAxios = (endpoint: string) => {
    axios({
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      url: `https://json-server-order-here.herokuapp.com/${endpoint}`,
    }).then((data) => {
      endpoint === 'categories' && dispatch(categoriesInfo(data.data));
      endpoint === 'products' && dispatch(productsInfo(data.data));
    });
  };

  callAxios('categories');
  callAxios('products');
};

const categoriesInfo = (categoriesData: Array<Object>): MenuActions => ({
  type: GET_CATEGORIES,
  categoriesData,
});
const productsInfo = (productsData: Array<Object>): MenuActions => ({
  type: GET_PRODUCTS,
  productsData,
});
