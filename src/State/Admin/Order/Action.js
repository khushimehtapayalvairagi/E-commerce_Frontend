import { api } from "../../../config/ApiConfig";
import { CANCELLED_ORDER_FAILURE, CANCELLED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS } from "./ActionType";
import { CANCELLED_ORDER_REQUEST,
     CONFIRMED_ORDER_FAILURE
     , CONFIRMED_ORDER_REQUEST,
      CONFIRMED_ORDER_SUCCESS,
       DELIVERED_ORDER_FAILURE,
        DELIVERED_ORDER_REQUEST,
         DELIVERED_ORDER_SUCCESS,
          GET_ORDER_FAILURE,
          
          GET_ORDER_REQUEST,
           GET_ORDER_SUCCESS, 
           SHIP_ORDER_FAILURE,
            SHIP_ORDER_REQUEST,
             SHIP_ORDER_SUCCESS } from "./ActionType";

export const getOrders =()=>{
console.log("get all orders");
return async(dispatch) =>{
    dispatch({type:GET_ORDER_REQUEST});
    try {
         const response= await api.get(`/api/admin/order`);
         console.log("get all orders" , response.data);
         dispatch({type:GET_ORDER_SUCCESS , payload:response.data}); 
    } catch (error) {
        console.log("catch error" , error);
        dispatch({type:GET_ORDER_FAILURE ,payload:error.message})
    }
}


};

export const confirmOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:CONFIRMED_ORDER_REQUEST})
    try {
       const response = await api.put(
        `/api/admin/order/${orderId}/confirmed`
       );
       const data = response.data;
       console.log("confirm_order" , data)
       dispatch({type:CONFIRMED_ORDER_SUCCESS,payload:data})
    } catch (error) {
        
         console.log("catch error" , error);
        dispatch({type:CONFIRMED_ORDER_FAILURE ,payload:error.message})
    }
}

export const shipOrder=(orderId)=>async(dispatch)=>{
   
    if (!orderId) {
    console.error("shipOrder called with undefined orderId");
    return;
  }
   
   
    dispatch({type:SHIP_ORDER_REQUEST})
    try {
       const response = await api.put(
        `/api/admin/order/${orderId}/ship`
       );
       const data = response.data;
       console.log("ship_order" , data)
       dispatch({type:SHIP_ORDER_SUCCESS,payload:data})
    } catch (error) {
        
         console.log("catch error" , error);
        dispatch({type:SHIP_ORDER_FAILURE ,payload:error.message})
    }
}

export const deliverdOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:DELIVERED_ORDER_REQUEST})
    try {
       const response = await api.put(
        `/api/admin/order/${orderId}/deliver`
       );
       const data = response.data;
       console.log("deliver_order" , data)
       dispatch({type:DELIVERED_ORDER_SUCCESS,payload:data})
    } catch (error) {
        
         console.log("catch error" , error);
        dispatch({type:DELIVERED_ORDER_FAILURE ,payload:error.message})
    }
}

export const cancelOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:CANCELLED_ORDER_REQUEST})
    try {
       const response = await api.put(
        `/api/admin/order/${orderId}/cancel`
       );
       const data = response.data;
       console.log("cancel_order" , data)
       dispatch({type:CANCELLED_ORDER_SUCCESS,payload:data})
    } catch (error) {
        
         console.log("catch error" , error);
        dispatch({type:CANCELLED_ORDER_FAILURE ,payload:error.message})
    }
}
export const deleteOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:DELETE_ORDER_REQUEST})
    try {
       const response = await api.put(
        `/api/admin/order/${orderId}/delete`
       );
       const data = response.data;
       console.log("delete_order" , data)
       dispatch({type:DELETE_ORDER_SUCCESS,payload:data})
    } catch (error) {
        
         console.log("catch error" , error);
        dispatch({type:DELETE_ORDER_FAILURE ,payload:error.message})
    }
}