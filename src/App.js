import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homepage/HomePage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/components/product/Product';
import ProductDetail from './customer/components/ProductDetail/ProductDetail';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/order/Order';
import AddressCard from './customer/components/AddressCard/AddressCard';
import OrderDetails from './customer/components/order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';
import AdminRouter from './Routers/AdminRouter';
function App() {
  return (
    <div className="App">
 
     <Routes>
      <Route path='/*' element={<CustomerRouters/>}></Route>
      <Route path='/admin/*' element={<AdminRouter/>}></Route>
     </Routes>








    
   

  
    </div>
  );
}

export default App;
