import { combineReducers } from 'redux';

import { categories } from './get-categories';
import { products } from './get-products';
import { order_list } from './order';
import history from './history';

import { IProductsInfo, ICategoriesInfo } from '../actions/get-menu';

import session from './session';

export type RootOrderType = ReturnType<typeof order_list>;
export type RootSessionType = ReturnType<typeof session>;
export type RootHistoryType = ReturnType<typeof history>;

export interface IReducer {
  categories: ICategoriesInfo;
  products: IProductsInfo;
  order_list: RootOrderType;
  session: RootSessionType;
  history: RootHistoryType;
}

export default combineReducers({ categories, products, order_list, session, history });
