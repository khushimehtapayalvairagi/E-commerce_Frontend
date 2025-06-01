import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard';
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from 'react-redux';

import { getOrderById } from '../../../State/Order/Action';
import { useLocation } from 'react-router-dom';


const OrderSummary=()=>{
     const dispatch = useDispatch();
     const location = useLocation();
     const {order} = useSelector(store=>store)
     const searchParams = new URLSearchParams(location.search);
     const orderId = searchParams.get("order_id")
    
   useEffect(() => {
  if (orderId) {
    dispatch(getOrderById(orderId));
  }
}, [orderId]);




    return(
        <div>
           <div className="p-5 shadow-lg rounded-s-md border">
                   <AddressCard address={order.order?.shippingAddress}/>
   
            </div>
               <div>
                    <div className="lg:grid grid-cols-3  relative">
                   <div className="col-span-2">
                {order.order?.orderItems.map((item)=><CartItem item={item}/>)}
            
                   </div>
                   <div className="px-4 sticky top-0 h-[100vh] mt-4 lg:mt-0">
                        <div className="border" >
                            <p className="uppercase font-bold opacity-60 pb-4">
                                Price details</p>
                                <hr/>
                                <div className=" space-y-2 font-semibold mb-10">
                                <div className="flex justify-between pt-3 text-black">
                                    <span>price</span>
                                    <span>rs{order.order?.totalPrice}</span>
                                   </div>
                                   <div className="flex justify-between pt-3">
                                    <span>Discounts</span>
                                    <span className="text-green-600">rs{order.order?.dicount}</span>
                                   </div>                        
                                   <div className="flex justify-between pt-3">
                                    <span>delivery charge</span>
                                    <span className="text-green-600">free</span>
                                   </div> 
                                   <div className="flex justify-between pt-3 text-green-600 font-bold">
                                    <span>total Amount</span>
                                    <span>rs{order.order?.totalDiscountedPrice}</span>
                                   </div>                                                                       
                                </div>
                                <button className="w-full mt-5 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-2 rounded">
              Checkout
            </button>
            
            
            
                        </div>
            
                    </div>
                    </div>
                  
                  </div>
        </div>
    )
}
export default OrderSummary;