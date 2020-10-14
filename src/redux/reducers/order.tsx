import { ADD_ITEM, REMOVE_ITEM, OrderItems, Order, CLEAN_ORDERS } from '../actions/order';

const defaultState: Order[] = [];

const order_list = (state = defaultState, action: OrderItems) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, ...[action.newItem]];
    case REMOVE_ITEM:
      return state.filter((item) => item.itemId !== action.item);
    case CLEAN_ORDERS:
      return defaultState;
    default:
      return state;
  }
};

export { order_list };
