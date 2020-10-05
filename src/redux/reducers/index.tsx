import { combineReducers } from 'redux';

import { categories } from './get-categories';
import { products } from './get-products';
import { order_list } from './order';
export default combineReducers({ categories, products, order_list });
