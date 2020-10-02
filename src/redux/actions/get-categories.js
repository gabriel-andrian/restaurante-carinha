import axios from 'axios';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export const requestCategories = () => (dispatch) =>
  axios({
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    url: `https://json-server-order-here.herokuapp.com/categories`,
  }).then((data) => {
    dispatch(categoriesInfo(data.data));
  });

const categoriesInfo = (categoriesData) => ({
  type: GET_CATEGORIES,
  categoriesData,
});

export default GET_CATEGORIES;
