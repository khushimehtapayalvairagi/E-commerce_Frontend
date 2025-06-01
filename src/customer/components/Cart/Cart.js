import React, { useEffect } from "react";
import CartItem from "../Cart/CartItem";
import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";


const Cart =()=>{
  const navigate=useNavigate();
 const { updateCartItem, deleteCartItem } = useSelector(state => state.cart);
  const {cart} = useSelector(store=>store)

  const dispatch = useDispatch();
 const handleCheckout = () => {
  navigate("/checkout?step=1");
};

  useEffect(()=>{
  dispatch(getCart())
  },[cart.updateCartItem,cart.deleteCartItem])


    return(
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
       <div className="col-span-2">
   {cart.cart?.cartItems?.filter(Boolean).map((item, i) => (
  <CartItem key={item?._id || i} item={item} />
))}

       </div>
       <div className="px-4 sticky top-0 h-[100vh] mt-4 lg:mt-0">
            <div className="border" >
                <p className="uppercase font-bold opacity-60 pb-4">
                    Price details</p>
                    <hr/>
                    <div className=" space-y-2 font-semibold mb-10">
                    <div className="flex justify-between pt-3 text-black">
                        <span>price</span>
                        <span>{cart.cart?.totalPrice}</span>
                       </div>
                       <div className="flex justify-between pt-3">
                        <span>Discounts</span>
                        <span className="text-green-600">{cart.cart?.discount}</span>
                       </div>                        
                       <div className="flex justify-between pt-3">
                        <span>delivery charge</span>
                        <span className="text-green-600">free</span>
                       </div> 
                       <div className="flex justify-between pt-3 text-green-600 font-bold">
                        <span>total Amount</span>
                        <span>{cart.cart?.totalDiscountedPrice}</span>
                       </div>                                                                       
                    </div>
                    <button onClick={handleCheckout}  className="w-full mt-5 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-2 rounded">
                     Checkout
</button>



            </div>

        </div>
        </div>
      
      </div>
    )
}

export default Cart;