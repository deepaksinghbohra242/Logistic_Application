import './App.css'
import axios from 'axios';
import {Routes ,Route} from 'react-router-dom';
import { UserContextProvider } from './ContextLayout';
import Layout from './Layout';
import Home from './components/User/Home';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Dashboard from './components/Helper/Dashboard';

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
