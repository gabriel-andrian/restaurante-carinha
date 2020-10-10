import { ADD_ITEM, REMOVE_ITEM, OrderItems, Order } from '../actions/order';

const defaultState: Order[] = [];

const order_list = (state = defaultState, action: OrderItems) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, ...[action.newItem]];
    case REMOVE_ITEM:
      return state.filter((item) => item.itemId !== action.item);
    default:
      return state;
  }
};

export { order_list };
