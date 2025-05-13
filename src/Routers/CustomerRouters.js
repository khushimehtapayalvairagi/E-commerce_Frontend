import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/homepage/HomePage";
import Footer from "../customer/components/footer/Footer";
import Checkout from "../customer/components/Checkout/Checkout";
import OrderDetails from "../customer/components/order/OrderDetails";
import Order from "../customer/components/order/Order";
import Product from "../customer/components/product/Product";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation";
import ProductDetail from "../customer/components/ProductDetail/ProductDetail";

const CustomerRouter = () => {
  return (
    <div>
      
      <Navigation />

      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />  
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRouter;
