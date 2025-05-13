import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraking from "./OrderTraking";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';




const OrderDetails=()=>{
    return(
<div className="px-5 lg:px-20 ">
    <div className="mt-9">
        <h1 className="font-bold py-5  text-lg text-left">Delivery Address</h1>
    <AddressCard/>
       
    </div>
    <div className="py-10">
        <OrderTraking activeStep={3}/>
    </div>
    <Grid  className="space-y-5" container>
        {[1,1,1,1,].map((item)=>
         <Grid item container className="shadow-xl  w-full h-[15rem] rounded-md p-5 border" sx={{alignItems:"center",justifyContent:"space-between"}}>
         <Grid item xs={6}>
             <div className="flex item-center space-x-4">
                 <img  className ="w-[9rem] h-[6em] object-cover object-top" src="/images/jeans.jpg"/>
            <div className="space-y-2 ml-5">
             <p className="px-1 font-semibold">men slim black jeans</p>
             <p className="space-x-5 font-semibold opacity-50"> <span> color:pink</span>
               <span>   Size:M</span></p>
             <p> Seller  :   lineria  </p>
             <p>rs1999</p>
            </div>
            
             </div>
           

         </Grid>
                <Grid item>
           <Box sx={{color:deepPurple[500]}}>
<StarBorderIcon  sx={{fontSize:"2rem"}}  className="px-2 "/>  


 <span> Rate and Review product</span>
           </Box>
                </Grid>
     </Grid>
        
        )}
       
    </Grid>
</div>
    )
}
export default OrderDetails;