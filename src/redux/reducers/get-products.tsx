import { GET_PRODUCTS, IProductsInfo } from '../actions/get-menu';

const defaultState = {};

const products = (state = defaultState, { type, productsData }: IProductsInfo) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, productsData };

    default:
      return state;
  }
};

export { products };
