export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export interface IAdd_item_to_order {
  type: typeof ADD_ITEM;
  newItem: {amount:number, itemId:number, note:string};
}

export interface IRemove_item_from_order {
  type: typeof REMOVE_ITEM;
  item: number;
}


export type OrderItems = IAdd_item_to_order | IRemove_item_from_order;

export const add_item_to_order = (newItem: {amount:number, itemId:number, note:string}): OrderItems => ({
  type: ADD_ITEM,
  newItem,
});

export const remove_item_from_order = (item: number): OrderItems => ({
  type: REMOVE_ITEM,
  item,
});
