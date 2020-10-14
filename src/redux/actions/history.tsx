export const ADD_FINISHED_ORDER = 'ADD_FINISHED_ORDER';
export const CLEAN_HISTORY = 'CLEAN_HISTORY';

export interface IAdd_finished_order {
  type: typeof ADD_FINISHED_ORDER;
  newFinishedOrder: any[];
}

export interface IClean_history {
  type: typeof CLEAN_HISTORY;
}

export type actionType = IAdd_finished_order | IClean_history;

export const add_finished_order = (orders: any[]): IAdd_finished_order => ({
  type: ADD_FINISHED_ORDER,
  newFinishedOrder: orders,
});

export const clean_history = (): IClean_history => ({
  type: CLEAN_HISTORY,
});
