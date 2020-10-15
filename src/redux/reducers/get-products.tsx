import { GET_PRODUCTS, IProductsInfo } from '../actions/get-menu';

let defaultState = {};

let products_list = localStorage.getItem('products')

if(products_list){
  defaultState = JSON.parse(products_list);
}

const products = (state = defaultState, { type, productsData }: IProductsInfo) => {
  switch (type) {
    case GET_PRODUCTS:
      const newState = { ...state, productsData }
      localStorage.setItem('products', JSON.stringify(newState))
      return newState;

    default:
      return state;
  }
};

export { products };
