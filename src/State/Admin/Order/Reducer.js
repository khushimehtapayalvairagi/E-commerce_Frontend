import { CANCELLED_ORDER_FAILURE,
     CANCELLED_ORDER_REQUEST,
      CANCELLED_ORDER_SUCCESS, 
      CONFIRMED_ORDER_FAILURE, 
      CONFIRMED_ORDER_REQUEST, 
      CONFIRMED_ORDER_SUCCESS, 
      DELETE_ORDER_FAILURE, 
      DELETE_ORDER_REQUEST,
       DELETE_ORDER_SUCCESS,
        DELIVERED_ORDER_FAILURE,
         DELIVERED_ORDER_REQUEST,
          DELIVERED_ORDER_SUCCESS,
           GET_ORDER_FAILURE, 
           GET_ORDER_REQUEST,
            GET_ORDER_SUCCESS, 
            PLACED_ORDER_FAILURE,
             PLACED_ORDER_REQUEST,
              PLACED_ORDER_SUCCESS,
               SHIP_ORDER_FAILURE,
                SHIP_ORDER_REQUEST,
                 SHIP_ORDER_SUCCESS,
                 } from "./ActionType"

const initialState={
    loading:false,
    orders:[],
    error:"",
}

const adminOrderReducer =(state= initialState,action) =>{
    switch(action.type){
        case GET_ORDER_REQUEST:
            return{
                ...state,
                loading:true,
            }
            case GET_ORDER_SUCCESS:
                return{
                orders:action.payload,
                loading:true,
                error:""
                };
                case GET_ORDER_FAILURE:
                    return{
                        loading:false,
                    orders:[],
                    error:action.payload
                
                };
                case CONFIRMED_ORDER_REQUEST:
                    case PLACED_ORDER_REQUEST:
                   case DELIVERED_ORDER_REQUEST:
                    case CANCELLED_ORDER_REQUEST:
                        return{
                            ...state,
                            isLoading:true,

                        };
               case CONFIRMED_ORDER_SUCCESS:
                return{
                    ...state,
                    confirmed:action.payload,
                    isLoading:false,
                };
                case PLACED_ORDER_SUCCESS:
                    return{
                        ...state,
                        placed:action.payload,
                        isLoading:false
                    };
                    case DELIVERED_ORDER_SUCCESS:
                        return{
                            ...state,
                            delivered:action.payload,
                            isLoading:false,
                        };
                        case CANCELLED_ORDER_SUCCESS:
                            return{
                                ...state,
                                canceled:action.payload,
                                isLoading:false,
                            };
                            case CONFIRMED_ORDER_FAILURE:
                            case PLACED_ORDER_FAILURE:
                                case DELIVERED_ORDER_FAILURE:
                                    case CANCELLED_ORDER_FAILURE:

                                    return{
                                        ...state,
                                        error:action.payload,
                                        isLoading:false,
                                    };
                                    case DELETE_ORDER_REQUEST:
                                     return{...state,loading:true} ;
                                     case DELETE_ORDER_SUCCESS:
                                        return{...state,loading:false,deletedOrder:action.payload};
                                        case DELETE_ORDER_FAILURE:
                                            return{
                                                ...state,
                                                loading:false,
                                                error:action.payload
                                            };


                                        case SHIP_ORDER_REQUEST:
                                            return{
                                                ...state,
                                                isLoading:true,
                                                error:null,
                                            }   ;
                                            case SHIP_ORDER_SUCCESS:
                                                return{
                                                    ...state,
                                                    isLoading:true,
                                                    shipped:action.payload
                                                } ;
                                                case SHIP_ORDER_FAILURE:
                                                    return{
                                                        ...state,
                                                    isLoading:true   ,
                                                     error:action.payload,
                                                    };
                                                    default:
                                                        return state;
                                          
    }
}

export default adminOrderReducer;