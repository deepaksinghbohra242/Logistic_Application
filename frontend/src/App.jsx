import './App.css'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes ,Route} from 'react-router-dom';
import { UserContextProvider } from './ContextLayout';
import Layout from './Layout';
import Home from './components/User/Home';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Dashboard from './components/Helper/Dashboard/Dashboard';
import Service_category from './components/Helper/ServiceProvider/Service_category';
import Driver_registration from './components/Helper/ServiceProvider/Driver_registration';
import Truckbooking from './components/NavBar/Truckbooking';
import Products from './components/NavBar/Products';
import OrderList from './components/Helper/ServiceProvider/OrderList';
import Myorders from './components/Helper/ServiceProvider/Myorders';
import CustomerCart from './components/Helper/Customer/CustomerCart';
import ProductDetails from './components/Helper/Customer/ProductDetails';

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/bookingTruck' element={<Truckbooking />} />
            <Route path='/products' element={<Products />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/servicecategory' element={<Service_category />} />
            <Route path='/dashboard/driverregistration' element={<Driver_registration />} />
            <Route path='/dashboard/bookingTruck' element={<Truckbooking />} />
            <Route path='/dashboard/OrderList' element={<OrderList />} />
            <Route path='/dashboard/myorders' element={<Myorders />} />
            <Route path='/dashboard/customercart' element={<CustomerCart />} />
            <Route path='/dashboard/productdetails ' element={<ProductDetails />} />

          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
