import { api } from "../../config/ApiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

export const getCart=()=>async(dispatch)=>{
    dispatch({type:GET_CART_REQUEST})
 
 
    try {
  const {data} = await api.get(`/api/cart`)
  dispatch({type:GET_CART_SUCCESS,payload:data})
   console.log("cart" , data)
} catch (error) {
    dispatch({type:GET_CART_FAILURE,payload:error.message})
  }
}

export const addItemTocart = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

  try {
    const { data } = await api.put("/api/cart/add", reqData);
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
    console.log("add item to cart", data);
  } catch (error) {
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
  }
};


export const removeCartItem=(cartItemId)=>async(dispatch)=>{
    dispatch({type:REMOVE_CART_ITEM_REQUEST})
 
 
    try {
  await api.delete(`/api/cartItem/${cartItemId}`)
  dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:cartItemId})
  } catch (error) {
    dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error.message})
  }

}

export const updateCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });

  try {
    const { cartItemId, quantity } = reqData;
    const { data } = await api.put(`/api/cartItem/${cartItemId}`, {
      quantity,
    });
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
  }
};

