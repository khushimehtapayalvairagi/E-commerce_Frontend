import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from '../AddressCard/AddressCard';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAdressForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const handleSubmit = (e) => {
  e.preventDefault();
 const data = new FormData(e.target);
for (let [key, value] of data.entries()) {
  console.log(`${key}: ${value}`);
}



    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipcode: data.get("zipcode"),
      mobile: data.get("mobile"),
    };
    const orderData={address,navigate}
       dispatch(createOrder(orderData))
    console.log("address", address);
  };

  return (
   <div>
    <Grid container  spacing={4}>
      <Grid className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
        <div className="p-5 py-7 border-b cursor-pointer" >
          <AddressCard/>
          <Button sx={{mt:2,bgcolor:"RGB(145 85 253)"}} size="large" variant="container">Deliver Here</Button>

        </div>
      </Grid>
          <Grid item xs={12} lg={7}>
           <Box className="border rounded-s-md shadow-md p-5">
           <form className="w-full space-x-30" onSubmit={handleSubmit}>

                <Grid container spacing={3}>
                   <Grid className="bg-sky-200" item xs={12} sm={6}>
                         <TextField
                          required
                          id="firstName"
                          name="firstName"
                          label="First Name"
                           fullWidth
                           autoComplete="given-name"
                         
                           />
                           
                
                   </Grid>
                   <Grid className="bg-sky-200" item xs={12}>
                   <TextField
                          required
                          id="lastName"
                          name="lastName"
                          label="Last Name"
                           fullWidth
                           autoComplete="given-name"
                         
                           />
                           
                
                   </Grid>
                 
                </Grid>
                <Grid className="mt-5 bg-sky-200" item xs={12} sm={6}>
                <TextField
                          required
                          id="address"
                          name="address"
                          label="Address"
                           fullWidth
                           autoComplete="given-name"
                           multiline
                           rows={4}
                         
                           />
                           
                
                   </Grid>
                   <Grid className="mt-5" container spacing={3}>
                   <Grid className="bg-sky-200" item xs={12} sm={6}>
                         <TextField
                          required
                          id="city"
                          name="city"
                          label="City"
                           fullWidth
                           autoComplete="given-name"
                         
                           />
                           
                
                   </Grid>
                   <Grid className="bg-sky-200" item xs={12} sm={6}>
                         <TextField
                          required
                          id="state"
                          name="state"
                          label="State"
                           fullWidth
                           autoComplete="given-name"
                         
                           />
                           
                
                   </Grid>
                   
                   </Grid>
                   <Grid className="mt-5 bg-sky-200" container spacing={3}>
                   <Grid item xs={12} sm={6}>
                         <TextField
                          required
                          id="zipcode"
                          name="zipcode"
                          label="Zipcode"
                           fullWidth
                           autoComplete="given-name"
                         
                           />
                           
                
                   </Grid>
                   <Grid className="bg-sky-200" item xs={12} sm={6}>
                         <TextField
                          required
                          id="mobile"
                          name="mobile"
                          label="Phone number"
                           fullWidth
                           autoComplete="given-name"
                         
                           />
                           
                
                   </Grid>
                   
                   </Grid>
                   <Grid item xs={12} sm={6}>
                   <Button sx={{mt:2,bgcolor:"RGB(145 85 253)"}} size="large" variant="contained" 
                   type="submit"
                   >Deliver Here</Button>
                   
                                
                   </Grid>
             </form>
           </Box>
          </Grid>


    </Grid>
   </div>
  );
};

export default DeliveryAdressForm;
