import React, { useState } from "react";

import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import { useTheme } from '@mui/material/styles';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./DashBoard";
import CreateProduct from "./CreateProduct";
import ProductTable from "./ProductTable";
import OrderTable from "./OrderTable";
import CustomerTable from "./CustomerTable";
const menu=[
    {name:"Dashboard",path:"/admin",icon:<DashboardIcon/>},
    {name:"Products",path:"/admin/products",icon:<CategoryIcon/>},
    {name:"Customers",path:"/admin/customers",icon:<SupportAgentRoundedIcon/>},
    {name:"Orders",path:"/admin/orders",icon: <ShoppingBasketRoundedIcon/>},
    {name:"AddProduct",path:"/admin/product/create",icon:<SupportAgentRoundedIcon/>},
    // {name:"",path:""},
]

const Admin =()=>{
        const theme = useTheme();
        const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
        const [sideBarVisible,setSideBarVisible] = useState(false);
        const navigate = useNavigate()
const drawer = (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    }}
  >
    {isLargeScreen && <Toolbar />}
    <Box sx={{ flexGrow: 1 }}>
      <List>
        {menu.map((item) => (
          <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  </Box>
);

        
    return(
        <div className="relative">
           <div className="flex h-[100vh] relative " >
             <CssBaseline />
              <div className=   "shadow-lg shadow-gray-500 w-[30]  fixed top-0">
            {drawer}
          </div>
       <Box className="w-[80%] h-full ml-[15%]  " sx={{flexGrow:1}} >
        <Routes>
          <Route path="/" element ={<Dashboard/>}></Route>
             <Route path="/product/create" element ={<CreateProduct/>}></Route>  
                <Route path="/products" element ={<ProductTable/>}></Route>  
                   <Route path="/orders" element ={<OrderTable/>}></Route>  
                      <Route path="/customers" element ={<CustomerTable/>}></Route>  
        </Routes>
       </Box>
       </div>
        </div>
    )
}

export default Admin;