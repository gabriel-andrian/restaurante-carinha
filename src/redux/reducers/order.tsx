import { ADD_ITEM, REMOVE_ITEM, OrderItems, Order, CLEAN_ORDERS } from '../actions/order';

let defaultState: Order[] = [];

let ord = localStorage.getItem('order');
if (ord !== null) {
  defaultState = JSON.parse(ord);
}

const order_list = (state = defaultState, action: OrderItems) => {
  switch (action.type) {
    case ADD_ITEM:
      const newStateA = [...state, action.newItem];
      localStorage.setItem('order', JSON.stringify(newStateA));
      return newStateA;
    case REMOVE_ITEM:
      const newStateR = state.filter((_, key) => key !== action.key_id);
      localStorage.setItem('order', JSON.stringify(newStateR));
      return newStateR;
    case CLEAN_ORDERS:
      localStorage.removeItem('order');
      return defaultState;
    default:
      return state;
  }
};

export { order_list };
