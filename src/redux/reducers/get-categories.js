import { GET_CATEGORIES } from '../actions/get-menu';

const defaultState = {};

const categories = (state = defaultState, action) => {
  const { categoriesData } = action;
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categoriesData };

    default:
      return state;
  }
};

export { categories };
