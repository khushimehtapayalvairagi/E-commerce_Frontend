import { confirmOrder, deleteOrder, deliverdOrder, getOrders, shipOrder } from "../../State/Admin/Order/Action";
import React, { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarGroup, Button, Card, CardHeader } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const OrderTableView=()=>{
   const [anchorEl, setAnchorEl] = React.useState();
  const open = Boolean(anchorEl);
   const [menuState, setMenuState] = React.useState({
  anchorEl: null,
  orderId: null,
});
  const dispatch = useDispatch();
    const {adminOrder} = useSelector(store=>store)
   
 const handleClick = (event, orderId) => {
  setMenuState({
    anchorEl: event.currentTarget,
    orderId: orderId,
  });
};

const handleClose = () => {
  setMenuState({
    anchorEl: null,
    orderId: null,
  });
};


    useEffect(()=>{
       dispatch(getOrders()) 
    },[adminOrder.confirmed,adminOrder.shipped,adminOrder.delivered,adminOrder.deletedOrder])
    console.log("admin Orders",adminOrder);

const handleShippedOrder=(orderId)=>{
  dispatch(shipOrder(orderId))
  handleClose()
}

const handleConfirmedOrder=(orderId)=>{
  dispatch(confirmOrder(orderId))
  handleClose()
}
const handleDeliveredOrder=(orderId)=>{
  dispatch(deliverdOrder(orderId))
  handleClose()
}

const handleDeleteOrder=(orderId)=>{
  dispatch(deleteOrder(orderId))
}



return(
    <div className="p-10" >
   <Card className="mt-2 ">
        <CardHeader title="Recent orders"/>
  
       
     <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left" >Title</TableCell>
              <TableCell align="left">ID&nbsp;()</TableCell>
              <TableCell align="left">Price&nbsp;()</TableCell>
              <TableCell align="left">Quantity&nbsp;()</TableCell>
                       
               <TableCell align="left">Status&nbsp;()</TableCell>          
          
            </TableRow>
          </TableHead>
        <TableBody>
  {adminOrder?.orders?.map((order, index) => (
    <TableRow key={index}>
      <TableCell align="left">
        <AvatarGroup>
          {order.orderItems.map((orderItem, idx) => (
            <Avatar key={idx} src={orderItem?.product?.imageUrl} />
          ))}
        </AvatarGroup>
      </TableCell>
      <TableCell align="left">
        {order.orderItems.map((orderItem, idx) => (
          <div key={idx}>{orderItem?.product?.title}</div>
        ))}
      </TableCell>
      <TableCell align="left">
        {order.orderItems.map((orderItem, idx) => (
          <div key={idx}>{orderItem?.product?.catogery}</div>
        ))}
      </TableCell>
      <TableCell align="left">
        {order.orderItems.map((orderItem, idx) => (
          <div key={idx}>{orderItem?.product?.price}</div>
        ))}
      </TableCell>
      <TableCell align="left">
        {order.orderItems.map((orderItem, idx) => (
          <div key={idx}>{orderItem?.quantity}</div>
        ))}
      </TableCell>
          <TableCell align="left"><span className={ `text-white px-5 py-2 rounded-full ${order.orderStatus ==="CONFIRMED"?"bg-[green]": order.orderStatus==="SHIPPED" ? "bg-[blue]" :
           order.orderStatus==="PLACED" ? "bg-[#76ca7e]":
                     order.orderStatus==="PENDING" ? "bg-[gray]":
           "bg-[red]" }`}>{order.orderStatus}</span> </TableCell>

        
    
    </TableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>
       </Card>
    </div>
)


}
export default OrderTableView;