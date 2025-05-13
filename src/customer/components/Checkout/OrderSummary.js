import React from 'react'
import AddressCard from '../AddressCard/AddressCard';
import CartItem from "../Cart/CartItem";


const OrderSummary=()=>{
    return(
        <div>
           <div className="p-5 shadow-lg rounded-s-md border">
                   <AddressCard/>
            </div>
               <div>
                    <div className="lg:grid grid-cols-3  relative">
                   <div className="col-span-2">
                {[1,1,1,1,1].map((item)=><CartItem/>)}
            
                   </div>
                   <div className="px-4 sticky top-0 h-[100vh] mt-4 lg:mt-0">
                        <div className="border" >
                            <p className="uppercase font-bold opacity-60 pb-4">
                                Price details</p>
                                <hr/>
                                <div className=" space-y-2 font-semibold mb-10">
                                <div className="flex justify-between pt-3 text-black">
                                    <span>price</span>
                                    <span>rs4796</span>
                                   </div>
                                   <div className="flex justify-between pt-3">
                                    <span>Discounts</span>
                                    <span className="text-green-600">-rs3419</span>
                                   </div>                        
                                   <div className="flex justify-between pt-3">
                                    <span>delivery charge</span>
                                    <span className="text-green-600">free</span>
                                   </div> 
                                   <div className="flex justify-between pt-3 text-green-600 font-bold">
                                    <span>total Amount</span>
                                    <span>rs1278</span>
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