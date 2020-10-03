import { combineReducers } from 'redux';

import { categories } from './get-categories';
import { products } from './get-products';

export default combineReducers({ categories, products });
