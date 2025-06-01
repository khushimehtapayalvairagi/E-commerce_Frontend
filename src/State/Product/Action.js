import axios from 'axios';
import qs from 'qs';

// Action Types (make sure these are correctly imported)
import {
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
} from './ActionType';
import { api, API_BASE_URL } from '../../config/ApiConfig';

// ✅ Function to find products with filters
export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_REQUEST });

  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    catogery,
    stock,
    sort,
     pageNumber = 1,
    pageSize = 10,
 
  } = reqData;

  try {
    const queryParams = qs.stringify({
      color: colors,
      sizes: sizes,
      minPrice,
      maxPrice,
      minDiscount,
      catogery,
      stock,
      sort,
      pageSize,
      pageNumber,
    }, { arrayFormat: 'repeat' });

    const { data } = await api.get(`/api/products?${queryParams}`);

    console.log("product data", data);

    dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
  }
};


// ✅ Function to get product by ID
export const findProductsById = (productId) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log('Product Data:', data);

    dispatch({
      type: FIND_PRODUCT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCT_BY_ID_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};


export const createProduct =(product)=>async(dispatch)=>{
  try {
    dispatch({type:CREATE_PRODUCT_REQUEST})
       
 const {data} =await api.post(`/api/admin/products/` ,product)
   console.log("create product" ,data )
      dispatch({
        type:CREATE_PRODUCT_SUCCESS,
        payload:data,
      });
        return Promise.resolve(data);
  } catch (error) {
     dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
           return Promise.reject(error);
    }
}

export const deleteProduct =(productId)=>async(dispatch)=>{
  try {
    dispatch({type:DELETE_PRODUCT_REQUEST})

 const {data} =await api.delete(`${API_BASE_URL}/api/admin/products/${productId}` )
    console.log("delete product" , data)
 dispatch({
        type:DELETE_PRODUCT_SUCCESS,
        payload:productId,
      })
  } catch (error) {
     dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
}