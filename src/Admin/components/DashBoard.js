import { Grid } from "@mui/material";
import React from "react";
import Achievment from "../Achievment";
import MonthlyOverView from "./MonthlyOverView";
import ProductTable from "./ProductTable";
import OrderTableView from "../View/OrderTableView";
import ProductTableView from "../View/ProductTableView";

const Dashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={4}>
        {/* First Row */}
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-500">
            <Achievment />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-500">
            <MonthlyOverView />
          </div>
        </Grid>

        {/* Second Row */}
        <Grid item xs={12} md={6}>
          <div className= "shadow-lg shadow-gray-500">
            <OrderTableView />
            
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-500">
            <ProductTableView/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
