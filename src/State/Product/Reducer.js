import { DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType"

const initialState={
    
    products: [],
    totalPages: 0,
    product: null,
    loading: false,
    error: null,
   
  
}





export const customerProductReducer=(state=initialState,action)=>{
   switch(action.type){
      case FIND_PRODUCT_REQUEST:
      case FIND_PRODUCT_BY_ID_REQUEST:
        return{...state,loading:true,error:null}

        case FIND_PRODUCT_SUCCESS:
    return { ...state, loading: false,
         error: null, 
            products: Array.isArray(action.payload.content) ? action.payload.content : [],
    totalPages: action.payload.totalPages || 0,
         }

        case FIND_PRODUCT_BY_ID_SUCCESS:
            return{...state,loading:false,error:null,product:action.payload}
          case DELETE_PRODUCT_SUCCESS:
          return{...state, loading:false,error:null,
            products:state.products.filter((item)=>item._id!==action.payload)}
            case FIND_PRODUCT_FAILURE:
                case FIND_PRODUCT_BY_ID_FAILURE:
                return{...state ,loading:false,error:action.payload}
        default:
            return state;
   }
 }