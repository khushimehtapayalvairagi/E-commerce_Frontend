import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="w-full flex justify-center px-4"> {/* Ensures full width and horizontal padding */}
    <div className="p-5 shadow-lg hover:shadow-2xl w-full max-w-3xl w-[150vw] bg-white rounded-md">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[6rem] h-[6rem] object-cover object-top"
              src="/images/jeans.jpg"
              alt="jeans"
            />
            <div className="ml-5 space-y-2">
              <p>Men Solid Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>Rs 1999</p>
        </Grid>
        <Grid item xs={4}>
          <div>
            <p>
              <span>Delivered on March 03</span>
            </p>
            <p className="text-xs text-gray-600">
              Your item has been delivered
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  </div>
  
  );
};

export default OrderCard;
