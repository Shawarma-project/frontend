import Axios from 'axios';
import { 
    ORDER_SET_TYPE, 
    CATEGORY_LIST_REQUEST, 
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
 } from './constants';

export const setOrderType= (dispatch, orderType) => {
     return dispatch({
        type: ORDER_SET_TYPE,
        payload: orderType, 
    });
};

export const listCategories = async (dispatch) => {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    try {
        const { data } = await Axios.get('http://localhost:5000/api/categories');
        return dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        return dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.message,
        });
    }
};

export const listProducts = async (dispatch, categoryName = '') => {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    try {
       const { data } = await Axios.get('http://localhost:5000/api/products');
       return dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
       });
  } catch(error) {
      return dispatch({
          type: PRODUCT_LIST_FAIL,
          payload: error.message,
      });
  }
};















