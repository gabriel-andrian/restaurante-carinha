import { ADD_ITEM, REMOVE_ITEM, OrderItems } from '../actions/order';

const defaultState = { order: [] };

const order_list = (state = defaultState, action: OrderItems) => {
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
