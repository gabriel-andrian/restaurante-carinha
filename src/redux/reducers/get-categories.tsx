import { GET_CATEGORIES, ICategoriesInfo } from '../actions/get-menu';

const defaultState = {};

const categories = (state = defaultState, { type, categoriesData }: ICategoriesInfo) => {
  switch (type) {
    case GET_CATEGORIES:
      return { ...state, categoriesData };

    default:
      return state;
  }
};

export { categories };
