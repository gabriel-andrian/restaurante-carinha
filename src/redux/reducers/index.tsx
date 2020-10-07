import { combineReducers } from 'redux';

import { categories } from './get-categories';
import { products } from './get-products';
import { order_list } from './order';

import { IProductsInfo, ICategoriesInfo } from '../actions/get-menu';
import { OrderItems } from '../actions/order';

export interface IReducer {
  categories: ICategoriesInfo;
  products: IProductsInfo;
  order_list: OrderItems;
}

export default combineReducers({ categories, products, order_list });
