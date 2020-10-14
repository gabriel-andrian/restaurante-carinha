export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAN_ORDERS = 'CLEAN_ORDERS';

export interface IAdd_item_to_order {
  type: typeof ADD_ITEM;
  newItem: { amount: number; itemId: number; note: string; name: string; price: number };
}

export interface IRemove_item_from_order {
  type: typeof REMOVE_ITEM;
  item?: number;
  key_id: number;
}

export interface IClean_orders {
  type: typeof CLEAN_ORDERS;
}

export interface Order {
  amount: number;
  itemId: number;
  note: string;
  name: string;
  price: number;
  key_id: number;
}

export type OrderItems = IAdd_item_to_order | IRemove_item_from_order | IClean_orders;

export const add_item_to_order = (newItem: {
  amount: number;
  itemId: number;
  note: string;
  name: string;
  price: number;
}): IAdd_item_to_order => ({
  type: ADD_ITEM,
  newItem,
});

export const remove_item_from_order = (key_id: number): IRemove_item_from_order => ({
  type: REMOVE_ITEM,
  key_id,
});

export const clean_orders = (): IClean_orders => ({
  type: CLEAN_ORDERS,
});
