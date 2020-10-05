import { ADD_ITEM, REMOVE_ITEM } from '../actions/order';

const defaultState = { order: [] };

const order_list = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        order: [...state.order, action.newItem],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        order: state.order.filter((item) => item !== action.item),
      };
    default:
      return state;
  }
};

export { order_list };
