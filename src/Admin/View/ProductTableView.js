import React, { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Card, CardHeader } from "@mui/material";





const ProductTableView=()=>{
  const dispatch = useDispatch()
const products   = useSelector(state => state.customerProduct.products);

  useEffect(()=>{
  const data = {
      catogery: null,
      colors:  [],
      sizes:  [],
      minPrice : null,
      maxPrice:null,
      minDiscount:  0,
      sort:  "price_low",
      pageNumber:1,
      pageSize: 10,
      stock: "",
    };
    console.log('Dispatching findProducts with:', data);
    dispatch(findProducts(data));
},[])
return(
    <div className="p-5">
      <Card className="mt-2 ">
      <CardHeader title="Recent Products"/>

     
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left" >Title</TableCell>
            <TableCell align="left">Catogery&nbsp;()</TableCell>
            <TableCell align="left">Price&nbsp;()</TableCell>
            <TableCell align="left">Quantity&nbsp;()</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {products?.slice(0,10).map((item,index) => (
            <TableRow
             key={item._id || item.title || index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell align="left"><Avatar src={item.imageUrl}>
                </Avatar></TableCell>
              <TableCell align="left" scope="row">
                {item.title}
              </TableCell>
             
             <TableCell align="left">{item.catogery?.name}</TableCell>

              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
                          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     </Card>
    </div>
)


}
export default  ProductTableView;