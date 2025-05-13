import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@headlessui/react";

const  CartItem=()=>{
return(
    <div className="p-4 shadow-lg border rounded-md">
        <div className="flex items-center">
            <div className="w-[6rem] h-[6rem] lg:w-[9rem] lg:h-[9rem] ">
                <img  className ="w-full h-full object-cover object-top" src="/images/jeans.jpg"/>

            </div>
            <div className="ml-3 space-y-3">
  <p className="font-semibold text-lg">Men Slim Mid Rise Black Jeans</p>
  <p className="opacity-70 text-sm">Size: L, White</p>
  <p className="opacity-70 text-sm mt-2">Seller: Crishtaliyo Fashion</p>
  



  <div className="flex space-x-3 items-center text-gray-900 pt-6">
    <p className="font-semibold text-xl">rs 199</p>
    <p className="opacity-50 line-through text-lg">rs 211</p>
    <p className="text-green-600 font-semibold text-lg">5% off</p>
  </div>
</div>  


        </div>
        <div className="lg-flex items-center lg:space-x-10 pt-4">
    <div className="flex items-center space-x-2">
        <IconButton>
            < RemoveCircleOutlineIcon/> 
        </IconButton>
        <span className="py-1 px-7 ">  3 </span>
        <IconButton sx={{color:"RGB(145 85 253)"}}>
            < AddCircleOutlineIcon/> 
        </IconButton>
        <div>
      <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
    </div>
       
    </div>
   
       
</div>
    </div>
)
}
export default CartItem;