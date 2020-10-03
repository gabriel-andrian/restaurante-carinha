import { GET_PRODUCTS } from '../actions/get-menu';

const defaultState = {};

const products = (state = defaultState, action) => {
  const { productsData } = action;
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, productsData };

    default:
      return state;
  }
};

export { products };
