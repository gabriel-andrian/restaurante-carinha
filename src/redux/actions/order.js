export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const add_item_to_order = (newItem) => ({
  type: ADD_ITEM,
  newItem,
});

export const remove_item_from_order = (item) => ({
  type: REMOVE_ITEM,
  item,
});
